import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
    title: "Portfolio",
    description: `Applications and software products developed by ${siteConfig.companyName}.`,
};

export default function PortfolioPage() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────── */}
            <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 sm:pt-44">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute right-0 top-0 h-[500px] w-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-indigo-600/15 blur-[100px]" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                            Portfolio
                        </p>
                        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Our <span className="gradient-text">work speaks</span> for itself
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-slate-400">
                            A selection of applications and software products developed and
                            maintained by {siteConfig.companyName}.
                        </p>
                    </AnimateIn>
                </div>
            </section>

            {/* ── Empty State ───────────────────────────── */}
            <section className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
                    <AnimateIn>
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50">
                            <svg
                                className="h-10 w-10 text-indigo-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                />
                            </svg>
                        </div>
                        <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">
                            Projects in Progress
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-gray-500">
                            We are currently building exciting new products. Our portfolio will
                            be updated as projects launch. In the meantime, feel free to reach
                            out to learn more about our capabilities.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500"
                        >
                            Discuss Your Project
                        </Link>
                    </AnimateIn>
                </div>
            </section>
        </>
    );
}
