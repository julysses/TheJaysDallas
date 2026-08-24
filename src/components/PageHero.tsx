import type { ReactNode } from "react";
import AnimateIn from "@/components/AnimateIn";

export default function PageHero({
    eyebrow,
    title,
    subhead,
    children,
    compact = false,
}: {
    eyebrow?: string;
    title: ReactNode;
    subhead?: ReactNode;
    children?: ReactNode;
    /** Smaller vertical rhythm and no glow blob — used for legal/reference pages. */
    compact?: boolean;
}) {
    return (
        <section
            className={`relative overflow-hidden bg-ink pt-36 sm:pt-44 ${compact ? "pb-16" : "pb-20"
                }`}
        >
            <div className="absolute inset-0 dot-pattern opacity-30" />
            {!compact && (
                <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/15 blur-[100px] glow-pulse" />
            )}
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <AnimateIn>
                    {eyebrow && (
                        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                            {eyebrow}
                        </p>
                    )}
                    <h1 className={`${eyebrow ? "mt-4" : ""} max-w-3xl font-display text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl`}>
                        {title}
                    </h1>
                    {subhead && (
                        <p className="mt-6 max-w-2xl text-lg text-stone">{subhead}</p>
                    )}
                    {children}
                </AnimateIn>
            </div>
        </section>
    );
}
