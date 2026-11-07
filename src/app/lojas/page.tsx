import type { Metadata } from "next";
import { COMPANY, tel } from "@/data/site";
import { PageHead, StoreCards } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Lojas",
  description: "Escapcar em Braga (Cabreiros) e Guimarães: moradas, horários e contactos.",
};

export default function Lojas() {
  return (
    <>
      <PageHead kicker="Lojas" title="Braga e Guimarães." intro="Duas oficinas, o mesmo horário. Ligue diretamente para a loja ou passe por lá." />
      <section data-theme="light" className="py-20 md:py-28">
        <div className="gut">
          <StoreCards />
          <div className="rv mt-12 flex flex-wrap gap-x-10 gap-y-4 text-[17px]">
            <a href={`mailto:${COMPANY.email}`} className="ulink">{COMPANY.email}</a>
            <a href={tel(COMPANY.mobile)} className="tab ulink">Telemóvel {COMPANY.mobile}</a>
          </div>
        </div>
      </section>
    </>
  );
}
