"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { X, Mail, Copy, Check, MapPin, ShieldAlert, ArrowUpRight, Sparkles } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#181412]/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] p-6 sm:p-8 shadow-floating overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-[#EADDD8]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-bold tracking-wider uppercase">
              <Sparkles className="w-3 h-3 text-[#E88771]" />
              <span>Canal Directo</span>
            </div>
            <h3 id="contact-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#181412]">
              Contacto Profesional
            </h3>
            <p className="text-xs text-[#5E524E] font-medium">
              Correspondencia profesional e institucional para {PROFILE_DATA.personal.fullName}.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-xl text-[#5E524E] hover:text-[#181412] hover:bg-[#FFE4DC] transition-colors focus-visible:ring-2 focus-visible:ring-[#B94F3D]"
            aria-label="Cerrar modal de contacto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content */}
        <div className="py-6 space-y-5">
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#5E524E]">
                Buzón Profesional
              </span>
              <Mail className="w-4 h-4 text-[#B94F3D]" />
            </div>

            <div className="flex items-center justify-between gap-3 bg-[#FFFDFC] p-3.5 rounded-xl border border-[#EADDD8] shadow-sm">
              <span className="font-mono text-sm sm:text-base font-bold text-[#181412] truncate">
                {PROFILE_DATA.contact.email}
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FFE4DC] text-[#B94F3D] hover:bg-[#F6B6A6]/60 text-xs font-bold transition-colors shrink-0"
                aria-label="Copiar correo electrónico al portapapeles"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[11px] text-[#5E524E] leading-normal font-medium flex items-start gap-1.5">
              <span className="font-bold text-[#181412]">Estado:</span> {PROFILE_DATA.contact.emailPendingNote}
            </p>
          </div>

          {/* Location details */}
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFFDFC] border border-[#EADDD8]">
            <div className="w-10 h-10 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] shrink-0 font-bold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#181412]">Sede y Jurisdicción</p>
              <p className="text-xs text-[#5E524E] font-medium">
                {PROFILE_DATA.personal.location}
              </p>
            </div>
          </div>

          {/* Institutional discretion disclaimer */}
          <div className="p-4 rounded-2xl bg-[#FFF6F2]/90 border border-[#EADDD8] flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-[#B94F3D] mt-0.5 shrink-0" />
            <p className="text-[11px] text-[#5E524E] leading-relaxed font-medium">
              En apego a las políticas de privacidad y prudencia institucional, no se publican teléfonos particulares ni domicilios privados. Para trámites y audiencias oficiales, favor de acudir a las instancias correspondientes del H. Ayuntamiento.
            </p>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#EADDD8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`mailto:${PROFILE_DATA.contact.email}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#181412] text-white hover:bg-[#B94F3D] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            <span>Enviar mensaje por correo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 rounded-full bg-[#FFF6F2] border border-[#EADDD8] text-[#5E524E] hover:text-[#181412] text-xs font-bold transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
