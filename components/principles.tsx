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
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-xs font-extrabold tracking-wider uppercase shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#E88771]" />
            <span>Fundamentos Éticos</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#181412]">
            Principios de Actuación
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E] font-medium">
            Criterios normativos que guían la toma de decisiones y la gestión municipal.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILE_DATA.principles.map((item, idx) => {
            const isHovered = activeCard === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCard(item.id)}
                className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isHovered
                    ? "bg-gradient-to-br from-[#FFFDFC] via-[#FFF6F2] to-[#FFE4DC]/50 border-[#E88771] shadow-card scale-[1.02]"
                    : "bg-[#FFF6F2]/60 border-[#EADDD8] shadow-subtle hover:border-[#F6B6A6]"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] border border-[#EADDD8] flex items-center justify-center shadow-sm">
                      {iconMap[item.id]}
                    </div>
                    <span className="text-xs font-extrabold text-[#E88771] px-3 py-1 rounded-full bg-white border border-[#EADDD8]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <h3 className="text-2xl font-extrabold text-[#181412]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-extrabold text-[#B94F3D] uppercase tracking-wider">
                      {item.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5E524E] leading-relaxed pt-2 border-t border-[#EADDD8] font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#EADDD8]/60 text-xs font-bold text-[#181412] flex items-center justify-between">
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
