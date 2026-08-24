import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: `Privacy policy for ${siteConfig.companyName}.`,
};

const sections = [
    { title: "Information We Collect", content: "We may collect information you submit through our contact, seller, buyer, and financing intake forms, including your name, email address, phone number, property details, and message content. This information is used solely to respond to inquiries and provide our services." },
    { title: "How We Use Your Information", content: "The information we collect is used exclusively to respond to your inquiries, evaluate property or financing opportunities, provide requested services, and improve our business operations." },
    { title: "Data Sharing", content: "We do not sell, rent, or share your personal information with third parties for marketing purposes." },
    { title: "Analytics", content: "We may collect anonymous usage data to improve website performance and user experience. This data does not personally identify you." },
    { title: "Data Security", content: "We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction." },
    { title: "Your Rights", content: "You have the right to request access to, correction of, or deletion of your personal data by contacting us." },
    { title: "Changes to This Policy", content: "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date." },
    { title: "Contact", content: `For privacy-related inquiries, please contact us at ${siteConfig.email}.` },
];

export default function PrivacyPage() {
    return (
        <>
            <PageHero title="Privacy Policy" subhead="Effective date: February 2026" compact />

            <section className="bg-paper py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-lg leading-relaxed text-stone">
                            {siteConfig.companyName} is committed to protecting the privacy of visitors to our website. This Privacy Policy explains how we collect, use, and safeguard your information.
                        </p>
                    </AnimateIn>
                    <div className="mt-12 space-y-10">
                        {sections.map((s, i) => (
                            <AnimateIn key={s.title} delay={i * 50}>
                                <div className="border-l-2 border-primary/20 pl-6">
                                    <h2 className="text-lg font-semibold text-charcoal">{s.title}</h2>
                                    <p className="mt-3 leading-relaxed text-stone">{s.content}</p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
