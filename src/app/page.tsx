import Image from "next/image";
import Link from "next/link";
import ProcessSteps from "@/components/ProcessSteps";

export default function HomePage() {
 return <>
  <section className="editorial-hero">
   <div className="editorial-hero-copy"><span className="red-rule" aria-hidden="true"/><h1>Dallas roots.<br/>Lasting value.</h1><p>Buying, renovating, and reimagining<br className="desktop-break"/> homes across Dallas–Fort Worth.</p><Link className="editorial-button" href="/our-companies">Explore Our Companies <span aria-hidden="true">→</span></Link><div className="editorial-signoff">Homes. Stronger communities. Brighter futures.</div></div>
   <div className="editorial-hero-image"><Image src="/images/jays-exterior.webp" alt="Brick home framed by mature trees and landscaped gardens" fill priority sizes="(max-width: 800px) 100vw, 55vw"/></div>
  </section>
  <div className="editorial-band">Buy <span>/</span> Renovate <span>/</span> Resell</div>
  <section className="editorial-company" aria-labelledby="home-hilltop-title"><div className="editorial-interior"><Image src="/images/jays-interior.webp" alt="Light-filled living room with a neutral sofa and garden views" fill sizes="(max-width: 800px) 100vw, 58vw"/></div><div className="editorial-company-copy"><p className="editorial-eyebrow">Our Companies <span className="red-rule" aria-hidden="true"/></p><span className="editorial-h" aria-hidden="true">H.</span><h2 id="home-hilltop-title">Hilltop Home Co.</h2><p>Local home buying.<br/>A straightforward way forward.</p><a href="https://hilltophome.co" className="editorial-company-link">Visit Hilltop Home Co. <span aria-hidden="true">→</span></a></div></section>
  <section id="process" className="editorial-process"><p className="editorial-eyebrow">How It Works</p><h2>Acquisition to resale, done right.</h2><ProcessSteps/></section>
  <section className="editorial-cta"><h2>Let’s talk about your next chapter.</h2><p>A home to sell. A property to improve. A partnership to explore.</p><Link href="/contact" className="editorial-button">Contact The Jays Dallas <span aria-hidden="true">→</span></Link></section>
 </>;
}
