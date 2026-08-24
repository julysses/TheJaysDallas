"use client";

import Link from "next/link";

export default function Logo({
    size = "md",
    linkHome = true,
}: {
    size?: "sm" | "md" | "lg";
    linkHome?: boolean;
}) {
    const sizeClasses = {
        sm: "h-8 w-8 text-[13px]",
        md: "h-10 w-10 text-[16px]",
        lg: "h-14 w-14 text-[22px]",
    };

    const monogram = (
        <span
            className={`relative inline-flex items-center justify-center rounded-lg border border-primary/30 bg-ink shadow-lg shadow-charcoal/10 ${sizeClasses[size]}`}
        >
            {/* 3 overlapping bold sans J's */}
            <span className="relative flex items-center font-display font-bold" style={{ letterSpacing: "-0.15em" }}>
                <span className="text-charcoal/30">J</span>
                <span className="relative text-charcoal/60" style={{ marginLeft: "-0.2em" }}>
                    J
                </span>
                <span className="relative text-primary" style={{ marginLeft: "-0.2em" }}>
                    J
                </span>
            </span>
        </span>
    );

    if (linkHome) {
        return (
            <Link href="/" className="group flex items-center gap-2.5 transition-opacity hover:opacity-90">
                {monogram}
            </Link>
        );
    }

    return <span className="flex items-center gap-2.5">{monogram}</span>;
}
