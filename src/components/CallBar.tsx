import { STORES, tel } from "@/data/site";

/** Mobile only: both stores one tap away. Most customers call, they don't fill forms. */
export default function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-px bg-[var(--wline)] md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      {STORES.map((s) => (
        <a key={s.slug} href={tel(s.phone)} className="flex h-14 flex-col items-center justify-center bg-blue text-white active:bg-blue-2">
          <span className="lbl text-[9px] opacity-70">Ligar · {s.slug === "cabreiros" ? "Braga" : "Guimarães"}</span>
          <span className="tab text-[15px] font-medium">{s.phone.replace("+351 ", "")}</span>
        </a>
      ))}
    </div>
  );
}
