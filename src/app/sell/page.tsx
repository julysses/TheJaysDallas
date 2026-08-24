import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
    title: "Sell Your Home",
    description: `Get a fast, fair cash offer on your Dallas-area home from ${siteConfig.companyName}.`,
};

const valueProps = [
    { title: "Fast Close", description: "Close on your timeline — often in as little as two weeks." },
    { title: "As-Is Condition", description: "No repairs, no cleaning, no staging required." },
    { title: "No Showings", description: "Skip open houses and endless walkthroughs entirely." },
    { title: "Local Expertise", description: "We know DFW neighborhoods inside and out." },
];

export default function SellPage() {
    return (
        <>
            <PageHero
                eyebrow="Sell Your Home"
                title={
                    <>
                        Get a <span className="brand-text">Cash Offer</span> on Your
                        Dallas Home
                    </>
                }
                subhead="Tell us about your property and we'll get back to you with a no-obligation offer — no matter the condition."
            />

            <section className="bg-paper py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {valueProps.map((v) => (
                                <div key={v.title} className="rounded-xl border border-charcoal/10 bg-paper-alt p-6">
                                    <h3 className="text-sm font-semibold text-charcoal">{v.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-stone">{v.description}</p>
                                </div>
                            ))}
                        </div>
                    </AnimateIn>

                    <div className="mt-16 grid gap-12 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <AnimateIn>
                                <div className="rounded-2xl bg-ink p-8 lg:p-10">
                                    <h2 className="font-display text-xl font-semibold text-paper">
                                        Why Sell to Us
                                    </h2>
                                    <p className="mt-3 text-sm text-paper/60">
                                        We buy homes in any condition, anywhere in DFW. Our team
                                        reviews every submission personally and responds within
                                        one business day.
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
                                <LeadForm intent="sell" />
                            </AnimateIn>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
