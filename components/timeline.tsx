"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Calendar, MapPin, CheckCircle2, Landmark, Briefcase, Filter } from "lucide-react";

export function Timeline() {
  const [filter, setFilter] = useState<"all" | "public" | "private">("all");

  const filteredItems = PROFILE_DATA.timeline.filter((item) => {
    if (filter === "public") return item.current;
    if (filter === "private") return !item.current;
    return true;
  });

  return (
    <section
      id="experiencia"
      className="py-20 lg:py-28 bg-[#FFF6F2] border-t border-[#EADDD8] relative overflow-hidden"
      aria-label="Cronología de trayectoria profesional"
    >
      {/* Dynamic ambient shapes */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#FFE4DC]/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#F6B6A6]/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE4DC] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-bold tracking-wider uppercase shadow-subtle">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Evolución Profesional</span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#181412]">
            Trayectoria y Experiencia
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E]">
            Línea temporal interactiva que refleja el recorrido desde la técnica jurídica en tribunales hasta el servicio público municipal.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === "all"
                  ? "bg-[#181412] text-white shadow-sm"
                  : "bg-[#FFFDFC] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              Todas ({PROFILE_DATA.timeline.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("public")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === "public"
                  ? "bg-[#181412] text-white shadow-sm"
                  : "bg-[#FFFDFC] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              🏛️ Servicio Público (1)
            </button>
            <button
              type="button"
              onClick={() => setFilter("private")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === "private"
                  ? "bg-[#181412] text-white shadow-sm"
                  : "bg-[#FFFDFC] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              ⚖️ Litigio Privado (2)
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Vertical Gradient Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-[#B94F3D] via-[#E88771] to-[#EADDD8] -translate-x-1/2 rounded-full" />

          <div className="space-y-10 md:space-y-14">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start group animate-fade-in"
                >
                  {/* Glowing Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-9 h-9 rounded-2xl bg-[#FFFDFC] border-2 border-[#B94F3D] flex items-center justify-center shadow-card z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <span
                      className={`w-3.5 h-3.5 rounded-lg ${
                        item.current ? "bg-[#B94F3D] animate-pulse" : "bg-[#E88771]"
                      }`}
                    />
                  </div>

                  {/* Content Card (Alternating on desktop) */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-card space-y-4 group-hover:-translate-y-1">
                      
                      {/* Meta badges: Period & Location */}
                      <div
                        className={`flex flex-wrap items-center gap-2 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                            item.current
                              ? "bg-[#FFE4DC] text-[#B94F3D] border border-[#EADDD8]"
                              : "bg-[#FFF6F2] text-[#5E524E] border border-[#EADDD8]"
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs text-[#5E524E] font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#E88771]" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Role & Institution */}
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#181412]">
                          {item.role}
                        </h3>
                        <p className="text-sm font-bold text-[#B94F3D]">
                          {item.institution}
                        </p>
                      </div>

                      {/* Responsibilities list */}
                      <div className="pt-3 border-t border-[#EADDD8]">
                        <p
                          className={`text-xs font-extrabold uppercase tracking-wider text-[#181412] mb-3 ${
                            isEven ? "md:text-right" : "md:text-left"
                          }`}
                        >
                          Atribuciones y Práctica
                        </p>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className={`flex items-start gap-2.5 text-xs text-[#5E524E] leading-relaxed font-medium ${
                                isEven ? "md:flex-row-reverse md:text-right" : "text-left"
                              }`}
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#B94F3D] mt-0.5 shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
