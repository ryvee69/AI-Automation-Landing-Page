import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Für wen", href: "#fuer-wen" },
  { label: "Wie es funktioniert", href: "#prozess" },
  { label: "Vertrauen", href: "#vertrauen" },
  { label: "Inspektion", href: "#audit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-600 bg-ink-900/92 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-700">
            <ArrowRight className="h-3.5 w-3.5 text-white" strokeWidth={2} />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-ink-5">
            Systema<span className="text-brand-500">.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-ink-200 transition-colors hover:text-ink-10"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => handleNavClick("#audit")}
          className="hidden rounded-lg bg-brand-700 px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-brand-600 hover:-translate-y-0.5 md:inline-block"
        >
          Inspektion anfragen
        </button>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-ink-100 transition-colors hover:text-ink-5 md:hidden"
          aria-label="Menü"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-ink-600 bg-ink-900/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="py-3 text-left text-sm text-ink-100 transition-colors hover:text-ink-5"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#audit")}
              className="cta-btn mt-3 w-full"
            >
              Inspektion anfragen
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
