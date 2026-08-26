export interface TimelineItem {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  current?: boolean;
  category: "public" | "private";
  tag: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  campus?: string;
  period: string;
  status: "in_progress" | "completed";
  statusLabel: string;
  tag: string;
  highlights: string[];
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  tag: string;
  summary: string;
  points: string[];
}

export interface PrincipleItem {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
}

export const PROFILE_DATA = {
  personal: {
    fullName: "Lizbeth Bernal Segundo",
    shortName: "Lizbeth Bernal",
    monogram: "LB",
    profession: "Abogada & Servidora Pública",
    location: "Villa de Allende, Edo. Méx.",
    currentRole: "Síndica Municipal",
    currentEducation: "Maestría en Admón. Pública (UVM)",
    portraitPath: "/images/lizbeth-bernal-retrato.webp",
    portraitAlt: "Lizbeth Bernal Segundo, abogada y servidora pública de Villa de Allende",
  },
  
  site: {
    domain: "lizbernal.mx",
    url: "https://lizbernal.mx",
    locale: "es-MX",
    title: "Lizbeth Bernal Segundo | Abogada y Síndica Municipal",
    description: "Perfil profesional de Lizbeth Bernal Segundo, abogada y servidora pública con experiencia en representación jurídica municipal, litigio y administración pública en el Estado de México.",
    keywords: [
      "Lizbeth Bernal Segundo",
      "Lizbeth Bernal",
      "Abogada",
      "Síndica Municipal de Villa de Allende",
      "Administración Pública",
      "Representación Jurídica",
      "Estado de México",
    ],
    disclaimer: "Sitio personal de carácter profesional e informativo. No constituye propaganda electoral ni solicita apoyo o voto.",
  },

  contact: {
    email: "contacto@lizbernal.mx",
    isEmailPending: true,
    emailPendingNote: "Buzón institucional en proceso de habilitación técnica.",
    locationText: "Villa de Allende, Estado de México",
  },

  hero: {
    badge: "ABOGADA · ADMINISTRACIÓN PÚBLICA · SINDICATURA",
    headingMain: "Lizbeth Bernal",
    headingAccent: "Segundo",
    punchline: "Derecho, rigor técnico y vocación al servicio municipal.",
    subtext: "Especialista en litigio privado, control presupuestal y defensa del patrimonio público en el Estado de México.",
    stats: [
      { value: "2025", label: "Sindicatura Activa", sub: "Villa de Allende" },
      { value: "UVM", label: "Maestría en Curso", sub: "Campus Metepec" },
      { value: "3+ Años", label: "Práctica Jurídica", sub: "Litigio y Tribunales" },
    ],
  },

  profileBento: {
    title: "Perfil y Especialidad",
    subtitle: "Rigor jurídico aplicado al control y patrimonio municipal",
    modes: [
      {
        id: "sindicatura",
        label: "🏛️ Sindicatura Municipal",
        badge: "2025 – Presente",
        headline: "Defensa jurídica y salvaguarda del patrimonio público",
        bullets: [
          "Representación legal y defensa formal del Ayuntamiento en Cabildo.",
          "Supervisión del presupuesto de egresos, finanzas y Tesorería.",
          "Regularización e inscripción de inmuebles ante el Registro Público (RPPyC).",
        ],
      },
      {
        id: "litigio",
        label: "⚖️ Litigio Privado",
        badge: "2019 – 2024",
        headline: "Experiencia procesal en juzgados y tribunales de Toluca",
        bullets: [
          "Elaboración de demandas, recursos legales y juicios de amparo.",
          "Comparecencia a audiencias jurisdiccionales y diligencias en fiscalías.",
          "Mediación, redacción de convenios y acuerdos en conciliación.",
        ],
      },
      {
        id: "academico",
        label: "🎓 Especialización Dual",
        badge: "Derecho + Gobierno",
        headline: "Técnica legal complementada con administración pública",
        bullets: [
          "Licenciatura en Derecho por ISIMA Universidad Toluca (2019–2022).",
          "Maestría en Administración Pública en UVM Metepec (En curso 2025).",
          "Enfoque en toma de decisiones estratégicas y gestión gubernamental.",
        ],
      },
    ],
  },

  expertise: [
    {
      id: "exp-1",
      number: "01",
      title: "Representación Jurídica",
      tag: "Sindicatura",
      summary: "Defensa procesal e institucional de los derechos e intereses del Ayuntamiento.",
      points: [
        "Defensa legal del municipio en procedimientos contenciosos.",
        "Representación formal del H. Ayuntamiento.",
        "Apego al marco normativo del Estado de México.",
      ],
    },
    {
      id: "exp-2",
      number: "02",
      title: "Control Presupuestal",
      tag: "Finanzas Públicas",
      summary: "Revisión técnica de egresos, balances y supervisión de Tesorería.",
      points: [
        "Seguimiento y vigilancia del presupuesto de egresos.",
        "Revisión de informes contables y cortes de caja.",
        "Verificación formal de firmas de Tesorería Municipal.",
      ],
    },
    {
      id: "exp-3",
      number: "03",
      title: "Patrimonio Municipal",
      tag: "Bienes Públicos",
      summary: "Formulación de inventarios y regularización de bienes inmuebles.",
      points: [
        "Actualización de inventarios de bienes del municipio.",
        "Regularización de títulos y propiedades municipales.",
        "Inscripción ante el Registro Público de la Propiedad (RPPyC).",
      ],
    },
    {
      id: "exp-4",
      number: "04",
      title: "Litigio & Amparo",
      tag: "Práctica Procesal",
      summary: "Redacción de demandas, amparos, convenios y desahogo de audiencias.",
      points: [
        "Elaboración de demandas, recursos procesales y amparos.",
        "Comparecencias ante fiscalías y juzgados civiles.",
        "Mediación y formalización de convenios legales.",
      ],
    },
  ] as ExpertiseItem[],

  timeline: [
    {
      id: "t-1",
      role: "Síndica Municipal",
      institution: "H. Ayuntamiento de Villa de Allende",
      location: "Villa de Allende, Edo. Méx.",
      period: "2025 – Actualidad",
      current: true,
      category: "public",
      tag: "Servicio Público",
      highlights: [
        "Representación legal del Ayuntamiento y sesiones de Cabildo.",
        "Supervisión del presupuesto de egresos y cortes de caja de Tesorería.",
        "Inventarios e inscripción de bienes municipales en el Registro Público.",
      ],
    },
    {
      id: "t-2",
      role: "Abogada Junior",
      institution: "Jurídico Montes de Oca y Asociados",
      location: "Toluca, Edo. Méx.",
      period: "2022 – 2024",
      current: false,
      category: "private",
      tag: "Litigio Privado",
      highlights: [
        "Redacción de demandas y seguimiento a juicios de amparo.",
        "Comparecencia a juicios y desahogo de audiencias procesales.",
        "Negociación y elaboración de convenios conciliatorios.",
      ],
    },
    {
      id: "t-3",
      role: "Abogada Junior",
      institution: "Galeana & Asociados",
      location: "Toluca, Edo. Méx.",
      period: "2019 – 2022",
      current: false,
      category: "private",
      tag: "Práctica Jurídica",
      highlights: [
        "Redacción de demandas, promociones y escritos legales.",
        "Comparecencias ante fiscalías y gestión de trámites administrativos.",
        "Atención al público y asesoría legal personalizada.",
      ],
    },
  ] as TimelineItem[],

  education: [
    {
      id: "edu-1",
      degree: "Maestría en Administración Pública",
      institution: "Universidad del Valle de México (UVM)",
      campus: "Campus Metepec",
      period: "2025 – En curso",
      status: "in_progress",
      statusLabel: "En curso",
      tag: "Posgrado",
      highlights: [
        "Planeación estratégica gubernamental y políticas públicas.",
        "Finanzas públicas, auditoría y control institucional.",
        "Gestión directiva en administraciones municipales.",
      ],
    },
    {
      id: "edu-2",
      degree: "Licenciatura en Derecho",
      institution: "ISIMA Universidad",
      campus: "Toluca, Estado de México",
      period: "2019 – 2022",
      status: "completed",
      statusLabel: "Concluida",
      tag: "Licenciatura",
      highlights: [
        "Formación integral en ciencias jurídicas y derecho procesal.",
        "Técnica de litigio civil, mercantil y amparo constitucional.",
        "Derecho administrativo y marco normativo mexiquense.",
      ],
    },
  ] as EducationItem[],

  statement: {
    badge: "VALORES RECTORES",
    punchline: "El ejercicio del Derecho es una herramienta de servicio y certeza pública.",
    tags: ["LEGALIDAD", "RESPONSABILIDAD", "COMUNIDAD"],
  },

  principles: [
    {
      id: "prin-1",
      title: "Legalidad",
      tagline: "Apego estricto a la norma",
      iconName: "scale",
      description: "Actuación fundada en el marco jurídico vigente para garantizar certeza y debido proceso institucional.",
    },
    {
      id: "prin-2",
      title: "Responsabilidad",
      tagline: "Protección patrimonial y fiscal",
      iconName: "shield",
      description: "Supervisión rigurosa del presupuesto de egresos y cuidado formal de los bienes del municipio.",
    },
    {
      id: "prin-3",
      title: "Servicio a la Comunidad",
      tagline: "Compromiso de cercanía",
      iconName: "heart",
      description: "Práctica jurídica con sentido ético y vocación social para proteger los intereses colectivos.",
    },
  ] as PrincipleItem[],

  cta: {
    badge: "CONEXIÓN DIRECTA",
    title: "¿Tienes un asunto o consulta profesional?",
    subtitle: "Canal de correspondencia para temas jurídicos e institucionales.",
    buttonText: "Enviar mensaje",
  },
};
