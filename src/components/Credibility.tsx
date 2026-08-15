import { Building2, Factory, LineChart, Database } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const stats = [
  {
    icon: Building2,
    stat: "8+",
    label: "Jahre Erfahrung mit Systemen & Daten",
  },
  {
    icon: Factory,
    stat: "40+",
    label: "Automatisierungen aktiv im Einsatz",
  },
  {
    icon: LineChart,
    stat: "12+",
    label: "Branchen mit laufenden Projekten",
  },
  {
    icon: Database,
    stat: "100%",
    label: "Fokus auf operative Realität",
  },
];

const industries = [
  "Industrie",
  "Logistik",
  "Finanzen",
  "Handel",
  "Beratung",
  "Medien",
];

export function Credibility() {
  return (
    <section id="vertrauen" className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
      <Reveal>
        <div className="mb-16 text-center">
          <p className="section-eyebrow">Erfahrung</p>
          <h2 className="section-title">Gebaut auf echten Systemen</h2>
        </div>
      </Reveal>

      <div className="mb-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((item, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="card-surface rounded-xl p-9 text-center">
              <div className="mb-5 flex justify-center">
                <item.icon className="h-8 w-8 text-brand-500" strokeWidth={1.5} />
              </div>
              <div className="mb-2 text-4xl font-extrabold tracking-tight text-ink-5">
                {item.stat}
              </div>
              <p className="text-[13px] leading-relaxed text-ink-200">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <p className="mb-7 text-center text-xs uppercase tracking-[0.1em] text-ink-400">
          Erfahrung aus verschiedenen Branchen
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((label, i) => (
            <div
              key={i}
              className="flex min-w-[120px] items-center justify-center rounded-lg border border-ink-600 bg-ink-800 px-7 py-4"
            >
              <span className="text-[13px] font-medium uppercase tracking-[0.08em] text-ink-300">
                {label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
