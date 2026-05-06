import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#071827] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="text-2xl font-black">SHUNT ITALY</div>
          <p className="mt-4 leading-7 text-slate-300">
            Produzione di shunt DC ad alta corrente, soluzioni custom in
            manganina e sistemi di misura industriale.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Soluzioni</h3>
          <div className="mt-4 flex flex-col gap-3 text-slate-300">
            <Link href="/soluzioni/shunt-alta-corrente">Shunt alta corrente</Link>
            <Link href="/soluzioni/shunt-custom">Shunt custom</Link>
            <Link href="/soluzioni/busbar-integrate">Busbar integrate</Link>
            <Link href="/tecnologia">Tecnologia Kelvin</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Settori</h3>
          <div className="mt-4 flex flex-col gap-3 text-slate-300">
            <Link href="/settori/ferroviario">Ferroviario</Link>
            <Link href="/settori/energia">Energia</Link>
            <Link href="/settori/test-bench">Test bench</Link>
            <Link href="/case-study/progetto-neon-45000a">Progetto Neon</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Contatti</h3>
          <div className="mt-4 flex flex-col gap-3 text-slate-300">
            <a href="mailto:info@shuntitaly.it">info@shuntitaly.it</a>
            <a href="tel:+390398961342">+39 039 8961342</a>
            <Link href="/contatti">Richiedi preventivo</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Shunt Italy. Tutti i diritti riservati.</p>
        <p>Shunt DC · Manganina · CNC · Kelvin 4 fili</p>
      </div>
    </footer>
  );
}