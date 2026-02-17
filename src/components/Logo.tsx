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
            className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-600/20 ${sizeClasses[size]}`}
        >
            {/* 3 overlapping cursive J's */}
            <span className="relative flex items-center" style={{ letterSpacing: "-0.15em" }}>
                <span
                    className="font-serif italic font-bold text-white/50"
                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                    J
                </span>
                <span
                    className="font-serif italic font-bold text-white/80 relative"
                    style={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        marginLeft: "-0.2em",
                    }}
                >
                    J
                </span>
                <span
                    className="font-serif italic font-bold text-white relative"
                    style={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        marginLeft: "-0.2em",
                    }}
                >
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
