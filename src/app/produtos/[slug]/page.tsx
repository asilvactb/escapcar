import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DPF, PRODUCTS } from "@/data/site";
import { ProductCard, QuoteCTA } from "@/components/Blocks";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCTS.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.intro, openGraph: { images: [p.img] } } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = PRODUCTS.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const p = PRODUCTS[idx];
  const others = [1, 2, 3].map((k) => PRODUCTS[(idx + k) % PRODUCTS.length]);

  return (
    <>
      <section data-theme="light" className="pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="gut">
          <nav className="lbl mb-10 text-grey-2">
            <Link href="/produtos" className="ulink">Produtos</Link> <span className="mx-2">/</span> <span className="text-ink">{p.name}</span>
          </nav>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h1 className="display text-[clamp(44px,6.4vw,104px)]">
                <span className="ln"><span>{p.name}</span></span>
              </h1>
              <p className="rv mt-8 max-w-[52ch] text-[clamp(18px,1.4vw,21px)] leading-relaxed text-ink-2">{p.intro}</p>
              <ul className="mt-10">
                {p.points.map((t, i) => (
                  <li key={t} className="rv flex gap-4 border-t border-[var(--line)] py-4 text-[16px] leading-relaxed" style={{ ["--d" as string]: `${i * 60}ms` }}>
                    <span className="mt-[9px] h-2 w-2 shrink-0 bg-blue" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={`/contactos?assunto=${encodeURIComponent(p.name)}`} className="btn btn-blue">
                  Pedir orçamento →
                </Link>
                <Link href="/lojas" className="btn btn-line">
                  Ligar para a loja
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="rv relative aspect-[4/3] overflow-hidden rounded-[4px] bg-paper-2 lg:sticky lg:top-28">
                <Image src={p.img} alt={p.name} fill priority sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {p.slug === "filtros-particulas" && (
        <section data-theme="blue" className="pattern bg-blue py-20 text-white md:py-28">
          <div className="gut">
            <p className="lbl mb-6 opacity-70">Como trabalhamos</p>
            <h2 className="display rv mb-14 max-w-[16ch] text-[clamp(36px,5vw,84px)]">{DPF.title}.</h2>
            <ol className="grid gap-px overflow-hidden rounded-[4px] bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {DPF.steps.map((s, i) => (
                <li key={s.n} className="rv bg-blue p-7 md:p-8" style={{ ["--d" as string]: `${i * 80}ms` }}>
                  <span className="lbl opacity-60">{s.n}</span>
                  <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.025em]">{s.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed opacity-80">{s.d}</p>
                </li>
              ))}
            </ol>
            <div className="rv relative mt-14 aspect-[3/2] overflow-hidden rounded-[4px] md:aspect-[21/9]">
              <Image src="/img/fap-antes-depois.jpg" alt="Filtro de partículas entupido ao lado de um filtro limpo" fill sizes="100vw" className="object-cover" />
              <span className="lbl absolute left-4 top-4 rounded-[3px] bg-ink/70 px-2.5 py-1.5">Antes</span>
              <span className="lbl absolute right-4 top-4 rounded-[3px] bg-white px-2.5 py-1.5 text-blue">Depois</span>
            </div>
          </div>
        </section>
      )}

      {(p.range || p.brands) && (
        <section data-theme="dark" className="bg-ink py-20 text-white md:py-24">
          <div className="gut grid gap-14 md:grid-cols-2">
            {p.range && (
              <div>
                <p className="lbl mb-6 text-grey">Gama</p>
                <ul className="grid gap-px">
                  {p.range.map((r) => (
                    <li key={r} className="rv border-t border-[var(--wline)] py-4 text-[clamp(20px,1.8vw,26px)] font-medium tracking-[-0.02em]">{r}</li>
                  ))}
                </ul>
              </div>
            )}
            {p.brands && (
              <div>
                <p className="lbl mb-6 text-grey">Marcas</p>
                <ul className="flex flex-wrap gap-3">
                  {p.brands.map((b) => (
                    <li key={b} className="rv rounded-[4px] px-5 py-3 text-[18px] font-semibold shadow-[inset_0_0_0_1px_var(--wline)]">{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <section data-theme="light" className="py-20 md:py-28">
        <div className="gut">
          <p className="lbl mb-10 text-blue">Outros produtos</p>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-3">
            {others.map((o, i) => <ProductCard key={o.slug} p={o} i={i} />)}
          </div>
        </div>
      </section>

      <QuoteCTA subject={p.name} />
    </>
  );
}
