"use client";

import { useEffect, useState } from "react";
import { LogoStacked } from "./Logo";

/** Once per session: brand blue curtain with the white logo and a 1977→today counter, then it lifts. */
export default function Preloader() {
  const now = new Date().getFullYear();
  const [n, setN] = useState(1977);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("escapcar-pre") === "1";
      sessionStorage.setItem("escapcar-pre", "1");
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGone(true);
      return;
    }
    const t0 = performance.now();
    const dur = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      setN(Math.round(1977 + (1 - Math.pow(1 - k, 3)) * (now - 1977)));
      if (k < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setDone(true), 200);
        setTimeout(() => setGone(true), 1400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [now]);

  if (gone) return null;
  return (
    <div
      className="pattern fixed inset-0 z-[90] flex flex-col justify-between bg-blue p-[var(--gut)] text-white transition-[clip-path] duration-[1.1s]"
      style={{ clipPath: done ? "inset(0 0 100% 0)" : "inset(0 0 0 0)", transitionTimingFunction: "var(--expo)" }}
      aria-hidden
    >
      <p className="lbl opacity-70">Escapcar · Braga · Guimarães</p>
      <div className="flex justify-center">
        <LogoStacked className="h-[clamp(90px,14vw,170px)] w-auto" />
      </div>
      <div className="flex items-end justify-between">
        <p className="lbl opacity-70">A dar voz aos automóveis</p>
        <p className="tab text-[clamp(56px,10vw,160px)] font-semibold leading-[0.8] tracking-[-0.05em]">{n}</p>
      </div>
    </div>
  );
}
