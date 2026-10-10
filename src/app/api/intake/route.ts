import { NextResponse } from "next/server";
import { INTAKE_INTENTS, SMS_CONSENT_COPY } from "@/lib/intake";
import { cleanAttribution } from "@/lib/attribution";

export async function POST(request: Request) {
    let payload;
    try { payload = await request.json(); } catch {
        return NextResponse.json({ success: false, error: "Invalid inquiry." }, { status: 400 });
    }
    const { intent, fields, request_id, sms_consent_text } = payload || {};
    if (!INTAKE_INTENTS.includes(intent) || !fields || typeof fields !== "object" || Array.isArray(fields)) {
        return NextResponse.json({ success: false, error: "Invalid inquiry." }, { status: 400 });
    }
    if (typeof request_id !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(request_id)) {
        return NextResponse.json({ success: false, error: "Please reload the form before submitting." }, { status: 400 });
    }
    const allowed = ["name", "email", "phone", "address", "condition", "timeline", "notes", "neighborhoods", "budget", "preApproval", "criteria", "inquiryType", "investmentRange", "message", "subject", "sms_opt_in"];
    for (const [key, value] of Object.entries(fields)) {
        if (!allowed.includes(key) || typeof value !== "string" || value.length > 5000) {
            return NextResponse.json({ success: false, error: "Invalid inquiry details." }, { status: 422 });
        }
    }
    const read = (key: string) => String(fields[key] || "").trim();
    if (intent === "sell" && read("sms_opt_in") === "on" && sms_consent_text !== SMS_CONSENT_COPY) {
        return NextResponse.json({ success: false, error: "The text-message disclosure has changed. Contact us before retrying this inquiry." }, { status: 409 });
    }
    const required = intent === "sell" ? ["name", "email", "phone", "address", "condition", "timeline"]
        : intent === "buyer" ? ["name", "email", "phone", "neighborhoods", "budget", "preApproval"]
        : intent === "financing" ? ["name", "email", "phone", "inquiryType", "investmentRange", "message"]
        : ["name", "email", "message"];
    if (required.some(key => !read(key))) return NextResponse.json({ success: false, error: "Please complete the required fields." }, { status: 422 });
    const name = read("name").split(/\s+/);
    const details = Object.entries(fields).filter(([key]) => !["name", "email", "phone", "sms_opt_in"].includes(key))
        .map(([key,value]) => `${key}: ${value}`).join("\n");
    if (details.length > 5000) return NextResponse.json({ success: false, error: "Please shorten your inquiry details." }, { status: 422 });
    const attribution = cleanAttribution(payload.attribution);
    const body = { request_id, answers: {
        first_name: name.shift(), last_name: name.join(" "), email: read("email"), phone: read("phone"),
        property_address: read("address"), inquiry_type: intent, message: details,
        sms_opt_in: intent === "sell" && read("sms_opt_in") === "on",
        sms_consent_text: SMS_CONSENT_COPY, sms_consent_source: `https://thejaysdallas.com/${intent === "sell" ? "sell" : intent === "buyer" ? "buyers" : intent}`,
    }, utm_source: attribution.utm_source || "thejaysdallas", utm_medium: attribution.utm_medium || "website", utm_campaign: attribution.utm_campaign || intent };
    const base = (process.env.WHOLESALE_API_BASE || "https://wholesale-automation.vercel.app").replace(/\/$/, "");
    try {
        const response = await fetch(`${base}/api/forms/the-jays-dallas/submit`, {
            method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: AbortSignal.timeout(30000),
        });
        const result = await response.json();
        if (!response.ok || result.success !== true || result.submission_id !== request_id || result.processing_status !== "processed") return NextResponse.json({ success: false,
            error: response.status === 422 ? String(result.detail || "Please check your contact details.") : "We could not confirm your inquiry. Please contact us before resubmitting." },
            { status: response.status === 422 ? 422 : 503 });
        return NextResponse.json({ success: true, submission_id: result.submission_id, processing_status: result.processing_status });
    } catch {
        return NextResponse.json({ success: false, error: "We could not confirm your inquiry. Please contact us before resubmitting." }, { status: 503 });
    }
}
