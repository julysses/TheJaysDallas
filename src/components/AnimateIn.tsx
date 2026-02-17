"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimateInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function AnimateIn({
    children,
    className = "",
    delay = 0,
}: AnimateInProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        node.classList.add("visible");
                    }, delay);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`animate-in ${className}`}>
            {children}
        </div>
    );
}
