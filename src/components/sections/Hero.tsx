import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#0b426e]">
          Shunt DC · CNC · Manganina
        </p>

        <h1 className="mx-auto max-w-5xl text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">
          Misura ad alta corrente. Precisione industriale. Design su misura.
        </h1>

        <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-slate-600">
          Shunt DC fino a 100 kA, soluzioni custom in manganina e integrazione
          su busbar per applicazioni industriali avanzate.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contatti"
            className="inline-flex items-center justify-center rounded-full bg-[#0b426e] px-8 py-4 font-bold text-white hover:bg-[#083556]"
          >
            Richiedi preventivo <ArrowRight className="ml-2" size={18} />
          </Link>

          <Link
            href="/soluzioni/shunt-alta-corrente"
            className="inline-flex items-center justify-center rounded-full bg-slate-100 px-8 py-4 font-bold text-slate-900 hover:bg-slate-200"
          >
            Scopri le soluzioni
          </Link>
        </div>

        <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2rem] bg-slate-50 p-8 shadow-sm">
          <Image
            src="/images/anteprima/60000-100000-amp-60mv.jpg"
            alt="Shunt DC alta corrente"
            width={1200}
            height={800}
            className="mx-auto rounded-[1.5rem] object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}