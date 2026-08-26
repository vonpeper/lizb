import { PROFILE_DATA } from "@/data/profile";
import { GraduationCap, Award, BookOpenCheck } from "lucide-react";

export function Education() {
  return (
    <section
      id="formacion"
      className="py-20 lg:py-28 bg-[#FFFDFC]"
      aria-label="Formación académica"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E88771]" />
            <span>Preparación Universitaria</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181412]">
            Formación Académica
          </h2>
          <p className="text-base sm:text-lg text-[#6B605C]">
            La integración disciplinaria entre la técnica del Derecho y las herramientas de la Administración Pública fortalece la toma de decisiones institucionales.
          </p>
        </div>

        {/* 2 Main Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROFILE_DATA.education.map((edu) => (
            <div
              key={edu.id}
              className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                edu.status === "in_progress"
                  ? "bg-gradient-to-br from-[#FFF6F2] to-[#FFE4DC]/30 border-[#E88771] shadow-card"
                  : "bg-[#FFFDFC] border-[#EADDD8] shadow-subtle hover:border-[#E88771]"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FFE4DC] border border-[#EADDD8] flex items-center justify-center text-[#B94F3D]">
                    {edu.status === "in_progress" ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                      edu.status === "in_progress"
                        ? "bg-[#FFE4DC] text-[#B94F3D] border border-[#B94F3D]/20 animate-pulse"
                        : "bg-[#FFF6F2] text-[#6B605C] border border-[#EADDD8]"
                    }`}
                  >
                    {edu.statusLabel}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#181412]">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-[#B94F3D]">
                    {edu.institution} {edu.campus ? `· ${edu.campus}` : ""}
                  </p>
                  <p className="text-xs text-[#6B605C] font-medium">
                    Periodo: {edu.period}
                  </p>
                </div>

                <p className="text-sm text-[#6B605C] leading-relaxed pt-2 border-t border-[#EADDD8]">
                  {edu.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EADDD8]/60 flex items-center gap-2 text-xs text-[#181412] font-medium">
                <BookOpenCheck className="w-4 h-4 text-[#B94F3D]" />
                <span>
                  {edu.status === "in_progress"
                    ? "Especialización y posgrado en curso"
                    : "Grado académico de licenciatura"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
