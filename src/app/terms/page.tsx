import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
    title: "SMS Terms & Conditions",
    description: `A2P SMS messaging terms and conditions for ${siteConfig.companyName}.`,
};

export default function TermsPage() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────── */}
            <section className="relative overflow-hidden bg-slate-950 pb-16 pt-36 sm:pt-44">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            SMS Terms &amp; Conditions
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
                    {/* Intro */}
                    <AnimateIn>
                        <p className="text-lg leading-relaxed text-gray-600">
                            By opting in to receive text messages from{" "}
                            {siteConfig.companyName}, you agree to the following
                            terms and conditions. Please read them carefully.
                        </p>
                    </AnimateIn>

                    <div className="mt-12 space-y-10">
                        {/* Program Name */}
                        <AnimateIn delay={50}>
                            <div className="border-l-2 border-indigo-100 pl-6">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Program Name
                                </h2>
                                <p className="mt-3 leading-relaxed text-gray-600">
                                    {siteConfig.companyName} SMS Alerts &amp;
                                    Notifications
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Program Description */}
                        <AnimateIn delay={100}>
                            <div className="border-l-2 border-indigo-100 pl-6">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Program Description
                                </h2>
                                <p className="mt-3 leading-relaxed text-gray-600">
                                    By providing your mobile phone number and opting
                                    in, you consent to receive recurring automated
                                    text messages from {siteConfig.companyName}.
                                    Messages may include appointment reminders,
                                    service updates, order confirmations, promotional
                                    offers, and other communications related to our
                                    products and services. Consent to receive
                                    messages is not a condition of purchase.
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Message & Data Rates */}
                        <AnimateIn delay={150}>
                            <div className="border-l-2 border-indigo-100 pl-6">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Message &amp; Data Rates
                                </h2>
                                <p className="mt-3 leading-relaxed text-gray-600">
                                    Message and data rates may apply. Your wireless
                                    carrier&apos;s standard messaging rates will apply to
                                    all text messages sent and received.{" "}
                                    {siteConfig.companyName} is not responsible for
                                    any fees charged by your carrier. Please contact
                                    your wireless provider for pricing details.
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Message Frequency */}
                        <AnimateIn delay={200}>
                            <div className="border-l-2 border-indigo-100 pl-6">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Message Frequency
                                </h2>
                                <p className="mt-3 leading-relaxed text-gray-600">
                                    Message frequency varies depending on your
                                    account activity, preferences, and interactions
                                    with {siteConfig.companyName}. You may receive
                                    recurring messages. We will not send more
                                    messages than reasonably necessary.
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Opt-Out Instructions */}
                        <AnimateIn delay={250}>
                            <div className="border-l-2 border-indigo-100 pl-6">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Opt-Out Instructions
                                </h2>
                                <p className="mt-3 leading-relaxed text-gray-600">
                                    You may opt out of receiving text messages at any
                                    time by replying{" "}
                                    <span className="font-bold text-gray-900">
                                        STOP
                                    </span>{" "}
                                    to any message you receive from us. After sending{" "}
                                    <span className="font-bold text-gray-900">
                                        STOP
                                    </span>
                                    , you will receive a one-time confirmation
                                    message, and no further messages will be sent
                                    unless you re-subscribe. Opting out of text
                                    messages will not affect any other communications
                                    or services you receive from{" "}
                                    {siteConfig.companyName}.
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Help / Support */}
                        <AnimateIn delay={300}>
                            <div className="border-l-2 border-indigo-100 pl-6">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Help &amp; Support
                                </h2>
                                <p className="mt-3 leading-relaxed text-gray-600">
                                    For help or more information about our messaging
                                    program, reply{" "}
                                    <span className="font-bold text-gray-900">
                                        HELP
                                    </span>{" "}
                                    to any text message, or contact us directly:
                                </p>
                                <ul className="mt-3 space-y-1 text-gray-600">
                                    <li>
                                        Email:{" "}
                                        <a
                                            href={`mailto:${siteConfig.email}`}
                                            className="text-indigo-600 underline decoration-indigo-300 transition-colors hover:text-indigo-500"
                                        >
                                            {siteConfig.email}
                                        </a>
                                    </li>
                                    <li>
                                        Phone:{" "}
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

                        {/* Carrier Liability */}
                        <AnimateIn delay={350}>
                            <div className="border-l-2 border-indigo-100 pl-6">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Carrier Liability
                                </h2>
                                <p className="mt-3 leading-relaxed text-gray-600">
                                    Carriers (including but not limited to T-Mobile,
                                    AT&amp;T, and Verizon) are not liable for
                                    delayed or undelivered messages. Message delivery
                                    is subject to effective transmission by your
                                    wireless carrier and network conditions.
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Privacy */}
                        <AnimateIn delay={400}>
                            <div className="border-l-2 border-indigo-100 pl-6">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Privacy
                                </h2>
                                <p className="mt-3 leading-relaxed text-gray-600">
                                    Your privacy is important to us. We will not
                                    sell, rent, or share your mobile phone number
                                    with third parties for marketing purposes. For
                                    full details, please view our{" "}
                                    <a
                                        href="/privacy-policy"
                                        className="text-indigo-600 underline decoration-indigo-300 transition-colors hover:text-indigo-500"
                                    >
                                        SMS Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Changes to Terms */}
                        <AnimateIn delay={450}>
                            <div className="border-l-2 border-indigo-100 pl-6">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    Changes to These Terms
                                </h2>
                                <p className="mt-3 leading-relaxed text-gray-600">
                                    {siteConfig.companyName} reserves the right to
                                    modify these Terms &amp; Conditions at any time.
                                    Updates will be posted on this page with a
                                    revised effective date. Your continued
                                    participation in the messaging program
                                    constitutes acceptance of any changes.
                                </p>
                            </div>
                        </AnimateIn>
                    </div>

                    {/* Quick-reference box */}
                    <AnimateIn delay={500}>
                        <div className="mt-16 rounded-xl border border-indigo-100 bg-indigo-50/50 p-8">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                                Quick Reference
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-gray-700">
                                <li>
                                    <span className="font-medium text-gray-900">
                                        Program:
                                    </span>{" "}
                                    {siteConfig.companyName} SMS Alerts &amp;
                                    Notifications
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900">
                                        Opt-Out:
                                    </span>{" "}
                                    Reply{" "}
                                    <span className="font-bold text-indigo-600">
                                        STOP
                                    </span>{" "}
                                    to any message
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900">
                                        Help:
                                    </span>{" "}
                                    Reply{" "}
                                    <span className="font-bold text-indigo-600">
                                        HELP
                                    </span>{" "}
                                    to any message
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900">
                                        Frequency:
                                    </span>{" "}
                                    Message frequency varies
                                </li>
                                <li>
                                    <span className="font-medium text-gray-900">
                                        Rates:
                                    </span>{" "}
                                    Message &amp; data rates may apply
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
