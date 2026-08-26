"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Calendar, MapPin, CheckCircle2, Briefcase } from "lucide-react";

export function Timeline() {
  const [filter, setFilter] = useState<"all" | "public" | "private">("all");

  const filteredItems = PROFILE_DATA.timeline.filter((item) => {
    if (filter === "public") return item.category === "public";
    if (filter === "private") return item.category === "private";
    return true;
  });

  return (
    <section
      id="experiencia"
      className="py-20 lg:py-28 bg-[#FFF6F2] border-t border-[#EADDD8] relative overflow-hidden"
      aria-label="Cronología de trayectoria profesional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE4DC] border border-[#EADDD8] text-[#B94F3D] text-xs font-extrabold tracking-wider uppercase shadow-subtle">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trayectoria Profesional</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#181412]">
            Cronología de Experiencia
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E] font-medium">
            Recorrido en el servicio público municipal y despachos jurídicos en el Estado de México.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
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
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                filter === "public"
                  ? "bg-[#181412] text-white shadow-sm"
                  : "bg-[#FFFDFC] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              🏛️ Sindicatura Municipal (1)
            </button>
            <button
              type="button"
              onClick={() => setFilter("private")}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                filter === "private"
                  ? "bg-[#181412] text-white shadow-sm"
                  : "bg-[#FFFDFC] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              ⚖️ Litigio Privado (2)
            </button>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 shadow-card animate-fade-in ${
                item.current
                  ? "bg-gradient-to-br from-[#FFFDFC] via-[#FFF6F2] to-[#FFE4DC]/50 border-[#E88771]"
                  : "bg-[#FFFDFC] border-[#EADDD8] hover:border-[#F6B6A6]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#EADDD8]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#FFE4DC] text-[#B94F3D] text-xs font-extrabold">
                      {item.tag}
                    </span>
                    {item.current && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Activa
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#181412]">
                    {item.role}
                  </h3>
                  <p className="text-sm font-bold text-[#B94F3D]">
                    {item.institution}
                  </p>
                </div>

                <div className="flex sm:flex-col sm:items-end gap-2 text-xs font-bold text-[#5E524E]">
                  <span className="inline-flex items-center gap-1 bg-[#FFF6F2] px-3 py-1 rounded-full border border-[#EADDD8]">
                    <Calendar className="w-3.5 h-3.5 text-[#B94F3D]" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#5E524E]">
                    <MapPin className="w-3 h-3 text-[#E88771]" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Punchy Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                {item.highlights.map((hl, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-3 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] text-xs font-semibold text-[#181412] flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#B94F3D] mt-0.5 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
