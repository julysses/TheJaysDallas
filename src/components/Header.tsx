"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";
import Logo from "@/components/Logo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "border-b border-white/10 bg-slate-900/95 shadow-lg shadow-black/10 backdrop-blur-xl"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2.5">
                    <Logo size="sm" />
                    <Link href="/" className="hidden text-lg font-bold tracking-tight text-white sm:inline">
                        {siteConfig.shortName}
                    </Link>
                </div>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${pathname === link.href
                                ? "bg-white/10 text-white"
                                : "text-slate-300 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="ml-4 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <div className="flex flex-col gap-1.5">
                        <span
                            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile drawer */}
            <div
                className={`fixed inset-0 z-40 bg-slate-900/98 backdrop-blur-xl transition-all duration-300 md:hidden ${mobileOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
            >
                <nav className="flex h-full flex-col items-center justify-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`rounded-xl px-8 py-4 text-2xl font-semibold transition-colors ${pathname === link.href
                                ? "text-indigo-400"
                                : "text-slate-300 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-6 rounded-xl bg-indigo-600 px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-indigo-500"
                    >
                        Get in Touch
                    </Link>
                </nav>
            </div>
        </header>
    );
}
