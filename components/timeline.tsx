"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Calendar, MapPin, CheckCircle2, Briefcase, Sparkles, ChevronRight } from "lucide-react";

export function Timeline() {
  const [filter, setFilter] = useState<"all" | "public" | "private">("all");
  const [expandedId, setExpandedId] = useState<string>("exp-2025");

  const filteredItems = PROFILE_DATA.timeline.filter((item) => {
    if (filter === "public") return item.category === "public";
    if (filter === "private") return item.category === "private";
    return true;
  });

  return (
    <section
      id="experiencia"
      className="py-20 lg:py-28 bg-[#FFFDFC] relative overflow-hidden bg-grid-pattern"
      aria-label="Cronología de trayectoria profesional"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#FFE4DC]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-xs font-extrabold tracking-wider uppercase shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#E88771]" />
            <span>Línea Cronológica</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#181412]">
            Trayectoria en el Tiempo
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E] font-medium">
            Evolución profesional desde los juzgados y despachos en Toluca hasta la Sindicatura Municipal en Villa de Allende.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-[#181412] text-white shadow-sm scale-105"
                  : "bg-[#FFF6F2] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              Todas ({PROFILE_DATA.timeline.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("public")}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                filter === "public"
                  ? "bg-[#181412] text-white shadow-sm scale-105"
                  : "bg-[#FFF6F2] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              🏛️ Sindicatura Municipal (1)
            </button>
            <button
              type="button"
              onClick={() => setFilter("private")}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                filter === "private"
                  ? "bg-[#181412] text-white shadow-sm scale-105"
                  : "bg-[#FFF6F2] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              ⚖️ Litigio Privado (2)
            </button>
          </div>
        </div>

        {/* Dynamic Connected Visual Timeline Track */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Connecting Neon Line */}
          <div className="absolute top-6 bottom-6 left-5 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#B94F3D] via-[#E88771] to-[#EADDD8] z-0 hidden sm:block" />
          <div className="absolute top-6 bottom-6 left-5 w-0.5 bg-gradient-to-b from-[#B94F3D] via-[#E88771] to-[#EADDD8] z-0 sm:hidden" />

          {/* Timeline Milestones */}
          <div className="space-y-8 sm:space-y-12">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isCurrent = item.current;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-6 sm:gap-12 pl-12 sm:pl-0 group`}
                >
                  {/* Glowing Milestone Circle Node */}
                  <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-[#FFFDFC] border-4 border-[#B94F3D] shadow-glow flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                    <span className="w-2 h-2 rounded-full bg-[#B94F3D]" />
                  </div>

                  {/* Card Content (Span Half width on desktop) */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div
                      onClick={() => setExpandedId(item.id)}
                      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 shadow-card cursor-pointer ${
                        isCurrent
                          ? "bg-gradient-to-br from-[#FFFDFC] via-[#FFF6F2] to-[#FFE4DC]/60 border-[#E88771] shadow-card hover:shadow-glow"
                          : "bg-[#FFFDFC] border-[#EADDD8] hover:border-[#F6B6A6]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#EADDD8]">
                        <span className="px-3 py-1 rounded-full bg-[#FFE4DC] text-[#B94F3D] text-[11px] font-extrabold">
                          {item.tag}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#5E524E]">
                          <Calendar className="w-3.5 h-3.5 text-[#B94F3D]" />
                          {item.period}
                        </span>
                      </div>

                      <div className="space-y-1 pt-3">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#181412]">
                          {item.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-[#B94F3D]">
                          {item.institution}
                        </p>
                        <p className="text-[11px] text-[#5E524E] flex items-center gap-1 font-medium">
                          <MapPin className="w-3 h-3 text-[#E88771]" />
                          {item.location}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 pt-4 mt-3 border-t border-[#EADDD8]">
                        {item.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-[#181412] font-semibold">
                            <CheckCircle2 className="w-4 h-4 text-[#B94F3D] shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty side placeholder on desktop */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
