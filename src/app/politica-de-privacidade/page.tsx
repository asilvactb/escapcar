import type { Metadata } from "next";
import { COMPANY, STORES } from "@/data/site";
import { PageHead } from "@/components/Blocks";

export const metadata: Metadata = { title: "Política de Privacidade", robots: { index: false } };

// Based on the policy published on the current escapcar.pt. TODO(confirm): legal review before launch.
export default function Privacidade() {
  const hq = STORES[0];
  return (
    <>
      <PageHead kicker="Legal" title="Política de Privacidade." />
      <section data-theme="light" className="py-20 md:py-28">
        <div className="gut max-w-[760px] space-y-10 text-[17px] leading-relaxed text-ink-2 [&_h2]:mb-3 [&_h2]:text-[22px] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-ink">
          <div>
            <h2>Responsável pelo tratamento</h2>
            <p>
              Escapcar – Escapes e Acessórios para Automóveis Lda., {hq.address.join(", ")}. Contacto: {COMPANY.email} · {hq.phone}.
            </p>
          </div>
          <div>
            <h2>Que dados recolhemos e para quê</h2>
            <p>
              Os dados que nos envia através deste site (nome, email, telefone e mensagem) são usados para responder ao seu pedido de informação ou orçamento, gerir encomendas e a comunicação consigo, tratar reclamações e, quando autorizado, enviar informação sobre produtos e serviços.
            </p>
          </div>
          <div>
            <h2>Segurança</h2>
            <p>
              Tratamos os seus dados com segurança e de acordo com as boas práticas. Ainda assim, a transmissão de dados numa rede aberta como a internet não é totalmente imune ao acesso por terceiros não autorizados.
            </p>
          </div>
          <div>
            <h2>Os seus direitos</h2>
            <p>
              Pode, a qualquer momento, pedir o acesso, a retificação, o apagamento ou opor-se ao tratamento dos seus dados, por email para {COMPANY.email} ou por carta para a morada acima.
            </p>
          </div>
          <div>
            <h2>Cookies</h2>
            <p>Este site usa apenas os cookies estritamente necessários ao seu funcionamento.</p>
          </div>
          <div>
            <h2>Reclamações</h2>
            <p>
              Pode apresentar reclamação no{" "}
              <a href="https://www.livroreclamacoes.pt/" className="underline" target="_blank" rel="noreferrer">
                Livro de Reclamações Eletrónico
              </a>
              . Entidade de resolução alternativa de litígios: Centro de Arbitragem do Sector Automóvel (
              <a href="https://www.arbitragemauto.pt/" className="underline" target="_blank" rel="noreferrer">
                arbitragemauto.pt
              </a>
              ).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
