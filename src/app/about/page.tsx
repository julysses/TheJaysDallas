import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";

export const metadata: Metadata = {
    title: "About",
    description: `Learn about ${siteConfig.companyName}, a residential real estate investment firm in ${siteConfig.location}.`,
};

const values = [
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
        title: "Integrity",
        description:
            "Fair, transparent offers and honest timelines — every seller and buyer gets the same straight answers.",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Speed & Certainty",
        description:
            "Fast, data-driven underwriting means quick decisions and closings you can count on — no last-minute surprises.",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
            </svg>
        ),
        title: "Neighborhood Care",
        description:
            "Every renovation is built to raise the bar for its block — quality craftsmanship that respects the community.",
    },
];

export default function AboutPage() {
    return (
        <>
            <PageHero
                eyebrow="About Us"
                title={
                    <>
                        A real estate firm built on{" "}
                        <span className="brand-text">craft and conviction</span>
                    </>
                }
            />

            {/* ── Story ─────────────────────────────────── */}
            <section className="bg-paper py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        <AnimateIn>
                            <div className="space-y-6 text-lg leading-relaxed text-stone">
                                <p>
                                    <span className="font-semibold text-charcoal">
                                        {siteConfig.companyName}
                                    </span>{" "}
                                    is a residential real estate investment firm based in{" "}
                                    {siteConfig.location}. We acquire, renovate, and resell
                                    homes across the DFW metro — plus wholesale deals and
                                    capital-partner opportunities for investors.
                                </p>
                                <p>
                                    Our work focuses on disciplined, data-driven acquisition and
                                    high-integrity renovation. From distressed properties to
                                    move-in-ready flips, we partner with sellers, buyers, and
                                    lenders to deliver reliable outcomes.
                                </p>
                                <p>
                                    We believe great real estate investing comes from deep
                                    understanding of the market, disciplined underwriting, and a
                                    genuine commitment to the neighborhoods we work in.
                                </p>
                            </div>
                        </AnimateIn>

                        <AnimateIn delay={150}>
                            <div className="rounded-2xl border border-charcoal/10 bg-paper-alt p-8 lg:p-10">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-stone">
                                    Company Information
                                </h3>
                                <dl className="mt-6 space-y-6">
                                    {[
                                        { label: "Legal Name", value: siteConfig.companyName },
                                        { label: "Type", value: "Limited Liability Company (LLC)" },
                                        { label: "Location", value: siteConfig.location },
                                        { label: "Founded", value: "2025" },
                                        { label: "Focus", value: "Residential Real Estate Investment" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex justify-between border-b border-charcoal/10 pb-4 last:border-0 last:pb-0">
                                            <dt className="text-sm font-medium text-stone">{item.label}</dt>
                                            <dd className="text-sm font-semibold text-charcoal">{item.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </section>

            {/* ── Values ────────────────────────────────── */}
            <section className="border-t border-charcoal/10 bg-paper-alt py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Our Values
                        </p>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-charcoal">
                            How we work
                        </h2>
                    </AnimateIn>

                    <div className="mt-14 grid gap-8 sm:grid-cols-3">
                        {values.map((v, i) => (
                            <AnimateIn key={v.title} delay={i * 100}>
                                <div className="hover-lift rounded-2xl border border-charcoal/10 bg-paper p-8 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        {v.icon}
                                    </div>
                                    <h3 className="mt-6 text-lg font-semibold text-charcoal">
                                        {v.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-stone">
                                        {v.description}
                                    </p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Process recap ─────────────────────────── */}
            <section className="bg-paper py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Our Process
                        </p>
                        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-charcoal">
                            From offer to sale
                        </h2>
                    </AnimateIn>

                    <div className="mt-14">
                        <ProcessSteps compact />
                    </div>
                </div>
            </section>
        </>
    );
}
