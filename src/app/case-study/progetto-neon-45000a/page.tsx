export const metadata = {
  title: "Progetto Neon 45.000A | Shunt Italy",
  description:
    "Case study Shunt Italy: fornitura di shunt da 45.000 Ampere per applicazioni industriali ad alta corrente."
};

export default function ProgettoNeonPage() {
  return (
    <main className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#0b426e]">
          Case Study
        </p>

        <h1 className="text-5xl font-black text-slate-950">
          Progetto Neon: shunt da 45.000 A
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Shunt Italy ha fornito shunt ad alta corrente da 45.000 Ampere per un
          progetto industriale critico, con progettazione custom e attenzione a
          stabilità, affidabilità e integrazione meccanica.
        </p>

        <section className="mt-12 rounded-[2rem] bg-slate-50 p-8">
          <h2 className="text-3xl font-black text-slate-950">
            Obiettivo tecnico
          </h2>

          <ul className="mt-6 space-y-3 text-lg text-slate-700">
            <li>✔ Corrente nominale: 45.000 A</li>
            <li>✔ Progettazione su specifica cliente</li>
            <li>✔ Soluzione per applicazione ad alta potenza</li>
            <li>✔ Integrazione meccanica custom</li>
          </ul>
        </section>
      </div>
    </main>
  );
}