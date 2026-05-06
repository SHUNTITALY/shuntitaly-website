"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white text-slate-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
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
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link href="/" className="hover:text-[#0b426e]">
            Home
          </Link>

          <div className="relative group">
            <span className="cursor-pointer hover:text-[#0b426e]">
              Soluzioni
            </span>

            <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 translate-y-2 rounded-xl bg-white p-4 text-black opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <Link href="/soluzioni/shunt-alta-corrente" className="block rounded-lg px-3 py-2 hover:bg-slate-100">
                Shunt alta corrente
              </Link>

              <Link href="/soluzioni/shunt-custom" className="block rounded-lg px-3 py-2 hover:bg-slate-100">
                Shunt custom
              </Link>

              <Link href="/soluzioni/busbar-integrate" className="block rounded-lg px-3 py-2 hover:bg-slate-100">
                Busbar integrate
              </Link>

            </div>
          </div>

          <Link href="/contatti" className="hover:text-[#0b426e]">
            Contatti
          </Link>
        </nav>

        {/* CTA DESKTOP */}
        <Link
          href="/contatti"
          className="hidden rounded-full bg-[#0b426e] px-5 py-3 text-sm font-bold text-white hover:bg-[#083556] md:inline-flex"
        >
          Preventivo
        </Link>

        {/* MENU MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex rounded-xl bg-slate-100 p-3 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-base font-semibold">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <div className="rounded-2xl bg-slate-100 p-4">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">
                Soluzioni
              </p>

              <div className="flex flex-col gap-3">
                <Link href="/soluzioni/shunt-alta-corrente" onClick={() => setOpen(false)}>
                  Shunt alta corrente
                </Link>

                <Link href="/soluzioni/shunt-custom" onClick={() => setOpen(false)}>
                  Shunt custom
                </Link>

                <Link href="/soluzioni/busbar-integrate" onClick={() => setOpen(false)}>
                  Busbar integrate
                </Link>
              </div>
            </div>

            <Link href="/contatti" onClick={() => setOpen(false)}>
              Contatti
            </Link>

            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#0b426e] px-5 py-3 text-center font-bold text-white"
            >
              Richiedi preventivo
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}