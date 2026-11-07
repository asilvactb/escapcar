import Image from "next/image";
import Link from "next/link";
import { COMPANY, DPF, PARTNERS, SERVICES, STORES, tel } from "@/data/site";
import { QuoteCTA, StoreCards } from "@/components/Blocks";
import Hero from "@/components/home/Hero";
import Statement from "@/components/home/Statement";
import Numbers from "@/components/home/Numbers";
import ProductIndex from "@/components/home/ProductIndex";

const cabreiros = STORES[0];

export default function Home() {
  return (
    <>
      <Hero />

      <Statement
        label="Escapcar"
        text="Desde 1977 a dar voz aos automóveis. Limpamos e reconstruímos filtros de partículas, reparamos escapes de ligeiros e pesados e temos o maior stock de escapes em Portugal, com oficinas em Braga e Guimarães."
        keys={["filtros", "partículas", "pesados", "escapes", "braga", "guimarães"]}
      />

      {/* 01 — FAP */}
      <section data-theme="dark" className="bg-ink py-24 text-white md:py-36">
        <div className="gut">
          <p className="lbl rv mb-10 text-grey">01 — Filtros de partículas</p>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="display rv text-[clamp(40px,6vw,104px)]">
                Limpar. Reconstruir. <span className="text-white/40">Só depois trocar.</span>
              </h2>
              <p className="rv mt-8 max-w-[52ch] text-[clamp(17px,1.35vw,20px)] leading-relaxed opacity-75">{DPF.intro}</p>
              <div className="rv mt-10 flex flex-wrap gap-3">
                <Link href="/produtos/filtros-particulas" className="btn btn-blue">Limpeza e reconstrução →</Link>
                <a href={tel(cabreiros.phone)} className="btn btn-line on-ink"><span className="tab">{cabreiros.phone}</span></a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rv relative aspect-[3/2] overflow-hidden rounded-[4px]">
                <Image src="/img/fap-antes-depois.jpg" alt="Núcleo de filtro de partículas entupido ao lado de um limpo" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                <span className="lbl absolute left-4 top-4 rounded-[3px] bg-ink/70 px-2.5 py-1.5 backdrop-blur">Antes</span>
                <span className="lbl absolute right-4 top-4 rounded-[3px] bg-blue px-2.5 py-1.5">Depois</span>
              </div>
            </div>
          </div>
          <ol className="mt-20 grid gap-px overflow-hidden rounded-[4px] bg-[var(--wline)] sm:grid-cols-2 lg:grid-cols-4">
            {DPF.steps.map((s, i) => (
              <li key={s.n} className="rv bg-ink p-7 md:p-8" style={{ ["--d" as string]: `${i * 80}ms` }}>
                <span className="lbl text-blue-hi">{s.n}</span>
                <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.025em]">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed opacity-65">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 02 — PESADOS */}
      <section data-theme="dark" className="relative min-h-[90svh] overflow-hidden text-white">
        <Image src="/img/pesados.jpg" alt="Mecânico a soldar o escape de um camião sobre a fossa" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,21,21,.88)_0%,rgba(21,21,21,.55)_45%,rgba(21,21,21,.05)_100%)]" />
        <div className="gut relative flex min-h-[90svh] flex-col justify-center py-24">
          <p className="lbl rv mb-8 opacity-70">02 — Pesados · {cabreiros.name}</p>
          <h2 className="display rv max-w-[12ch] text-[clamp(44px,7vw,124px)]">Escapes para camiões e pesados.</h2>
          <p className="rv mt-8 max-w-[46ch] text-[clamp(17px,1.35vw,20px)] leading-relaxed opacity-80">
            Na oficina de Cabreiros reparamos e fabricamos escapes para camiões e pesados, e fazemos escapes por medida para tratores, máquinas agrícolas e industriais.
          </p>
          <div className="rv mt-10 flex flex-wrap gap-3">
            <a href={tel(cabreiros.phone)} className="btn btn-blue">
              Ligar para Cabreiros <span className="tab">{cabreiros.phone.replace("+351 ", "")}</span>
            </a>
            <Link href="/produtos/fabrico-proprio" className="btn btn-line on-ink">Fabrico próprio →</Link>
          </div>
        </div>
      </section>

      {/* 03 — PRODUTOS */}
      <section data-theme="light" className="py-24 md:py-36">
        <div className="gut">
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            <p className="lbl rv text-grey-2 md:col-span-3">03 — Produtos</p>
            <h2 className="display rv text-[clamp(38px,5.4vw,92px)] md:col-span-9">Do motor até à saída de escape.</h2>
          </div>
          <ProductIndex />
        </div>
      </section>

      <Numbers
        label="04 — Escapcar em números"
        items={[
          { v: COMPANY.since, l: "Ano de fundação, em Braga" },
          { v: 2, l: "Oficinas: Braga e Guimarães" },
          { v: 24, suf: "h", l: "Entrega em todo o continente" },
          { v: 2, suf: " anos", l: "De garantia nas peças de escape" },
        ]}
      />

      {/* 05 — SERVIÇOS */}
      <section data-theme="light" className="bg-paper-2 py-24 md:py-36">
        <div className="gut grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="lbl rv mb-6 text-grey-2">05 — Oficina</p>
            <h2 className="display rv text-[clamp(38px,4.6vw,76px)]">Escapes primeiro. Serviços rápidos também.</h2>
            <Link href="/servicos" className="btn btn-blue rv mt-10">Todos os serviços →</Link>
          </div>
          <ul className="lg:col-span-7 lg:col-start-6">
            {SERVICES.map((s, i) => (
              <li key={s.n} className="rv grid grid-cols-[48px_1fr] gap-4 border-t border-[var(--line)] py-7" style={{ ["--d" as string]: `${i * 50}ms` }}>
                <span className="lbl pt-1.5 text-blue">{s.n}</span>
                <div>
                  <h3 className="text-[clamp(21px,1.9vw,28px)] font-semibold tracking-[-0.025em]">{s.title}</h3>
                  <p className="mt-2 max-w-[54ch] text-[16px] leading-relaxed text-ink-2">{s.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PARCEIROS */}
      <section data-theme="light" className="overflow-hidden border-y border-[var(--line)] py-10">
        <div className="flex w-max" style={{ animation: "marquee 40s linear infinite" }}>
          {[0, 1, 2, 3].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {PARTNERS.map((p) => (
                <span key={p.name + k} className="flex items-center px-10 text-[clamp(28px,3vw,44px)] font-semibold tracking-[-0.04em] text-ink/35" style={{ fontStretch: "85%" }}>
                  {p.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 06 — LOJAS */}
      <section data-theme="light" className="py-24 md:py-36">
        <div className="gut">
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            <p className="lbl rv text-grey-2 md:col-span-3">06 — Lojas</p>
            <h2 className="display rv text-[clamp(38px,5.4vw,92px)] md:col-span-9">Braga e Guimarães.</h2>
          </div>
          <StoreCards />
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}
