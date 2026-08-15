import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-ink-600 px-12 py-10">
      <div className="flex items-center gap-2.5">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-brand-700">
          <ArrowRight className="h-3 w-3 text-white" strokeWidth={2} />
        </div>
        <span className="text-sm font-bold text-ink-300">
          Systema<span className="text-brand-700">.</span>
        </span>
      </div>
      <p className="text-[13px] text-ink-400">
        © 2024 · KI-Automatisierung für operative Betriebe
      </p>
      <div className="flex gap-6">
        {["Datenschutz", "Impressum"].map((item) => (
          <span
            key={item}
            className="cursor-pointer text-[13px] text-ink-400 transition-colors hover:text-ink-200"
          >
            {item}
          </span>
        ))}
      </div>
    </footer>
  );
}
