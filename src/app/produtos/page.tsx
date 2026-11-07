import type { Metadata } from "next";
import { PRODUCTS, CATALOGUES } from "@/data/site";
import { PageHead, ProductCard, QuoteCTA } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Escapes, catalisadores, filtros de partículas, ponteiras, ganchos de reboque, sensores, SCR e fabrico próprio.",
};

export default function Produtos() {
  return (
    <>
      <PageHead
        kicker="Produtos"
        title="Uma linha completa do sistema de escape."
        intro="Do motor até à saída de escape, o maior stock de escapes em Portugal, para todas as marcas e modelos. Entrega em 24 horas em todo o continente."
      />
      <section data-theme="light" className="py-20 md:py-28">
        <div className="gut grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.slug} p={p} i={i} />
          ))}
        </div>
      </section>

      <section data-theme="light" className="border-t border-[var(--line)] bg-paper-2 py-20 md:py-28">
        <div className="gut grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="lbl mb-6 text-blue">Catálogos online</p>
            <h2 className="display rv text-[clamp(32px,3.6vw,54px)]">Encontre a peça certa para o seu carro.</h2>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {CATALOGUES.map((c) => (
              <li key={c.name} className="rv border-t border-[var(--line)]">
                <a href={c.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-6 py-6">
                  <span>
                    <span className="block text-[22px] font-semibold tracking-[-0.02em]">{c.name}</span>
                    <span className="mt-1 block text-[15px] text-grey-2">{c.what}</span>
                  </span>
                  <span className="text-blue transition-transform duration-500 group-hover:translate-x-1">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section data-theme="light" className="py-20 md:py-28">
        <div className="gut grid gap-10 md:grid-cols-3">
          {[
            ["Entrega em 24h", "Encomende e receba em 24 horas, em todo o continente, através dos nossos parceiros CTT."],
            ["Pague na entrega", "Compre agora e pague depois: paga quando recebe, com a fatura."],
            ["2 anos de garantia", "Em escapes, catalisadores, filtros de partículas e flexíveis."],
          ].map(([a, b], i) => (
            <div key={a} className="rv border-t-2 border-blue pt-6" style={{ ["--d" as string]: `${i * 80}ms` }}>
              <h3 className="text-[24px] font-semibold tracking-[-0.02em]">{a}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-2">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
