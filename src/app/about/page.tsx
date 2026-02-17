import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
    title: "About",
    description: `Learn about ${siteConfig.companyName}, a U.S.-based software studio in ${siteConfig.location}.`,
};

const values = [
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
        title: "Quality First",
        description:
            "We ship production-grade code with thorough testing, documentation, and attention to detail in every release.",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        title: "Transparency",
        description:
            "Clear communication, honest timelines, and full visibility into progress — no surprises, no guesswork.",
    },
    {
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        ),
        title: "Long-Term Partnership",
        description:
            "We build lasting relationships through ongoing maintenance, iteration, and product evolution support.",
    },
];

const process = [
    {
        step: "01",
        title: "Discovery",
        description: "We learn your business, users, and goals to define the right product strategy.",
    },
    {
        step: "02",
        title: "Design",
        description: "UX/UI design with wireframes, prototypes, and user testing before writing code.",
    },
    {
        step: "03",
        title: "Develop",
        description: "Agile development with regular demos, code reviews, and continuous integration.",
    },
    {
        step: "04",
        title: "Deploy & Support",
        description: "Launch to production with monitoring, analytics, and ongoing iteration.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────── */}
            <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 sm:pt-44">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-indigo-600/15 blur-[100px]" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                            About Us
                        </p>
                        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            A software studio built on{" "}
                            <span className="gradient-text">craft and conviction</span>
                        </h1>
                    </AnimateIn>
                </div>
            </section>

            {/* ── Story ─────────────────────────────────── */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2">
                        <AnimateIn>
                            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                                <p>
                                    <span className="font-semibold text-gray-900">
                                        {siteConfig.companyName}
                                    </span>{" "}
                                    is a U.S.-based limited liability company located in{" "}
                                    {siteConfig.location}. We design, build, and support modern
                                    software products and provide technology services for
                                    businesses and consumers.
                                </p>
                                <p>
                                    Our work focuses on scalable, secure applications and
                                    long-term product support. From early-stage MVPs to
                                    production-grade platforms, we partner with clients to deliver
                                    reliable software that grows with their needs.
                                </p>
                                <p>
                                    We believe great software comes from deep understanding of the
                                    problem, disciplined engineering, and a genuine commitment to
                                    the people who use it every day.
                                </p>
                            </div>
                        </AnimateIn>

                        <AnimateIn delay={150}>
                            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 lg:p-10">
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                                    Company Information
                                </h3>
                                <dl className="mt-6 space-y-6">
                                    {[
                                        { label: "Legal Name", value: siteConfig.companyName },
                                        { label: "Type", value: "Limited Liability Company (LLC)" },
                                        { label: "Location", value: siteConfig.location },
                                        { label: "Founded", value: "2025" },
                                        { label: "Focus", value: "Software Products & Technology Services" },
                                    ].map((item) => (
                                        <div key={item.label} className="flex justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                            <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                                            <dd className="text-sm font-semibold text-gray-900">{item.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </AnimateIn>
                    </div>
                </div>
            </section>

            {/* ── Values ────────────────────────────────── */}
            <section className="border-t border-gray-100 bg-gray-50 py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                            Our Values
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                            How we work
                        </h2>
                    </AnimateIn>

                    <div className="mt-14 grid gap-8 sm:grid-cols-3">
                        {values.map((v, i) => (
                            <AnimateIn key={v.title} delay={i * 100}>
                                <div className="hover-lift rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                        {v.icon}
                                    </div>
                                    <h3 className="mt-6 text-lg font-semibold text-gray-900">
                                        {v.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                                        {v.description}
                                    </p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Process ───────────────────────────────── */}
            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                            Our Process
                        </p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                            From idea to product
                        </h2>
                    </AnimateIn>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {process.map((p, i) => (
                            <AnimateIn key={p.step} delay={i * 100}>
                                <div className="relative rounded-2xl border border-gray-100 bg-white p-8">
                                    <span className="text-4xl font-black text-indigo-100">
                                        {p.step}
                                    </span>
                                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                                        {p.description}
                                    </p>
                                </div>
                            </AnimateIn>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
