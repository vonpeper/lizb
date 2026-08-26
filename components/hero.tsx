"use client";

import Image from "next/image";
import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { ArrowUpRight, Scale, Shield, Landmark, Sparkles, ChevronRight, Check } from "lucide-react";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  const heroTabs = [
    {
      id: "sindicatura",
      title: "Sindicatura Municipal",
      tag: "En funciones 2025",
      icon: Landmark,
      headline: "Defensa jurídica & control del patrimonio",
      badgeText: "Villa de Allende",
      stat: "2025",
      statLabel: "Cabildo Activo",
    },
    {
      id: "litigio",
      title: "Litigio Privado",
      tag: "Experiencia Procesal",
      icon: Scale,
      headline: "Demanda, amparo y conciliación en tribunales",
      badgeText: "Toluca, Edo. Méx.",
      stat: "3+ Años",
      statLabel: "Práctica en Juzgados",
    },
    {
      id: "posgrado",
      title: "Maestría en Admón. Pública",
      tag: "UVM Metepec",
      icon: Shield,
      headline: "Especialización continua en políticas y finanzas",
      badgeText: "Campus Metepec",
      stat: "UVM",
      statLabel: "En Curso 2025",
    },
  ];

  const currentTab = heroTabs[activeTab];
  const CurrentIcon = currentTab.icon;

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
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-14 lg:pt-32 lg:pb-20 overflow-hidden bg-[#FFFDFC] bg-grid-pattern"
      aria-label="Presentación principal"
    >
      {/* Apple Ambient Glowing Aura */}
      <div className="absolute top-1/4 right-0 w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full bg-gradient-to-br from-[#FFE4DC] via-[#F6B6A6]/40 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute -bottom-10 -left-10 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#FFF6F2] via-[#FFE4DC]/50 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column Left: Identity & Keynote Presentation */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6">
            
            {/* Live Status Chip */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] sm:text-xs font-extrabold tracking-wider uppercase shadow-subtle hover:border-[#E88771] transition-all">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E88771] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B94F3D]" />
              </span>
              <span>Síndica Municipal · Villa de Allende · 2025</span>
            </div>

            {/* Massive Bold Headline in Outfit */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#181412] leading-[0.98]">
                Lizbeth <span className="text-gradient-coral">Bernal</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#181412]/85 tracking-tight pt-1">
                Abogada &middot; Servidora Pública
              </p>
            </div>

            {/* Concise Pitch */}
            <p className="text-[#5E524E] text-base sm:text-lg leading-relaxed max-w-xl font-medium">
              Representación legal institucional, defensa del patrimonio municipal y práctica jurídica con rigor normativo en el Estado de México.
            </p>

            {/* Interactive 3-Tab Card Switcher */}
            <div className="p-4 sm:p-5 rounded-3xl bg-[#FFFDFC]/90 border border-[#EADDD8] shadow-card space-y-3.5 backdrop-blur-md">
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8]/80 overflow-x-auto">
                {heroTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer text-center truncate ${
                      activeTab === idx
                        ? "bg-[#181412] text-white shadow-sm scale-[1.02]"
                        : "text-[#5E524E] hover:text-[#181412] hover:bg-[#FFE4DC]/60"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Live Selected View */}
              <div className="flex items-center justify-between gap-4 pt-1 animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] flex items-center justify-center text-[#B94F3D] shadow-sm shrink-0">
                    <CurrentIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#FFE4DC] text-[#B94F3D]">
                        {currentTab.tag}
                      </span>
                      <span className="text-[10px] text-[#5E524E] font-bold">
                        {currentTab.badgeText}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-extrabold text-[#181412] mt-0.5 leading-snug">
                      {currentTab.headline}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0 border-l border-[#EADDD8] pl-4 hidden sm:block">
                  <span className="text-xl font-extrabold text-[#B94F3D] leading-none block">
                    {currentTab.stat}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#5E524E]">
                    {currentTab.statLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#perfil"
                onClick={(e) => handleScrollTo(e, "perfil")}
                className="group inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#181412] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#B94F3D] focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-300 shadow-md hover:shadow-glow cursor-pointer"
              >
                <span>Explorar Trayectoria</span>
                <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center px-7 py-4 rounded-2xl bg-[#FFFDFC] text-[#181412] border border-[#EADDD8] hover:bg-[#FFE4DC] hover:border-[#E88771] font-extrabold text-xs uppercase tracking-wider focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Contacto Directo</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-[#B94F3D]" />
              </button>
            </div>
          </div>

          {/* Column Right: Portrait of Lizbeth Bernal with Glowing Floating Chips */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Floating Chip 1 */}
              <div className="absolute -top-3 -left-2 z-20 flex items-center gap-2 p-2.5 rounded-2xl bg-[#FFFDFC]/95 backdrop-blur-md border border-[#EADDD8] shadow-card animate-float-slow">
                <span className="w-7 h-7 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] text-xs font-extrabold">
                  ⚖️
                </span>
                <div>
                  <p className="text-[11px] font-extrabold text-[#181412]">Abogada Titulada</p>
                  <p className="text-[9px] text-[#5E524E]">ISIMA Universidad</p>
                </div>
              </div>

              {/* Floating Chip 2 */}
              <div className="absolute -bottom-3 -right-2 z-20 flex items-center gap-2 p-2.5 rounded-2xl bg-[#FFFDFC]/95 backdrop-blur-md border border-[#EADDD8] shadow-card animate-float-delayed">
                <span className="w-7 h-7 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-extrabold">
                  ✓
                </span>
                <div>
                  <p className="text-[11px] font-extrabold text-[#181412]">Sindicatura Activa</p>
                  <p className="text-[9px] text-emerald-600 font-bold">2025–Presente</p>
                </div>
              </div>

              {/* Glowing Outer Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#B94F3D] via-[#E88771] to-[#F6B6A6] opacity-40 blur-xl" />

              {/* Portrait Frame Container */}
              <div className="relative rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] p-3.5 sm:p-4 shadow-card overflow-hidden">
                <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#FFF6F2] via-[#FFE4DC]/50 to-[#FFFDFC] flex flex-col items-center justify-center text-center border border-[#EADDD8]">
                  
                  {!imageError ? (
                    <Image
                      src="/images/lizbeth-bernal-retrato.jpg"
                      alt={PROFILE_DATA.personal.portraitAlt}
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 450px"
                      className="object-cover object-top"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-3.5 max-w-xs p-6">
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-[#FFE4DC] to-[#F6B6A6] border-2 border-[#EADDD8] flex items-center justify-center shadow-card">
                        <span className="font-extrabold text-3xl text-[#B94F3D]">
                          {PROFILE_DATA.personal.monogram}
                        </span>
                      </div>
                      <div className="space-y-0.5">
                        <h3 className="font-extrabold text-xl text-[#181412]">
                          {PROFILE_DATA.personal.fullName}
                        </h3>
                        <p className="text-[11px] uppercase tracking-wider text-[#B94F3D] font-extrabold">
                          Perfil Profesional
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Bottom Pill */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-[#FFFDFC]/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-[#EADDD8] flex items-center justify-between text-left shadow-sm z-10">
                    <div>
                      <p className="text-xs font-extrabold text-[#181412] leading-tight">
                        {PROFILE_DATA.personal.currentRole}
                      </p>
                      <p className="text-[10px] text-[#5E524E] font-bold mt-0.5">
                        {PROFILE_DATA.personal.location}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-xl text-[10px] font-extrabold uppercase bg-[#FFE4DC] text-[#B94F3D] border border-[#EADDD8]">
                      2025
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
