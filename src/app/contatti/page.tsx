import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "Richiedi preventivo | Shunt Italy",
  description:
    "Richiedi un dimensionamento tecnico per shunt DC ad alta corrente, shunt custom e busbar integrate."
};

export default function ContattiPage() {
  return (
    <main>
      <section className="bg-[#0b426e] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-200">
            Contatti
          </p>
          <h1 className="max-w-4xl text-5xl font-black">
            Richiedi un preventivo tecnico
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            Inviaci corrente nominale, caduta tensione, applicazione e vincoli dimensionali.
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}