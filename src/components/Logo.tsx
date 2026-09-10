import Link from "next/link";

export default function Logo({ size = "md", linkHome = true }: { size?: "sm" | "md" | "lg"; linkHome?: boolean }) {
  const mark = <svg className={`triple-j triple-j--${size}`} viewBox="0 0 92 68" role="img" aria-label="JJJ — The Jays Dallas"><g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square"><path d="M5 8h24M23 8v31c0 20-19 20-19 8"/><path d="M32 14h24M50 14v31c0 20-19 20-19 8"/><path d="M59 8h24M77 8v31c0 20-19 20-19 8"/></g></svg>;
  return linkHome ? <Link href="/" className="triple-j-link" aria-label="The Jays Dallas home">{mark}</Link> : mark;
}
