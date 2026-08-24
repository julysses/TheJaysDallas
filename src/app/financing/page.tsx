import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
    title: "Financing",
    description: `Capital partner and lending opportunities with ${siteConfig.companyName}.`,
};

export default function FinancingPage() {
    return (
        <>
            <PageHero
                eyebrow="Financing"
                title={
                    <>
                        Capital Partners &amp;{" "}
                        <span className="brand-text">Lenders</span>
                    </>
                }
                subhead="We work with private lenders, JV partners, and hard-money capital to fund acquisitions and renovations across DFW."
            />

            <section className="bg-paper py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <AnimateIn>
                                <div className="rounded-2xl bg-ink p-8 lg:p-10">
                                    <h2 className="font-display text-xl font-semibold text-paper">
                                        Partner With Us
                                    </h2>
                                    <p className="mt-3 text-sm leading-relaxed text-paper/60">
                                        Our deals are backed by disciplined underwriting and a
                                        track record of on-time execution. If you&apos;re a
                                        private lender, JV partner, or hard-money source looking
                                        to deploy capital in DFW residential real estate, we&apos;d
                                        like to talk.
                                    </p>
                                    <div className="mt-8 space-y-4 text-sm text-paper/60">
                                        <p>
                                            <a href={`mailto:${siteConfig.email}`} className="text-primary-light hover:underline">
                                                {siteConfig.email}
                                            </a>
                                        </p>
                                        <p>
                                            <a href={`tel:${siteConfig.phone}`} className="text-primary-light hover:underline">
                                                {siteConfig.phone}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </AnimateIn>
                        </div>
                        <div className="lg:col-span-3">
                            <AnimateIn delay={150}>
                                <LeadForm intent="financing" />
                            </AnimateIn>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
