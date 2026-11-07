import type { Metadata } from "next";
import Image from "next/image";
import { SERVICES } from "@/data/site";
import { PageHead, QuoteCTA, StoreCards } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Escapes, catalisadores, filtros de partículas, pneus, serviços rápidos, apoio à inspeção e fabrico próprio, em Braga e Guimarães.",
};

export default function Servicos() {
  return (
    <>
      <PageHead
        kicker="Serviços"
        title="Especialistas em escapes. Com serviços rápidos."
        intro="Oficinas em Braga (Cabreiros) e Guimarães, com escapes, pneus, serviços rápidos e apoio à inspeção."
      />
      <section data-theme="light" className="py-20 md:py-28">
        <div className="gut grid gap-14 lg:grid-cols-12">
          <ul className="lg:col-span-7">
            {SERVICES.map((s, i) => (
              <li key={s.n} className="rv grid grid-cols-[56px_1fr] gap-4 border-t border-[var(--line)] py-8" style={{ ["--d" as string]: `${i * 60}ms` }}>
                <span className="lbl pt-2 text-blue">{s.n}</span>
                <div>
                  <h2 className="text-[clamp(24px,2.4vw,34px)] font-semibold tracking-[-0.025em]">{s.title}</h2>
                  <p className="mt-3 max-w-[56ch] text-[17px] leading-relaxed text-ink-2">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="rv relative aspect-[3/4] overflow-hidden rounded-[4px] lg:sticky lg:top-28">
              <Image src="/img/oficina.jpg" alt="Oficina Escapcar" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>
      <section data-theme="light" className="bg-paper-2 py-20 md:py-28">
        <div className="gut">
          <h2 className="display rv mb-12 text-[clamp(34px,4.4vw,64px)]">Escolha a loja.</h2>
          <StoreCards />
        </div>
      </section>
      <QuoteCTA />
    </>
  );
}
