const items = [
  "Manganina a basso coefficiente termico",
  "Connessione Kelvin a 4 fili",
  "Lavorazioni CNC di precisione",
  "Progettazione custom su specifica"
];

export default function Technology() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 px-8 py-20 text-white md:px-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
              Tecnologia
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Progettati per essere stabili, precisi e ripetibili.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Ogni shunt viene dimensionato considerando corrente, caduta mV,
              dissipazione, contatti, layout meccanico e condizioni operative.
            </p>
          </div>

          <div className="grid gap-4">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/10 p-5 font-bold backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}