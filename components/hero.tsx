"use client";

import Image from "next/image";
import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { ArrowDown, ArrowUpRight, Scale, Shield, Landmark, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);

  const highlights = [
    { title: "Sindicatura Municipal", desc: "Defensa jurídica y patrimonio en Villa de Allende", icon: Landmark },
    { title: "Litigio & Amparo", desc: "Experiencia en juzgados, demandas y conciliación", icon: Scale },
    { title: "Control Presupuestal", desc: "Revisión técnica de egresos y tesorería", icon: Shield },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 85;
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
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FFFDFC] bg-grid-pattern"
      aria-label="Presentación principal"
    >
      {/* 2026 Ambient Dynamic SVG Background Mesh */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FFE4DC]/80 via-[#F6B6A6]/40 to-transparent blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 left-0 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#FFF6F2] via-[#FFE4DC]/50 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#E88771]/15 blur-3xl pointer-events-none animate-float-slow" />

      {/* Decorative SVG Shapes */}
      <svg
        className="absolute top-20 right-10 w-48 h-48 text-[#E88771]/15 pointer-events-none hidden lg:block"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,73.1,41.7C64.8,54.2,53.8,64.7,40.8,71.6C27.8,78.5,13.9,81.8,-0.7,83C-15.3,84.1,-30.5,83.1,-43.8,76.5C-57.1,69.9,-68.4,57.7,-76.3,43.5C-84.2,29.3,-88.7,14.6,-87.3,0.8C-85.9,-13,-78.6,-26,-69.9,-38C-61.2,-50,-51.1,-61,-38.8,-69C-26.5,-77,-13.3,-82,0.8,-83.4C14.8,-84.7,29.7,-82.5,44.7,-76.4Z" transform="translate(100 100)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold 2026 Typography, Punchy Message & Interactive Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7">
            
            {/* Top Interactive Pill Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-subtle hover:border-[#E88771] transition-all">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E88771] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B94F3D]" />
              </span>
              <span>{PROFILE_DATA.hero.eyebrow}</span>
            </div>

            {/* H1 Headline with 2026 Montserrat Hierarchy */}
            <div className="space-y-3">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#181412] leading-[1.05]">
                Lizbeth <span className="text-gradient-coral">Bernal</span> Segundo
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#5E524E] leading-snug">
                {PROFILE_DATA.hero.headline}
              </p>
            </div>

            {/* Concise Modern Narrative */}
            <p className="text-[#5E524E] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PROFILE_DATA.hero.description}
            </p>

            {/* Interactive 3-Pill Switcher (Trend 2026) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeHighlight === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveHighlight(idx)}
                    className={`p-3 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#FFE4DC] border-[#E88771] shadow-card scale-[1.02]"
                        : "bg-[#FFFDFC]/80 border-[#EADDD8] hover:border-[#F6B6A6] hover:bg-[#FFF6F2]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Icon className={`w-4 h-4 ${isSelected ? "text-[#B94F3D]" : "text-[#5E524E]"}`} />
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#B94F3D]" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#181412] leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-[#5E524E] line-clamp-1 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex items-center gap-6 sm:gap-8 pt-2 border-t border-[#EADDD8]/80">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#B94F3D]">2025</span>
                <p className="text-[11px] font-medium text-[#5E524E] uppercase tracking-wider">Síndica en funciones</p>
              </div>
              <div className="h-8 w-px bg-[#EADDD8]" />
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#181412]">UVM</span>
                <p className="text-[11px] font-medium text-[#5E524E] uppercase tracking-wider">Maestría en curso</p>
              </div>
              <div className="h-8 w-px bg-[#EADDD8]" />
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#181412]">Toluca</span>
                <p className="text-[11px] font-medium text-[#5E524E] uppercase tracking-wider">& Villa de Allende</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#perfil"
                onClick={(e) => handleScrollTo(e, "perfil")}
                className="relative group overflow-hidden inline-flex items-center justify-center px-7 py-4 rounded-full bg-[#181412] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B94F3D] focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-300 shadow-md hover:shadow-glow"
              >
                <span>{PROFILE_DATA.hero.ctaPrimary}</span>
                <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-[#FFFDFC] text-[#181412] border border-[#EADDD8] hover:bg-[#FFE4DC] hover:border-[#E88771] font-bold text-xs uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200 shadow-sm"
              >
                <span>{PROFILE_DATA.hero.ctaSecondary}</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-[#B94F3D]" />
              </button>
            </div>
          </div>

          {/* Right Column: Holographic & Bento-style Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Floating 2026 Micro-Chips */}
              <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 p-2.5 rounded-2xl bg-[#FFFDFC]/95 backdrop-blur-md border border-[#EADDD8] shadow-card animate-float-slow">
                <span className="w-8 h-8 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] text-xs font-bold">
                  ⚖️
                </span>
                <div>
                  <p className="text-[11px] font-bold text-[#181412]">Derecho & Gestión</p>
                  <p className="text-[9px] text-[#5E524E]">Villa de Allende</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 z-20 hidden sm:flex items-center gap-2 p-2.5 rounded-2xl bg-[#FFFDFC]/95 backdrop-blur-md border border-[#EADDD8] shadow-card animate-float-delayed">
                <span className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="text-[11px] font-bold text-[#181412]">Sindicatura Activa</p>
                  <p className="text-[9px] text-emerald-600 font-semibold">2025–Actualidad</p>
                </div>
              </div>

              {/* Glowing Ambient Outer Border */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#B94F3D] via-[#E88771] to-[#F6B6A6] opacity-30 blur-lg" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] p-4 sm:p-5 shadow-card overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF6F2] via-[#FFE4DC]/60 to-[#FFFDFC] flex flex-col items-center justify-center text-center p-6 border border-[#EADDD8]/80">
                  
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

                  {/* Modern 2026 Placeholder */}
                  {imageError && (
                    <div className="flex flex-col items-center justify-center space-y-4 max-w-xs">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#FFE4DC] to-[#F6B6A6] border-2 border-[#EADDD8] flex items-center justify-center shadow-card">
                          <span className="font-extrabold text-3xl text-[#B94F3D]">
                            {PROFILE_DATA.personal.monogram}
                          </span>
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#181412] text-white flex items-center justify-center text-xs">
                          ⚖️
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-extrabold text-xl text-[#181412]">
                          {PROFILE_DATA.personal.fullName}
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-[#B94F3D] font-bold">
                          Perfil Profesional
                        </p>
                      </div>

                      <div className="px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-[#EADDD8] text-[11px] text-[#5E524E] leading-relaxed">
                        Fotografía oficial en proceso de integración para <span className="font-bold text-[#181412]">{PROFILE_DATA.site.domain}</span>
                      </div>
                    </div>
                  )}

                  {/* Modern Bottom Overlay Pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#FFFDFC]/95 backdrop-blur-md rounded-xl p-3 border border-[#EADDD8] flex items-center justify-between text-left shadow-sm">
                    <div>
                      <p className="text-xs font-bold text-[#181412] leading-tight">
                        {PROFILE_DATA.personal.currentRole}
                      </p>
                      <p className="text-[10px] text-[#5E524E] mt-0.5">
                        {PROFILE_DATA.personal.location}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase bg-[#FFE4DC] text-[#B94F3D] border border-[#EADDD8]">
                      Activa
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-14">
          <a
            href="#perfil"
            onClick={(e) => handleScrollTo(e, "perfil")}
            className="group flex flex-col items-center gap-1.5 text-xs text-[#5E524E] hover:text-[#B94F3D] transition-colors focus-visible:ring-2 focus-visible:ring-[#B94F3D] rounded-md p-1"
            aria-label="Explorar perfil bento"
          >
            <span className="text-[10px] tracking-widest uppercase font-bold text-[#5E524E] group-hover:text-[#B94F3D]">Descubrir</span>
            <div className="w-8 h-8 rounded-full bg-[#FFE4DC] flex items-center justify-center group-hover:bg-[#F6B6A6]/60 transition-colors">
              <ArrowDown className="w-4 h-4 text-[#B94F3D] animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
