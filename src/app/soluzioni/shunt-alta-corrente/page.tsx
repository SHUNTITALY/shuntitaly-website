export const metadata = {
  title: "Shunt alta corrente fino a 100kA | Shunt Italy",
  description:
    "Shunt DC ad alta corrente fino a 100kA. Soluzioni custom in manganina con connessione Kelvin e integrazione su busbar."
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
            name: "Shunt DC alta corrente",
            description:
              "Shunt di precisione per misura corrente fino a 100kA, con connessione Kelvin e progettazione custom.",
            brand: {
              "@type": "Brand",
              name: "Shunt Italy"
            },
            manufacturer: {
              "@type": "Organization",
              name: "Shunt Italy"
            },
            category: "Electrical measurement device",
            areaServed: "Worldwide",
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Corrente",
                value: "Fino a 100000 A"
              },
              {
                "@type": "PropertyValue",
                name: "Tecnologia",
                value: "Manganina"
              },
              {
                "@type": "PropertyValue",
                name: "Connessione",
                value: "Kelvin 4 fili"
              }
            ]
          })
        }}
      />

      <section className="bg-[#0b426e] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-black md:text-6xl">
            Shunt DC ad alta corrente fino a 100.000 A
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            Progettiamo e produciamo shunt di precisione per applicazioni
            industriali ad alta corrente, con soluzioni custom e integrazione su busbar.
          </p>

          <a
            href="/contatti"
            className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-bold text-[#0b426e]"
          >
            Richiedi preventivo tecnico
          </a>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black">
            Soluzioni per applicazioni industriali critiche
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Gli shunt ad alta corrente sono utilizzati in sistemi dove la misura
            precisa della corrente è fondamentale: energia, ferroviario, test
            bench e industria pesante.
          </p>

          <ul className="mt-8 space-y-3 text-lg">
            <li>✔ Correnti fino a 100.000 A</li>
            <li>✔ Connessione Kelvin a 4 fili</li>
            <li>✔ Manganina a basso coefficiente termico</li>
            <li>✔ Progettazione completamente custom</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black">
            Perché scegliere i nostri shunt
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="font-bold">Precisione</h3>
              <p className="mt-3 text-slate-600">
                Misura stabile anche in condizioni estreme.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="font-bold">Affidabilità</h3>
              <p className="mt-3 text-slate-600">
                Progettati per ambienti industriali critici.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <h3 className="font-bold">Custom</h3>
              <p className="mt-3 text-slate-600">
                Ogni shunt è progettato su specifica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b426e] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black">
            Hai bisogno di uno shunt su misura?
          </h2>

          <p className="mt-5 text-lg text-slate-100">
            Contattaci per una progettazione personalizzata.
          </p>

          <a
            href="/contatti"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-[#0b426e]"
          >
            Richiedi preventivo
          </a>
        </div>
      </section>
    </main>
  );
}