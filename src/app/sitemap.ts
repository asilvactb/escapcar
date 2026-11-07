import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://escapcar.pt";
  return ["", "/servicos", "/produtos", "/lojas", "/escapcar", "/contactos", ...PRODUCTS.map((p) => `/produtos/${p.slug}`)].map((p) => ({ url: base + p }));
}
