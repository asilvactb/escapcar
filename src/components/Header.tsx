"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoHorizontal } from "./Logo";
import { COMPANY, STORES, tel } from "@/data/site";

const LINKS = [
  { href: "/servicos", label: "Serviços" },
  { href: "/produtos", label: "Produtos" },
  { href: "/lojas", label: "Lojas" },
  { href: "/escapcar", label: "Escapcar" },
  { href: "/contactos", label: "Contactos" },
];

export default function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [theme, setTheme] = useState<"blue" | "dark" | "light">("blue");
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > last && !open);
      setSolid(y > 40);
      last = y;
      let t: "blue" | "dark" | "light" = "light";
      document.querySelectorAll<HTMLElement>("main [data-theme]").forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= 40 && r.bottom > 40) t = (s.dataset.theme as typeof t) ?? t;
      });
      setTheme(t);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, pathname]);

  const onColor = open || theme !== "light";
  const bar = !solid || open ? "" : theme === "blue" ? "bg-blue/85 backdrop-blur-md" : theme === "dark" ? "bg-ink/85 backdrop-blur-md" : "bg-paper/85 backdrop-blur-md shadow-[0_1px_0_var(--line)]";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-700 ${hidden ? "-translate-y-full" : ""}`}
        style={{ transitionTimingFunction: "var(--expo)" }}
      >
        <div className={`gut flex h-[72px] items-center justify-between transition-colors duration-500 ${bar} ${onColor ? "text-white" : "text-ink"}`}>
          <Link href="/" aria-label="Escapcar — início" className="block">
            <LogoHorizontal className={`h-[26px] w-auto transition-colors duration-500 ${onColor ? "text-white" : "text-blue"}`} />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`lbl ulink ${pathname.startsWith(l.href) ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
              >
                {l.label}
              </Link>
            ))}
            <a href={COMPANY.clientArea} target="_blank" rel="noreferrer" className="lbl ulink opacity-70 hover:opacity-100">
              Área de cliente ↗
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href={tel(STORES[0].phone)} className={`btn hidden md:inline-flex ${onColor ? "btn-white" : "btn-blue"}`}>
              <span aria-hidden>☎</span> {STORES[0].phone.replace("+351 ", "")}
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
              aria-label="Menu"
              aria-expanded={open}
            >
              <span className={`absolute h-[1.5px] w-6 bg-current transition-transform duration-500 ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
              <span className={`absolute h-[1.5px] w-6 bg-current transition-transform duration-500 ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className="pattern fixed inset-0 z-40 bg-blue text-white transition-[clip-path] duration-700 lg:hidden"
        style={{ clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)", transitionTimingFunction: "var(--expo)" }}
      >
        <div className="gut flex h-full flex-col justify-between pb-28 pt-28">
          <nav className="flex flex-col gap-2">
            {LINKS.map((l, i) => (
              <Link key={l.href} href={l.href} className="display text-[13vw] leading-[1]">
                <span className="lbl mr-3 align-top text-[10px] opacity-60">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="grid gap-2">
            {STORES.map((s) => (
              <a key={s.slug} href={tel(s.phone)} className="flex items-center justify-between border-t border-[var(--wline)] pt-3">
                <span className="lbl opacity-70">{s.name}</span>
                <span className="tab text-lg">{s.phone}</span>
              </a>
            ))}
            <a href={COMPANY.clientArea} target="_blank" rel="noreferrer" className="lbl mt-4 opacity-70">
              Área de cliente ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
