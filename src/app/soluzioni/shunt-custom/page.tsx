export const metadata = {
  title: "Shunt custom | Shunt Italy",
  description:
    "Progettazione e produzione di shunt custom su specifica. Soluzioni personalizzate per applicazioni industriali."
};

export default function Page() {
  return (
    <main>

      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Shunt custom",
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
          <h1 className="text-5xl font-black">
            Shunt custom progettati su misura
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            Realizziamo shunt completamente personalizzati in base alle esigenze
            del cliente: corrente, tensione, dimensioni e integrazione meccanica.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black">
            Progettazione su specifica tecnica
          </h2>

          <ul className="mt-8 space-y-3 text-lg">
            <li>✔ Geometria personalizzata</li>
            <li>✔ Integrazione su busbar</li>
            <li>✔ Connessione Kelvin</li>
            <li>✔ Materiali ad alta stabilità</li>
          </ul>
        </div>
      </section>

    </main>
  );
}