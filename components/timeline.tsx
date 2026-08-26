import { PROFILE_DATA } from "@/data/profile";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Timeline() {
  return (
    <section
      id="experiencia"
      className="py-20 lg:py-28 bg-[#FFF6F2] border-t border-[#EADDD8] relative"
      aria-label="Cronología de trayectoria profesional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE4DC] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B94F3D]" />
            <span>Cronología Laboral</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181412]">
            Trayectoria Profesional
          </h2>
          <p className="text-base sm:text-lg text-[#6B605C]">
            Evolución profesional desde el litigio privado y la técnica jurídica hasta el ejercicio de la representación municipal.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop: center, Mobile: left) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#B94F3D] via-[#E88771] to-[#EADDD8] -translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {PROFILE_DATA.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-[#FFFDFC] border-2 border-[#B94F3D] flex items-center justify-center shadow-subtle z-10 group-hover:scale-110 transition-transform">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        item.current ? "bg-[#B94F3D] animate-pulse" : "bg-[#E88771]"
                      }`}
                    />
                  </div>

                  {/* Content Container (Alternating on desktop) */}
                  <div
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"
                    }`}
                  >
                    <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFDFC] border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-card space-y-4">
                      {/* Meta badges: Period & Location */}
                      <div
                        className={`flex flex-wrap items-center gap-2 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                            item.current
                              ? "bg-[#FFE4DC] text-[#B94F3D] border border-[#EADDD8]"
                              : "bg-[#FFF6F2] text-[#6B605C] border border-[#EADDD8]"
                          }`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs text-[#6B605C]">
                          <MapPin className="w-3 h-3 text-[#E88771]" />
                          <span>{item.location}</span>
                        </span>
                      </div>

                      {/* Role & Institution */}
                      <div className="space-y-1">
                        <h3 className="font-serif text-2xl font-bold text-[#181412]">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-[#B94F3D]">
                          {item.institution}
                        </p>
                      </div>

                      {/* Responsibilities list */}
                      <div className="pt-2 border-t border-[#EADDD8]/70">
                        <p
                          className={`text-xs font-bold uppercase tracking-wider text-[#181412] mb-3 ${
                            isEven ? "md:text-right" : "md:text-left"
                          }`}
                        >
                          Atribuciones y Práctica Jurídica
                        </p>
                        <ul className="space-y-2">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li
                              key={rIdx}
                              className={`flex items-start gap-2.5 text-xs text-[#6B605C] leading-relaxed ${
                                isEven ? "md:flex-row-reverse md:text-right" : "text-left"
                              }`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#B94F3D] mt-0.5 shrink-0" />
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
