import Link from "next/link";

export const metadata = {
  title: "Blog tecnico | Shunt Italy",
  description:
    "Articoli tecnici su shunt DC, misura della corrente, manganina, connessione Kelvin e applicazioni industriali."
};

export default function BlogPage() {
  return (
    <main className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#0b426e]">
          Blog
        </p>

        <h1 className="text-5xl font-black text-slate-950">
          Blog tecnico Shunt Italy
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          Approfondimenti tecnici su shunt DC, alta corrente, connessione
          Kelvin, manganina e applicazioni industriali.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/blog/cos-e-uno-shunt-dc"
            className="rounded-3xl bg-slate-50 p-8 transition hover:bg-slate-100"
          >
            <h2 className="text-2xl font-black text-slate-950">
              Cos’è uno shunt DC
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Introduzione tecnica al principio di misura della corrente tramite shunt.
            </p>
          </Link>

          <Link
            href="/blog/connessione-kelvin"
            className="rounded-3xl bg-slate-50 p-8 transition hover:bg-slate-100"
          >
            <h2 className="text-2xl font-black text-slate-950">
              Connessione Kelvin a 4 fili
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Perché la connessione Kelvin è fondamentale nella misura precisa della corrente.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}