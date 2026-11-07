"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { COMPANY } from "@/data/site";

const SLIDES = [
  { src: "/img/hero-pesados.jpg", alt: "Camião numa oficina de escapes, com o silencioso desmontado", tag: "Pesados · Cabreiros" },
  { src: "/img/hero-fap.jpg", alt: "Filtro de partículas numa máquina de limpeza", tag: "Limpeza de filtros de partículas" },
  { src: "/img/hero-linha.jpg", alt: "Mecânico a apertar uma abraçadeira na linha de escape de um carro", tag: "Escapes e catalisadores" },
];

const WORDS = ["Filtros de partículas", "Escapes", "Catalisadores", "Pesados", "Ponteiras", "Ganchos de reboque", "Sondas lambda", "Fabrico próprio"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [clock, setClock] = useState("");
  const media = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), 7000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const f = () => setClock(new Intl.DateTimeFormat("pt-PT", { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZone: "Europe/Lisbon" }).format(new Date()));
    f();
    const id = setInterval(f, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const h = window.innerHeight;
        if (y > h * 1.2) return;
        if (media.current) media.current.style.transform = `translate3d(0,${y * 0.35}px,0)`;
        if (copy.current) {
          copy.current.style.transform = `translate3d(0,${-y * 0.15}px,0)`;
          copy.current.style.opacity = String(1 - Math.min(1, y / (h * 0.7)));
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-white" data-theme="dark">
      <div ref={media} className="absolute inset-0 will-change-transform">
        {SLIDES.map((s, i) => (
          <div key={s.src} className="absolute inset-0 transition-opacity duration-[1600ms]" style={{ opacity: i === idx ? 1 : 0 }}>
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
              style={{ animation: i === idx ? "kenburns 9s var(--ease) forwards" : undefined }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,21,21,.6)_0%,rgba(21,21,21,.08)_32%,rgba(21,21,21,.2)_58%,rgba(21,21,21,.9)_100%)]" />
      </div>

      <div className="gut absolute inset-x-0 top-[96px] flex justify-between">
        <p className="lbl opacity-70">Desde {COMPANY.since}</p>
        <p className="lbl hidden opacity-70 md:block">Braga — Guimarães</p>
        <p className="lbl tab opacity-70">BRG {clock}</p>
      </div>

      <div ref={copy} className="gut absolute inset-x-0 bottom-[170px] flex flex-col gap-8 md:bottom-[110px] md:flex-row md:items-end md:justify-between">
        <div>
          <p className="lbl mb-6 flex items-center gap-3 opacity-80">
            <span className="h-px w-8 bg-current" />
            <span key={idx} style={{ animation: "fadeUp .8s var(--expo) both" }}>{SLIDES[idx].tag}</span>
          </p>
          <h1 className="display text-[clamp(52px,9.4vw,168px)]">
            <span className="ln" style={{ ["--i" as string]: 0 }}><span>O teu carro fala.</span></span>
            <span className="ln" style={{ ["--i" as string]: 1 }}><span className="text-white/45">Nós só melhoramos</span></span>
            <span className="ln" style={{ ["--i" as string]: 2 }}><span className="text-white/45">o sotaque.</span></span>
          </h1>
        </div>
        <div className="flex items-center gap-6 md:flex-col md:items-end">
          <div className="hidden gap-1.5 md:flex">
            {SLIDES.map((s, i) => (
              <button key={s.src} onClick={() => setIdx(i)} aria-label={`Imagem ${i + 1}`} className="relative h-[2px] w-10 overflow-hidden bg-white/25">
                <span className="absolute inset-0 origin-left bg-white" style={{ transform: `scaleX(${i === idx ? 1 : 0})`, transition: i === idx ? "transform 7s linear" : "none" }} />
              </button>
            ))}
          </div>
          <Link href="/contactos" className="btn btn-blue">
            Pedir orçamento <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-14 overflow-hidden bg-blue py-4 md:bottom-0">
        <div className="flex w-max" style={{ animation: "marquee 50s linear infinite" }}>
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {WORDS.map((w) => (
                <span key={w + k} className="lbl flex items-center text-[12px] tracking-[0.18em]">
                  <span className="px-6">{w}</span>
                  <span className="opacity-50">✱</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
