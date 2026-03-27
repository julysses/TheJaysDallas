import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
    title: "SMS Privacy Policy",
    description: `A2P SMS messaging privacy policy for ${siteConfig.companyName}.`,
};

const sections = [
    {
        title: "Consent & Authorization",
        content:
            `By providing your phone number and opting in, you consent to receive text messages from ${siteConfig.companyName}. Consent is not a condition of purchase. You may receive an initial confirmation message, after which message frequency may vary.`,
    },
    {
        title: "Types of Messages",
        content:
            "You may receive messages related to appointment reminders, service updates, order confirmations, promotional offers, and other communications relevant to our business relationship.",
    },
    {
        title: "Message Frequency",
        content:
            "Message frequency varies based on your interactions with us. You may receive recurring messages. We will not send more messages than reasonably necessary to provide our services and communications.",
    },
    {
        title: "Opt-Out / Stop",
        content:
            `You can opt out of receiving text messages at any time by replying STOP to any message. Upon receiving your opt-out request, we will send a one-time confirmation message and cease further messaging. For assistance, reply HELP or contact us at ${siteConfig.email} or ${siteConfig.phone}.`,
    },
    {
        title: "Help & Support",
        content:
            `For support regarding our messaging program, reply HELP to any text message or contact us directly at ${siteConfig.email} or call ${siteConfig.phone}.`,
    },
    {
        title: "Message & Data Rates",
        content:
            "Standard message and data rates may apply to any messages sent or received. Please check with your wireless carrier for details on your messaging plan. We are not responsible for any charges incurred from your carrier.",
    },
    {
        title: "Data Collection for Messaging",
        content:
            "We collect your mobile phone number and consent records when you opt in to our messaging program. This information is used solely to deliver the messages you have consented to receive and to maintain records of your consent.",
    },
    {
        title: "No Sharing of Personal Data",
        content:
            "We do not sell, rent, or share your phone number or any personal information collected through our messaging program with third parties for their own marketing purposes. Your data will only be shared with service providers who assist us in delivering messages, and they are obligated to protect your information.",
    },
    {
        title: "Carrier Disclaimer",
        content:
            "Carriers (e.g., T-Mobile, AT&T, Verizon) are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission by your carrier.",
    },
    {
        title: "TCPA Compliance",
        content:
            `${siteConfig.companyName} complies with the Telephone Consumer Protection Act (TCPA) and all applicable federal and state regulations. We obtain proper consent before sending any automated or pre-recorded messages to your mobile device.`,
    },
    {
        title: "Changes to This Policy",
        content:
            "We may update this SMS Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. Continued participation in our messaging program after changes are posted constitutes your acceptance of the updated policy.",
    },
    {
        title: "Contact Us",
        content:
            `If you have questions about this SMS Privacy Policy or our messaging practices, please contact us at ${siteConfig.email} or call ${siteConfig.phone}. ${siteConfig.companyName}, ${siteConfig.location}.`,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────── */}
            <section className="relative overflow-hidden bg-slate-950 pb-16 pt-36 sm:pt-44">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            SMS Privacy Policy
                        </h1>
                        <p className="mt-4 text-slate-400">
                            Effective date: March 2026
                        </p>
                    </AnimateIn>
                </div>
            </section>

            {/* ── Content ───────────────────────────────── */}
            <section className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-lg leading-relaxed text-gray-600">
                            {siteConfig.companyName} respects your privacy and is
                            committed to protecting the personal information you
                            share with us. This SMS Privacy Policy explains how we
                            collect, use, and safeguard information in connection
                            with our text messaging program.
                        </p>
                    </AnimateIn>

                    <div className="mt-12 space-y-10">
                        {sections.map((s, i) => (
                            <AnimateIn key={s.title} delay={i * 50}>
                                <div className="border-l-2 border-indigo-100 pl-6">
                                    <h2 className="text-lg font-semibold text-gray-900">
                                        {s.title}
                                    </h2>
                                    <p className="mt-3 leading-relaxed text-gray-600">
                                        {s.content}
                                    </p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>

                    {/* Quick-reference box */}
                    <AnimateIn delay={sections.length * 50}>
                        <div className="mt-16 rounded-xl border border-indigo-100 bg-indigo-50/50 p-8">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                                Quick Reference
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                                <li>
                                    <span className="font-medium text-gray-900">
                                        Opt-Out:
                                    </span>{" "}
                                    Reply <span className="font-semibold text-indigo-600">STOP</span> to
                                    any message
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900">
                                        Help:
                                    </span>{" "}
                                    Reply <span className="font-semibold text-indigo-600">HELP</span> to
                                    any message
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900">
                                        Email:
                                    </span>{" "}
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="text-indigo-600 underline decoration-indigo-300 transition-colors hover:text-indigo-500"
                                    >
                                        {siteConfig.email}
                                    </a>
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900">
                                        Phone:
                                    </span>{" "}
                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="text-indigo-600 underline decoration-indigo-300 transition-colors hover:text-indigo-500"
                                    >
                                        {siteConfig.phone}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </AnimateIn>
                </div>
            </section>
        </>
    );
}
