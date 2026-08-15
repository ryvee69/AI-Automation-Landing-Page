import { Reveal } from "@/components/Reveal";

const steps = [
  {
    step: "1",
    title: "Kurzes Erstgespräch",
    desc: "Wir sprechen 20–30 Minuten über Ihren Betrieb. Kein Pitch, keine Agenda — nur Zuhören und Verstehen.",
    tag: "~30 Min.",
  },
  {
    step: "2",
    title: "Analyse Ihrer Abläufe",
    desc: "Wir schauen uns an, was Sie uns mitgeteilt haben, und bereiten eine strukturierte Einschätzung vor.",
    tag: "Intern",
  },
  {
    step: "3",
    title: "Klare Empfehlungen",
    desc: "Sie erhalten eine konkrete Übersicht: Was könnte automatisiert werden, was würde es bringen, was würde es kosten.",
    tag: "Schriftlich",
  },
  {
    step: "4",
    title: "Du entscheidest, wie es weiter geht",
    desc: "Kein Druck. Kein Follow-up-Skript. Sie haben alle Informationen — und entscheiden selbst, ob und wie es weitergeht.",
    tag: "Ihre Entscheidung",
  },
];

export function WhatNext() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 lg:px-8">
      <Reveal>
        <div className="mb-16 text-center">
          <p className="section-eyebrow">Transparenz</p>
          <h2 className="section-title mb-4">
            Was passiert nach der Anfrage?
          </h2>
          <p className="mx-auto max-w-sm text-base leading-relaxed text-ink-200">
            Kein Verkaufsdruck. Kein Skript. Nur ein ehrliches Gespräch über
            Ihren Betrieb.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-brand-700 to-transparent" />

        <div className="flex flex-col">
          {steps.map((item, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex items-start gap-8 pb-10 last:pb-0">
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-brand-700 bg-ink-850">
                  <span className="text-[13px] font-bold text-brand-500">
                    {item.step}
                  </span>
                </div>
                <div className="pt-2.5 flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-ink-5">
                      {item.title}
                    </h3>
                    <span className="rounded-full border border-ink-600 bg-ink-700 px-2.5 py-0.5 text-[11px] font-medium text-ink-300">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-ink-200">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
