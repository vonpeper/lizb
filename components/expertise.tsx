"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Scale, FileCheck2, BookOpen, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export function Expertise() {
  const [selectedId, setSelectedId] = useState<string>("exp-1");

  const iconMap: Record<string, React.ReactNode> = {
    "exp-1": <Scale className="w-6 h-6 text-[#B94F3D]" />,
    "exp-2": <FileCheck2 className="w-6 h-6 text-[#B94F3D]" />,
    "exp-4": <BookOpen className="w-6 h-6 text-[#B94F3D]" />,
  };

  const items = Array.isArray(PROFILE_DATA.expertise) ? PROFILE_DATA.expertise : [];

  return (
    <section
      id="areas"
      className="py-20 lg:py-28 bg-[#FFFDFC] relative overflow-hidden bg-grid-pattern"
      aria-label="Áreas de experiencia y atribuciones"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-xs font-extrabold tracking-wider uppercase shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#E88771]" />
            <span>3 Pilares de Ejercicio</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#181412]">
            Especialidad Jurídica & Municipal
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E] font-medium">
            Práctica jurídica adaptada al marco normativo municipal y al sistema legal mexicano.
          </p>
        </div>

        {/* 3 Feature Cards Grid: Balanced 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => {
            const isHovered = selectedId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setSelectedId(item.id)}
                className={`relative p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden ${
                  isHovered
                    ? "bg-gradient-to-br from-[#FFFDFC] via-[#FFF6F2] to-[#FFE4DC]/50 border-[#E88771] shadow-card scale-[1.01]"
                    : "bg-[#FFFDFC] border-[#EADDD8] shadow-subtle hover:border-[#F6B6A6]"
                }`}
              >
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] border border-[#EADDD8] flex items-center justify-center shadow-sm">
                      {iconMap[item.id] || <Scale className="w-6 h-6 text-[#B94F3D]" />}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[11px] font-extrabold text-[#B94F3D]">
                      {item.tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-[#181412]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#5E524E]">
                      {item.summary}
                    </p>
                  </div>

                  {/* Bullet Pills */}
                  <div className="space-y-2 pt-2 border-t border-[#EADDD8]/80">
                    {item.points?.map((point, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#181412] font-semibold">
                        <CheckCircle2 className="w-4 h-4 text-[#B94F3D] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 mt-4 border-t border-[#EADDD8]/70 flex items-center justify-between text-xs font-bold text-[#B94F3D]">
                  <span className="uppercase tracking-wider text-[10px]">Atribución Municipal</span>
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
