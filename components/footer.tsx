import { PROFILE_DATA } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#181412] text-[#FFFDFC] py-16 border-t border-[#332A26] relative overflow-hidden"
      role="contentinfo"
      aria-label="Pie de página"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#332A26]">
          
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] flex items-center justify-center text-base font-extrabold text-[#B94F3D]">
                {PROFILE_DATA.personal.monogram}
              </span>
              <div>
                <h4 className="text-xl font-extrabold tracking-tight text-white">
                  {PROFILE_DATA.personal.fullName}
                </h4>
                <p className="text-xs uppercase tracking-wider text-[#F6B6A6] font-bold">
                  {PROFILE_DATA.personal.profession}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#A89D97] max-w-md leading-relaxed font-normal">
              Perfil profesional e institucional dedicado a documentar la trayectoria jurídica, las responsabilidades de la Sindicatura Municipal y la formación continua en Administración Pública.
            </p>
          </div>

          {/* Quick Info & Location */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <div className="space-y-1 md:text-right">
              <p className="text-xs font-bold uppercase tracking-wider text-[#FFE4DC]">
                Sede Municipal
              </p>
              <p className="text-sm text-[#EADDD8] font-bold">
                {PROFILE_DATA.personal.location}
              </p>
              <p className="text-xs text-[#A89D97]">
                {PROFILE_DATA.personal.currentRole}
              </p>
            </div>

            <div className="text-xs text-[#A89D97] md:text-right font-medium">
              Dominio oficial: <span className="text-[#FFE4DC] font-mono font-bold">{PROFILE_DATA.site.domain}</span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <p className="text-[11px] text-[#A89D97] leading-relaxed font-medium">
              <strong className="text-[#FFE4DC] font-bold">Nota legal e institucional:</strong> {PROFILE_DATA.site.disclaimer}
            </p>
          </div>

          <div className="text-[11px] text-[#A89D97] shrink-0 font-medium">
            &copy; {currentYear} {PROFILE_DATA.personal.fullName}. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
