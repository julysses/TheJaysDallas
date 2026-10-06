import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";

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
            "Hilltop Home Co., a DBA of The Jays Dallas, LLC, sends property inquiry confirmations, offer updates, appointment reminders and closing updates to people who choose SMS on its offer form.",
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
            "Mobile information, SMS opt-in data and consent are not sold or shared with third parties or affiliates for marketing or promotional purposes. Messaging service providers may process these records only to operate the messaging program.",
    },
    {
        title: "Carrier Disclaimer",
        content:
            "Carriers (e.g., T-Mobile, AT&T, Verizon) are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission by your carrier.",
    },
    {
        title: "Scope of Consent",
        content:
            "SMS enrollment is limited to the program you choose. SMS consent does not authorize AI or prerecorded calls, or unrelated marketing.",
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
            <PageHero title="SMS Privacy Policy" subhead="Effective date: October 6, 2026" compact />

            {/* ── Content ───────────────────────────────── */}
            <section className="bg-paper py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-lg leading-relaxed text-stone">
                            Hilltop Home Co., a DBA of {siteConfig.companyName}, respects your privacy and is
                            committed to protecting the personal information you
                            share with us. This SMS Privacy Policy explains how we
                            collect, use, and safeguard information in connection
                            with our text messaging program.
                        </p>
                    </AnimateIn>

                    <p className="mt-6"><a href="/sms" className="text-primary underline">View the SMS opt-in process</a>. The optional checkbox at hilltophome.co/get-an-offer starts unchecked; submitting a phone number alone is not SMS consent.</p>
                    <div className="mt-12 space-y-10">
                        {sections.map((s, i) => (
                            <AnimateIn key={s.title} delay={i * 50}>
                                <div className="border-l-2 border-primary/20 pl-6">
                                    <h2 className="text-lg font-semibold text-charcoal">
                                        {s.title}
                                    </h2>
                                    <p className="mt-3 leading-relaxed text-stone">
                                        {s.content}
                                    </p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>

                    {/* Quick-reference box */}
                    <AnimateIn delay={sections.length * 50}>
                        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                                Quick Reference
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal/80">
                                <li>
                                    <span className="font-medium text-charcoal">
                                        Opt-Out:
                                    </span>{" "}
                                    Reply <span className="font-semibold text-primary">STOP</span> to
                                    any message
                                </li>
                                <li>
                                    <span className="font-medium text-charcoal">
                                        Help:
                                    </span>{" "}
                                    Reply <span className="font-semibold text-primary">HELP</span> to
                                    any message
                                </li>
                                <li>
                                    <span className="font-medium text-charcoal">
                                        Email:
                                    </span>{" "}
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="text-primary underline decoration-primary/40 transition-colors hover:text-primary-light"
                                    >
                                        {siteConfig.email}
                                    </a>
                                </li>
                                <li>
                                    <span className="font-medium text-charcoal">
                                        Phone:
                                    </span>{" "}
                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="text-primary underline decoration-primary/40 transition-colors hover:text-primary-light"
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
