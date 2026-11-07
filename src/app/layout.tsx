import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/MotionRoot";
import CallBar from "@/components/CallBar";
import Preloader from "@/components/Preloader";
import { COMPANY } from "@/data/site";

const archivo = localFont({
  src: "../fonts/archivo.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});
const mono = localFont({
  src: "../fonts/mono.woff2",
  variable: "--font-mono",
  weight: "100 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://escapcar.pt"),
  title: { default: `Escapcar · Escapes, catalisadores e filtros de partículas · Braga e Guimarães`, template: "%s · Escapcar" },
  description:
    "Especialistas em sistemas de escape desde 1977. Escapes, catalisadores, filtros de partículas, ponteiras, ganchos de reboque e fabrico próprio. Lojas em Braga (Cabreiros) e Guimarães.",
  openGraph: { images: ["/img/hero-pesados.jpg"], siteName: "Escapcar", locale: "pt_PT", type: "website" },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#2b01e1" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        <Preloader />
        <MotionRoot />
        <Header />
        <main>{children}</main>
        <Footer />
        <CallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: COMPANY.name,
              foundingDate: String(COMPANY.since),
              email: COMPANY.email,
              url: "https://escapcar.pt",
            }),
          }}
        />
      </body>
    </html>
  );
}
