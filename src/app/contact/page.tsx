"use client";

import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";

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
            <section className="relative overflow-hidden bg-slate-950 pb-20 pt-36 sm:pt-44">
                <div className="absolute inset-0 dot-pattern opacity-30" />
                <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[100px]" />
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <AnimateIn>
                        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">Contact</p>
                        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Let&apos;s <span className="gradient-text">build together</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-slate-400">
                            Have a project in mind or just want to say hello? Reach out and we&apos;ll get back to you promptly.
                        </p>
                    </AnimateIn>
                </div>
            </section>

            <section className="bg-white py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">
                        {/* Contact info */}
                        <div className="lg:col-span-2">
                            <AnimateIn>
                                <div className="rounded-2xl bg-slate-950 p-8 lg:p-10">
                                    <h2 className="text-xl font-bold text-white">Get in Touch</h2>
                                    <p className="mt-3 text-sm text-slate-400">We typically respond within one business day.</p>
                                    <div className="mt-10 space-y-8">
                                        {contactInfo.map((item) => (
                                            <div key={item.label} className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-400">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                                                    {item.href ? (
                                                        <a href={item.href} className="mt-1 block text-white transition-colors hover:text-indigo-400">{item.value}</a>
                                                    ) : (
                                                        <p className="mt-1 text-white">{item.value}</p>
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
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                            <input type="text" id="name" name="name" required placeholder="Your name" className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="email" id="email" name="email" required placeholder="you@example.com" className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                        <input type="text" id="subject" name="subject" placeholder="Project inquiry" className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea id="message" name="message" rows={6} required placeholder="Tell us about your project..." className="mt-2 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 transition-colors focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20" />
                                    </div>
                                    <button type="submit" className="w-full rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 sm:w-auto">
                                        Send Message
                                    </button>
                                    <p className="text-xs text-gray-400">
                                        This form opens your default email client. You can also email us directly at{" "}
                                        <a href={`mailto:${siteConfig.email}`} className="text-indigo-600 hover:underline">{siteConfig.email}</a>.
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
