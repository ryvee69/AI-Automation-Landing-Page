import { ArrowRight, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface HeroProps {
  onCtaClick: () => void;
}

export function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.08)_0%,transparent_70%)]" />

      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Badge */}
      <Reveal>
        <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-ink-500 bg-ink-800 px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-ink-200">
            KI-Automatisierung für echte Betriebe
          </span>
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal delay={100}>
        <h1 className="mx-auto mb-7 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-5 sm:text-5xl md:text-6xl lg:text-7xl">
          Ihr Betrieb verliert täglich Zeit —{" "}
          <span className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent">
            nicht weil er schlecht geführt wird,
          </span>{" "}
          sondern weil die Systeme nicht zusammenarbeiten.
        </h1>
      </Reveal>

      {/* Subheadline */}
      <Reveal delay={200}>
        <p className="mx-auto mb-14 max-w-xl text-base leading-relaxed text-ink-100 sm:text-lg md:text-xl">
          Automatisierung ist kein Trend und kein Versprechen. Es ist ein
          strukturierter Prozess — der manuelle Arbeit, getrennte Tools und
          verschwendetes Budget in ein funktionierendes System verwandelt.
        </p>
      </Reveal>

      {/* CTA */}
      <Reveal delay={300}>
        <button onClick={onCtaClick} className="cta-btn cta-btn-lg">
          Automatisierungs-Inspektion anfragen
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="mt-4 text-[13px] text-ink-300">
          Kostenlos · Unverbindlich · Kein Verkaufsgespräch
        </p>
      </Reveal>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-30">
        <ChevronDown className="h-5 w-5 animate-bounce text-ink-200" />
      </div>
    </section>
  );
}
