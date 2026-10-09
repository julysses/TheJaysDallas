"use client";

import { useMemo, useRef, useState, useSyncExternalStore, type FormEvent } from "react";
import { SMS_CONSENT_COPY } from "@/lib/intake";
import { siteConfig } from "@/lib/siteConfig";
import { clearPendingIntake, decodePendingIntake, intakeReceiptMatches, pendingIntakeKey, readPendingIntake, savePendingIntake, UNCERTAIN_INTAKE } from "@/lib/pendingIntake";

export type LeadFormIntent = "sell" | "buyer" | "financing" | "contact";

type FieldConfig = {
    name: string;
    label: string;
    type: "text" | "select" | "textarea";
    options?: string[];
    required?: boolean;
    placeholder?: string;
};

const FUNNEL_FIELDS: Record<LeadFormIntent, FieldConfig[]> = {
    contact: [
        { name: "subject", label: "Subject", type: "text" },
        { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us more..." },
    ],
    sell: [
        { name: "address", label: "Property Address", type: "text", required: true, placeholder: "123 Main St, Dallas, TX" },
        { name: "condition", label: "Property Condition", type: "select", required: true, options: ["Move-in ready", "Needs minor repairs", "Needs major repairs", "Tear-down / land value"] },
        { name: "timeline", label: "Timeline to Sell", type: "select", required: true, options: ["As soon as possible", "Within 30 days", "1–3 months", "Just exploring options"] },
        { name: "notes", label: "Anything else we should know?", type: "textarea", placeholder: "Tell us about the property..." },
    ],
    buyer: [
        { name: "neighborhoods", label: "Target Neighborhoods / Areas", type: "text", required: true, placeholder: "e.g. Oak Cliff, Lake Highlands" },
        { name: "budget", label: "Budget Range", type: "select", required: true, options: ["Under $300k", "$300k–$500k", "$500k–$750k", "$750k+"] },
        { name: "preApproval", label: "Financing Status", type: "select", required: true, options: ["Pre-approved", "Not yet pre-approved", "Paying cash"] },
        { name: "criteria", label: "Must-Haves", type: "textarea", placeholder: "Bedrooms, bathrooms, style, timeline..." },
    ],
    financing: [
        { name: "inquiryType", label: "Inquiry Type", type: "select", required: true, options: ["Private lender", "JV / equity partner", "Hard money lender", "Other"] },
        { name: "investmentRange", label: "Typical Investment Range", type: "select", required: true, options: ["Under $50k", "$50k–$150k", "$150k–$500k", "$500k+"] },
        { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Tell us about your lending or partnership interest..." },
    ],
};

const FUNNEL_SUBMIT_LABEL: Record<LeadFormIntent, string> = {
    contact: "Send Message",
    sell: "Request My Cash Offer",
    buyer: "Submit Buyer Application",
    financing: "Submit Inquiry",
};

const fieldClasses =
    "mt-2 block w-full rounded-xl border border-charcoal/15 bg-paper-alt px-4 py-3 text-charcoal transition-colors focus:border-primary focus:bg-paper focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function LeadForm({ intent }: { intent: LeadFormIntent }) {
    return <LeadFormInner key={intent} intent={intent} />;
}
function subscribePending(callback: () => void) {
    window.addEventListener("storage", callback);
    window.addEventListener("jays-pending-intake", callback);
    return () => {
        window.removeEventListener("storage", callback);
        window.removeEventListener("jays-pending-intake", callback);
    };
}
function LeadFormInner({ intent }: { intent: LeadFormIntent }) {
    const fields = FUNNEL_FIELDS[intent];
    const [localStatus, setStatus] = useState<"idle" | "sending" | "saved" | "uncertain">("idle");
    const [error, setError] = useState("");
    const [editableValues, setValues] = useState<Record<string, string>>({});
    const [manuallyBlocked, setBlocked] = useState(false);
    const snapshot = useSyncExternalStore(subscribePending, () => {
        try { return window.sessionStorage.getItem(pendingIntakeKey(intent)); } catch { return "unavailable"; }
    }, () => undefined);
    const recovery = useMemo(() => {
        try { return { draft: snapshot === null || snapshot === undefined ? null : decodePendingIntake(snapshot, intent), blocked: false }; }
        catch { return { draft: null, blocked: true }; }
    }, [snapshot, intent]);
    const ready = snapshot !== undefined;
    const blocked = manuallyBlocked || recovery.blocked;
    const status = localStatus === "idle" && recovery.draft ? "uncertain" : localStatus;
    const values = recovery.draft?.payload.fields || editableValues;
    const busy = useRef(false);

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status !== "idle") return;
        await sendInquiry(Object.fromEntries(new FormData(event.currentTarget).entries()) as Record<string, string>);
    }
    async function sendInquiry(newFields?: Record<string, string>) {
        if (!ready || blocked || busy.current) return;
        let draft;
        try { draft = readPendingIntake(window.sessionStorage, intent); } catch {
            setBlocked(true);
            setStatus("uncertain");
            setError("This browser cannot recover a previous inquiry. Contact us before submitting again.");
            return;
        }
        const firstAttempt = draft === null;
        busy.current = true;
        if (!draft) {
            if (!newFields) { busy.current = false; return; }
            try {
                draft = savePendingIntake(window.sessionStorage, intent, newFields, crypto.randomUUID());
            } catch {
                busy.current = false;
                setBlocked(true);
                setStatus("uncertain");
                setError("This browser could not save your inquiry safely. Please contact us for help.");
                return;
            }
        }
        setStatus("sending");
        setError("");
        try {
            const response = await fetch("/api/intake", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify(draft.payload), signal: AbortSignal.timeout(45000),
            });
            const result = await response.json();
            if (!response.ok || !intakeReceiptMatches(result, draft)) {
                if (firstAttempt && (response.status === 422 || response.status === 400)) {
                    clearPendingIntake(window.sessionStorage, draft);
                    setStatus("idle");
                    setError(result.error || "Please check your answers and try again.");
                } else {
                    setStatus("uncertain");
                    setError(UNCERTAIN_INTAKE);
                }
                return;
            }
            try { clearPendingIntake(window.sessionStorage, draft); } catch {
                // Confirmed receipt remains success; any retained payload safely replays.
            }
            setStatus("saved");
        } catch {
            setStatus("uncertain");
            setError(UNCERTAIN_INTAKE);
        } finally { busy.current = false; }
    }
    if (status === "saved") return <div role="status" className="rounded-xl border border-primary/20 p-8">
        <h2 className="text-xl font-semibold">Thank you — your inquiry has been received.</h2>
        <p className="mt-3">Our team will follow up within one business day. For urgent help, call {siteConfig.phone}.</p>
    </div>;

    return (
        <form onSubmit={submit} className="space-y-6">
            <fieldset disabled={!ready || blocked || status !== "idle"} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                        Name
                    </label>
                    <input type="text" id="name" name="name" required placeholder="Your name" value={values.name || ""} onChange={e=>setValues({...values,name:e.target.value})} className={fieldClasses} />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                        Email
                    </label>
                    <input type="email" id="email" name="email" required placeholder="you@example.com" value={values.email || ""} onChange={e=>setValues({...values,email:e.target.value})} className={fieldClasses} />
                </div>
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
                    Phone
                </label>
                <input type="tel" id="phone" name="phone" required={intent !== "contact"} placeholder="(214) 555-0100" value={values.phone || ""} onChange={e=>setValues({...values,phone:e.target.value})} className={fieldClasses} />
            </div>

            {fields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-charcoal">
                        {field.label}
                    </label>
                    {field.type === "select" && (
                        <select id={field.name} name={field.name} required={field.required} value={values[field.name] || ""} onChange={e=>setValues({...values,[field.name]:e.target.value})} className={fieldClasses}>
                            <option value="" disabled>
                                Select an option
                            </option>
                            {field.options?.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                    )}
                    {field.type === "textarea" && (
                        <textarea
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            value={values[field.name] || ""}
                            onChange={e=>setValues({...values,[field.name]:e.target.value})}
                            rows={5}
                            placeholder={field.placeholder}
                            className={fieldClasses}
                        />
                    )}
                    {field.type === "text" && (
                        <input
                            type="text"
                            value={values[field.name] || ""}
                            onChange={e=>setValues({...values,[field.name]:e.target.value})}
                            id={field.name}
                            name={field.name}
                            required={field.required}
                            placeholder={field.placeholder}
                            className={fieldClasses}
                        />
                    )}
                </div>
            ))}

            {intent === "sell" && <div className="space-y-3 text-sm">
                <label className="flex items-start gap-3"><input id="sms_opt_in" name="sms_opt_in" type="checkbox" checked={values.sms_opt_in === "on"} onChange={e=>setValues({...values,sms_opt_in:e.target.checked ? "on" : ""})} className="mt-1" /><span>{SMS_CONSENT_COPY}</span></label>
                <p>Text messages are optional. This choice does not authorize AI calls.</p>
                <p><a className="underline" href="/privacy-policy">SMS Privacy Policy</a> · <a className="underline" href="/terms">SMS Terms</a></p>
            </div>}
            <button
                type="submit"
                className="w-full rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-paper shadow-lg shadow-primary/25 transition-all hover:bg-primary-light sm:w-auto"
            >
                {status === "sending" ? "Saving your inquiry…" : FUNNEL_SUBMIT_LABEL[intent]}
            </button>
            <p className="text-xs text-stone">
                Your inquiry is sent to our team for personal follow-up. You can also email us directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                    {siteConfig.email}
                </a>
                .
            </p>
            </fieldset>
            {(error || recovery.draft || recovery.blocked) && <p role="alert" className="text-sm text-primary">{error || (recovery.blocked ? "This browser cannot recover a previous inquiry. Contact us before submitting again." : UNCERTAIN_INTAKE)} Call {siteConfig.phone} or email {siteConfig.email}.</p>}
            {status === "uncertain" && <button type="button" disabled={!ready || blocked} onClick={()=>void sendInquiry()} className="rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-paper disabled:opacity-50">Retry Saved Inquiry</button>}
        </form>
    );
}
