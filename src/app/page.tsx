import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import AnimateIn from "@/components/AnimateIn";
import ProcessSteps from "@/components/ProcessSteps";

const stats = [
  { value: "Cash Offers", label: "Fast & Fair" },
  { value: "DFW-Wide", label: "Coverage" },
  { value: "As-Is", label: "Any Condition" },
  { value: "Dallas, TX", label: "Locally Based" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden bg-ink">
        {/* Background effects */}
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px] glow-pulse" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[600px] translate-x-1/4 translate-y-1/4 rounded-full bg-primary-light/10 blur-[100px]" />

        {/* Dallas skyline silhouette, pure SVG — swap for real photography later:
            <Image src="/hero-home.jpg" alt="" fill className="object-cover opacity-30" />
            layered under these CSS effects, no next.config change needed for local /public images. */}
        <svg
          className="pointer-events-none absolute bottom-0 left-0 h-40 w-full text-charcoal/[0.05]"
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect x="40" y="70" width="60" height="90" />
          <rect x="110" y="40" width="45" height="120" />
          <rect x="165" y="90" width="50" height="70" />
          <rect x="230" y="20" width="55" height="140" />
          <circle cx="257" cy="10" r="16" />
          <rect x="300" y="60" width="40" height="100" />
          <rect x="355" y="100" width="70" height="60" />
          <rect x="440" y="50" width="50" height="110" />
          <rect x="510" y="80" width="45" height="80" />
          <rect x="570" y="30" width="60" height="130" />
          <rect x="650" y="65" width="50" height="95" />
          <rect x="720" y="95" width="65" height="65" />
          <rect x="800" y="45" width="45" height="115" />
          <rect x="860" y="75" width="55" height="85" />
          <rect x="930" y="20" width="50" height="140" />
          <rect x="1000" y="90" width="60" height="70" />
          <rect x="1080" y="55" width="45" height="105" />
        </svg>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pb-24 pt-36 text-center sm:pt-44 lg:px-8 lg:pt-52">
          <AnimateIn>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Real Estate Investment — {siteConfig.location}
            </span>
          </AnimateIn>

          <AnimateIn delay={100}>
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
              We <span className="brand-text">Buy, Renovate</span>{" "}
              &amp; Sell Dallas Homes
            </h1>
          </AnimateIn>

          <AnimateIn delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone sm:text-xl">
              {siteConfig.companyName} acquires, renovates, and resells residential
              properties across DFW — plus wholesale deals and capital-partner
              opportunities for investors.
            </p>
          </AnimateIn>

          <AnimateIn delay={300}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/sell"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-paper shadow-lg shadow-primary/25 transition-all hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30"
              >
                Sell Your Home
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
                href="#process"
                className="inline-flex items-center rounded-xl border border-charcoal/15 bg-charcoal/5 px-8 py-4 text-sm font-semibold text-charcoal backdrop-blur-sm transition-all hover:bg-charcoal/10"
              >
                See Our Process
              </Link>
            </div>
          </AnimateIn>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-charcoal/10 bg-charcoal/[0.02]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px lg:grid-cols-4">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={400 + i * 100}>
                <div className="px-6 py-8 text-center lg:py-10">
                  <p className="text-2xl font-bold text-charcoal sm:text-3xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-sm text-stone">{s.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────── */}
      <section id="process" className="scroll-mt-24 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                How It Works
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
                Acquisition to Resale, Done Right
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-stone">
                From the first offer to the final sale, we handle every step of
                the process with discipline and care.
              </p>
            </div>
          </AnimateIn>

          <ProcessSteps />
        </div>
      </section>

      {/* ── Company Details ───────────────────────── */}
      <section className="border-t border-charcoal/10 bg-paper-alt py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-charcoal">
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
                  className="rounded-xl border border-charcoal/10 bg-paper p-6"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wider text-stone">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-charcoal">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-primary transition-colors hover:text-primary-light"
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
      <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <AnimateIn>
            <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
              Ready to sell your home fast?
            </h2>
            <p className="mt-6 text-lg text-stone">
              Get a no-obligation cash offer — no showings, no repairs, no
              waiting.
            </p>
            <Link
              href="/sell"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-primary px-10 py-4 text-sm font-semibold text-paper shadow-lg shadow-primary/25 transition-all hover:bg-primary-light"
            >
              Get a Cash Offer
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
