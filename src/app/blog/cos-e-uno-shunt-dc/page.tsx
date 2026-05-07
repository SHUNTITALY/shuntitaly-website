import Link from "next/link";

export const metadata = {
  title: "Cos’è uno Shunt DC ad Alta Corrente | Shunt Italy",
  description:
    "Scopri cos’è uno shunt DC, come funziona la misura della corrente tramite manganina e perché la connessione Kelvin è fondamentale nelle applicazioni industriali."
};

export default function BlogArticlePage() {
  return (
    <main className="bg-white px-6 py-24">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#0b426e]">
          Blog tecnico
        </p>

        <h1 className="text-5xl font-black leading-tight text-slate-950">
          Cos’è uno Shunt DC ad Alta Corrente e Come Funziona
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Gli shunt DC sono componenti fondamentali per la misura precisa della
          corrente continua in applicazioni industriali, ferroviarie,
          automotive ed energetiche.
        </p>

        <section className="mt-14">
          <h2 className="text-3xl font-black text-slate-950">
            Come funziona uno shunt
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Uno shunt è una resistenza calibrata a bassissimo valore ohmico che
            genera una piccola caduta di tensione proporzionale alla corrente
            che lo attraversa.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Misurando questa tensione con strumenti ad alta precisione è
            possibile calcolare la corrente reale del circuito.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black text-slate-950">
            Perché si usa la manganina
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            La manganina è utilizzata nella produzione di shunt professionali
            grazie al suo bassissimo coefficiente termico e all’elevata
            stabilità nel tempo.
          </p>

          <ul className="mt-8 space-y-3 text-lg text-slate-700">
            <li>✔ Alta precisione</li>
            <li>✔ Stabilità termica</li>
            <li>✔ Affidabilità industriale</li>
            <li>✔ Ottima linearità</li>
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-black text-slate-950">
            Connessione Kelvin a 4 fili
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Nelle applicazioni ad alta corrente viene spesso utilizzata la
            connessione Kelvin a 4 fili per eliminare gli errori dovuti alla
            resistenza dei collegamenti di potenza.
          </p>
        </section>

        <section className="mt-14 rounded-[2rem] bg-slate-50 p-10">
          <h2 className="text-3xl font-black text-slate-950">
            Shunt custom fino a 100kA
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Shunt Italy progetta e produce shunt DC custom ad alta corrente fino
            a 100.000 Ampere per applicazioni industriali critiche.
          </p>

          <Link
            href="/contatti"
            className="mt-8 inline-block rounded-full bg-[#0b426e] px-8 py-4 font-bold text-white"
          >
            Richiedi informazioni tecniche
          </Link>
        </section>
      </article>
    </main>
  );
}