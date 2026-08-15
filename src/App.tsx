import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ForWhom } from "@/components/ForWhom";
import { HowItWorks } from "@/components/HowItWorks";
import { Credibility } from "@/components/Credibility";
import { AuditForm } from "@/components/AuditForm";
import { WhatNext } from "@/components/WhatNext";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

function App() {
  const scrollToForm = () => {
    document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-ink-900 text-ink-10">
      <Navbar />
      <main>
        <Hero onCtaClick={scrollToForm} />
        <ForWhom />
        <HowItWorks />
        <Credibility />
        <AuditForm />
        <WhatNext />
        <FinalCta onCtaClick={scrollToForm} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
