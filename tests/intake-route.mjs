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
    process, URL, Request, Response, AbortSignal, fetch: (...args) => globalThis.fetch(...args) });
  return exports;
}
const disclosure = load('../src/lib/intake.ts');
const attribution = load('../src/lib/attribution.ts');
const pending = load('../src/lib/pendingIntake.ts', {'./intake': disclosure, './attribution': attribution});
const { POST } = load('../src/app/api/intake/route.ts', {'@/lib/intake': disclosure, '@/lib/attribution': attribution});
const base = {name:'Test Owner', email:'test@example.com', phone:'2147010100'};
const variants = {
  sell:{address:'Test property, Dallas, TX',condition:'Move-in ready',timeline:'Just exploring options'},
  buyer:{neighborhoods:'Oak Cliff',budget:'Under $300k',preApproval:'Paying cash'},
  financing:{inquiryType:'Private lender',investmentRange:'Under $50k',message:'Test-only inquiry'},
  contact:{message:'Test-only contact'},
};
const request = body => new Request('https://thejaysdallas.com/api/intake', {
  method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({request_id:'11111111-1111-4111-8111-111111111111',sms_consent_text:disclosure.SMS_CONSENT_COPY,...body}),
});
test('landing attribution survives pending recovery and reaches CRM without replacing intent', async()=>{
  const records=new Map();
  const storage={getItem:k=>records.get(k)??null,setItem:(k,v)=>records.set(k,v),removeItem:k=>records.delete(k)};
  const tags={utm_source:'facebook',utm_medium:'paid_social',utm_campaign:'october_launch'};
  const draft=pending.savePendingIntake(storage,'contact',{...base,...variants.contact},'11111111-1111-4111-8111-111111111111',tags);
  tags.utm_campaign='changed';
  const recovered=pending.readPendingIntake(storage,'contact');
  assert.equal(recovered.payload.attribution.utm_campaign,'october_launch');
  const original=globalThis.fetch;
  globalThis.fetch=async(_url,options)=>{
    const body=JSON.parse(options.body);
    assert.equal(body.utm_source,'facebook');assert.equal(body.utm_medium,'paid_social');assert.equal(body.utm_campaign,'october_launch');
    assert.equal(body.answers.inquiry_type,'contact');assert.equal(body.answers.sms_opt_in,false);
    return Response.json({success:true,submission_id:body.request_id,processing_status:'processed'});
  };
  try {assert.equal((await POST(request(draft.payload))).status,200);} finally {globalThis.fetch=original;}
});
for (const [intent, fields] of Object.entries(variants)) test(`${intent} creates a correctly routed CRM request`, async () => {
  const original = globalThis.fetch;
  let captured;
  globalThis.fetch = async (url,options) => {captured={url,body:JSON.parse(options.body)}; return Response.json({success:true,submission_id:captured.body.request_id,processing_status:'processed'});};
  try {
    const response = await POST(request({intent,fields:{...base,...fields,sms_opt_in:'on'}}));
    assert.equal(response.status,200);
    const receipt=await response.json();
    assert.equal(receipt.success,true);
    assert.equal(receipt.submission_id,captured.body.request_id);
    assert.equal(receipt.processing_status,'processed');
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
  globalThis.fetch=async(_url,options)=>{const body=JSON.parse(options.body); assert.equal(body.answers.phone,''); return Response.json({success:true,submission_id:body.request_id,processing_status:'processed'});};
  try {assert.equal((await POST(request({intent:'contact',fields:{name:'Test',email:'test@example.com',message:'Test'}}))).status,200);} finally{globalThis.fetch=original;}
});
test('stale seller disclosure and invalid reference are rejected without upstream contact',async()=>{
  const original=globalThis.fetch;
  globalThis.fetch=()=>{throw new Error('must not contact CRM');};
  try {
    assert.equal((await POST(request({intent:'sell',fields:{...base,...variants.sell,sms_opt_in:'on'},sms_consent_text:'old disclosure'}))).status,409);
    assert.equal((await POST(request({intent:'contact',fields:{...base,...variants.contact},request_id:'not-a-uuid'}))).status,400);
  } finally{globalThis.fetch=original;}
});
for(const result of [{success:true},{success:true,submission_id:'wrong',processing_status:'processed'},{success:true,submission_id:'11111111-1111-4111-8111-111111111111',processing_status:'pending'}]) test('wrong or unfinished receipt never confirms website success',async()=>{
  const original=globalThis.fetch;
  globalThis.fetch=async()=>Response.json(result);
  try {assert.equal((await POST(request({intent:'contact',fields:{...base,...variants.contact}}))).status,503);} finally{globalThis.fetch=original;}
});
test('each intent recovers its immutable pending inquiry and clears only matching acknowledgement',()=>{
  const records=new Map();
  const storage={getItem:k=>records.get(k)??null,setItem:(k,v)=>records.set(k,v),removeItem:k=>records.delete(k)};
  for (const [intent,fields] of Object.entries(variants)) {
    const draft=pending.savePendingIntake(storage,intent,{...base,...fields},'11111111-1111-4111-8111-111111111111');
    const recovered=pending.readPendingIntake(storage,intent);
    assert.equal(JSON.stringify(recovered.payload),JSON.stringify(draft.payload));
    assert.throws(()=>pending.savePendingIntake(storage,intent,{...base,...fields,name:'Changed'},'22222222-2222-4222-8222-222222222222'));
    assert.equal(pending.intakeReceiptMatches({success:true,submission_id:draft.payload.request_id,processing_status:'processed'},draft),true);
    assert.equal(pending.intakeReceiptMatches({success:true,submission_id:'wrong',processing_status:'processed'},draft),false);
    assert.equal(pending.intakeReceiptMatches({success:true,submission_id:draft.payload.request_id},draft),false);
    pending.clearPendingIntake(storage,{...draft,payload:{...draft.payload,request_id:'22222222-2222-4222-8222-222222222222'}});
    assert.notEqual(pending.readPendingIntake(storage,intent),null);
  }
  assert.equal(records.size,4,'separate intent inquiries must remain separate');
  for(const intent of Object.keys(variants)) pending.clearPendingIntake(storage,pending.readPendingIntake(storage,intent));
  assert.equal(records.size,0);
  assert.throws(()=>pending.savePendingIntake({...storage,setItem:()=>{throw new Error('storage unavailable');}},'contact',base,'11111111-1111-4111-8111-111111111111'));
  records.set('jays:pending-inquiry:contact:v1','invalid JSON');
  assert.throws(()=>pending.readPendingIntake(storage,'contact'));
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
