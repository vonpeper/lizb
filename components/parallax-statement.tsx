"use client";

import { useEffect, useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { Sparkles } from "lucide-react";

export function ParallaxStatement() {
  const [offsetY, setOffsetY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    const handleScroll = () => {
      if (window.innerWidth >= 768 && !mediaQuery.matches) {
        setOffsetY(window.pageYOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxTransform = !prefersReducedMotion ? `translateY(${offsetY * 0.04}px)` : "none";

  return (
    <section
      className="relative py-28 lg:py-36 bg-[#FFF6F2] border-y border-[#EADDD8] overflow-hidden flex items-center justify-center text-center"
      aria-label="Declaración de vocación y servicio"
    >
      {/* 2026 Dynamic Floating Glows */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: parallaxTransform }}
      >
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#FFE4DC]/70 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#F6B6A6]/40 blur-3xl" />
      </div>

      {/* SVG Wave lines */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wave-pattern" width="100" height="20" patternUnits="userSpaceOnUse">
            <path d="M0 10 Q 25 20, 50 10 T 100 10" fill="none" stroke="#E88771" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wave-pattern)" />
      </svg>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDFC] border border-[#EADDD8] text-[#B94F3D] text-xs font-bold tracking-widest uppercase shadow-card">
          <Sparkles className="w-3.5 h-3.5 text-[#E88771]" />
          <span>{PROFILE_DATA.statement.eyebrow}</span>
        </div>

        <blockquote className="space-y-4">
          <p className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#181412] leading-tight tracking-tight">
            “{PROFILE_DATA.statement.quote}”
          </p>
        </blockquote>

        <p className="text-xs sm:text-sm text-[#5E524E] max-w-xl mx-auto font-semibold tracking-wide">
          {PROFILE_DATA.statement.caption}
        </p>
      </div>
    </section>
  );
}
