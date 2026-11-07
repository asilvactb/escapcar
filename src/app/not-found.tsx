import Link from "next/link";

export default function NotFound() {
  return (
    <section data-theme="blue" className="pattern flex min-h-[80svh] items-center bg-blue text-white">
      <div className="gut">
        <p className="lbl mb-6 opacity-70">Erro 404</p>
        <h1 className="display text-[clamp(44px,8vw,120px)]">Esta página saiu pelo escape.</h1>
        <Link href="/" className="btn btn-white mt-10">Voltar ao início →</Link>
      </div>
    </section>
  );
}
