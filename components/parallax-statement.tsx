"use client";

import { useEffect, useState } from "react";
import { PROFILE_DATA } from "@/data/profile";

export function ParallaxStatement() {
  const [offsetY, setOffsetY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    const handleScroll = () => {
      // Only apply on desktop and when reduced motion is not active
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

  const parallaxTransform = !prefersReducedMotion ? `translateY(${offsetY * 0.05}px)` : "none";

  return (
    <section
      className="relative py-28 lg:py-40 bg-[#FFF6F2] border-y border-[#EADDD8] overflow-hidden flex items-center justify-center text-center"
      aria-label="Declaración de vocación y servicio"
    >
      {/* Background Subtle Gradient & Abstract Shapes with Parallax */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: parallaxTransform }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FFE4DC]/60 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#F6B6A6]/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-[#FFFDFC]/40 blur-2xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDFC] border border-[#EADDD8] text-[#B94F3D] text-xs font-semibold tracking-widest uppercase shadow-sm">
          <span>{PROFILE_DATA.statement.eyebrow}</span>
        </div>

        <blockquote className="space-y-4">
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#181412] leading-tight tracking-tight">
            {PROFILE_DATA.statement.quote}
          </p>
        </blockquote>

        <p className="text-xs sm:text-sm text-[#6B605C] max-w-xl mx-auto font-medium tracking-wide">
          {PROFILE_DATA.statement.caption}
        </p>
      </div>
    </section>
  );
}
