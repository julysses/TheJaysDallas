import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
    title: "SMS Terms & Conditions",
    description: `A2P SMS messaging terms and conditions for ${siteConfig.companyName}.`,
};

export default function TermsPage() {
    return (
        <>
            <PageHero title="SMS Terms & Conditions" subhead="Effective date: March 2026" compact />

            {/* ── Content ───────────────────────────────── */}
            <section className="bg-paper py-16 sm:py-24">
                <div className="mx-auto max-w-3xl px-6 lg:px-8">
                    {/* Intro */}
                    <AnimateIn>
                        <p className="text-lg leading-relaxed text-stone">
                            By opting in to receive text messages from{" "}
                            {siteConfig.companyName}, you agree to the following
                            terms and conditions. Please read them carefully.
                        </p>
                    </AnimateIn>

                    <div className="mt-12 space-y-10">
                        {/* Program Name */}
                        <AnimateIn delay={50}>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h2 className="text-lg font-semibold text-charcoal">
                                    Program Name
                                </h2>
                                <p className="mt-3 leading-relaxed text-stone">
                                    {siteConfig.companyName} SMS Alerts &amp;
                                    Notifications
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Program Description */}
                        <AnimateIn delay={100}>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h2 className="text-lg font-semibold text-charcoal">
                                    Program Description
                                </h2>
                                <p className="mt-3 leading-relaxed text-stone">
                                    By providing your mobile phone number and opting
                                    in, you consent to receive recurring automated
                                    text messages from {siteConfig.companyName}.
                                    Messages may include property inquiry updates,
                                    offer status, appointment reminders, closing
                                    updates, and other communications related to our
                                    real estate services. Consent to receive
                                    messages is not a condition of purchase.
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Message & Data Rates */}
                        <AnimateIn delay={150}>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h2 className="text-lg font-semibold text-charcoal">
                                    Message &amp; Data Rates
                                </h2>
                                <p className="mt-3 leading-relaxed text-stone">
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
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h2 className="text-lg font-semibold text-charcoal">
                                    Message Frequency
                                </h2>
                                <p className="mt-3 leading-relaxed text-stone">
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
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h2 className="text-lg font-semibold text-charcoal">
                                    Opt-Out Instructions
                                </h2>
                                <p className="mt-3 leading-relaxed text-stone">
                                    You may opt out of receiving text messages at any
                                    time by replying{" "}
                                    <span className="font-bold text-charcoal">
                                        STOP
                                    </span>{" "}
                                    to any message you receive from us. After sending{" "}
                                    <span className="font-bold text-charcoal">
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
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h2 className="text-lg font-semibold text-charcoal">
                                    Help &amp; Support
                                </h2>
                                <p className="mt-3 leading-relaxed text-stone">
                                    For help or more information about our messaging
                                    program, reply{" "}
                                    <span className="font-bold text-charcoal">
                                        HELP
                                    </span>{" "}
                                    to any text message, or contact us directly:
                                </p>
                                <ul className="mt-3 space-y-1 text-stone">
                                    <li>
                                        Email:{" "}
                                        <a
                                            href={`mailto:${siteConfig.email}`}
                                            className="text-primary underline decoration-primary/40 transition-colors hover:text-primary-light"
                                        >
                                            {siteConfig.email}
                                        </a>
                                    </li>
                                    <li>
                                        Phone:{" "}
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

                        {/* Carrier Liability */}
                        <AnimateIn delay={350}>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h2 className="text-lg font-semibold text-charcoal">
                                    Carrier Liability
                                </h2>
                                <p className="mt-3 leading-relaxed text-stone">
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
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h2 className="text-lg font-semibold text-charcoal">
                                    Privacy
                                </h2>
                                <p className="mt-3 leading-relaxed text-stone">
                                    Your privacy is important to us. We will not
                                    sell, rent, or share your mobile phone number
                                    with third parties for marketing purposes. For
                                    full details, please view our{" "}
                                    <a
                                        href="/privacy-policy"
                                        className="text-primary underline decoration-primary/40 transition-colors hover:text-primary-light"
                                    >
                                        SMS Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </AnimateIn>

                        {/* Changes to Terms */}
                        <AnimateIn delay={450}>
                            <div className="border-l-2 border-primary/20 pl-6">
                                <h2 className="text-lg font-semibold text-charcoal">
                                    Changes to These Terms
                                </h2>
                                <p className="mt-3 leading-relaxed text-stone">
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
                        <div className="mt-16 rounded-xl border border-primary/20 bg-primary/5 p-8">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                                Quick Reference
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-charcoal/80">
                                <li>
                                    <span className="font-medium text-charcoal">
                                        Program:
                                    </span>{" "}
                                    {siteConfig.companyName} SMS Alerts &amp;
                                    Notifications
                                </li>
                                <li>
                                    <span className="font-medium text-charcoal">
                                        Opt-Out:
                                    </span>{" "}
                                    Reply{" "}
                                    <span className="font-bold text-primary">
                                        STOP
                                    </span>{" "}
                                    to any message
                                </li>
                                <li>
                                    <span className="font-medium text-charcoal">
                                        Help:
                                    </span>{" "}
                                    Reply{" "}
                                    <span className="font-bold text-primary">
                                        HELP
                                    </span>{" "}
                                    to any message
                                </li>
                                <li>
                                    <span className="font-medium text-charcoal">
                                        Frequency:
                                    </span>{" "}
                                    Message frequency varies
                                </li>
                                <li>
                                    <span className="font-medium text-charcoal">
                                        Rates:
                                    </span>{" "}
                                    Message &amp; data rates may apply
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
