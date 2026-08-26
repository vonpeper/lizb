"use client";

import { useEffect, useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { X, Mail, MapPin, Clock, Copy, Check, Send } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#181412]/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FFFDFC] rounded-3xl border border-[#EADDD8] shadow-2xl p-6 sm:p-8 space-y-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE4DC]/50 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-start justify-between relative z-10">
          <div className="space-y-1">
            <span className="px-3 py-1 rounded-full bg-[#FFE4DC] text-[#B94F3D] text-[10px] font-extrabold uppercase tracking-wider">
              Canal Oficial
            </span>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#181412]">
              {PROFILE_DATA.contact.modalTitle}
            </h2>
            <p className="text-xs text-[#5E524E] font-medium">
              {PROFILE_DATA.contact.modalDescription}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-[#5E524E] hover:text-[#181412] hover:bg-[#FFE4DC] transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-3 relative z-10">
          {/* Email card */}
          <div className="p-4 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase tracking-wider text-[#5E524E] font-bold">Correo Electrónico</p>
                <p className="text-xs sm:text-sm font-extrabold text-[#181412] truncate font-mono">
                  {PROFILE_DATA.contact.email}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-2.5 rounded-xl bg-[#FFE4DC] text-[#B94F3D] hover:bg-[#F6B6A6]/60 transition-colors shrink-0"
              aria-label="Copiar correo"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Location card */}
          <div className="p-4 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#5E524E] font-bold">Sede Institucional</p>
              <p className="text-xs sm:text-sm font-bold text-[#181412]">
                {PROFILE_DATA.contact.institutionalLocation}
              </p>
            </div>
          </div>

          {/* Hours card */}
          <div className="p-4 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#5E524E] font-bold">Horario de Atención</p>
              <p className="text-xs sm:text-sm font-bold text-[#181412]">
                {PROFILE_DATA.contact.officeHours}
              </p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 relative z-10">
          <a
            href={`mailto:${PROFILE_DATA.contact.email}?subject=Contacto%20Profesional%20-%20Lizbeth%20Bernal`}
            className="w-full py-4 rounded-2xl bg-[#181412] hover:bg-[#B94F3D] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Abrir Cliente de Correo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
