import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface FinalCtaProps {
  onCtaClick: () => void;
}

export function FinalCta({ onCtaClick }: FinalCtaProps) {
  return (
    <section className="relative overflow-hidden border-t border-ink-600 bg-ink-950 py-28 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(29,78,216,0.07)_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-brand-500">
            Bereit für Klarheit?
          </p>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-ink-5 sm:text-5xl md:text-6xl">
            Verstehen Sie, was in Ihrem Betrieb möglich ist.
          </h2>
          <p className="mb-12 text-[17px] leading-relaxed text-ink-200">
            Die Inspektion ist kostenlos. Die Erkenntnisse gehören Ihnen —
            unabhängig davon, was danach kommt.
          </p>
          <button onClick={onCtaClick} className="cta-btn cta-btn-lg">
            Automatisierungs-Inspektion anfragen
            <ArrowRight className="h-4 w-4" />
          </button>
          <p className="mt-5 text-sm text-ink-400">
            Kostenlos · Unverbindlich · Du entscheidest, wie es weiter geht
          </p>
        </Reveal>
      </div>
    </section>
  );
}
