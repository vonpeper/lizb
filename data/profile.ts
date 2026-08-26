export interface ProfileData {
  personal: {
    fullName: string;
    shortName: string;
    monogram: string;
    currentRole: string;
    profession: string;
    location: string;
    portraitPath: string;
    avatarPath: string;
    portraitAlt: string;
  };
  site: {
    title: string;
    description: string;
    domain: string;
    url: string;
    keywords: string[];
  };
  hero: {
    badge: string;
    headingMain: string;
    headingAccent: string;
    punchline: string;
    subtext: string;
    stats: {
      value: string;
      label: string;
      sub: string;
    }[];
  };
  profileBento: {
    title: string;
    subtitle: string;
    modes: {
      id: string;
      label: string;
      badge: string;
      headline: string;
      bullets: string[];
    }[];
  };
  expertise: {
    id: string;
    title: string;
    tag: string;
    summary: string;
    image?: string;
    points: string[];
  }[];
  timeline: {
    id: string;
    period: string;
    role: string;
    institution: string;
    location: string;
    category: "public" | "private";
    tag: string;
    current?: boolean;
    highlights: string[];
  }[];
  education: {
    id: string;
    degree: string;
    institution: string;
    campus?: string;
    period: string;
    image?: string;
    status: "in_progress" | "completed";
    statusLabel: string;
    highlights: string[];
  }[];
  activities: {
    id: string;
    title: string;
    category: "cabildo" | "patrimonio" | "academico";
    categoryLabel: string;
    date: string;
    image: string;
    summary: string;
    tags: string[];
  }[];
  statement: {
    badge: string;
    punchline: string;
    tags: string[];
  };
  principles: {
    id: string;
    title: string;
    tagline: string;
    description: string;
  }[];
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };
  contact: {
    email: string;
    institutionalLocation: string;
    officeHours: string;
    modalTitle: string;
    modalDescription: string;
  };
}

