import { PROFILE_DATA } from "@/data/profile";

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${PROFILE_DATA.site.url}/#profilepage`,
    url: PROFILE_DATA.site.url,
    name: `${PROFILE_DATA.personal.fullName} - Perfil Profesional`,
    description: PROFILE_DATA.site.description,
    inLanguage: "es-MX",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "Person",
      "@id": `${PROFILE_DATA.site.url}/#person`,
      name: PROFILE_DATA.personal.fullName,
      givenName: "Lizbeth",
      familyName: "Bernal Segundo",
      jobTitle: "Abogada y Síndica Municipal",
      image: "https://lizbernal.mx/images/og-lizbeth-bernal.jpg",
      description: PROFILE_DATA.site.description,
      url: PROFILE_DATA.site.url,
      sameAs: [
        "https://lizbernal.mx",
      ],
      knowsAbout: [
        "Derecho",
        "Administración Pública",
        "Derecho Municipal",
        "Control Presupuestal",
        "Patrimonio Municipal",
        "Litigio Jurídico",
      ],
      worksFor: {
        "@type": "GovernmentOrganization",
        name: "H. Ayuntamiento de Villa de Allende",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Villa de Allende",
          addressRegion: "Estado de México",
          addressCountry: "MX",
        },
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "ISIMA Universidad",
          location: "Toluca, Estado de México",
        },
        {
          "@type": "EducationalOrganization",
          name: "Universidad del Valle de México (UVM)",
          location: "Metepec, Estado de México",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Villa de Allende",
        addressRegion: "Estado de México",
        addressCountry: "MX",
      },
    },
  };
}
