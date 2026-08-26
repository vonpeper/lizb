"use client";

import Image from "next/image";
import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { ArrowDown, ArrowUpRight, Scale, Shield, Landmark } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-[#FFFDFC]"
      aria-label="Presentación principal"
    >
      {/* Subtle organic background shapes in salmon */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#FFE4DC]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -ml-32 w-80 h-80 rounded-full bg-[#FFF6F2] blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-[#F6B6A6]/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Identity, Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 animate-fade-in">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E88771]" />
              <span>{PROFILE_DATA.hero.eyebrow}</span>
            </div>

            {/* Main Name H1 */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#181412] leading-[1.08] break-words">
                {PROFILE_DATA.hero.heading}
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#B94F3D] font-normal leading-snug">
                {PROFILE_DATA.hero.headline}
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-[#6B605C] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PROFILE_DATA.hero.description}
            </p>

            {/* Key attribute pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#181412] bg-[#FFF6F2] border border-[#EADDD8] rounded-lg px-3 py-1.5 font-medium">
                <Scale className="w-3.5 h-3.5 text-[#B94F3D]" />
                <span>Litigio y Técnica Jurídica</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#181412] bg-[#FFF6F2] border border-[#EADDD8] rounded-lg px-3 py-1.5 font-medium">
                <Landmark className="w-3.5 h-3.5 text-[#B94F3D]" />
                <span>Sindicatura Municipal</span>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#181412] bg-[#FFF6F2] border border-[#EADDD8] rounded-lg px-3 py-1.5 font-medium">
                <Shield className="w-3.5 h-3.5 text-[#B94F3D]" />
                <span>Defensa del Patrimonio</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#perfil"
                onClick={(e) => handleScrollTo(e, "perfil")}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#181412] text-white font-medium text-sm hover:bg-[#B94F3D] focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200 shadow-md group"
              >
                <span>{PROFILE_DATA.hero.ctaPrimary}</span>
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#FFF6F2] text-[#181412] border border-[#EADDD8] hover:bg-[#FFE4DC] font-medium text-sm focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200"
              >
                <span>{PROFILE_DATA.hero.ctaSecondary}</span>
                <ArrowUpRight className="w-4 h-4 ml-2 text-[#B94F3D]" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Portrait / Placeholder Asset */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-gradient-to-br from-[#FFE4DC] via-[#FFF6F2] to-[#F6B6A6]/40 border border-[#EADDD8] -rotate-1 transition-transform group-hover:rotate-0" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#FFFDFC] border border-[#EADDD8] p-4 sm:p-5 shadow-card overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#FFF6F2] via-[#FFE4DC]/50 to-[#FFFDFC] flex flex-col items-center justify-center text-center p-6 border border-[#EADDD8]/60">
                  {!imageError ? (
                    <Image
                      src={PROFILE_DATA.personal.portraitPath}
                      alt={PROFILE_DATA.personal.portraitAlt}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                      className="object-cover object-top"
                      onError={() => setImageError(true)}
                    />
                  ) : null}

                  {/* Editorial Placeholder when official asset file is pending */}
                  {imageError && (
                    <div className="flex flex-col items-center justify-center space-y-4 max-w-xs">
                      <div className="w-24 h-24 rounded-full bg-[#FFE4DC] border-2 border-[#EADDD8] flex items-center justify-center shadow-subtle">
                        <span className="font-serif text-3xl font-bold text-[#B94F3D]">
                          {PROFILE_DATA.personal.monogram}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-serif text-2xl font-bold text-[#181412]">
                          {PROFILE_DATA.personal.fullName}
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-[#B94F3D] font-semibold">
                          Retrato Profesional
                        </p>
                      </div>
                      <div className="pt-2 px-3 py-1.5 rounded-lg bg-white/80 border border-[#EADDD8] text-[11px] text-[#6B605C] leading-relaxed">
                        Fotografía editorial oficial en proceso de digitalización para <span className="font-medium text-[#181412]">{PROFILE_DATA.site.domain}</span>
                      </div>
                    </div>
                  )}

                  {/* Badge at bottom of portrait */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#FFFDFC]/95 backdrop-blur-md rounded-lg p-2.5 border border-[#EADDD8] flex items-center justify-between text-left shadow-sm">
                    <div>
                      <p className="text-[11px] font-bold text-[#181412] leading-tight">
                        {PROFILE_DATA.personal.currentRole}
                      </p>
                      <p className="text-[10px] text-[#6B605C]">
                        {PROFILE_DATA.personal.location}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[9px] font-semibold uppercase bg-[#FFE4DC] text-[#B94F3D] border border-[#EADDD8]">
                      2025–Actualidad
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-12">
          <a
            href="#perfil"
            onClick={(e) => handleScrollTo(e, "perfil")}
            className="group flex flex-col items-center gap-1.5 text-xs text-[#6B605C] hover:text-[#B94F3D] transition-colors focus-visible:ring-2 focus-visible:ring-[#B94F3D] rounded-md p-1"
            aria-label="Desplazarse hacia la sección de perfil"
          >
            <span className="text-[11px] tracking-widest uppercase font-medium">Explorar trayectoria</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#B94F3D]" />
          </a>
        </div>
      </div>
    </section>
  );
}
