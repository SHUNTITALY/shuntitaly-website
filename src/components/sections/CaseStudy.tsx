import Link from "next/link";

export default function CaseStudy() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-100 px-8 py-20 text-center md:px-16">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#0b426e]">
          Case Study
        </p>

        <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
          Progetto Neon. Shunt da 45.000 A per applicazioni ad alta potenza.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Un esempio concreto di progettazione custom per applicazioni dove
          affidabilità, precisione e robustezza meccanica sono determinanti.
        </p>

        <Link
          href="/case-study/progetto-neon-45000a"
          className="mt-8 inline-flex rounded-full bg-[#0b426e] px-8 py-4 font-bold text-white hover:bg-[#083556]"
        >
          Leggi il case study
        </Link>
      </div>
    </section>
  );
}