import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatTitle(slug: string) {
  return slug.replaceAll("-", " ");
}

function extractData(slug: string) {
  const parts = slug.split("-");

  let corrente = "";
  let mv = "";

  if (parts.includes("amp")) {
    const ampIndex = parts.indexOf("amp");
    const numbers = parts.slice(0, ampIndex);

    if (numbers.length >= 2) {
      corrente = `${numbers[0]} - ${numbers[1]} A`;
    } else if (numbers.length === 1) {
      corrente = `${numbers[0]} A`;
    }
  }

  if (parts.includes("mv")) {
    const mvIndex = parts.indexOf("mv");
    mv = `${parts[mvIndex - 1]} mV`;
  }

  return { corrente, mv };
}

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const title = formatTitle(slug);
  const { corrente, mv } = extractData(slug);

  return {
    title: `${title} | Shunt Italy`,
    description: `Scheda prodotto ${title}. Shunt DC industriale${
      corrente ? ` per corrente ${corrente}` : ""
    }${mv ? ` con uscita ${mv}` : ""}. Produzione custom in manganina con connessione Kelvin.`,
    openGraph: {
      title: `${title} | Shunt Italy`,
      description: `Shunt DC industriale ${corrente || ""} ${mv || ""}. Produzione custom Shunt Italy.`,
      images: [`/images/anteprima/${slug}.jpg`]
    }
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const fileName = `${slug}.jpg`;
  const title = formatTitle(slug);
  const { corrente, mv } = extractData(slug);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: title,
            image: `https://www.shuntitaly.com/images/anteprima/${fileName}`,
            description: `Shunt DC industriale ${corrente || ""} ${mv || ""}`,
            brand: {
              "@type": "Brand",
              name: "Shunt Italy"
            },
            manufacturer: {
              "@type": "Organization",
              name: "Shunt Italy"
            },
            category: "Electrical measurement device",
            additionalProperty: [
              corrente && {
                "@type": "PropertyValue",
                name: "Corrente",
                value: corrente
              },
              mv && {
                "@type": "PropertyValue",
                name: "Output",
                value: mv
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
            ].filter(Boolean)
          })
        }}
      />

      <section className="bg-[#0b426e] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-200">
            Prodotto
          </p>

          <h1 className="text-5xl font-black capitalize">{title}</h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
            Shunt DC per applicazioni industriali, disponibile su richiesta con
            configurazioni personalizzate.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
            <Image
              src={`/images/anteprima/${fileName}`}
              alt={title}
              width={900}
              height={700}
              className="w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-black">Specifiche tecniche</h2>

            <ul className="mt-6 space-y-3 text-lg text-slate-700">
              {corrente && <li>✔ Corrente: {corrente}</li>}
              {mv && <li>✔ Output: {mv}</li>}
              <li>✔ Connessione Kelvin disponibile</li>
              <li>✔ Materiali ad alta stabilità</li>
              <li>✔ Produzione custom CNC</li>
            </ul>

            <Link
              href="/contatti"
              className="mt-8 inline-block rounded-full bg-[#0b426e] px-7 py-4 font-bold text-white"
            >
              Richiedi preventivo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}