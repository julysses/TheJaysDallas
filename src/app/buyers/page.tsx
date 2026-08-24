import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
    title: "Buyer Program",
    description: `Find your next home in DFW with ${siteConfig.companyName}'s buyer program.`,
};

export default function BuyersPage() {
    return (
        <>
            <PageHero
                eyebrow="Buyer Program"
                title={
                    <>
                        Find Your <span className="brand-text">Dream Home</span> in DFW
                    </>
                }
                subhead="Get access to renovated, move-in-ready homes across Dallas-Fort Worth — often before they hit the open market."
            />

            <section className="bg-paper py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <AnimateIn>
                                <div className="rounded-2xl bg-ink p-8 lg:p-10">
                                    <h2 className="font-display text-xl font-semibold text-paper">
                                        The Buyer Program
                                    </h2>
                                    <p className="mt-3 text-sm leading-relaxed text-paper/60">
                                        Tell us your target neighborhoods and must-haves, and
                                        we&apos;ll match you with renovated homes from our
                                        pipeline — plus early access to properties before they&apos;re
                                        publicly listed.
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
                                <LeadForm intent="buyer" />
                            </AnimateIn>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
