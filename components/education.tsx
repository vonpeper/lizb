import Image from "next/image";
import { PROFILE_DATA } from "@/data/profile";
import { GraduationCap, Award, BookOpenCheck, Sparkles, CheckCircle2 } from "lucide-react";

export function Education() {
  return (
    <section
      id="formacion"
      className="py-20 lg:py-28 bg-[#FFFDFC] relative overflow-hidden bg-grid-pattern"
      aria-label="Formación académica"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-xs font-extrabold tracking-wider uppercase shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#E88771]" />
            <span>Formación Universitaria</span>
          </div>
          <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#181412]">
            Preparación Académica
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E] font-medium">
            Sinergia interdisciplinaria entre el Derecho y la Administración Pública en el Estado de México.
          </p>
        </div>

        {/* 2 Main Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROFILE_DATA.education.map((edu) => (
            <div
              key={edu.id}
              className={`relative p-7 sm:p-9 rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                edu.status === "in_progress"
                  ? "bg-gradient-to-br from-[#FFFDFC] via-[#FFF6F2] to-[#FFE4DC]/50 border-[#E88771] shadow-card hover:shadow-glow"
                  : "bg-[#FFFDFC] border-[#EADDD8] shadow-subtle hover:border-[#E88771]"
              }`}
            >
              {/* Authentic Photo Background Blend */}
              {edu.image && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={edu.image}
                    alt={edu.degree}
                    fill
                    className="object-cover opacity-15 group-hover:scale-105 group-hover:opacity-25 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDFC] via-[#FFFDFC]/90 to-[#FFFDFC]/60" />
                </div>
              )}

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] border border-[#EADDD8] flex items-center justify-center text-[#B94F3D] shadow-sm">
                    {edu.status === "in_progress" ? (
                      <GraduationCap className="w-7 h-7" />
                    ) : (
                      <Award className="w-7 h-7" />
                    )}
                  </div>
                  <span
                    className={`px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                      edu.status === "in_progress"
                        ? "bg-[#FFE4DC] text-[#B94F3D] border border-[#B94F3D]/20 animate-pulse"
                        : "bg-[#FFF6F2] text-[#5E524E] border border-[#EADDD8]"
                    }`}
                  >
                    {edu.statusLabel}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#181412] leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-bold text-[#B94F3D]">
                    {edu.institution} {edu.campus ? `· ${edu.campus}` : ""}
                  </p>
                  <p className="text-xs text-[#5E524E] font-semibold">
                    Periodo: {edu.period}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-3 border-t border-[#EADDD8]/80">
                  {edu.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#181412] font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-[#B94F3D] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-8 pt-4 border-t border-[#EADDD8] flex items-center justify-between text-xs font-extrabold text-[#181412]">
                <span className="flex items-center gap-1.5">
                  <BookOpenCheck className="w-4 h-4 text-[#B94F3D]" />
                  {edu.status === "in_progress" ? "Posgrado en curso" : "Licenciatura concluida"}
                </span>
                <span className="text-[#B94F3D] uppercase text-[10px] tracking-wider">
                  Verificado
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
