import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Logo from "@/components/Logo";

const footerLinks = [
    {
        title: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Portfolio", href: "/portfolio" },
            { label: "Team", href: "/team" },
        ],
    },
    {
        title: "Get Started",
        links: [
            { label: "Sell Your Home", href: "/sell" },
            { label: "Buyer Program", href: "/buyers" },
            { label: "Financing", href: "/financing" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "/privacy" },
            { label: "SMS Privacy Policy", href: "/privacy-policy" },
            { label: "SMS Terms & Conditions", href: "/terms" },
            { label: "Contact", href: "/contact" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-paper/5 bg-ink">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5">
                            <Logo size="sm" linkHome={false} />
                            <span className="font-display text-base font-bold uppercase tracking-wide text-paper">
                                {siteConfig.shortName}
                            </span>
                        </div>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/50">
                            {siteConfig.companyName} — buying, renovating, and selling homes
                            across {siteConfig.location} and the surrounding DFW metro.
                        </p>
                        <div className="mt-6 space-y-2 text-sm text-paper/50">
                            <p>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="transition-colors hover:text-primary-light"
                                >
                                    {siteConfig.email}
                                </a>
                            </p>
                            <p>
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="transition-colors hover:text-primary-light"
                                >
                                    {siteConfig.phone}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((col) => (
                        <div key={col.title}>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-paper/60">
                                {col.title}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-paper/50 transition-colors hover:text-primary-light"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-paper/5 pt-8 sm:flex-row">
                    <p className="text-xs text-paper/40">
                        &copy; {siteConfig.year} {siteConfig.companyName}. All rights
                        reserved.
                    </p>
                    <p className="text-xs text-paper/40">{siteConfig.location}</p>
                </div>
            </div>
        </footer>
    );
}
