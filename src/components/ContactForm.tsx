"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { COMPANY, STORES } from "@/data/site";

/** Same fields as the current escapcar.pt form, plus phone and store. No backend yet: composes an email. */
export default function ContactForm() {
  const sp = useSearchParams();
  const [f, setF] = useState({ name: "", email: "", phone: "", store: STORES[0].name, subject: sp.get("assunto") ?? "", message: "", ok: false });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [f.message, "", `Nome: ${f.name}`, `Email: ${f.email}`, f.phone ? `Telefone: ${f.phone}` : null, `Loja: ${f.store}`]
      .filter((x): x is string => x !== null)
      .join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(f.subject || "Pedido de contacto")}&body=${encodeURIComponent(body)}`;
  };

  const field = "w-full border-b border-[var(--line)] bg-transparent py-4 text-[18px] outline-none transition-colors placeholder:text-grey-2/70 focus:border-blue";
  return (
    <form onSubmit={submit} className="rv">
      <p className="mb-2 text-[clamp(24px,2.2vw,32px)] font-semibold tracking-[-0.03em]">Fale connosco</p>
      <p className="mb-10 text-[16px] text-ink-2">Envie-nos o seu pedido. Respondemos com a maior brevidade.</p>
      <div className="grid gap-x-10 gap-y-2 md:grid-cols-2">
        <input required placeholder="Nome *" value={f.name} onChange={set("name")} className={field} autoComplete="name" />
        <input required type="email" placeholder="Email *" value={f.email} onChange={set("email")} className={field} autoComplete="email" />
        <input type="tel" placeholder="Telefone" value={f.phone} onChange={set("phone")} className={field} autoComplete="tel" />
        <select value={f.store} onChange={set("store")} className={`${field} appearance-none`} aria-label="Loja">
          {STORES.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
        </select>
        <input placeholder="Assunto (ex.: marca, modelo e ano do carro)" value={f.subject} onChange={set("subject")} className={`${field} md:col-span-2`} />
      </div>
      <textarea required rows={5} placeholder="A sua mensagem *" value={f.message} onChange={set("message")} className={`${field} mt-2 resize-none`} />
      <label className="mt-6 flex items-start gap-3 text-[14px] leading-relaxed text-ink-2">
        <input type="checkbox" required checked={f.ok} onChange={(e) => setF({ ...f, ok: e.target.checked })} className="mt-1 accent-[var(--blue)]" />
        <span>
          Li e aceito a{" "}
          <Link href="/politica-de-privacidade" className="underline">
            Política de Privacidade
          </Link>
          .
        </span>
      </label>
      <div className="mt-8 flex items-center justify-between gap-6">
        <p className="lbl text-grey-2">* Obrigatório</p>
        <button type="submit" className="btn btn-blue">
          Enviar mensagem →
        </button>
      </div>
    </form>
  );
}
