"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { ArrowUp, ArrowUpRight, Mail, Copy, Check, Sparkles } from "lucide-react";

interface ContactCtaProps {
  onOpenContact: () => void;
}

export function ContactCta({ onOpenContact }: ContactCtaProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contacto"
      className="py-20 lg:py-28 bg-[#FFF6F2] border-t border-[#EADDD8] relative overflow-hidden"
      aria-label="Llamado a la acción y contacto"
    >
      {/* Background SVG mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-[#FFE4DC]/70 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE4DC] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-bold tracking-wider uppercase shadow-subtle">
          <Sparkles className="w-3.5 h-3.5 text-[#B94F3D]" />
          <span>Atención Profesional</span>
        </div>

        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#181412] max-w-3xl mx-auto leading-tight">
          {PROFILE_DATA.cta.title}
        </h2>

        <p className="text-base sm:text-lg text-[#5E524E] max-w-xl mx-auto font-normal">
          {PROFILE_DATA.cta.description}
        </p>

        {/* Instant Interactive Quick-Copy Pill Bar */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl bg-[#FFFDFC] border border-[#EADDD8] shadow-card">
          <div className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-[#181412]">
            <Mail className="w-4 h-4 text-[#B94F3D]" />
            <span className="font-mono">{PROFILE_DATA.contact.email}</span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFE4DC] text-[#B94F3D] hover:bg-[#F6B6A6]/60 text-xs font-bold transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#181412] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B94F3D] focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200 shadow-md hover:shadow-glow"
          >
            <span>{PROFILE_DATA.cta.buttonPrimary}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#inicio"
            onClick={handleScrollToTop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFFDFC] text-[#181412] border border-[#EADDD8] hover:bg-[#FFE4DC] font-bold text-xs uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200"
          >
            <span>{PROFILE_DATA.cta.buttonSecondary}</span>
            <ArrowUp className="w-4 h-4 text-[#B94F3D]" />
          </a>
        </div>
      </div>
    </section>
  );
}
