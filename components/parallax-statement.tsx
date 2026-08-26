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
      className="relative py-24 lg:py-32 bg-[#FFF6F2] border-y border-[#EADDD8] overflow-hidden flex items-center justify-center text-center"
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

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDFC] border border-[#EADDD8] text-[#B94F3D] text-xs font-extrabold tracking-widest uppercase shadow-card">
          <Sparkles className="w-3.5 h-3.5 text-[#E88771]" />
          <span>{PROFILE_DATA.statement.badge}</span>
        </div>

        <blockquote className="space-y-3">
          <p className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#181412] leading-tight tracking-tight">
            “{PROFILE_DATA.statement.punchline}”
          </p>
        </blockquote>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {PROFILE_DATA.statement.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1 rounded-full bg-[#FFFDFC] border border-[#EADDD8] text-[#B94F3D] text-xs font-extrabold uppercase tracking-wider shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
