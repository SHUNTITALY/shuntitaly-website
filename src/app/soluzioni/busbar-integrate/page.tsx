export const metadata = {
  title: "Shunt su busbar | Shunt Italy",
  description:
    "Soluzioni integrate di misura corrente su busbar. Compatte, affidabili e progettate su misura."
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Shunt su busbar",
            description:
              "Soluzioni integrate di misura corrente su busbar, progettate su misura per applicazioni industriali.",
            brand: {
              "@type": "Brand",
              name: "Shunt Italy"
            },
            manufacturer: {
              "@type": "Organization",
              name: "Shunt Italy"
            },
            category: "Electrical measurement device",
            areaServed: "Worldwide"
          })
        }}
      />

      <section className="bg-[#0b426e] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-black">
            Shunt integrati su busbar
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            Uniamo misura e distribuzione della corrente in un unico componente,
            riducendo ingombri e aumentando affidabilità.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black">
            Soluzione compatta e performante
          </h2>

          <ul className="mt-8 space-y-3 text-lg">
            <li>✔ Riduzione spazio</li>
            <li>✔ Minori connessioni</li>
            <li>✔ Maggiore affidabilità</li>
            <li>✔ Progettazione custom</li>
          </ul>
        </div>
      </section>
    </main>
  );
}