import Link from "next/link";
import Image from "next/image";
import { COMPANY, STORES, tel, type Product } from "@/data/site";

/** Blue page header, used on every inner page. */
export function PageHead({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <section data-theme="blue" className="pattern relative bg-blue pb-16 pt-36 text-white md:pb-24 md:pt-44">
      <div className="gut">
        <p className="lbl mb-6 opacity-70">{kicker}</p>
        <h1 className="display max-w-[16ch] text-[clamp(44px,8vw,120px)]">
          <span className="ln">
            <span>{title}</span>
          </span>
        </h1>
        {intro && <p className="rv mt-8 max-w-[56ch] text-[clamp(17px,1.4vw,21px)] leading-relaxed opacity-85">{intro}</p>}
      </div>
    </section>
  );
}

export function ProductCard({ p, i = 0 }: { p: Product; i?: number }) {
  return (
    <Link href={`/produtos/${p.slug}`} className="zoom rv group block" style={{ ["--d" as string]: `${(i % 4) * 70}ms` }}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] bg-paper-2">
        <Image src={p.img} alt={p.name} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[20px] font-semibold tracking-[-0.02em]">{p.name}</h3>
          <p className="mt-1 text-[15px] leading-snug text-grey-2">{p.short}</p>
        </div>
        <span className="mt-1 text-blue transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </div>
    </Link>
  );
}

export function StoreCards({ dark = false }: { dark?: boolean }) {
  return (
    <div className="grid gap-px overflow-hidden rounded-[4px] md:grid-cols-2" style={{ background: dark ? "var(--wline)" : "var(--line)" }}>
      {STORES.map((s, i) => (
        <article key={s.slug} className={`rv flex flex-col gap-8 p-7 md:p-10 ${dark ? "bg-ink" : "bg-paper"}`} style={{ ["--d" as string]: `${i * 90}ms` }}>
          <div>
            <p className={`lbl ${dark ? "text-grey" : "text-blue"}`}>{s.label}{s.hq ? " · Sede" : ""}</p>
            <h3 className="display mt-4 text-[clamp(32px,3.6vw,52px)]">{s.name}</h3>
          </div>
          <address className={`text-[17px] not-italic leading-relaxed ${dark ? "opacity-80" : "text-ink-2"}`}>
            {s.address.map((a) => (
              <span key={a} className="block">
                {a}
              </span>
            ))}
          </address>
          <dl className={`grid gap-1 text-[15px] ${dark ? "opacity-80" : "text-ink-2"}`}>
            {COMPANY.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b py-2" style={{ borderColor: dark ? "var(--wline)" : "var(--line)" }}>
                <dt>{h.days}</dt>
                <dd className="tab text-right">{h.time}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-auto flex flex-wrap gap-3">
            <a href={tel(s.phone)} className={`btn ${dark ? "btn-white" : "btn-blue"}`}>
              <span aria-hidden>☎</span> <span className="tab">{s.phone}</span>
            </a>
            <a href={s.maps} target="_blank" rel="noreferrer" className={`btn btn-line ${dark ? "on-ink" : ""}`}>
              Direções ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function QuoteCTA({ subject }: { subject?: string }) {
  const href = subject ? `/contactos?assunto=${encodeURIComponent(subject)}` : "/contactos";
  return (
    <section data-theme="blue" className="pattern bg-blue py-20 text-white md:py-28">
      <div className="gut grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="lbl mb-5 opacity-70">Orçamento sem compromisso</p>
          <h2 className="display rv text-[clamp(38px,5.4vw,84px)]">Diga-nos o carro. Nós dizemos o preço.</h2>
        </div>
        <div className="rv flex flex-col gap-3 md:col-span-5 md:items-end" style={{ ["--d" as string]: "120ms" }}>
          {STORES.map((s) => (
            <a key={s.slug} href={tel(s.phone)} className="btn btn-white w-full justify-between md:w-[340px]">
              <span>{s.name}</span>
              <span className="tab">{s.phone.replace("+351 ", "")}</span>
            </a>
          ))}
          <Link href={href} className="btn btn-line on-ink w-full justify-between md:w-[340px]">
            <span>Pedir por email</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
