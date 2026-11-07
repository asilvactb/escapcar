"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PRODUCTS } from "@/data/site";

/** Numbered product index; the photo follows the hovered row on desktop. */
export default function ProductIndex() {
  const [hover, setHover] = useState(0);
  return (
    <div className="grid gap-12 lg:grid-cols-12">
      <ul className="lg:col-span-7">
        {PRODUCTS.map((p, i) => (
          <li key={p.slug} className="rv border-t border-[var(--line)] last:border-b" style={{ ["--d" as string]: `${i * 40}ms` }}>
            <Link
              href={`/produtos/${p.slug}`}
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              className="group grid grid-cols-[44px_1fr_auto] items-center gap-4 py-5 md:py-6"
            >
              <span className="lbl tab text-grey-2">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-[clamp(26px,3.2vw,48px)] font-semibold leading-none tracking-[-0.04em] transition-colors duration-300 group-hover:text-blue">
                  {p.name}
                </span>
                <span className="mt-2 block text-[15px] text-grey-2">{p.short}</span>
              </span>
              <span className="text-blue transition-transform duration-500 group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[4px] bg-paper-2">
          {PRODUCTS.map((p, i) => (
            <Image
              key={p.slug}
              src={p.img}
              alt=""
              fill
              sizes="40vw"
              className="object-cover transition-[opacity,transform] duration-700"
              style={{ opacity: i === hover ? 1 : 0, transform: i === hover ? "scale(1)" : "scale(1.06)", transitionTimingFunction: "var(--expo)" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
