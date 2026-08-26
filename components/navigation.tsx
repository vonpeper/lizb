"use client";

import { useEffect, useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavigationProps {
  onOpenContact: () => void;
}

export function Navigation({ onOpenContact }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navLinks = [
    { href: "#inicio", label: "Inicio", id: "inicio" },
    { href: "#perfil", label: "Perfil", id: "perfil" },
    { href: "#experiencia", label: "Experiencia", id: "experiencia" },
    { href: "#formacion", label: "Formación", id: "formacion" },
    { href: "#principios", label: "Principios", id: "principios" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["inicio", "perfil", "experiencia", "formacion", "principios", "contacto"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFFDFC]/90 backdrop-blur-md border-b border-[#EADDD8]/80 py-3.5 shadow-subtle"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Monogram Brand */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "#inicio")}
              className="group flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#B94F3D] rounded-lg p-1 transition-opacity"
              aria-label="Lizbeth Bernal Segundo - Inicio"
            >
              <span className="w-10 h-10 rounded-full bg-[#FFE4DC] border border-[#EADDD8] flex items-center justify-center font-serif text-lg font-semibold text-[#B94F3D] group-hover:bg-[#F6B6A6]/40 transition-colors duration-200">
                {PROFILE_DATA.personal.monogram}
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#181412] leading-none">
                  {PROFILE_DATA.personal.fullName}
                </span>
                <span className="text-[11px] font-sans tracking-wider uppercase text-[#6B605C] mt-0.5">
                  Abogada &middot; Servidora Pública
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-[#FFF6F2]/80 border border-[#EADDD8] rounded-full px-3 py-1.5 backdrop-blur-sm" aria-label="Navegación principal">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-[#B94F3D] text-white shadow-sm"
                        : "text-[#6B605C] hover:text-[#181412] hover:bg-[#FFE4DC]/50"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Contact button */}
            <div className="hidden md:flex items-center">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-[#181412] text-white hover:bg-[#B94F3D] focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-all duration-200 shadow-sm"
              >
                <span>Contacto</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#181412] hover:bg-[#FFE4DC] focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#181412]/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FFFDFC] border-l border-[#EADDD8] p-6 flex flex-col justify-between shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Menú móvil de navegación"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EADDD8]">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-[#FFE4DC] border border-[#EADDD8] flex items-center justify-center font-serif text-base font-semibold text-[#B94F3D]">
                    {PROFILE_DATA.personal.monogram}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-[#181412]">
                      {PROFILE_DATA.personal.fullName}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#6B605C]">
                      Villa de Allende
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#6B605C] hover:text-[#181412] hover:bg-[#FFE4DC]"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-2" aria-label="Menú móvil">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? "bg-[#FFE4DC] text-[#B94F3D] font-semibold"
                          : "text-[#181412] hover:bg-[#FFF6F2]"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#EADDD8] flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#B94F3D] text-white font-medium text-sm text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Contacto profesional</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-center text-[#6B605C]">
                {PROFILE_DATA.personal.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
