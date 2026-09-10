import Image from "next/image";
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
      <section className="jays-hero">
        <div className="jays-hero-copy">
          <p className="eyebrow">Dallas–Fort Worth · Residential real estate</p>
          <h1>Local roots.<br />A vision for<br /><span>what’s next.</span></h1>
          <p className="hero-description">We buy, renovate, and resell homes across DFW. Thoughtful investment in the neighborhoods we call home.</p>
          <div className="hero-actions">
            <Link href="/sell" className="jays-button">Sell Your Home</Link>
            <Link href="/our-companies" className="jays-text-link">Our Companies <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="hero-signoff">Buy. Renovate. Resell.</p>
        </div>
        <div className="jays-hero-photo">
          <Image src="/images/dfw-home.webp" alt="Brick home with a shaded front lawn" fill priority sizes="(max-width: 800px) 100vw, 50vw" className="object-cover" />
          <div className="photo-caption"><span>Our focus</span><strong>Homes. Neighborhoods. Possibility.</strong></div>
        </div>
      </section>
      <div className="jays-facts">
        {stats.map((s) => <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}
      </div>

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

