import AnimateIn from "@/components/AnimateIn";

const steps = [
    {
        step: "01",
        title: "Acquisition",
        description:
            "We evaluate properties across DFW using disciplined, data-driven underwriting and make fast, fair cash offers.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
            </svg>
        ),
    },
    {
        step: "02",
        title: "Renovation",
        description:
            "Licensed local crews handle every renovation with quality craftsmanship, transparent budgets, and realistic timelines.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26" />
            </svg>
        ),
    },
    {
        step: "03",
        title: "Sale",
        description:
            "Every finished home is marketed to buyers and investors across DFW, backed by data-driven pricing and staging that sells.",
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
        ),
    },
];

export default function ProcessSteps({ compact = false }: { compact?: boolean }) {
    return (
        <div
            className={`grid gap-6 sm:grid-cols-3 ${compact ? "" : "mt-14"
                }`}
        >
            {steps.map((s, i) => (
                <AnimateIn key={s.step} delay={i * 100}>
                    <div className={`hover-lift relative rounded-2xl border border-charcoal/10 bg-paper ${compact ? "p-6" : "p-8"}`}>
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            {s.icon}
                        </div>
                        <span className="mt-4 block font-display text-3xl font-semibold text-primary/20">
                            {s.step}
                        </span>
                        <h3 className="mt-2 text-lg font-semibold text-charcoal">{s.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-stone">{s.description}</p>
                    </div>
                </AnimateIn>
            ))}
        </div>
    );
}