export const PROFILE_DATA: ProfileData = {
  personal: {
    fullName: "Lizbeth Bernal Segundo",
    shortName: "Lizbeth Bernal",
    monogram: "LB",
    currentRole: "Síndica Municipal",
    profession: "Licenciada en Derecho",
    location: "Villa de Allende, Estado de México",
    portraitPath: "/images/lizbeth-bernal-retrato.jpg",
    avatarPath: "/images/lizbeth-bernal-avatar.png",
    portraitAlt: "Retrato profesional de Lizbeth Bernal Segundo, Abogada y Síndica Municipal",
  },
  site: {
    title: "Lizbeth Bernal Segundo | Abogada & Síndica Municipal",
    description:
      "Sitio profesional de Lizbeth Bernal Segundo. Abogada y Síndica Municipal en Villa de Allende, Estado de México (2025–Presente). Maestría en Administración Pública en curso (UVM).",
    domain: "lizbernal.mx",
    url: "https://lizbernal.mx",
    keywords: [
      "Lizbeth Bernal Segundo",
      "Lizbeth Bernal",
      "Abogada Estado de México",
      "Síndica Municipal Villa de Allende",
      "Administración Pública UVM",
      "Derecho Municipal Toluca",
    ],
  },
  hero: {
    badge: "Síndica Municipal 2025 · Villa de Allende",
    headingMain: "Lizbeth",
    headingAccent: "Bernal",
    punchline: "Abogada & Servidora Pública",
    subtext:
      "Representación legal institucional, defensa del patrimonio municipal y práctica jurídica con rigor normativo en el Estado de México.",
    stats: [
      { value: "2025", label: "Sindicatura Municipal", sub: "Villa de Allende" },
      { value: "UVM", label: "Maestría en Admón. Pública", sub: "Campus Metepec" },
      { value: "ISIMA", label: "Licenciatura en Derecho", sub: "Toluca" },
    ],
  },
  profileBento: {
    title: "Perfil Jurídico & Municipal",
    subtitle: "Sinergia técnica entre el litigio en tribunales y el servicio público en Villa de Allende.",
    modes: [
      {
        id: "sindicatura",
        label: "🏛️ Sindicatura Municipal",
        badge: "Villa de Allende · 2025",
        headline: "Defensa jurídica y fiscalización institucional",
        bullets: [
          "Representación legal del H. Ayuntamiento en controversias",
          "Revisión y vigilancia de cortes de caja y hacienda pública",
          "Actualización del inventario de bienes muebles e inmuebles",
        ],
      },
      {
        id: "litigio",
        label: "⚖️ Práctica Procesal",
        badge: "Toluca · 2019–2024",
        headline: "Experiencia en juzgados civiles, mercantiles y amparo",
        bullets: [
          "Redacción de demandas y seguimiento en salas judiciales",
          "Estrategias de amparo y control de legalidad",
          "Conciliación de convenios y asesoría jurídica integral",
        ],
      },
      {
        id: "formacion",
        label: "🎓 Gestión Pública",
        badge: "UVM Metepec",
        headline: "Preparación continua en finanzas y gobernanza",
        bullets: [
          "Especialización en administración pública y presupuesto",
          "Herramientas modernas de evaluación del gasto",
          "Visión contemporánea de políticas públicas locales",
        ],
      },
    ],
  },
  expertise: [
    {
      id: "exp-1",
      title: "Representación Jurídica Municipal",
      tag: "Art. 52 Ley Orgánica",
      summary: "Mandato legal y defensa en controversias y juicios.",
      image: "/images/mexican-law-codigo-nacional.jpg",
      points: [
        "Representación del Ayuntamiento ante tribunales",
        "Revisión de contratos y convenios oficiales",
        "Emisión de dictámenes y acuerdos de Cabildo",
      ],
    },
    {
      id: "exp-2",
      title: "Protección y Registro del Patrimonio",
      tag: "Certeza Jurídica",
      summary: "Custodia e inscripción de bienes muebles e inmuebles.",
      image: "/images/villa-allende-plaza-monumento.jpg",
      points: [
        "Actualización del inventario general de bienes",
        "Trámites de escrituración y registro RPPyC",
        "Inspección física y delimitación de predios públicos",
      ],
    },
    {
      id: "exp-3",
      title: "Vigilancia de la Hacienda Pública",
      tag: "Control Financiero",
      summary: "Supervisión de cortes de caja y presupuestos.",
      image: "/images/mexican-law-expedientes-tomo.jpg",
      points: [
        "Revisión mensual de ingresos y egresos de Tesorería",
        "Fiscalización de cuentas públicas municipales",
        "Supervisión de contratos de obra y adquisiciones",
      ],
    },
    {
      id: "exp-4",
      title: "Técnica Procesal y Litigio",
      tag: "Práctica Forense",
      summary: "Experiencia en salas judiciales y tribunales de Toluca.",
      image: "/images/mexican-law-balanza-libros.png",
      points: [
        "Elaboración de demandas y recursos de amparo",
        "Estrategias procesales en materia civil y mercantil",
        "Convenios de transacción y mediación",
      ],
    },
  ],
  timeline: [
    {
      id: "exp-2025",
      period: "2025 – Presente",
      role: "Síndica Municipal",
      institution: "H. Ayuntamiento de Villa de Allende",
      location: "Villa de Allende, Edo. Méx.",
      category: "public",
      tag: "Servicio Público",
      current: true,
      highlights: [
        "Defensa legal del Ayuntamiento",
        "Control del inventario patrimonial",
        "Vigilancia de la Hacienda Municipal",
      ],
    },
    {
      id: "exp-2022",
      period: "2022 – 2024",
      role: "Abogada Postulante",
      institution: "Jurídico Montes de Oca y Asociados",
      location: "Toluca, Edo. Méx.",
      category: "private",
      tag: "Litigio Privado",
      highlights: [
        "Juicios civiles y mercantiles",
        "Juicios de amparo indirecto",
        "Convenios y mediación extrajudicial",
      ],
    },
    {
      id: "exp-2019",
      period: "2019 – 2022",
      role: "Asistente Jurídico",
      institution: "Galeana & Asociados",
      location: "Toluca, Edo. Méx.",
      category: "private",
      tag: "Formación Procesal",
      highlights: [
        "Integración de expedientes en juzgados",
        "Elaboración de proyectos de demanda",
        "Diligencias y seguimiento procesal",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Maestría en Administración Pública",
      institution: "Universidad del Valle de México (UVM)",
      campus: "Campus Metepec",
      period: "Enero 2025 – Presente",
      image: "/images/villa-allende-scenic.jpg",
      status: "in_progress",
      statusLabel: "En curso",
      highlights: [
        "Finanzas públicas y presupuesto basado en resultados",
        "Planeación estratégica institucional",
        "Políticas públicas y modernización de la gestión local",
      ],
    },
    {
      id: "edu-2",
      degree: "Licenciatura en Derecho",
      institution: "ISIMA Universidad",
      campus: "Toluca, Estado de México",
      period: "2019 – 2022",
      image: "/images/mexican-law-codigo-nacional.jpg",
      status: "completed",
      statusLabel: "Concluida con Título",
      highlights: [
        "Derecho Constitucional, Administrativo y Civil",
        "Técnica procesal y argumentación jurídica",
        "Práctica forense en juzgados y tribunales de Toluca",
      ],
    },
  ],
  activities: [
    {
      id: "act-1",
      title: "Instalación y Primera Sesión Ordinaria de Cabildo",
      category: "cabildo",
      categoryLabel: "Cabildo & Sindicatura",
      date: "2025 · Villa de Allende",
      image: "/images/mexican-law-expedientes-tomo.jpg",
      summary: "Toma de protesta y análisis de los primeros acuerdos de gobernanza y legalidad para el periodo municipal en Villa de Allende.",
      tags: ["Cabildo", "Marco Normativo", "Villa de Allende"],
    },
    {
      id: "act-2",
      title: "Programa de Regularización y Certeza Patrimonial",
      category: "patrimonio",
      categoryLabel: "Patrimonio Municipal",
      date: "2025 · Villa de Allende",
      image: "/images/villa-allende-plaza-monumento.jpg",
      summary: "Revisión técnica de escrituración e inscripción de bienes de dominio público en el Registro Público de la Propiedad.",
      tags: ["Patrimonio", "RPPyC", "Bienes Públicos"],
    },
    {
      id: "act-3",
      title: "Seminario de Finanzas y Control Presupuestario Local",
      category: "academico",
      categoryLabel: "Gestión Pública UVM",
      date: "2025 · UVM Metepec",
      image: "/images/mexican-law-codigo-nacional.jpg",
      summary: "Actualización técnica en fiscalización de la Hacienda Municipal y modernización del gasto público local.",
      tags: ["UVM Metepec", "Hacienda Pública", "Transparencia"],
    },
  ],
  statement: {
    badge: "Vocación & Compromiso",
    punchline: "Servir con legalidad, proteger el patrimonio común y dignificar la función pública.",
    tags: ["Transparencia", "Rigor Jurídico", "Villa de Allende", "Edo. de México"],
  },
  principles: [
    {
      id: "prin-1",
      title: "Legalidad Estricta",
      tagline: "Apego al marco normativo",
      description: "Cada acto de autoridad municipal fundamentado en las leyes y reglamentos del Estado de México.",
    },
    {
      id: "prin-2",
      title: "Certeza y Custodia",
      tagline: "Protección del patrimonio",
      description: "Defensa activa de los bienes y recursos que pertenecen a la comunidad de Villa de Allende.",
    },
    {
      id: "prin-3",
      title: "Servicio Cercano",
      tagline: "Atención con responsabilidad",
      description: "Escucha activa y resolución con base en el derecho y el interés público de la ciudadanía.",
    },
  ],
  cta: {
    badge: "Comunicación Directa",
    title: "Contacto Profesional",
    subtitle: "Canal oficial para correspondencia jurídica, asuntos institucionales de la Sindicatura y vinculación profesional.",
    buttonText: "Enviar Mensaje",
  },
  contact: {
    email: "contacto@lizbernal.mx",
    institutionalLocation: "Palacio Municipal, Villa de Allende, Estado de México",
    officeHours: "Lunes a Viernes · 9:00 a 18:00 hrs",
    modalTitle: "Contacto Profesional e Institucional",
    modalDescription: "Escribe tu consulta para vinculación profesional o correspondencia institucional.",
  },
};
