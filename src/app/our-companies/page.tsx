import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Our Companies",
  description: "Meet Hilltop Home Co., our local home-buying brand serving homeowners across Dallas–Fort Worth.",
  alternates: { canonical: "/our-companies" },
};
export default function OurCompaniesPage() {
  return <div className="companies-page">
    <section className="companies-intro"><p className="eyebrow">The Jays Dallas</p><h1>Our Companies<span>.</span></h1><p>Local knowledge. A shared commitment to DFW. Meet the business helping homeowners take their next step.</p></section>
    <section className="company-feature" aria-labelledby="hilltop-name">
      <div className="company-brand"><span className="hilltop-monogram" aria-hidden="true">H.</span><span>Hilltop Home Co.</span><p>Local. Honest. Trusted.</p></div>
      <div className="company-copy"><p className="eyebrow">Residential home buying · Dallas–Fort Worth</p><h2 id="hilltop-name">Hilltop Home Co.</h2><p>Our Hilltop Homes business works directly with DFW homeowners who want a straightforward way to sell. Cash offers, homes purchased as-is, and a closing timeline that works for you.</p><ul><li>Sell without making repairs or staging your home</li><li>Speak directly with a local team</li><li>Explore a cash offer without obligation</li></ul><a href="https://hilltophome.co" className="jays-button">Visit Hilltop Home Co. <span aria-hidden="true">↗</span></a><p className="company-domain">hilltophome.co</p></div>
    </section>
    <div className="companies-contact"><p>Want to talk about a property or partnership?</p><Link href="/contact" className="jays-text-link">Contact The Jays Dallas</Link></div>
  </div>;
}
