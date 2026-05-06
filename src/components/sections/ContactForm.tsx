"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      azienda: formData.get("azienda"),
      email: formData.get("email"),
      corrente: formData.get("corrente"),
      tensione: formData.get("tensione"),
      messaggio: formData.get("messaggio")
    };

    const response = await fetch("/api/preventivo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contatti" className="bg-white px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-slate-950 px-8 py-20 text-white md:grid-cols-2 md:px-16">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
            Preventivo tecnico
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Raccontaci la tua applicazione.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Invia corrente nominale, caduta mV, applicazione e vincoli dimensionali.
            Ti risponderemo con una valutazione tecnica.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-7 text-slate-950">
          <input name="azienda" required className="mb-4 w-full rounded-2xl border border-slate-200 p-4" placeholder="Nome azienda" />
          <input name="email" required type="email" className="mb-4 w-full rounded-2xl border border-slate-200 p-4" placeholder="Email" />
          <input name="corrente" className="mb-4 w-full rounded-2xl border border-slate-200 p-4" placeholder="Corrente nominale A" />
          <input name="tensione" className="mb-4 w-full rounded-2xl border border-slate-200 p-4" placeholder="Caduta tensione mV" />

          <textarea
            name="messaggio"
            required
            className="mb-4 min-h-32 w-full rounded-2xl border border-slate-200 p-4"
            placeholder="Descrizione richiesta"
          />

          <button
            disabled={status === "loading"}
            className="w-full rounded-full bg-[#0b426e] px-7 py-4 font-bold text-white disabled:opacity-60"
          >
            {status === "loading" ? "Invio in corso..." : "Invia richiesta tecnica"}
          </button>

          {status === "success" && (
            <p className="mt-4 font-bold text-green-700">
              Richiesta inviata correttamente.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 font-bold text-red-700">
              Errore durante l’invio. Controlla i dati SMTP.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}