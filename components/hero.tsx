"use client";

import Image from "next/image";
import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { ArrowDown, ArrowUpRight, Scale, Shield, Landmark, Sparkles, ChevronRight, Check } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [activeStat, setActiveStat] = useState<number>(0);

  const statCards = [
    { title: "Sindicatura Municipal", sub: "Villa de Allende (2025–Pres.)", icon: Landmark, tag: "En funciones" },
    { title: "Maestría en Admón. Pública", sub: "UVM Campus Metepec", icon: Scale, tag: "En curso" },
    { title: "Litigio & Tribunales", sub: "Toluca (2019–2024)", icon: Shield, tag: "Experiencia" },
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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FFFDFC] bg-grid-pattern"
      aria-label="Presentación principal"
    >
      {/* 2026 Ambient Dynamic SVG Background Mesh */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FFE4DC]/80 via-[#F6B6A6]/40 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-0 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#FFF6F2] via-[#FFE4DC]/50 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Ultra Modern Youthful Typography & Interactive Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Live Status Pill Tag */}
            <div className="inline-flex items-center gap-2.5 self-start px-4 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-xs font-bold tracking-wider uppercase shadow-subtle hover:border-[#E88771] transition-all">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E88771] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B94F3D]" />
              </span>
              <span>{PROFILE_DATA.hero.badge}</span>
            </div>

            {/* Ultra-bold Heading in Outfit */}
            <div className="space-y-2">
              <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#181412] leading-[1.02]">
                Lizbeth <span className="text-gradient-coral">Bernal</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#181412]/80 leading-snug">
                {PROFILE_DATA.hero.punchline}
              </p>
            </div>

            {/* Crisp 1-line Subtext */}
            <p className="text-[#5E524E] text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              {PROFILE_DATA.hero.subtext}
            </p>

            {/* Interactive 3-Pill Switcher (Interactive Zone) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {statCards.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = activeStat === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveStat(idx)}
                    className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? "bg-[#FFE4DC] border-[#E88771] shadow-card scale-[1.03]"
                        : "bg-[#FFFDFC]/90 border-[#EADDD8] hover:border-[#F6B6A6] hover:bg-[#FFF6F2]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? "bg-[#B94F3D] text-white" : "bg-[#FFF6F2] text-[#B94F3D]"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${isSelected ? "bg-[#B94F3D] text-white" : "bg-[#FFE4DC] text-[#B94F3D]"}`}>
                        {item.tag}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-[#181412] leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[10px] text-[#5E524E] font-medium mt-0.5 truncate">
                        {item.sub}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <a
                href="#perfil"
                onClick={(e) => handleScrollTo(e, "perfil")}
                className="group inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#181412] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#B94F3D] focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-300 shadow-md hover:shadow-glow"
              >
                <span>Conocer Trayectoria</span>
                <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#FFFDFC] text-[#181412] border border-[#EADDD8] hover:bg-[#FFE4DC] hover:border-[#E88771] font-extrabold text-xs uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200 shadow-sm"
              >
                <span>Contacto Directo</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-[#B94F3D]" />
              </button>
            </div>
          </div>

          {/* Right Column: Holographic 2026 Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Floating Interactive Micro-chips */}
              <div className="absolute -top-3 -left-3 z-20 hidden sm:flex items-center gap-2.5 p-3 rounded-2xl bg-[#FFFDFC]/95 backdrop-blur-md border border-[#EADDD8] shadow-card animate-float-slow">
                <span className="w-8 h-8 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] text-xs font-bold">
                  ⚖️
                </span>
                <div>
                  <p className="text-xs font-extrabold text-[#181412]">Defensa Jurídica</p>
                  <p className="text-[10px] text-[#5E524E]">Villa de Allende</p>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-3 z-20 hidden sm:flex items-center gap-2.5 p-3 rounded-2xl bg-[#FFFDFC]/95 backdrop-blur-md border border-[#EADDD8] shadow-card animate-float-delayed">
                <span className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                  ✓
                </span>
                <div>
                  <p className="text-xs font-extrabold text-[#181412]">Sindicatura Activa</p>
                  <p className="text-[10px] text-emerald-600 font-bold">Edo. de México</p>
                </div>
              </div>

              {/* Ambient Glowing Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#B94F3D] via-[#E88771] to-[#F6B6A6] opacity-35 blur-xl" />

              {/* Outer Card */}
              <div className="relative rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] p-4 sm:p-5 shadow-card overflow-hidden">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF6F2] via-[#FFE4DC]/60 to-[#FFFDFC] flex flex-col items-center justify-center text-center p-6 border border-[#EADDD8]">
                  
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

                  {/* 2026 Visual Placeholder */}
                  {imageError && (
                    <div className="flex flex-col items-center justify-center space-y-4 max-w-xs">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#FFE4DC] to-[#F6B6A6] border-2 border-[#EADDD8] flex items-center justify-center shadow-card">
                          <span className="font-extrabold text-3xl text-[#B94F3D]">
                            {PROFILE_DATA.personal.monogram}
                          </span>
                        </div>
                        <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#181412] text-white flex items-center justify-center text-xs">
                          ⚖️
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-extrabold text-2xl text-[#181412]">
                          {PROFILE_DATA.personal.fullName}
                        </h3>
                        <p className="text-xs uppercase tracking-wider text-[#B94F3D] font-extrabold">
                          Perfil Profesional 2026
                        </p>
                      </div>

                      <div className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-[#EADDD8] text-xs text-[#5E524E] font-medium">
                        Fotografía en proceso para <span className="font-bold text-[#181412]">{PROFILE_DATA.site.domain}</span>
                      </div>
                    </div>
                  )}

                  {/* Modern Bottom Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#FFFDFC]/95 backdrop-blur-md rounded-2xl p-3 border border-[#EADDD8] flex items-center justify-between text-left shadow-sm">
                    <div>
                      <p className="text-xs font-extrabold text-[#181412] leading-tight">
                        {PROFILE_DATA.personal.currentRole}
                      </p>
                      <p className="text-[10px] text-[#5E524E] font-medium mt-0.5">
                        {PROFILE_DATA.personal.location}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-xl text-[10px] font-extrabold uppercase bg-[#FFE4DC] text-[#B94F3D] border border-[#EADDD8]">
                      2025–Pres.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
