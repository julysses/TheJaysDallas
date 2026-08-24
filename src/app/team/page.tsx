import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
    title: "Team",
    description: `Meet the people behind ${siteConfig.companyName}.`,
};

type TeamMember = {
    name: string;
    role: string;
    photo?: string;
    bio: string;
};

// Intentionally empty — no placeholder names or headshots. Populate with real bios.
const teamMembers: TeamMember[] = [];

export default function TeamPage() {
    return (
        <>
            <PageHero
                eyebrow="Team"
                title={
                    <>
                        The <span className="brand-text">people</span> behind the work
                    </>
                }
                subhead={`Get to know the team acquiring, renovating, and selling homes at ${siteConfig.companyName}.`}
            />

            {teamMembers.length === 0 && (
                <section className="bg-paper py-24 sm:py-32">
                    <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
                        <AnimateIn>
                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                                <svg
                                    className="h-10 w-10 text-primary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                    />
                                </svg>
                            </div>
                            <h2 className="mt-8 font-display text-2xl font-semibold tracking-tight text-charcoal">
                                Team Bios Coming Soon
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-stone">
                                We&apos;re putting together profiles for the people behind{" "}
                                {siteConfig.shortName}. In the meantime, feel free to reach
                                out — we&apos;d love to hear from you.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-paper shadow-lg shadow-primary/25 transition-all hover:bg-primary-light"
                            >
                                Get in Touch
                            </Link>
                        </AnimateIn>
                    </div>
                </section>
            )}
        </>
    );
}
