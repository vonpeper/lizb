import { PROFILE_DATA } from "@/data/profile";
import { ShieldCheck, Scale, HeartHandshake } from "lucide-react";

export function Principles() {
  const iconMap: Record<string, React.ReactNode> = {
    "prin-1": <Scale className="w-6 h-6 text-[#B94F3D]" />,
    "prin-2": <ShieldCheck className="w-6 h-6 text-[#B94F3D]" />,
    "prin-3": <HeartHandshake className="w-6 h-6 text-[#B94F3D]" />,
  };

  return (
    <section
      id="principios"
      className="py-20 lg:py-28 bg-[#FFFDFC]"
      aria-label="Principios rectores de ejercicio profesional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E88771]" />
            <span>Fundamentos Éticos</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181412]">
            Principios Profesionales
          </h2>
          <p className="text-base sm:text-lg text-[#6B605C]">
            Criterios de actuación que rigen el ejercicio jurídico, la toma de decisiones y el desempeño institucional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILE_DATA.principles.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#FFF6F2]/50 border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-subtle flex flex-col justify-between"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-[#FFE4DC] border border-[#EADDD8] flex items-center justify-center">
                  {iconMap[item.id]}
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#181412]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#B94F3D] uppercase tracking-wider">
                    {item.tagline}
                  </p>
                </div>
                <p className="text-sm text-[#6B605C] leading-relaxed pt-2 border-t border-[#EADDD8]/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
