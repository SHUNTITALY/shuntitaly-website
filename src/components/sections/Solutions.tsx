import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    title: "Shunt alta corrente",
    text: "Soluzioni fino a 100 kA per sistemi industriali critici.",
    href: "/soluzioni/shunt-alta-corrente",
    image: "/images/anteprima/60000-100000-amp-60mv.jpg"
  },
  {
    title: "Shunt custom",
    text: "Progettazione su specifica per geometrie, correnti e vincoli meccanici.",
    href: "/soluzioni/shunt-custom",
    image: "/images/anteprima/10000-custom-busbar.jpg"
  },
  {
    title: "Busbar integrate",
    text: "Misura e distribuzione corrente in un componente compatto.",
    href: "/soluzioni/busbar-integrate",
    image: "/images/anteprima/busbar-automotive.jpg"
  }
];

export default function Solutions() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Soluzioni essenziali. Prestazioni elevate.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Ogni prodotto nasce per un obiettivo: misurare corrente continua con
            stabilità, affidabilità e integrazione perfetta nel sistema cliente.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-[2rem] bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={500}
                className="h-56 w-full rounded-[1.5rem] object-cover transition group-hover:scale-[1.03]"
              />

              <div className="p-3 pt-6">
                <h3 className="text-2xl font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                <p className="mt-5 font-bold text-[#0b426e]">Scopri di più →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}