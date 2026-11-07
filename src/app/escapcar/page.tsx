import type { Metadata } from "next";
import Image from "next/image";
import { COMPANY, HISTORY, PARTNERS } from "@/data/site";
import { PageHead, QuoteCTA } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "A Escapcar",
  description: "Desde 1977, em Braga. A história da Escapcar e os parceiros com quem trabalhamos.",
};

export default function Sobre() {
  return (
    <>
      <PageHead
        kicker="A Escapcar"
        title={`Desde ${COMPANY.since}, a dar voz aos automóveis.`}
        intro="Uma empresa de Braga que não quer envelhecer com o seu fundador: está sempre atenta à inovação, com uma equipa profissional e experiente."
      />

      <section data-theme="light" className="py-20 md:py-28">
        <div className="gut grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="lbl mb-6 text-blue">A nossa história</p>
            <div className="rv relative aspect-[3/4] overflow-hidden rounded-[4px] lg:sticky lg:top-28">
              <Image src="/img/fabrico.jpg" alt="Fabrico de escapes" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
            </div>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {HISTORY.map((h, i) => (
              <li key={h.year} className="rv grid grid-cols-[110px_1fr] gap-6 border-t border-[var(--line)] py-8 md:grid-cols-[160px_1fr]" style={{ ["--d" as string]: `${i * 50}ms` }}>
                <span className="display tab text-[clamp(34px,3.6vw,56px)] text-blue">{h.year}</span>
                <p className="pt-2 text-[17px] leading-relaxed text-ink-2">{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section data-theme="dark" className="bg-ink py-20 text-white md:py-28">
        <div className="gut">
          <p className="lbl mb-6 text-grey">Parcerias</p>
          <h2 className="display rv mb-14 max-w-[18ch] text-[clamp(34px,4.4vw,64px)]">As melhores marcas de sistemas de escape.</h2>
          <ul className="grid gap-px overflow-hidden rounded-[4px] bg-[var(--wline)] sm:grid-cols-2 lg:grid-cols-5">
            {PARTNERS.map((p, i) => (
              <li key={p.name} className="rv bg-ink p-7" style={{ ["--d" as string]: `${i * 60}ms` }}>
                <p className="text-[24px] font-semibold tracking-[-0.03em]">{p.name}</p>
                <p className="mt-3 text-[15px] leading-relaxed opacity-65">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
