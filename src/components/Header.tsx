"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";
import Logo from "@/components/Logo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/team", label: "Team" },
];

const getStartedLinks = [
    { href: "/sell", label: "Sell Your Home" },
    { href: "/buyers", label: "Buyer Program" },
    { href: "/financing", label: "Financing" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [lastPathname, setLastPathname] = useState(pathname);

    // Close menus on route change (render-time state adjustment, not an effect).
    if (pathname !== lastPathname) {
        setLastPathname(pathname);
        setMobileOpen(false);
        setDropdownOpen(false);
    }

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!dropdownOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [dropdownOpen]);

    const isGetStartedActive = getStartedLinks.some((l) => l.href === pathname);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
                ? "border-b border-charcoal/10 bg-ink/95 shadow-lg shadow-charcoal/5 backdrop-blur-xl"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2.5">
                    <Logo size="sm" />
                    <Link href="/" className="hidden font-display text-base font-bold uppercase tracking-wide text-charcoal sm:inline">
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
                                ? "bg-charcoal/10 text-charcoal"
                                : "text-charcoal/70 hover:bg-charcoal/5 hover:text-charcoal"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Get Started dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            onClick={() => setDropdownOpen((v) => !v)}
                            className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${isGetStartedActive
                                ? "bg-charcoal/10 text-charcoal"
                                : "text-charcoal/70 hover:bg-charcoal/5 hover:text-charcoal"
                                }`}
                            aria-haspopup="true"
                            aria-expanded={dropdownOpen}
                        >
                            Get Started
                            <svg
                                className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        <div
                            className={`absolute right-0 top-full mt-2 w-56 rounded-xl border border-charcoal/10 bg-ink-soft/98 p-2 shadow-xl shadow-charcoal/10 backdrop-blur-xl transition-all duration-150 ${dropdownOpen
                                ? "pointer-events-auto translate-y-0 opacity-100"
                                : "pointer-events-none -translate-y-1 opacity-0"
                                }`}
                        >
                            {getStartedLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${pathname === link.href
                                        ? "bg-charcoal/10 text-charcoal"
                                        : "text-charcoal/70 hover:bg-charcoal/5 hover:text-charcoal"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Link
                        href="/contact"
                        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${pathname === "/contact"
                            ? "bg-charcoal/10 text-charcoal"
                            : "text-charcoal/70 hover:bg-charcoal/5 hover:text-charcoal"
                            }`}
                    >
                        Contact
                    </Link>

                    <Link
                        href="/sell"
                        className="ml-4 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-primary-light"
                    >
                        Sell Your Home
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-charcoal/10 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <div className="flex flex-col gap-1.5">
                        <span
                            className={`block h-0.5 w-5 bg-charcoal transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-charcoal transition-all duration-300 ${mobileOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-charcoal transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                                }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile drawer */}
            <div
                className={`fixed inset-0 z-40 overflow-y-auto bg-ink/98 backdrop-blur-xl transition-all duration-300 md:hidden ${mobileOpen
                    ? "pointer-events-auto opacity-100"
                    : "pointer-events-none opacity-0"
                    }`}
            >
                <nav className="flex min-h-full flex-col items-center justify-center gap-2 py-24">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`rounded-xl px-8 py-3 text-2xl font-semibold transition-colors ${pathname === link.href ? "text-primary" : "text-charcoal/80 hover:text-charcoal"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-stone">
                        Get Started
                    </p>
                    {getStartedLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className={`rounded-xl px-8 py-2.5 text-xl font-medium transition-colors ${pathname === link.href ? "text-primary" : "text-charcoal/80 hover:text-charcoal"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className={`mt-2 rounded-xl px-8 py-3 text-2xl font-semibold transition-colors ${pathname === "/contact" ? "text-primary" : "text-charcoal/80 hover:text-charcoal"
                            }`}
                    >
                        Contact
                    </Link>

                    <Link
                        href="/sell"
                        onClick={() => setMobileOpen(false)}
                        className="mt-6 rounded-xl bg-primary px-10 py-4 text-lg font-semibold text-paper transition-colors hover:bg-primary-light"
                    >
                        Sell Your Home
                    </Link>
                </nav>
            </div>
        </header>
    );
}
