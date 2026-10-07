import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
function load(file, overrides = {}) {
  const exports = {};
  const source = ts.transpileModule(fs.readFileSync(new URL(file, import.meta.url),'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  vm.runInNewContext(source, { exports, require: id => overrides[id] || require(id),
    process, Request, Response, AbortSignal, fetch: (...args) => globalThis.fetch(...args) });
  return exports;
}
const disclosure = load('../src/lib/intake.ts');
const { POST } = load('../src/app/api/intake/route.ts', {'@/lib/intake': disclosure});
const base = {name:'Test Owner', email:'test@example.com', phone:'2147010100'};
const variants = {
  sell:{address:'Test property, Dallas, TX',condition:'Move-in ready',timeline:'Just exploring options'},
  buyer:{neighborhoods:'Oak Cliff',budget:'Under $300k',preApproval:'Paying cash'},
  financing:{inquiryType:'Private lender',investmentRange:'Under $50k',message:'Test-only inquiry'},
  contact:{message:'Test-only contact'},
};
const request = body => new Request('https://thejaysdallas.com/api/intake', {
  method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),
});
for (const [intent, fields] of Object.entries(variants)) test(`${intent} creates a correctly routed CRM request`, async () => {
  const original = globalThis.fetch;
  let captured;
  globalThis.fetch = async (url,options) => {captured={url,body:JSON.parse(options.body)}; return Response.json({success:true});};
  try {
    const response = await POST(request({intent,fields:{...base,...fields,sms_opt_in:'on'}}));
    assert.equal(response.status,200);
    assert.equal((await response.json()).success,true);
    assert.match(captured.url,/\/api\/forms\/the-jays-dallas\/submit$/);
    assert.equal(captured.body.answers.inquiry_type,intent);
    assert.equal(captured.body.answers.sms_opt_in,intent === 'sell');
    assert.equal(captured.body.utm_source,'thejaysdallas');
    assert.ok(captured.body.answers.message.length);
    assert.equal(captured.body.answers.sms_consent_text,disclosure.SMS_CONSENT_COPY);
  } finally {globalThis.fetch=original;}
});
test('contact accepts email-only intake with no invented phone',async()=>{
  const original=globalThis.fetch;
  globalThis.fetch=async(_url,options)=>{assert.equal(JSON.parse(options.body).answers.phone,''); return Response.json({success:true});};
  try {assert.equal((await POST(request({intent:'contact',fields:{name:'Test',email:'test@example.com',message:'Test'}}))).status,200);} finally{globalThis.fetch=original;}
});
test('missing seller fields are rejected before CRM contact',async()=>{
  const original=globalThis.fetch;
  globalThis.fetch=()=>{throw new Error('must not contact upstream');};
  try {assert.equal((await POST(request({intent:'sell',fields:base}))).status,422);} finally{globalThis.fetch=original;}
});
for(const mode of ['network','unconfirmed','rejected']) test(`${mode} cannot produce a false success`,async()=>{
  const original=globalThis.fetch;
  globalThis.fetch=async()=>{if(mode==='network')throw new Error('lost response');return Response.json({success:false},{status:mode==='rejected'?503:200});};
  try {const response=await POST(request({intent:'contact',fields:{...base,...variants.contact}})); assert.equal(response.status,503);assert.equal((await response.json()).success,false);} finally{globalThis.fetch=original;}
});
