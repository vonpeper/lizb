"use client";

import Image from "next/image";
import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Calendar, Tag, ArrowUpRight, Sparkles, Newspaper } from "lucide-react";

export function Activities() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedActivity, setSelectedActivity] = useState<typeof PROFILE_DATA.activities[0] | null>(null);

  const filteredActivities = PROFILE_DATA.activities.filter((act) => {
    if (activeCategory === "all") return true;
    return act.category === activeCategory;
  });

  return (
    <section
      id="actividades"
      className="py-20 lg:py-28 bg-[#FFF6F2] border-t border-[#EADDD8] relative overflow-hidden bg-dot-matrix"
      aria-label="Noticias y actividades institucionales"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE4DC] border border-[#EADDD8] text-[#B94F3D] text-xs font-extrabold tracking-wider uppercase shadow-subtle">
              <Newspaper className="w-3.5 h-3.5 text-[#B94F3D]" />
              <span>Bitácora de Trabajo</span>
            </div>
            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#181412]">
              Actividades & Noticias
            </h2>
            <p className="text-base sm:text-lg text-[#5E524E] font-medium">
              Seguimiento a sesiones de Cabildo, revisión patrimonial y actualización en gestión pública.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#181412] text-white shadow-sm scale-105"
                  : "bg-[#FFFDFC] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              Todas
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("cabildo")}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === "cabildo"
                  ? "bg-[#181412] text-white shadow-sm scale-105"
                  : "bg-[#FFFDFC] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              🏛️ Cabildo
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("patrimonio")}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === "patrimonio"
                  ? "bg-[#181412] text-white shadow-sm scale-105"
                  : "bg-[#FFFDFC] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              📋 Patrimonio
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("academico")}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                activeCategory === "academico"
                  ? "bg-[#181412] text-white shadow-sm scale-105"
                  : "bg-[#FFFDFC] text-[#5E524E] border border-[#EADDD8] hover:bg-[#FFE4DC]"
              }`}
            >
              🎓 Posgrado UVM
            </button>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredActivities.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedActivity(item)}
              className="p-4 sm:p-5 rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-card flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4">
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#FFE4DC]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-3 py-1 rounded-full bg-[#181412]/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Metadata & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#5E524E]">
                    <Calendar className="w-3.5 h-3.5 text-[#B94F3D]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#181412] group-hover:text-[#B94F3D] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#5E524E] leading-relaxed font-medium line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="pt-4 mt-4 border-t border-[#EADDD8] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-[#FFF6F2] text-[#B94F3D] text-[10px] font-bold"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <span className="w-7 h-7 rounded-xl bg-[#FFF6F2] text-[#B94F3D] flex items-center justify-center group-hover:bg-[#B94F3D] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Activity Details Modal */}
      {selectedActivity && (
        <div
          className="fixed inset-0 z-50 bg-[#181412]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedActivity(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-lg bg-[#FFFDFC] rounded-3xl border border-[#EADDD8] p-6 sm:p-8 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#FFE4DC]">
              <Image
                src={selectedActivity.image}
                alt={selectedActivity.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#FFE4DC] text-[#B94F3D] text-xs font-extrabold">
                {selectedActivity.categoryLabel}
              </span>
              <h3 className="text-2xl font-extrabold text-[#181412]">
                {selectedActivity.title}
              </h3>
              <p className="text-xs text-[#5E524E] font-bold">
                {selectedActivity.date}
              </p>
              <p className="text-sm text-[#5E524E] leading-relaxed pt-2 border-t border-[#EADDD8]">
                {selectedActivity.summary}
              </p>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedActivity(null)}
                className="px-6 py-2.5 rounded-2xl bg-[#181412] text-white text-xs font-extrabold hover:bg-[#B94F3D] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
