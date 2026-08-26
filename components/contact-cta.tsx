"use client";

import Image from "next/image";
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
      className="relative py-24 lg:py-32 overflow-hidden flex items-center justify-center text-center text-white"
      aria-label="Llamado a la acción y contacto"
    >
      {/* Full-bleed Panoramic Mountain Sunset Background (100% Full Coverage) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/cta-sunset.jpg"
          alt="Atardecer en las montañas del Estado de México"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Elegant Warm Gradient Overlay for High Contrast and Perfect Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181412] via-[#181412]/80 to-[#181412]/60" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[#F6B6A6] text-xs font-extrabold tracking-wider uppercase shadow-subtle">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{PROFILE_DATA.cta.badge}</span>
        </div>

        <h2 className="font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white max-w-3xl mx-auto leading-tight">
          {PROFILE_DATA.cta.title}
        </h2>

        <p className="text-base sm:text-lg text-[#EADDD8] max-w-xl mx-auto font-medium">
          {PROFILE_DATA.cta.subtitle}
        </p>

        {/* Instant Interactive Quick-Copy Pill Bar */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-floating">
          <div className="flex items-center gap-2 px-4 py-1.5 text-xs font-bold text-white">
            <Mail className="w-4 h-4 text-[#F6B6A6]" />
            <span className="font-mono">{PROFILE_DATA.contact.email}</span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFE4DC] text-[#B94F3D] hover:bg-white text-xs font-extrabold transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar correo</span>
              </>
            )}
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#B94F3D] hover:bg-[#E88771] text-white font-extrabold text-xs uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200 shadow-md hover:shadow-glow cursor-pointer"
          >
            <span>{PROFILE_DATA.cta.buttonText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <a
            href="#inicio"
            onClick={handleScrollToTop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 font-extrabold text-xs uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200 shadow-sm"
          >
            <span>Volver al inicio</span>
            <ArrowUp className="w-4 h-4 text-[#F6B6A6]" />
          </a>
        </div>
      </div>
    </section>
  );
}
