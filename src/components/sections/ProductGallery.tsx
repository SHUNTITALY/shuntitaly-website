"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  { img: "1-25-amp-60mv.jpg", range: "1-25 A" },
  { img: "30-150-amp-60mv.jpg", range: "30-150 A" },
  { img: "200-350-amp-60mv.jpg", range: "200-350 A" },
  { img: "400-700-amp-60mv.jpg", range: "400-700 A" },
  { img: "750-1000-amp-60mv.jpg", range: "750-1000 A" },
  { img: "1200-1500-amp-60mv.jpg", range: "1200-1500 A" },
  { img: "2000-2500-amp-60mv.jpg", range: "2000-2500 A" },
  { img: "3000-4000-amp-60mv.jpg", range: "3000-4000 A" },
  { img: "5000-6000-amp-60mv.jpg", range: "5000-6000 A" },
  { img: "8000-12500-amp-60mv.jpg", range: "8000-12500 A" },
  { img: "15000-20000-amp-60mv.jpg", range: "15000-20000 A" },
  { img: "25000-29000-amp-60mv.jpg", range: "25000-29000 A" },
  { img: "40000-59000-amp-60mv.jpg", range: "40000-59000 A" },
  { img: "60000-100000-amp-60mv.jpg", range: "60000-100000 A" },
  { img: "100000-60mv.jpg", range: "100000 A" },
  { img: "10000-custom-busbar.jpg", range: "Custom" },
  { img: "automotive.jpg", range: "Automotive" },
  { img: "busbar-automotive.jpg", range: "Busbar" }
];

const filters = [
  "Tutti",
  "1-1000 A",
  "1000-10000 A",
  "10000-100000 A",
  "Custom",
  "Automotive",
  "Busbar"
];

function getSlug(img: string) {
  return img.replace(".jpg", "");
}

function getTitle(img: string) {
  return img.replace(".jpg", "").replaceAll("-", " ");
}

function matchFilter(product: { img: string; range: string }, filter: string) {
  if (filter === "Tutti") return true;
  if (filter === "Custom") return product.range === "Custom";
  if (filter === "Automotive") return product.range === "Automotive";
  if (filter === "Busbar") return product.range === "Busbar";

  const firstNumber = Number(product.range.match(/\d+/)?.[0] || 0);

  if (filter === "1-1000 A") return firstNumber >= 1 && firstNumber < 1000;
  if (filter === "1000-10000 A") return firstNumber >= 1000 && firstNumber < 10000;
  if (filter === "10000-100000 A") return firstNumber >= 10000;

  return true;
}

export default function ProductGallery() {
  const [activeFilter, setActiveFilter] = useState("Tutti");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => matchFilter(product, activeFilter));
  }, [activeFilter]);

  return (
  <section className="bg-slate-50 px-6 py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0b426e]">
          Catalogo
        </p>

        <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Una gamma ampia. Una soluzione per ogni corrente.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Filtra per range e apri la scheda prodotto dedicata.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-3 text-sm font-bold transition ${
              activeFilter === filter
                ? "bg-[#0b426e] text-white"
                : "bg-white text-slate-700 hover:bg-slate-200"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <Link
            key={product.img}
            href={`/prodotti/${getSlug(product.img)}`}
            className="group overflow-hidden rounded-[1.75rem] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={`/images/anteprima/${product.img}`}
              alt={getTitle(product.img)}
              width={600}
              height={450}
              className="h-52 w-full rounded-[1.3rem] object-cover transition group-hover:scale-[1.03]"
            />

            <div className="p-3">
              <p className="text-sm font-bold capitalize text-slate-950">
                {getTitle(product.img)}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Range: {product.range}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
}