import { PROFILE_DATA } from "@/data/profile";
import { GraduationCap, Award, BookOpenCheck, Sparkles } from "lucide-react";

export function Education() {
  return (
    <section
      id="formacion"
      className="py-20 lg:py-28 bg-[#FFFDFC] relative overflow-hidden"
      aria-label="Formación académica"
    >
      {/* Background SVG circles */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FFE4DC]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFF6F2] blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-bold tracking-wider uppercase shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#E88771]" />
            <span>Formación Universitaria</span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#181412]">
            Preparación Académica Continua
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E]">
            La combinación de la Licenciatura en Derecho con la Maestría en Administración Pública aporta solidez técnica y visión integral.
          </p>
        </div>

        {/* 2 Main Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROFILE_DATA.education.map((edu) => (
            <div
              key={edu.id}
              className={`p-8 sm:p-9 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                edu.status === "in_progress"
                  ? "bg-gradient-to-br from-[#FFFDFC] via-[#FFF6F2] to-[#FFE4DC]/50 border-[#E88771] shadow-card hover:shadow-glow"
                  : "bg-[#FFFDFC] border-[#EADDD8] shadow-subtle hover:border-[#E88771] hover:shadow-card"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] border border-[#EADDD8] flex items-center justify-center text-[#B94F3D] shadow-sm group-hover:scale-105 transition-transform">
                    {edu.status === "in_progress" ? (
                      <GraduationCap className="w-7 h-7" />
                    ) : (
                      <Award className="w-7 h-7" />
                    )}
                  </div>
                  <span
                    className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                      edu.status === "in_progress"
                        ? "bg-[#FFE4DC] text-[#B94F3D] border border-[#B94F3D]/20 animate-pulse"
                        : "bg-[#FFF6F2] text-[#5E524E] border border-[#EADDD8]"
                    }`}
                  >
                    {edu.statusLabel}
                  </span>
                </div>

                <div className="space-y-2">
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

                <p className="text-sm text-[#5E524E] leading-relaxed pt-3 border-t border-[#EADDD8]">
                  {edu.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EADDD8] flex items-center justify-between text-xs font-bold">
                <span className="text-[#181412] flex items-center gap-1.5">
                  <BookOpenCheck className="w-4 h-4 text-[#B94F3D]" />
                  {edu.status === "in_progress"
                    ? "Posgrado en desarrollo"
                    : "Título profesional"}
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
