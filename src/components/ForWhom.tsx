import { Check, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const forItems = [
  {
    title: "Unternehmen mit echten Abläufen",
    desc: "Sie haben Prozesse, Teams und Verantwortlichkeiten — aber vieles läuft noch manuell.",
  },
  {
    title: "Teams mit repetitiver Handarbeit",
    desc: "Aufgaben, die täglich oder wöchentlich wiederholt werden und Zeit kosten, die anderswo fehlt.",
  },
  {
    title: "Gründer, die Klarheit suchen",
    desc: "Sie wollen verstehen, was Automatisierung für Ihr Unternehmen konkret bedeutet — bevor Sie investieren.",
  },
];

const notForItems = [
  {
    title: "Wer einen Zauberschalter sucht",
    desc: "Automatisierung braucht Struktur und Kontext. Ohne das gibt es keine nachhaltigen Ergebnisse.",
  },
  {
    title: "Hobby-Projekte oder Experimente",
    desc: "Unsere Arbeit ist auf operative Systeme ausgerichtet — nicht auf Prototypen ohne Geschäftsbasis.",
  },
  {
    title: "Wer sofortige Ergebnisse erwartet",
    desc: "Gute Automatisierung braucht Verständnis. Wer Abkürzungen sucht, wird enttäuscht werden.",
  },
];

export function ForWhom() {
  return (
    <section id="fuer-wen" className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
      <Reveal>
        <div className="mb-16 text-center">
          <p className="section-eyebrow">Klarheit zuerst</p>
          <h2 className="section-title">Für wen ist das gedacht?</h2>
        </div>
      </Reveal>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* FOR */}
        <Reveal delay={100} className="flex-1">
          <div className="card-surface relative h-full overflow-hidden rounded-2xl border-ink-500 p-10 md:p-12">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-700 to-brand-500" />
            <div className="mb-8">
              <span className="rounded-full border border-brand-500/20 bg-brand-500/[0.08] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-500">
                Das passt
              </span>
            </div>
            <div className="flex flex-col gap-6">
              {forItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-brand-500 bg-ink-900">
                      <Check className="h-3 w-3 text-brand-500" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-[15px] font-semibold text-ink-5">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-200">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* NOT FOR */}
        <Reveal delay={200} className="flex-1">
          <div className="h-full rounded-2xl border border-ink-600 bg-ink-900 p-10 md:p-12">
            <div className="mb-8">
              <span className="rounded-full border border-ink-200/15 bg-ink-200/[0.08] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-ink-200">
                Nicht das Richtige
              </span>
            </div>
            <div className="flex flex-col gap-6">
              {notForItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-ink-200 bg-ink-900">
                      <X className="h-3 w-3 text-ink-200" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-[15px] font-semibold text-ink-100">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-ink-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
