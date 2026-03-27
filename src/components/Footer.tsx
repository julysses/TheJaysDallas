import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Logo from "@/components/Logo";

const footerLinks = [
    {
        title: "Company",
        links: [
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Portfolio", href: "/portfolio" },
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
        <footer className="border-t border-white/5 bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5">
                            <Logo size="sm" linkHome={false} />
                            <span className="text-lg font-bold text-white">
                                {siteConfig.shortName}
                            </span>
                        </div>
                        <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
                            {siteConfig.companyName} — crafting premium software products and
                            technology solutions from {siteConfig.location}.
                        </p>
                        <div className="mt-6 space-y-2 text-sm text-slate-400">
                            <p>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    {siteConfig.email}
                                </a>
                            </p>
                            <p>
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="transition-colors hover:text-indigo-400"
                                >
                                    {siteConfig.phone}
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((col) => (
                        <div key={col.title}>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                                {col.title}
                            </h3>
                            <ul className="mt-4 space-y-3">
                                {col.links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-400 transition-colors hover:text-indigo-400"
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
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
                    <p className="text-xs text-slate-500">
                        &copy; {siteConfig.year} {siteConfig.companyName}. All rights
                        reserved.
                    </p>
                    <p className="text-xs text-slate-500">{siteConfig.location}</p>
                </div>
            </div>
        </footer>
    );
}
