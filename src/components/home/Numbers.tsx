"use client";

import { useEffect, useRef, useState } from "react";

function Count({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const from = to > 1000 ? to - 40 : 0;
  const [v, setV] = useState(from);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t: number) => {
        const k = Math.min(1, (t - t0) / 1600);
        setV(Math.round(from + (to - from) * (1 - Math.pow(1 - k, 4))));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to, from]);
  return <span ref={ref} className="tab">{v}</span>;
}

export default function Numbers({ label, items }: { label: string; items: { v: number; suf?: string; l: string }[] }) {
  return (
    <section className="gut bg-paper py-[16vh]" data-theme="light">
      <p className="lbl rv mb-10 text-grey-2">{label}</p>
      <div className="grid grid-cols-2 border-y border-[var(--line)] md:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.l}
            className={`rv py-10 pr-6 md:py-14 ${i > 0 ? "md:border-l md:pl-8" : ""} ${i % 2 === 1 ? "border-l pl-6 md:pl-8" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} border-[var(--line)]`}
            style={{ ["--d" as string]: `${i * 90}ms` }}
          >
            <p className="text-[clamp(56px,7.4vw,128px)] font-semibold leading-none tracking-[-0.06em]">
              <Count to={it.v} />
              {it.suf && <span className={`text-blue ${it.suf.length > 2 ? "text-[0.42em] tracking-[-0.03em]" : ""}`}>{it.suf}</span>}
            </p>
            <p className="lbl mt-5 text-grey-2">{it.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
