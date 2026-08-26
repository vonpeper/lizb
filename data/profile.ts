export interface TimelineItem {
  id: string;
  role: string;
  institution: string;
  location: string;
  period: string;
  current?: boolean;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  campus?: string;
  period: string;
  status: "in_progress" | "completed";
  statusLabel: string;
  description: string;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface PrincipleItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
}

export const PROFILE_DATA = {
  personal: {
    fullName: "Lizbeth Bernal Segundo",
    shortName: "Lizbeth Bernal",
    monogram: "LB",
    profession: "Abogada y Servidora Pública",
    location: "Villa de Allende, Estado de México",
    currentRole: "Síndica Municipal de Villa de Allende",
    currentEducation: "Maestrante en Administración Pública (UVM)",
    portraitPath: "/images/lizbeth-bernal-retrato.webp",
    portraitAlt: "Lizbeth Bernal Segundo, abogada y servidora pública de Villa de Allende",
  },
  
  site: {
    domain: "lizbernal.mx",
    url: "https://lizbernal.mx",
    locale: "es-MX",
    title: "Lizbeth Bernal Segundo | Abogada y servidora pública",
    description: "Perfil profesional de Lizbeth Bernal Segundo, abogada y servidora pública con experiencia en representación jurídica municipal, litigio y administración pública en el Estado de México.",
    keywords: [
      "Lizbeth Bernal Segundo",
      "Lizbeth Bernal",
      "Abogada en el Estado de México",
      "Síndica Municipal de Villa de Allende",
      "Administración pública",
      "Representación jurídica municipal",
      "Experiencia jurídica",
      "Servicio público",
      "Villa de Allende",
      "Derecho municipal",
    ],
    disclaimer: "Sitio personal de carácter profesional e informativo. No constituye propaganda electoral ni solicita apoyo o voto.",
    legalReviewNotice: "Texto informativo sujeto a revisión legal antes de difusión pública.",
  },

  contact: {
    email: "contacto@lizbernal.mx",
    isEmailPending: true, // true until officially provisioned on mail server
    emailPendingNote: "Buzón de correspondencia profesional en proceso de habilitación técnica.",
    locationText: "Villa de Allende, Estado de México",
    socialLinks: [
      // Only official and verified profiles to be linked when authorized
    ],
  },

  hero: {
    eyebrow: "ABOGADA · ADMINISTRACIÓN PÚBLICA · SERVICIO PÚBLICO",
    heading: "Lizbeth Bernal Segundo",
    headline: "Derecho y responsabilidad al servicio de la comunidad.",
    description: "Abogada con experiencia en litigio privado, representación jurídica municipal y administración pública. Una trayectoria construida desde la legalidad, el análisis y el compromiso con el servicio público.",
    ctaPrimary: "Conocer trayectoria",
    ctaSecondary: "Contacto profesional",
  },

  profile: {
    title: "Una trayectoria construida desde el Derecho",
    paragraphs: [
      "Lizbeth Bernal Segundo es abogada y servidora pública. Su experiencia comenzó en el ejercicio jurídico privado, donde participó en la preparación de demandas, amparos, convenios, conciliaciones, comparecencias y trámites administrativos.",
      "Actualmente aplica esa experiencia en la representación jurídica municipal y en responsabilidades vinculadas con la revisión administrativa, el patrimonio público y la defensa de los intereses del municipio.",
    ],
    highlights: [
      {
        label: "Formación de Origen",
        value: "Licenciatura en Derecho (ISIMA)",
      },
      {
        label: "Especialización Actual",
        value: "Maestría en Administración Pública (UVM)",
      },
      {
        label: "Enfoque Profesional",
        value: "Legalidad, control patrimonial y defensa institucional",
      },
    ],
  },

  expertise: [
    {
      id: "exp-1",
      number: "01",
      title: "Representación jurídica municipal",
      description: "Defensa de los derechos e intereses del municipio y representación legal del Ayuntamiento.",
      details: [
        "Defensa de los intereses y patrimonio municipal en procedimientos legales.",
        "Representación jurídica del H. Ayuntamiento.",
        "Apego estricto al marco normativo del Estado de México.",
      ],
    },
    {
      id: "exp-2",
      number: "02",
      title: "Responsabilidad administrativa",
      description: "Revisión presupuestal, financiera y de Tesorería conforme a las atribuciones de la Sindicatura.",
      details: [
        "Seguimiento y revisión del ejercicio del presupuesto de egresos.",
        "Supervisión de informes contables y financieros.",
        "Revisión de cortes de caja y firmas de Tesorería Municipal.",
      ],
    },
    {
      id: "exp-3",
      number: "03",
      title: "Patrimonio municipal",
      description: "Participación en inventarios, regularización e inscripción de bienes inmuebles municipales.",
      details: [
        "Intervención en la formulación de inventarios de bienes del municipio.",
        "Procesos de regularización de la propiedad municipal.",
        "Inscripción ante el Registro Público de la Propiedad y del Comercio.",
      ],
    },
    {
      id: "exp-4",
      number: "04",
      title: "Experiencia jurídica",
      description: "Elaboración de demandas, amparos, convenios, conciliaciones, comparecencias y trámites administrativos.",
      details: [
        "Redacción de demandas, amparos y promociones procesales.",
        "Elaboración de convenios y representación en audiencias de conciliación.",
        "Comparecencias ante órganos jurisdiccionales y fiscalías.",
      ],
    },
  ] as ExpertiseItem[],

  timeline: [
    {
      id: "time-1",
      role: "Síndica Municipal",
      institution: "H. Ayuntamiento de Villa de Allende",
      location: "Villa de Allende, Estado de México",
      period: "Enero de 2025 – Actualidad",
      current: true,
      responsibilities: [
        "Representación legal del Ayuntamiento y defensa de los derechos e intereses del municipio.",
        "Revisión de informes contables y financieros del ejercicio presupuestal.",
        "Seguimiento y control del presupuesto de egresos.",
        "Revisión de firmas y cortes de caja de la Tesorería Municipal.",
        "Participación activa en sesiones de Cabildo.",
        "Intervención en la formulación de inventarios municipales.",
        "Regularización de la propiedad de bienes inmuebles municipales.",
        "Inscripción de bienes municipales ante el Registro Público de la Propiedad y del Comercio.",
      ],
    },
    {
      id: "time-2",
      role: "Abogada Junior",
      institution: "Jurídico Montes de Oca y Asociados",
      location: "Toluca, Estado de México",
      period: "Septiembre de 2022 – Octubre de 2024",
      current: false,
      responsibilities: [
        "Redacción de demandas y recursos legales.",
        "Comparecencia a juicios y desahogo de audiencias.",
        "Elaboración de convenios y acuerdos legales.",
        "Representación jurídica en procesos de conciliación.",
        "Redacción y seguimiento de juicios de amparo.",
      ],
    },
    {
      id: "time-3",
      role: "Abogada Junior",
      institution: "Galeana & Asociados",
      location: "Toluca, Estado de México",
      period: "Enero de 2019 – Septiembre de 2022",
      current: false,
      responsibilities: [
        "Asistencia legal integral en litigio civil y administrativo.",
        "Redacción de demandas, promociones y escritos procesales.",
        "Comparecencias y diligencias ante fiscalías.",
        "Atención al público y asesoría jurídica inicial.",
        "Gestión y seguimiento de trámites administrativos.",
      ],
    },
  ] as TimelineItem[],

  education: [
    {
      id: "edu-1",
      degree: "Maestría en Administración Pública",
      institution: "Universidad del Valle de México (UVM)",
      campus: "Campus Metepec",
      period: "Enero de 2025 – Actualidad",
      status: "in_progress",
      statusLabel: "En curso",
      description: "Especialización enfocada en la gestión gubernamental estratégica, planeación pública, finanzas gubernamentales y políticas de impacto institucional.",
    },
    {
      id: "edu-2",
      degree: "Licenciatura en Derecho",
      institution: "ISIMA Universidad",
      campus: "Toluca, Estado de México",
      period: "Enero de 2019 – Diciembre de 2022",
      status: "completed",
      statusLabel: "Concluida",
      description: "Formación integral en ciencias jurídicas con énfasis en derecho procesal, constitucional, administrativo y técnica de litigio.",
    },
  ] as EducationItem[],

  statement: {
    eyebrow: "LEGALIDAD · RESPONSABILIDAD · COMUNIDAD",
    quote: "El ejercicio del Derecho también es una forma de servicio.",
    caption: "Principio rector del ejercicio profesional y de la función pública municipal.",
  },

  principles: [
    {
      id: "prin-1",
      title: "Legalidad",
      tagline: "Apego al marco normativo",
      description: "Cada acción y procedimiento se fundamenta estrictamente en el orden jurídico vigente, garantizando certeza y debido proceso institucional.",
    },
    {
      id: "prin-2",
      title: "Responsabilidad",
      tagline: "Cuidado de los recursos y patrimonio",
      description: "Supervisión rigurosa del presupuesto de egresos, revisión financiera y salvaguarda formal de los bienes que pertenecen al municipio.",
    },
    {
      id: "prin-3",
      title: "Servicio a la comunidad",
      tagline: "Compromiso con el bienestar público",
      description: "Ejercicio del Derecho con sentido ético y vocación social, orientando la labor jurídica a la protección de los intereses colectivos.",
    },
  ] as PrincipleItem[],

  cta: {
    title: "Una trayectoria profesional al servicio de lo público",
    description: "Conoce el perfil, la preparación y la experiencia jurídica de Lizbeth Bernal Segundo.",
    buttonPrimary: "Contacto profesional",
    buttonSecondary: "Volver al inicio",
  },
};
