import Image from "next/image";
import { PROFILE_DATA } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#181412] text-[#EADDD8] pt-16 pb-24 lg:pt-20 lg:pb-28 border-t border-white/10 relative"
      role="contentinfo"
      aria-label="Pie de página institucional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-12 border-b border-white/10">
          
          {/* Left Brand with Full Profile Avatar */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 aspect-square rounded-full overflow-hidden border-2 border-[#E88771] shadow-glow shrink-0 bg-[#FFF6F2]">
                <Image
                  src={PROFILE_DATA.personal.avatarPath}
                  alt={PROFILE_DATA.personal.fullName}
                  fill
                  sizes="64px"
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-extrabold text-lg sm:text-xl text-white tracking-tight">
                  {PROFILE_DATA.personal.fullName}
                </h3>
                <p className="text-xs font-bold text-[#F6B6A6] uppercase tracking-wider">
                  {PROFILE_DATA.personal.currentRole} · {PROFILE_DATA.personal.location}
                </p>
              </div>
            </div>
            <p className="text-xs text-[#A89D97] max-w-md font-medium leading-relaxed">
              Sitio profesional oficial para difusión de trayectoria jurídica, atribuciones de la Sindicatura Municipal y vinculación institucional.
            </p>
          </div>

          {/* Right Quick Links */}
          <div className="md:col-span-6 flex flex-wrap md:justify-end gap-x-6 gap-y-3 text-xs font-extrabold">
            <a href="#inicio" className="text-[#EADDD8] hover:text-white transition-colors">Inicio</a>
            <a href="#perfil" className="text-[#EADDD8] hover:text-white transition-colors">Perfil</a>
            <a href="#areas" className="text-[#EADDD8] hover:text-white transition-colors">Áreas</a>
            <a href="#experiencia" className="text-[#EADDD8] hover:text-white transition-colors">Trayectoria</a>
            <a href="#actividades" className="text-[#EADDD8] hover:text-white transition-colors">Actividades</a>
            <a href="#formacion" className="text-[#EADDD8] hover:text-white transition-colors">Formación</a>
            <a href="#principios" className="text-[#EADDD8] hover:text-white transition-colors">Principios</a>
            <a href="#contacto" className="text-[#F6B6A6] hover:text-white transition-colors">Contacto</a>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#A89D97] font-medium text-center sm:text-left">
          <p>
            © {currentYear} {PROFILE_DATA.personal.fullName}. Todos los derechos reservados.
          </p>
          <p className="text-[#A89D97]/80">
            Sitio informativo de ejercicio profesional y servicio público institucional · Villa de Allende, Estado de México.
          </p>
        </div>
      </div>
    </footer>
  );
}
