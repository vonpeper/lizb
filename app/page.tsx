"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Profile } from "@/components/profile";
import { Expertise } from "@/components/expertise";
import { Timeline } from "@/components/timeline";
import { Education } from "@/components/education";
import { ParallaxStatement } from "@/components/parallax-statement";
import { Principles } from "@/components/principles";
import { ContactCta } from "@/components/contact-cta";
import { ContactModal } from "@/components/contact-modal";
import { Footer } from "@/components/footer";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="relative flex flex-col min-h-screen bg-[#FFFDFC] text-[#181412]">
      {/* Skip to content for WCAG accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#B94F3D] text-white rounded-xl text-xs font-bold shadow-lg"
      >
        Saltar al contenido principal
      </a>

      {/* Main Navigation */}
      <Navigation onOpenContact={handleOpenContact} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        <Hero onOpenContact={handleOpenContact} />
        <Profile />
        <Expertise />
        <Timeline />
        {/* Actividades/Noticias ocultas temporalmente por solicitud */}
        {/* <Activities /> */}
        <Education />
        <ParallaxStatement />
        <Principles />
        <ContactCta onOpenContact={handleOpenContact} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
