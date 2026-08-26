"use client";

import { useState, useEffect } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Mail, Copy, Check, Sparkles, ArrowUp, Send } from "lucide-react";

interface DynamicDockProps {
  onOpenContact: () => void;
}

export function DynamicDock({ onOpenContact }: DynamicDockProps) {
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <aside
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] sm:max-w-md w-full animate-fade-in"
      aria-label="Barra de acceso rápido"
    >
      <div className="ios-dock rounded-full p-2 flex items-center justify-between gap-2 shadow-dock border border-white/20">
        
        {/* Monogram / Top button */}
        <button
          type="button"
          onClick={handleScrollToTop}
          className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          aria-label="Volver arriba"
        >
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FFE4DC] to-[#F6B6A6] flex items-center justify-center text-[#B94F3D] font-extrabold text-xs">
            {PROFILE_DATA.personal.monogram}
          </span>
          <span className="text-xs font-extrabold hidden xs:inline text-white">
            {PROFILE_DATA.personal.shortName}
          </span>
        </button>

        {/* Center Quick Copy */}
        <button
          type="button"
          onClick={handleCopyEmail}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FFE4DC] text-[#B94F3D] hover:bg-[#F6B6A6] text-xs font-extrabold transition-all cursor-pointer"
          aria-label="Copiar correo de contacto"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span className="text-[11px]">¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="text-[11px] hidden sm:inline">Copiar correo</span>
              <span className="text-[11px] sm:hidden">Copiar</span>
            </>
          )}
        </button>

        {/* Right Contact Button */}
        <button
          type="button"
          onClick={onOpenContact}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#B94F3D] to-[#E88771] text-white text-xs font-extrabold shadow-md hover:scale-105 transition-all cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Contacto</span>
        </button>
      </div>
    </aside>
  );
}
