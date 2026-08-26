"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Scale, FileCheck2, Building2, BookOpen, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

export function Expertise() {
  const [selectedId, setSelectedId] = useState<string>("exp-1");

  const iconMap: Record<string, React.ReactNode> = {
    "exp-1": <Scale className="w-6 h-6 text-[#B94F3D]" />,
    "exp-2": <FileCheck2 className="w-6 h-6 text-[#B94F3D]" />,
    "exp-3": <Building2 className="w-6 h-6 text-[#B94F3D]" />,
    "exp-4": <BookOpen className="w-6 h-6 text-[#B94F3D]" />,
  };

  return (
    <section
      id="areas"
      className="py-20 lg:py-28 bg-[#FFFDFC] relative overflow-hidden"
      aria-label="Áreas de experiencia y atribuciones"
    >
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dot-matrix pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-bold tracking-wider uppercase shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#E88771]" />
            <span>Campos de Práctica</span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#181412]">
            Especialidades y Atribuciones Clave
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E]">
            Pilares técnicos de acción que combinan la defensa legal, la supervisión presupuestal y la regularización patrimonial.
          </p>
        </div>

        {/* 4 Interactive Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROFILE_DATA.expertise.map((item) => {
            const isHovered = selectedId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedId(item.id)}
                className={`group relative p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? "bg-gradient-to-br from-[#FFFDFC] via-[#FFF6F2] to-[#FFE4DC]/40 border-[#E88771] shadow-card scale-[1.01]"
                    : "bg-[#FFFDFC] border-[#EADDD8] shadow-subtle hover:border-[#F6B6A6]"
                }`}
              >
                {/* Card Top Pill & Icon */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] border border-[#EADDD8] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {iconMap[item.id]}
                    </div>
                    <span className="font-extrabold text-2xl text-[#E88771]/60 tracking-wider">
                      {item.number}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#181412] group-hover:text-[#B94F3D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#5E524E] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bullet deliverables with modern badges */}
                  <ul className="space-y-2.5 pt-3 border-t border-[#EADDD8]">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#5E524E] leading-normal font-medium">
                        <CheckCircle className="w-4 h-4 text-[#B94F3D] mt-0.5 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 border-t border-[#EADDD8]/70 flex items-center justify-between text-xs font-bold text-[#B94F3D]">
                  <span className="uppercase tracking-wider text-[10px]">Competencia Institucional</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
