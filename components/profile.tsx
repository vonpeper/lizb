import { PROFILE_DATA } from "@/data/profile";
import { GraduationCap, Scale, Briefcase } from "lucide-react";

export function Profile() {
  return (
    <section
      id="perfil"
      className="py-20 lg:py-28 bg-[#FFF6F2] border-y border-[#EADDD8] relative"
      aria-label="Perfil profesional y visión jurídica"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE4DC] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B94F3D]" />
              <span>Visión Profesional</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181412] leading-tight">
              {PROFILE_DATA.profile.title}
            </h2>

            <div className="w-16 h-0.5 bg-[#E88771]" />

            <div className="p-5 rounded-2xl bg-[#FFFDFC] border border-[#EADDD8] space-y-3 shadow-subtle">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#B94F3D]">
                Enfoque del Servicio Público
              </p>
              <p className="text-sm text-[#6B605C] leading-relaxed">
                La experiencia en juzgados y tribunales se traduce en certeza técnica para la administración municipal: revisión documental meticulosa, sustento jurídico en cada dictamen y protección decidida del patrimonio que pertenece a la ciudadanía.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative paragraphs & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#6B605C] leading-relaxed">
              {PROFILE_DATA.profile.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-[#181412] font-medium" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* 3 Pillars / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-[#FFFDFC] border border-[#EADDD8] space-y-2 hover:border-[#E88771] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D]">
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#181412]">
                  {PROFILE_DATA.profile.highlights[0].label}
                </h3>
                <p className="text-xs text-[#6B605C]">
                  {PROFILE_DATA.profile.highlights[0].value}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFDFC] border border-[#EADDD8] space-y-2 hover:border-[#E88771] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#181412]">
                  {PROFILE_DATA.profile.highlights[1].label}
                </h3>
                <p className="text-xs text-[#6B605C]">
                  {PROFILE_DATA.profile.highlights[1].value}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FFFDFC] border border-[#EADDD8] space-y-2 hover:border-[#E88771] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D]">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#181412]">
                  {PROFILE_DATA.profile.highlights[2].label}
                </h3>
                <p className="text-xs text-[#6B605C]">
                  {PROFILE_DATA.profile.highlights[2].value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
