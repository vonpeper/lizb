"use client";

import { useEffect, useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavigationProps {
  onOpenContact: () => void;
}

export function Navigation({ onOpenContact }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const navLinks = [
    { href: "#inicio", label: "Inicio", id: "inicio" },
    { href: "#perfil", label: "Perfil Bento", id: "perfil" },
    { href: "#areas", label: "Áreas", id: "areas" },
    { href: "#experiencia", label: "Trayectoria", id: "experiencia" },
    { href: "#formacion", label: "Formación", id: "formacion" },
    { href: "#principios", label: "Principios", id: "principios" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["inicio", "perfil", "areas", "experiencia", "formacion", "principios", "contacto"];
      const scrollPosition = window.scrollY + 220;

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
      const offset = 85;
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
            ? "py-3 px-3 sm:px-6"
            : "py-5 px-4 sm:px-8"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo & Live Status */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "#inicio")}
            className="group flex items-center gap-3 p-1.5 rounded-2xl bg-[#FFFDFC]/80 backdrop-blur-md border border-[#EADDD8] hover:border-[#E88771] transition-all duration-200 shadow-sm"
            aria-label="Lizbeth Bernal Segundo - Inicio"
          >
            <div className="relative">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] flex items-center justify-center font-bold text-sm text-[#B94F3D] shadow-sm group-hover:scale-105 transition-transform">
                {PROFILE_DATA.personal.monogram}
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#FFFDFC] animate-pulse" />
            </div>

            <div className="flex flex-col pr-2">
              <span className="font-bold text-sm tracking-tight text-[#181412] leading-none group-hover:text-[#B94F3D] transition-colors">
                {PROFILE_DATA.personal.shortName}
              </span>
              <span className="text-[10px] font-semibold tracking-wide uppercase text-[#B94F3D] mt-0.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#E88771]" />
                Síndica Municipal
              </span>
            </div>
          </a>

          {/* Center Floating Capsule Navbar (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-1 bg-[#FFFDFC]/85 backdrop-blur-xl border border-[#EADDD8] rounded-full p-1.5 shadow-card"
            aria-label="Navegación principal"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-[#181412] text-white shadow-sm"
                      : "text-[#5E524E] hover:text-[#181412] hover:bg-[#FFE4DC]/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -top-1 right-2 w-1.5 h-1.5 rounded-full bg-[#E88771]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="relative group overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide bg-gradient-to-r from-[#B94F3D] via-[#E88771] to-[#B94F3D] bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white shadow-md hover:shadow-glow focus-visible:ring-2 focus-visible:ring-[#B94F3D]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contacto</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#FFFDFC]/90 border border-[#EADDD8] text-[#181412] hover:bg-[#FFE4DC] focus-visible:ring-2 focus-visible:ring-[#B94F3D] transition-colors shadow-sm"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#181412]/50 backdrop-blur-md md:hidden animate-fade-in"
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
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] flex items-center justify-center font-bold text-sm text-[#B94F3D]">
                    {PROFILE_DATA.personal.monogram}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-[#181412]">
                      {PROFILE_DATA.personal.fullName}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#B94F3D] font-semibold">
                      Villa de Allende · 2025
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-[#5E524E] hover:text-[#181412] hover:bg-[#FFE4DC]"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2" aria-label="Menú móvil">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        isActive
                          ? "bg-[#181412] text-white shadow-sm"
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
                className="w-full py-3.5 px-4 rounded-xl bg-[#B94F3D] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md hover:bg-[#E88771] transition-colors"
              >
                <span>Contacto profesional</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-[#5E524E]">
                {PROFILE_DATA.personal.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
