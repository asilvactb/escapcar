import type { NextConfig } from "next";

/** Old escapcar.pt (WordPress) URLs → new pages, so Google and old links keep working. */
const OLD: [string, string][] = [
  ["/produtos/escapes-automoveis", "/produtos/escapes"],
  ["/produtos/escapes/fabrico-proprio-escapes", "/produtos/fabrico-proprio"],
  ["/produtos/escapes/:path+", "/produtos/escapes"],
  ["/produtos/flexiveis", "/produtos/escapes"],
  ["/produtos/coletores", "/produtos/escapes"],
  ["/acessorios", "/produtos/escapes"],
  ["/produtos/catalisadores/:path+", "/produtos/catalisadores"],
  ["/produtos/filtros-particulas/:path+", "/produtos/filtros-particulas"],
  ["/produtos/ponteiras", "/produtos/ponteiras"],
  ["/as-nossas-montagens", "/produtos/ponteiras"],
  ["/produtos/ganchos-reboque", "/produtos/ganchos-reboque"],
  ["/produtos/sensores-de-temperatura", "/produtos/sensores-sondas"],
  ["/produtos/sensores-diferencial-de-pressao", "/produtos/sensores-sondas"],
  ["/produtos/sondas-lambda", "/produtos/sensores-sondas"],
  ["/produtos/scr/:path+", "/produtos/scr-aditivos"],
  ["/produtos/aditivo-para-combustivel", "/produtos/scr-aditivos"],
  ["/produtos/aditivos-para-combustivel/:path+", "/produtos/scr-aditivos"],
  ["/produtos/precos-escapes-fap-e-catalisadores", "/contactos"],
  ["/informacao-util", "/produtos"],
  ["/escapcar/parcerias-sistemas-de-escapes", "/escapcar"],
  ["/contactos-localizacao", "/contactos"],
];

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return OLD.filter(([a, b]) => a !== b).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  trailingSlash: false,
};

export default nextConfig;
