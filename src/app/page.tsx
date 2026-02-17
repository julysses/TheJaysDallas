import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";

const capabilities = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Web Applications",
    description:
      "Full-stack web applications built with modern frameworks, optimized for performance and scale.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile Apps",
    description:
      "Native and cross-platform iOS & Android applications with polished UX and App Store deployment.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "MVP Development",
    description:
      "Rapid prototyping and MVP builds to validate ideas fast with real users and iterate with confidence.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Integrations & Automation",
    description:
      "APIs, payments, auth, analytics, and workflow automation to streamline your business operations.",
  },
];

const stats = [
  { value: "iOS & Android", label: "Platform Coverage" },
  { value: "Full-Stack", label: "Development" },
  { value: "Dallas, TX", label: "Based In" },
  { value: "End-to-End", label: "Product Support" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-slate-950">
        {/* Background effects */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px] glow-pulse" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[600px] translate-x-1/4 translate-y-1/4 rounded-full bg-amber-500/10 blur-[100px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-36 text-center sm:pt-44 lg:px-8 lg:pt-52">
          <AnimateIn>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Software Studio — {siteConfig.location}
            </span>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              We Build{" "}
              <span className="gradient-text">Premium Software</span>{" "}
              That Scales
            </h1>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
              {siteConfig.companyName} designs, builds, and ships modern web and
              mobile applications for businesses ready to grow.
            </p>
          </AnimateIn>

          <AnimateIn delay={300}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-600/30"
              >
                Start a Project
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/5 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={400 + i * 100}>
                <div className="px-6 py-8 text-center lg:py-10">
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{s.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────── */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                What We Do
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                End-to-End Product Development
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
                From concept to launch and beyond — we handle every phase of the
                software lifecycle.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <AnimateIn key={c.title} delay={i * 100}>
                <div className="hover-lift group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                    {c.icon}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {c.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Details ───────────────────────── */}
      <section className="border-t border-gray-100 bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Company Details
            </h2>
          </AnimateIn>
          <AnimateIn delay={100}>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Legal Entity", value: siteConfig.companyName },
                { label: "Location", value: siteConfig.location },
                {
                  label: "Email",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  label: "Phone",
                  value: siteConfig.phone,
                  href: `tel:${siteConfig.phone}`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-100 bg-white p-6"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-gray-900">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-indigo-600 transition-colors hover:text-indigo-500"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to build something great?
            </h2>
            <p className="mt-6 text-lg text-slate-400">
              Let&apos;s discuss your project and turn your vision into a
              production-ready product.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-500"
            >
              Get in Touch
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
