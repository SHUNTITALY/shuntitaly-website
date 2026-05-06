import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-16 text-slate-900">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0b426e] font-black text-white">
              S
            </div>

            <div>
              <div className="text-lg font-black tracking-wide">
                SHUNT ITALY
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">
                High Current Measurement
              </div>
            </div>
          </div>

          <p className="mt-5 max-w-sm leading-7 text-slate-600">
            Produzione di shunt DC ad alta corrente, soluzioni custom in
            manganina e sistemi integrati su busbar.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-slate-950">Soluzioni</h3>
          <div className="mt-4 flex flex-col gap-3 text-slate-600">
            <Link href="/soluzioni/shunt-alta-corrente" className="hover:text-[#0b426e]">
              Shunt alta corrente
            </Link>
            <Link href="/soluzioni/shunt-custom" className="hover:text-[#0b426e]">
              Shunt custom
            </Link>
            <Link href="/soluzioni/busbar-integrate" className="hover:text-[#0b426e]">
              Busbar integrate
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-950">Azienda</h3>
          <div className="mt-4 flex flex-col gap-3 text-slate-600">
            <Link href="/contatti" className="hover:text-[#0b426e]">
              Contatti
            </Link>
            <Link href="/case-study/progetto-neon-45000a" className="hover:text-[#0b426e]">
              Case Study
            </Link>
            <Link href="/prodotti/60000-100000-amp-60mv" className="hover:text-[#0b426e]">
              Prodotti
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-950">Contatti</h3>
          <div className="mt-4 flex flex-col gap-3 text-slate-600">
            <a href="mailto:info@shuntitaly.it" className="hover:text-[#0b426e]">
              info@shuntitaly.it
            </a>
            <a href="tel:+390398961342" className="hover:text-[#0b426e]">
              +39 039 8961342
            </a>
            <Link
              href="/contatti"
              className="mt-2 inline-flex w-fit rounded-full bg-[#0b426e] px-5 py-3 text-sm font-bold text-white hover:bg-[#083556]"
            >
              Richiedi preventivo
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} Shunt Italy. Tutti i diritti riservati.</p>
        <p>Shunt DC · Manganina · CNC · Kelvin 4 fili</p>
      </div>
    </footer>
  );
}