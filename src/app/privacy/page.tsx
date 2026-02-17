import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: `Privacy policy for ${siteConfig.companyName}.`,
};

const sections = [
    { title: "Information We Collect", content: "We may collect information you submit through our contact forms, including your name, email address, and message content. This information is used solely to respond to inquiries and provide our services." },
    { title: "How We Use Your Information", content: "The information we collect is used exclusively to respond to your inquiries, provide requested services, and improve our business operations." },
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
            <section className="relative overflow-hidden bg-slate-950 pb-16 pt-36 sm:pt-44">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Privacy Policy</h1>
                        <p className="mt-4 text-slate-400">Effective date: February 2026</p>
                    </AnimateIn>
                </div>
            </section>

            <section className="bg-white py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-lg leading-relaxed text-gray-600">
                            {siteConfig.companyName} is committed to protecting the privacy of visitors to our website. This Privacy Policy explains how we collect, use, and safeguard your information.
                        </p>
                    </AnimateIn>
                    <div className="mt-12 space-y-10">
                        {sections.map((s, i) => (
                            <AnimateIn key={s.title} delay={i * 50}>
                                <div className="border-l-2 border-indigo-100 pl-6">
                                    <h2 className="text-lg font-semibold text-gray-900">{s.title}</h2>
                                    <p className="mt-3 leading-relaxed text-gray-600">{s.content}</p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
