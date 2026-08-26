"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { ShieldCheck, Scale, HeartHandshake, Sparkles } from "lucide-react";

export function Principles() {
  const [activeCard, setActiveCard] = useState<string>("prin-1");

  const iconMap: Record<string, React.ReactNode> = {
    "prin-1": <Scale className="w-6 h-6 text-[#B94F3D]" />,
    "prin-2": <ShieldCheck className="w-6 h-6 text-[#B94F3D]" />,
    "prin-3": <HeartHandshake className="w-6 h-6 text-[#B94F3D]" />,
  };

  return (
    <section
      id="principios"
      className="py-20 lg:py-28 bg-[#FFFDFC] relative overflow-hidden"
      aria-label="Principios rectores de ejercicio profesional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-bold tracking-wider uppercase shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#E88771]" />
            <span>Ética & Visión</span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#181412]">
            Principios Profesionales
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E]">
            Fundamentos éticos que orientan el análisis jurídico, la responsabilidad administrativa y el servicio municipal.
          </p>
        </div>

        {/* 3 Interactive Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILE_DATA.principles.map((item, idx) => {
            const isHovered = activeCard === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isHovered
                    ? "bg-gradient-to-br from-[#FFFDFC] via-[#FFF6F2] to-[#FFE4DC]/50 border-[#E88771] shadow-card scale-[1.02]"
                    : "bg-[#FFF6F2]/60 border-[#EADDD8] shadow-subtle hover:border-[#F6B6A6]"
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] border border-[#EADDD8] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {iconMap[item.id]}
                    </div>
                    <span className="text-xs font-extrabold text-[#E88771] px-2.5 py-1 rounded-full bg-white border border-[#EADDD8]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-[#181412] group-hover:text-[#B94F3D] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-[#B94F3D] uppercase tracking-wider">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#5E524E] leading-relaxed pt-3 border-t border-[#EADDD8]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EADDD8]/60 text-[11px] font-bold text-[#181412] flex items-center justify-between">
                  <span>Pilar rector</span>
                  <span className="w-2 h-2 rounded-full bg-[#E88771]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
