"use client";

import { useState, type FormEvent } from "react";
import { SMS_CONSENT_COPY } from "@/lib/intake";
import { siteConfig } from "@/lib/siteConfig";

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
    const fields = FUNNEL_FIELDS[intent];
    const [status, setStatus] = useState<"idle" | "sending" | "saved" | "uncertain">("idle");
    const [error, setError] = useState("");
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (status !== "idle") return;
        const values = Object.fromEntries(new FormData(event.currentTarget).entries());
        setStatus("sending");
        setError("");
        try {
            const response = await fetch("/api/intake", {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ intent, fields: values }), signal: AbortSignal.timeout(45000),
            });
            const result = await response.json();
            if (!response.ok || result.success !== true) {
                setStatus(response.status === 422 || response.status === 400 ? "idle" : "uncertain");
                setError(result.error || "We could not confirm your inquiry. Please contact us before resubmitting.");
                return;
            }
            setStatus("saved");
        } catch {
            setStatus("uncertain");
            setError("We could not confirm your inquiry. Please call or email us before resubmitting.");
        }
    }
    if (status === "saved") return <div role="status" className="rounded-xl border border-primary/20 p-8">
        <h2 className="text-xl font-semibold">Thank you — your inquiry has been received.</h2>
        <p className="mt-3">Our team will follow up within one business day. For urgent help, call {siteConfig.phone}.</p>
    </div>;

    return (
        <form onSubmit={submit} className="space-y-6">
            <fieldset disabled={status !== "idle"} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                        Name
                    </label>
                    <input type="text" id="name" name="name" required placeholder="Your name" className={fieldClasses} />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                        Email
                    </label>
                    <input type="email" id="email" name="email" required placeholder="you@example.com" className={fieldClasses} />
                </div>
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
                    Phone
                </label>
                <input type="tel" id="phone" name="phone" required={intent !== "contact"} placeholder="(214) 555-0100" className={fieldClasses} />
            </div>

            {fields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-charcoal">
                        {field.label}
                    </label>
                    {field.type === "select" && (
                        <select id={field.name} name={field.name} required={field.required} defaultValue="" className={fieldClasses}>
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
                            rows={5}
                            placeholder={field.placeholder}
                            className={fieldClasses}
                        />
                    )}
                    {field.type === "text" && (
                        <input
                            type="text"
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
                <label className="flex items-start gap-3"><input id="sms_opt_in" name="sms_opt_in" type="checkbox" className="mt-1" /><span>{SMS_CONSENT_COPY}</span></label>
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
            {error && <p role="alert" className="text-sm text-primary">{error} Call {siteConfig.phone} or email {siteConfig.email}.</p>}
        </form>
    );
}
