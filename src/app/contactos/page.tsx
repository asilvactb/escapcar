import type { Metadata } from "next";
import { Suspense } from "react";
import { COMPANY, STORES, tel } from "@/data/site";
import { PageHead } from "@/components/Blocks";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Peça um orçamento ou fale connosco. Escapcar Braga (Cabreiros) e Guimarães.",
};

export default function Contactos() {
  return (
    <>
      <PageHead kicker="Contactos" title="Fale connosco." intro="A forma mais rápida é ligar para a loja. Se preferir, deixe-nos uma mensagem." />
      <section data-theme="light" className="py-20 md:py-28">
        <div className="gut grid gap-16 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="grid gap-10">
              {STORES.map((s) => (
                <div key={s.slug} className="rv">
                  <p className="lbl mb-3 text-blue">{s.name}</p>
                  <a href={tel(s.phone)} className="tab block text-[clamp(26px,2.4vw,34px)] font-semibold tracking-[-0.02em] hover:text-blue">
                    {s.phone}
                  </a>
                  <address className="mt-2 text-[15px] not-italic leading-relaxed text-ink-2">
                    {s.address.map((a) => <span key={a} className="block">{a}</span>)}
                  </address>
                </div>
              ))}
              <div className="rv border-t border-[var(--line)] pt-8 text-[16px] leading-loose">
                <a href={`mailto:${COMPANY.email}`} className="ulink block">{COMPANY.email}</a>
                <a href={tel(COMPANY.mobile)} className="tab ulink block">{COMPANY.mobile}</a>
                <dl className="mt-6 grid gap-1 text-[14px] text-ink-2">
                  {COMPANY.hours.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4">
                      <dt>{h.days}</dt>
                      <dd className="tab">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </aside>
          <div className="lg:col-span-7 lg:col-start-6">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
