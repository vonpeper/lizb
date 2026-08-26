import { PROFILE_DATA } from "@/data/profile";
import { Scale, FileCheck2, Building2, BookOpen } from "lucide-react";

export function Expertise() {
  const iconMap: Record<string, React.ReactNode> = {
    "exp-1": <Scale className="w-6 h-6 text-[#B94F3D]" />,
    "exp-2": <FileCheck2 className="w-6 h-6 text-[#B94F3D]" />,
    "exp-3": <Building2 className="w-6 h-6 text-[#B94F3D]" />,
    "exp-4": <BookOpen className="w-6 h-6 text-[#B94F3D]" />,
  };

  return (
    <section
      id="areas"
      className="py-20 lg:py-28 bg-[#FFFDFC]"
      aria-label="Áreas de experiencia y atribuciones"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E88771]" />
            <span>Campos de Ejercicio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181412]">
            Áreas de Práctica y Responsabilidad
          </h2>
          <p className="text-base sm:text-lg text-[#6B605C]">
            Marco de acción técnica en el que converge la experiencia en tribunales con el cumplimiento de las atribuciones de la Sindicatura Municipal.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROFILE_DATA.expertise.map((item) => (
            <div
              key={item.id}
              className="group relative p-8 rounded-2xl bg-[#FFF6F2]/60 border border-[#EADDD8] hover:border-[#E88771] hover:bg-[#FFF6F2] transition-all duration-300 shadow-subtle hover:shadow-card flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FFE4DC] border border-[#EADDD8] flex items-center justify-center group-hover:bg-[#F6B6A6]/40 transition-colors">
                    {iconMap[item.id]}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#B94F3D]/60 tracking-wider">
                    {item.number}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#181412] group-hover:text-[#B94F3D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-[#181412]/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-[#EADDD8]/70">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#6B605C] leading-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E88771] mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
