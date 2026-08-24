"use client";

import { siteConfig } from "@/lib/siteConfig";

export type LeadFormIntent = "sell" | "buyer" | "financing";

type FieldConfig = {
    name: string;
    label: string;
    type: "text" | "select" | "textarea";
    options?: string[];
    required?: boolean;
    placeholder?: string;
};

const FUNNEL_FIELDS: Record<LeadFormIntent, FieldConfig[]> = {
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

const FUNNEL_SUBJECT: Record<LeadFormIntent, string> = {
    sell: "Seller Inquiry",
    buyer: "Buyer Program Inquiry",
    financing: "Capital Partner Inquiry",
};

const FUNNEL_SUBMIT_LABEL: Record<LeadFormIntent, string> = {
    sell: "Request My Cash Offer",
    buyer: "Submit Buyer Application",
    financing: "Submit Inquiry",
};

const fieldClasses =
    "mt-2 block w-full rounded-xl border border-charcoal/15 bg-paper-alt px-4 py-3 text-charcoal transition-colors focus:border-primary focus:bg-paper focus:outline-none focus:ring-2 focus:ring-primary/20";

export default function LeadForm({ intent }: { intent: LeadFormIntent }) {
    const fields = FUNNEL_FIELDS[intent];
    const mailtoAction = `mailto:${siteConfig.email}?subject=${encodeURIComponent(FUNNEL_SUBJECT[intent])}`;

    return (
        <form action={mailtoAction} method="POST" encType="text/plain" className="space-y-6">
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
                <input type="tel" id="phone" name="phone" required placeholder="(214) 555-0100" className={fieldClasses} />
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

            <button
                type="submit"
                className="w-full rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-paper shadow-lg shadow-primary/25 transition-all hover:bg-primary-light sm:w-auto"
            >
                {FUNNEL_SUBMIT_LABEL[intent]}
            </button>
            <p className="text-xs text-stone">
                This form opens your default email client. You can also email us directly at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
                    {siteConfig.email}
                </a>
                .
            </p>
        </form>
    );
}
