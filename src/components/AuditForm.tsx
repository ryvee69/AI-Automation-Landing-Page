import { useState } from "react";
import { Check, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const benefits = [
  "Analyse Ihrer bestehenden Prozesse und Abläufe",
  "Identifikation konkreter Automatisierungspotenziale",
  "Ehrliche Einschätzung — auch wenn nichts zu automatisieren ist",
  "Schriftliche Zusammenfassung der Erkenntnisse",
];

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const updateField = (key: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const inputClass =
    "w-full rounded-lg border border-ink-500 bg-ink-700 px-4 py-3.5 text-[15px] text-ink-5 transition-colors placeholder:text-ink-300";

  return (
    <section
      id="audit"
      className="border-y border-ink-600 bg-ink-950 py-28"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal>
          <div className="card-surface relative overflow-hidden rounded-3xl border-ink-500 p-10 md:p-16">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.06)_0%,transparent_70%)]" />

            <div className="relative">
              <div className="mb-3">
                <span className="rounded-full border border-brand-500/20 bg-brand-500/[0.08] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-500">
                  Kostenloses Angebot
                </span>
              </div>
              <h2 className="mb-5 text-3xl font-bold tracking-tight text-ink-5 sm:text-4xl md:text-[44px]">
                Gratis Automatisierungs-Inspektion
              </h2>
              <p className="mb-12 max-w-xl text-[17px] leading-relaxed text-ink-100">
                Wir analysieren Ihre aktuellen Arbeitsabläufe und zeigen Ihnen
                konkret, wo Automatisierung sinnvoll wäre — und wo nicht. Der
                Wert dieser Analyse bleibt bestehen, unabhängig davon, ob wir
                danach zusammenarbeiten.
              </p>

              <div className="mb-12 flex flex-col gap-4">
                {benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-brand-500 bg-ink-900">
                      <Check className="h-3 w-3 text-brand-500" strokeWidth={2} />
                    </div>
                    <span className="text-[15px] text-ink-50">{item}</span>
                  </div>
                ))}
              </div>

              {submitted ? (
                <div className="rounded-xl border border-brand-500/30 bg-brand-500/[0.04] p-10 text-center">
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-brand-500/30 bg-brand-500/10">
                    <CheckCircle2 className="h-6 w-6 text-brand-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-ink-5">
                    Anfrage eingegangen
                  </h3>
                  <p className="text-[15px] text-ink-200">
                    Wir melden uns innerhalb von 24 Stunden bei Ihnen. Kein
                    Verkaufsgespräch — nur ein ehrliches Gespräch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-ink-200">
                        Ihr Name
                      </label>
                      <input
                        type="text"
                        placeholder="Max Mustermann"
                        required
                        value={formData.name}
                        onChange={updateField("name")}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-ink-200">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        placeholder="Mustermann GmbH"
                        required
                        value={formData.company}
                        onChange={updateField("company")}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-[13px] font-medium text-ink-200">
                      E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      placeholder="max@mustermann.de"
                      required
                      value={formData.email}
                      onChange={updateField("email")}
                      className={inputClass}
                    />
                  </div>
                  <div className="mb-7">
                    <label className="mb-2 block text-[13px] font-medium text-ink-200">
                      Kurze Beschreibung Ihres Betriebs{" "}
                      <span className="text-ink-400">(optional)</span>
                    </label>
                    <textarea
                      placeholder="Was macht Ihr Unternehmen? Wo sehen Sie aktuell die größten Reibungspunkte?"
                      rows={4}
                      value={formData.message}
                      onChange={updateField("message")}
                      className={`${inputClass} resize-vertical`}
                    />
                  </div>
                  <button type="submit" className="cta-btn cta-btn-lg w-full">
                    Automatisierungs-Inspektion anfragen
                  </button>
                  <p className="mt-3 text-center text-[13px] text-ink-400">
                    Kostenlos · Keine Verpflichtung · Antwort innerhalb von 24
                    Stunden
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
