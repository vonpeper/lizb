"use client";

import Image from "next/image";
import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { GraduationCap, Scale, Landmark, Sparkles, CheckCircle2 } from "lucide-react";

export function Profile() {
  const [selectedMode, setSelectedMode] = useState<number>(0);
  const currentMode = PROFILE_DATA.profileBento.modes[selectedMode];

  return (
    <section
      id="perfil"
      className="py-20 lg:py-28 bg-[#FFF6F2] border-y border-[#EADDD8] relative overflow-hidden bg-dot-matrix"
      aria-label="Perfil profesional y visión jurídica"
    >
      {/* Ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FFE4DC]/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#F6B6A6]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE4DC] border border-[#EADDD8] text-[#B94F3D] text-xs font-extrabold tracking-wider uppercase shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#B94F3D]" />
            <span>Perfil Bento 2026</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#181412]">
            {PROFILE_DATA.profileBento.title}
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E] font-medium">
            {PROFILE_DATA.profileBento.subtitle}
          </p>
        </div>

        {/* Bento Grid Architecture: Unique, Non-repeated High-Res Images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento 1: Large Interactive Card with Clean High-Tech Presentation (Span 8) */}
          <div className="md:col-span-12 lg:col-span-8 relative p-6 sm:p-8 rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-card flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              {/* Interactive Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-[#EADDD8]">
                {PROFILE_DATA.profileBento.modes.map((mode, idx) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setSelectedMode(idx)}
                    className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                      selectedMode === idx
                        ? "bg-[#181412] text-white shadow-sm scale-[1.02]"
                        : "bg-[#FFF6F2] text-[#5E524E] hover:bg-[#FFE4DC] hover:text-[#181412]"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Content Display */}
              <div className="space-y-4 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-[#FFE4DC] text-[#B94F3D]">
                    {currentMode.badge}
                  </span>
                  <span className="text-xs font-bold text-[#5E524E]">Edo. de México</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#181412] leading-snug">
                  {currentMode.headline}
                </h3>

                {/* Punchy Bullet Pills */}
                <div className="space-y-2.5 pt-2">
                  {currentMode.bullets.map((bullet, bIdx) => (
                    <div
                      key={bIdx}
                      className="p-3.5 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] flex items-start gap-3 text-xs sm:text-sm font-semibold text-[#181412]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#B94F3D] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-[#EADDD8] flex items-center justify-between text-xs font-bold text-[#5E524E]">
              <span>Villa de Allende & Toluca</span>
              <span className="text-[#B94F3D]">Licenciatura (ISIMA) + Maestría (UVM)</span>
            </div>
          </div>

          {/* Bento 2: Sindicatura Municipal Card with Real Plaza y Monumento de Villa de Allende (Span 4) */}
          <div className="md:col-span-12 lg:col-span-4 relative p-6 sm:p-8 rounded-3xl text-white flex flex-col justify-between shadow-floating overflow-hidden group min-h-[340px]">
            {/* Background Image: Crisp Real Plaza y Monumento de Villa de Allende */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/villa-allende-plaza-monumento.jpg"
                alt="Plaza y Monumento de Villa de Allende, Estado de México"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181412] via-[#181412]/80 to-[#181412]/35" />
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-[#F6B6A6] shadow-sm">
                  <Landmark className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/40 backdrop-blur-md border border-emerald-300 text-emerald-200 text-[11px] font-extrabold shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Activa 2025
                </span>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#F6B6A6]">
                  Cargo Institucional
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
                  Síndica Municipal
                </h3>
                <p className="text-xs text-[#EADDD8] font-semibold drop-shadow-sm">
                  H. Ayuntamiento de Villa de Allende
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/20">
                <div className="text-xs text-white flex items-center gap-2 font-medium drop-shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6B6A6]" />
                  <span>Defensa legal e informes de Cabildo</span>
                </div>
                <div className="text-xs text-white flex items-center gap-2 font-medium drop-shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6B6A6]" />
                  <span>Control de presupuestos y Tesorería</span>
                </div>
                <div className="text-xs text-white flex items-center gap-2 font-medium drop-shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F6B6A6]" />
                  <span>Inscripción de bienes en RPPyC</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-5 mt-4 border-t border-white/20 flex items-center justify-between text-xs text-[#F6B6A6] font-bold">
              <span>Sindicatura Municipal</span>
              <span>Villa de Allende</span>
            </div>
          </div>

          {/* Bento 3: Formación Posgrado with Portales de Villa de Allende (Span 6) */}
          <div className="md:col-span-6 relative p-6 sm:p-8 rounded-3xl border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-card flex flex-col justify-between overflow-hidden group min-h-[300px]">
            {/* Background Image: Portales de Villa de Allende */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/villa-allende-portales.jpg"
                alt="Portales coloniales de Villa de Allende"
                fill
                className="object-cover opacity-35 group-hover:scale-105 group-hover:opacity-45 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDFC] via-[#FFFDFC]/85 to-[#FFFDFC]/40" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FFE4DC] border border-[#EADDD8] flex items-center justify-center text-[#B94F3D] shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FFE4DC] text-[#B94F3D] text-[11px] font-extrabold uppercase animate-pulse">
                  En curso
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#181412]">
                  Maestría en Admón. Pública
                </h3>
                <p className="text-xs font-bold text-[#B94F3D] mt-0.5">
                  Universidad del Valle de México · Campus Metepec
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#181412] leading-relaxed font-semibold">
                Especialización en finanzas gubernamentales, planeación y control administrativo institucional.
              </p>
            </div>

            <div className="relative z-10 pt-4 mt-4 border-t border-[#EADDD8] flex items-center justify-between text-xs font-extrabold text-[#181412]">
              <span>Periodo: 2025–Presente</span>
              <span className="text-[#B94F3D]">UVM Metepec</span>
            </div>
          </div>

          {/* Bento 4: Licenciatura en Derecho con Código Nacional y Bandera (Span 6) */}
          <div className="md:col-span-6 relative p-6 sm:p-8 rounded-3xl border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-card flex flex-col justify-between overflow-hidden group min-h-[300px]">
            {/* Background Image: Código Nacional & Bandera Mexicana */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/mexican-law-codigo-nacional.jpg"
                alt="Código Nacional de Procedimientos Civiles y Familiares - Derecho Mexicano"
                fill
                className="object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDFC] via-[#FFFDFC]/85 to-[#FFFDFC]/40" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FFE4DC] border border-[#EADDD8] flex items-center justify-center text-[#B94F3D] shadow-sm">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FFF6F2] text-[#5E524E] border border-[#EADDD8] text-[11px] font-extrabold">
                  Concluida
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#181412]">
                  Licenciatura en Derecho
                </h3>
                <p className="text-xs font-bold text-[#B94F3D] mt-0.5">
                  ISIMA Universidad Toluca (2019–2022)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#181412] leading-relaxed font-semibold">
                Formación procesal, técnica de demandas, amparos, convenios y práctica judicial en el Estado de México.
              </p>
            </div>

            <div className="relative z-10 pt-4 mt-4 border-t border-[#EADDD8] flex items-center justify-between text-xs font-extrabold text-[#181412]">
              <span>Toluca, Edo. Méx.</span>
              <span className="text-[#B94F3D]">Título de Abogada</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
