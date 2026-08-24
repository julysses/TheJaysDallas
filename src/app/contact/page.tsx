"use client";

import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import PageHero from "@/components/PageHero";

const contactInfo = [
    {
        label: "Email",
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
    },
    {
        label: "Phone",
        value: siteConfig.phone,
        href: `tel:${siteConfig.phone}`,
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
    },
    {
        label: "Location",
        value: siteConfig.location,
        href: undefined,
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    return (
        <>
            <PageHero
                eyebrow="Contact"
                title={
                    <>
                        Let&apos;s talk about{" "}
                        <span className="brand-text">your property</span>
                    </>
                }
                subhead="Have a question or a property in mind? Reach out and we'll get back to you promptly."
            />

            <section className="bg-paper py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">
                        {/* Contact info */}
                        <div className="lg:col-span-2">
                            <AnimateIn>
                                <div className="rounded-2xl border border-charcoal/10 bg-ink p-8 lg:p-10">
                                    <h2 className="font-display text-xl font-semibold text-charcoal">Get in Touch</h2>
                                    <p className="mt-3 text-sm text-stone">We typically respond within one business day.</p>
                                    <div className="mt-10 space-y-8">
                                        {contactInfo.map((item) => (
                                            <div key={item.label} className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold uppercase tracking-wider text-stone">{item.label}</p>
                                                    {item.href ? (
                                                        <a href={item.href} className="mt-1 block text-charcoal transition-colors hover:text-primary">{item.value}</a>
                                                    ) : (
                                                        <p className="mt-1 text-charcoal">{item.value}</p>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </AnimateIn>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <AnimateIn delay={150}>
                                <form action={`mailto:${siteConfig.email}`} method="POST" encType="text/plain" className="space-y-6">
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-charcoal">Name</label>
                                            <input type="text" id="name" name="name" required placeholder="Your name" className="mt-2 block w-full rounded-xl border border-charcoal/15 bg-paper-alt px-4 py-3 text-charcoal transition-colors focus:border-primary focus:bg-paper focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-charcoal">Email</label>
                                            <input type="email" id="email" name="email" required placeholder="you@example.com" className="mt-2 block w-full rounded-xl border border-charcoal/15 bg-paper-alt px-4 py-3 text-charcoal transition-colors focus:border-primary focus:bg-paper focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-charcoal">Subject</label>
                                        <input type="text" id="subject" name="subject" placeholder="How can we help?" className="mt-2 block w-full rounded-xl border border-charcoal/15 bg-paper-alt px-4 py-3 text-charcoal transition-colors focus:border-primary focus:bg-paper focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-charcoal">Message</label>
                                        <textarea id="message" name="message" rows={6} required placeholder="Tell us more..." className="mt-2 block w-full rounded-xl border border-charcoal/15 bg-paper-alt px-4 py-3 text-charcoal transition-colors focus:border-primary focus:bg-paper focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                    </div>
                                    <button type="submit" className="w-full rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-paper shadow-lg shadow-primary/25 transition-all hover:bg-primary-light sm:w-auto">
                                        Send Message
                                    </button>
                                    <p className="text-xs text-stone">
                                        This form opens your default email client. You can also email us directly at{" "}
                                        <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>.
                                    </p>
                                </form>
                            </AnimateIn>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
