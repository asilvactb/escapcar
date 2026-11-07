import Link from "next/link";
import { LogoHorizontal } from "./Logo";
import { COMPANY, PRODUCTS, STORES, tel } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pattern bg-ink pb-24 text-white md:pb-0" data-theme="dark">
      <div className="gut grid gap-14 pb-14 pt-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <LogoHorizontal className="h-8 w-auto" />
          <p className="lbl mt-5 leading-relaxed text-grey">
            Desde {COMPANY.since}
            <br />
            {COMPANY.tagline}
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="lbl mb-5 text-grey">Produtos</p>
          <ul className="grid gap-2 text-[15px]">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/produtos/${p.slug}`} className="ulink opacity-80 hover:opacity-100">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-8 md:col-span-5 md:grid-cols-2">
          {STORES.map((s) => (
            <div key={s.slug}>
              <p className="lbl mb-5 text-grey">{s.name}</p>
              <address className="text-[15px] not-italic leading-relaxed opacity-80">
                {s.address.map((a) => (
                  <span key={a} className="block">
                    {a}
                  </span>
                ))}
              </address>
              <a href={tel(s.phone)} className="tab ulink mt-3 inline-block text-[15px]">
                {s.phone}
              </a>
            </div>
          ))}
          <div className="md:col-span-2">
            <a href={`mailto:${COMPANY.email}`} className="ulink text-[15px]">
              {COMPANY.email}
            </a>
            <span className="mx-3 opacity-40">·</span>
            <a href={tel(COMPANY.mobile)} className="tab ulink text-[15px]">
              {COMPANY.mobile}
            </a>
          </div>
        </div>
      </div>

      <div className="gut flex flex-col gap-4 border-t border-[var(--wline)] py-6 text-[12px] text-grey md:flex-row md:items-center md:justify-between">
        <p>© {year} Escapcar. Todos os direitos reservados.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="https://www.livroreclamacoes.pt/" target="_blank" rel="noreferrer" className="ulink">
            Livro de Reclamações
          </a>
          <Link href="/politica-de-privacidade" className="ulink">
            Política de Privacidade
          </Link>
          <span>
            Resolução alternativa de litígios: Centro de Arbitragem do Sector Automóvel
          </span>
        </div>
      </div>
    </footer>
  );
}
