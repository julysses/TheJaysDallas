import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
    title: "Services",
    description: `Web and mobile app development, MVP builds, and automation services from ${siteConfig.companyName}.`,
};

const services = [
    {
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
        title: "Web App Development",
        description:
            "Design and development of secure, responsive web applications using modern frameworks and best practices. From dashboards to SaaS platforms, we build for performance and scale.",
        technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
        gradient: "from-blue-500/10 to-indigo-500/10",
        iconBg: "bg-blue-50 text-blue-600",
    },
    {
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
        title: "Mobile App Development",
        description:
            "iOS and Android app development from concept through App Store deployment. Native and cross-platform solutions with polished UX and robust performance.",
        technologies: ["Swift", "SwiftUI", "React Native", "Kotlin", "Xcode"],
        gradient: "from-violet-500/10 to-purple-500/10",
        iconBg: "bg-violet-50 text-violet-600",
    },
    {
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
        ),
        title: "MVP & Product Iteration",
        description:
            "Rapid MVP builds to validate ideas with real users. User feedback loops, feature roadmaps, and disciplined iteration to find product-market fit fast.",
        technologies: ["Prototyping", "Analytics", "A/B Testing", "CI/CD"],
        gradient: "from-amber-500/10 to-orange-500/10",
        iconBg: "bg-amber-50 text-amber-600",
    },
    {
        icon: (
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Integrations & Automation",
        description:
            "Connect your tools, automate workflows, and streamline operations. APIs, payment systems, authentication, analytics, and business process automation.",
        technologies: ["REST APIs", "Stripe", "Auth0", "Zapier", "Webhooks"],
        gradient: "from-emerald-500/10 to-teal-500/10",
        iconBg: "bg-emerald-50 text-emerald-600",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────── */}
            <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 sm:pt-44">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-x-1/4 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[100px]" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                            Services
                        </p>
                        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Everything you need to{" "}
                            <span className="gradient-text">ship great software</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-slate-400">
                            End-to-end software development and technology services for
                            businesses of all sizes.
                        </p>
                    </AnimateIn>
                </div>
            </section>

            {/* ── Service Cards ─────────────────────────── */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-8 lg:grid-cols-2">
                        {services.map((s, i) => (
                            <AnimateIn key={s.title} delay={i * 100}>
                                <div
                                    className={`hover-lift rounded-2xl border border-gray-100 bg-gradient-to-br ${s.gradient} p-8 shadow-sm lg:p-10`}
                                >
                                    <div
                                        className={`flex h-14 w-14 items-center justify-center rounded-xl ${s.iconBg}`}
                                    >
                                        {s.icon}
                                    </div>
                                    <h2 className="mt-6 text-xl font-bold text-gray-900">
                                        {s.title}
                                    </h2>
                                    <p className="mt-4 leading-relaxed text-gray-600">
                                        {s.description}
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {s.technologies.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-600"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────── */}
            <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[100px]" />
                <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
                    <AnimateIn>
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Have a project in mind?
                        </h2>
                        <p className="mt-6 text-lg text-slate-400">
                            Contact us at{" "}
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                            >
                                {siteConfig.email}
                            </a>{" "}
                            or reach out through our contact form.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500"
                        >
                            Start a Conversation
                        </Link>
                    </AnimateIn>
                </div>
            </section>
        </>
    );
}
