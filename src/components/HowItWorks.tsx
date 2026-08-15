import { Reveal } from "@/components/Reveal";

const steps = [
  {
    num: "01",
    title: "Ihr System verstehen",
    desc: "Wir schauen uns an, wie Ihr Betrieb heute wirklich funktioniert — welche Abläufe existieren, wer was macht und wo Informationen fließen.",
  },
  {
    num: "02",
    title: "Verschwendung & Engpässe identifizieren",
    desc: "Wir zeigen konkret, wo Zeit verloren geht, wo Fehler entstehen und welche Aufgaben systematisch automatisiert werden könnten.",
  },
  {
    num: "03",
    title: "Sinnvolle Automatisierungen entwerfen",
    desc: "Wir entwickeln praxisnahe Lösungsansätze — passend zu Ihrer Größe, Ihrem Team und Ihren tatsächlichen Anforderungen.",
  },
  {
    num: "04",
    title: "Gemeinsam entscheiden",
    desc: "Sie bekommen eine klare Empfehlung. Was als nächstes passiert, entscheiden Sie — ohne Druck, ohne versteckte Agenda.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="prozess"
      className="border-y border-ink-600 bg-ink-950 py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <div className="mb-20 text-center">
            <p className="section-eyebrow">Der Prozess</p>
            <h2 className="section-title mb-4">Wie es funktioniert</h2>
            <p className="mx-auto max-w-md text-base leading-relaxed text-ink-200">
              Kein Fachjargon. Kein Versprechen ohne Grundlage. Nur ein klarer
              Ablauf.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card-surface h-full rounded-xl p-8">
                <div className="mb-5 text-[11px] font-bold tracking-[0.1em] text-brand-700 tabular-nums">
                  {step.num}
                </div>
                <h3 className="mb-3 text-[17px] font-semibold leading-tight text-ink-5">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-200">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
