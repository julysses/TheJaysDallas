import Link from "next/link";
import Logo from "@/components/Logo";
const links = [{href:"/about",label:"About"},{href:"/portfolio",label:"Portfolio"},{href:"/our-companies",label:"Our Companies"},{href:"/contact",label:"Contact"}];
export default function Header() {
 return <header className="editorial-header"><div className="editorial-header-inner"><div className="jays-brand"><Logo size="sm"/><Link href="/" className="jays-wordmark">The Jays Dallas</Link></div><nav className="editorial-desktop-nav" aria-label="Main navigation">{links.map(l=><Link href={l.href} key={l.href}>{l.label}</Link>)}<Link href="/contact" className="editorial-button">Let’s Talk</Link></nav><details className="editorial-mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation">{links.map(l=><Link href={l.href} key={l.href}>{l.label}</Link>)}<Link href="/sell">Sell Your Home</Link><Link href="/contact">Let’s Talk</Link></nav></details></div></header>;
}
