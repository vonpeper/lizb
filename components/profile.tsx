"use client";

import { useState } from "react";
import { PROFILE_DATA } from "@/data/profile";
import { GraduationCap, Scale, Briefcase, Landmark, ShieldCheck, Sparkles, FileText, ArrowRight } from "lucide-react";

export function Profile() {
  const [activeTab, setActiveTab] = useState<"origen" | "sindicatura" | "vision">("sindicatura");

  return (
    <section
      id="perfil"
      className="py-20 lg:py-28 bg-[#FFF6F2] border-y border-[#EADDD8] relative overflow-hidden"
      aria-label="Perfil profesional y visión jurídica"
    >
      {/* Subtle Background SVG mesh */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FFE4DC]/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#F6B6A6]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE4DC] border border-[#EADDD8] text-[#B94F3D] text-[11px] font-bold tracking-wider uppercase shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-[#B94F3D]" />
            <span>Perfil Bento 2026</span>
          </div>
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#181412]">
            Una Trayectoria Construida desde el Derecho
          </h2>
          <p className="text-base sm:text-lg text-[#5E524E]">
            La convergencia entre la práctica en tribunales, la especialización en administración pública y el compromiso en la Sindicatura Municipal.
          </p>
        </div>

        {/* Bento Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Large Interactive Card with Dynamic Tab Content (Span 8) */}
          <div className="md:col-span-12 lg:col-span-8 p-7 sm:p-9 rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-card flex flex-col justify-between group">
            <div>
              {/* Interactive Tabs */}
              <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-b border-[#EADDD8]">
                <button
                  type="button"
                  onClick={() => setActiveTab("sindicatura")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === "sindicatura"
                      ? "bg-[#181412] text-white shadow-sm"
                      : "bg-[#FFF6F2] text-[#5E524E] hover:bg-[#FFE4DC]"
                  }`}
                >
                  🏛️ Sindicatura Municipal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("origen")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === "origen"
                      ? "bg-[#181412] text-white shadow-sm"
                      : "bg-[#FFF6F2] text-[#5E524E] hover:bg-[#FFE4DC]"
                  }`}
                >
                  ⚖️ Litigio y Origen Jurídico
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("vision")}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === "vision"
                      ? "bg-[#181412] text-white shadow-sm"
                      : "bg-[#FFF6F2] text-[#5E524E] hover:bg-[#FFE4DC]"
                  }`}
                >
                  🎯 Enfoque Institucional
                </button>
              </div>

              {/* Dynamic Content Display */}
              <div className="space-y-4">
                {activeTab === "sindicatura" && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#181412]">
                      Representación y Defensa del Patrimonio Municipal
                    </h3>
                    <p className="text-base text-[#5E524E] leading-relaxed">
                      Actualmente se desempeña como Síndica Municipal en Villa de Allende, aplicando su experiencia jurídica en la revisión administrativa, el control presupuestal y la salvaguarda formal del patrimonio del municipio.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] font-bold text-xs">
                          01
                        </span>
                        <span className="text-xs font-bold text-[#181412]">Revisión de informes contables y Tesorería</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] font-bold text-xs">
                          02
                        </span>
                        <span className="text-xs font-bold text-[#181412]">Inscripción de bienes ante el RPPyC</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "origen" && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#181412]">
                      Fundamento en el Ejercicio del Derecho Privado
                    </h3>
                    <p className="text-base text-[#5E524E] leading-relaxed">
                      Su experiencia inició en despachos jurídicos en Toluca (Galeana & Asociados y Jurídico Montes de Oca), donde desahogó audiencias, elaboró convenios, redactó demandas y juicios de amparo.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] font-bold text-xs">
                          ⚖️
                        </span>
                        <span className="text-xs font-bold text-[#181412]">Redacción de amparos y demandas</span>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#FFF6F2] border border-[#EADDD8] flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-[#FFE4DC] flex items-center justify-center text-[#B94F3D] font-bold text-xs">
                          🤝
                        </span>
                        <span className="text-xs font-bold text-[#181412]">Conciliaciones y comparecencias</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "vision" && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#181412]">
                      Capacidad Técnica y Decisión Institucional
                    </h3>
                    <p className="text-base text-[#5E524E] leading-relaxed">
                      La trayectoria de Lizbeth Bernal Segundo combina el rigor normativo con la visión pública, permitiéndole analizar asuntos complejos y brindar certeza jurídica a cada decisión de Cabildo.
                    </p>
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FFE4DC] to-[#FFF6F2] border border-[#EADDD8]">
                      <p className="text-xs font-bold text-[#B94F3D] uppercase tracking-wider">
                        Principio de Actuación
                      </p>
                      <p className="text-xs text-[#181412] mt-1 font-medium">
                        El ejercicio del Derecho es una herramienta orientada al servicio, la legalidad y la responsabilidad institucional.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EADDD8] flex items-center justify-between text-xs text-[#5E524E]">
              <span className="font-semibold text-[#181412]">Licenciatura en Derecho (ISIMA)</span>
              <span className="text-[#B94F3D] font-bold">Maestría UVM en curso</span>
            </div>
          </div>

          {/* Bento Item 2: Sindicatura Municipal Metrics & Badge (Span 4) */}
          <div className="md:col-span-12 lg:col-span-4 p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#181412] to-[#2B2320] text-white flex flex-col justify-between shadow-floating group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#F6B6A6]">
                <Landmark className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F6B6A6]">
                  Cargo Institucional
                </span>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  Síndica Municipal
                </h3>
                <p className="text-xs text-[#EADDD8] font-medium">
                  H. Ayuntamiento de Villa de Allende (2025–Actualidad)
                </p>
              </div>
              <p className="text-xs text-[#A89D97] leading-relaxed pt-2 border-t border-white/10">
                Representación legal del municipio, supervisión del presupuesto de egresos y regularización patrimonial de bienes inmuebles.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B94F3D] text-white text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                En funciones
              </span>
              <span className="text-xs text-[#F6B6A6] font-semibold">Edo. de México</span>
            </div>
          </div>

          {/* Bento Item 3: Formación Académica (Span 6) */}
          <div className="md:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFE4DC] border border-[#EADDD8] flex items-center justify-center text-[#B94F3D]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B94F3D]">
                  Posgrado de Excelencia
                </span>
                <h3 className="text-xl font-extrabold text-[#181412] mt-1">
                  Maestría en Administración Pública
                </h3>
                <p className="text-xs text-[#5E524E] font-semibold mt-0.5">
                  Universidad del Valle de México · Campus Metepec
                </p>
              </div>
              <p className="text-xs text-[#5E524E] leading-relaxed">
                Especialización en curso (2025–Actualidad) enfocada en finanzas públicas, formulación de políticas y control gubernamental.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#EADDD8] flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#FFE4DC] text-[#B94F3D] text-[11px] font-bold">
                En curso (2025)
              </span>
              <span className="text-xs font-bold text-[#181412]">UVM Metepec</span>
            </div>
          </div>

          {/* Bento Item 4: Práctica Jurídica en Despachos (Span 6) */}
          <div className="md:col-span-6 p-7 sm:p-8 rounded-3xl bg-[#FFFDFC] border border-[#EADDD8] hover:border-[#E88771] transition-all duration-300 shadow-card flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FFE4DC] border border-[#EADDD8] flex items-center justify-center text-[#B94F3D]">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B94F3D]">
                  Técnica Procesal
                </span>
                <h3 className="text-xl font-extrabold text-[#181412] mt-1">
                  Litigio Civil, Amparo y Conciliación
                </h3>
                <p className="text-xs text-[#5E524E] font-semibold mt-0.5">
                  Montes de Oca y Asociados &middot; Galeana & Asociados
                </p>
              </div>
              <p className="text-xs text-[#5E524E] leading-relaxed">
                Experiencia jurídica forjada en juzgados de Toluca: redacción de promociones, demandas, comparecencias ante fiscalías y convenios.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#EADDD8] flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#FFF6F2] text-[#5E524E] text-[11px] font-bold border border-[#EADDD8]">
                2019 – 2024
              </span>
              <span className="text-xs font-bold text-[#181412]">Toluca, Edo. Méx.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
