import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { PROFILE_DATA } from "@/data/profile";
import { getProfilePageSchema } from "@/lib/structured-data";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFDFC",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE_DATA.site.url),
  title: {
    default: "Lizbeth Bernal Segundo | Abogada & Síndica Municipal",
    template: `%s | ${PROFILE_DATA.personal.fullName}`,
  },
  description: PROFILE_DATA.site.description,
  keywords: PROFILE_DATA.site.keywords,
  authors: [{ name: PROFILE_DATA.personal.fullName, url: PROFILE_DATA.site.url }],
  creator: PROFILE_DATA.personal.fullName,
  publisher: PROFILE_DATA.personal.fullName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: PROFILE_DATA.site.url,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: PROFILE_DATA.site.url,
    title: "Lizbeth Bernal Segundo | Abogada & Síndica Municipal",
    description: PROFILE_DATA.site.description,
    siteName: "Lizbeth Bernal Segundo · Perfil Profesional",
    images: [
      {
        url: "https://lizbernal.mx/images/og-lizbeth-bernal.jpg",
        secureUrl: "https://lizbernal.mx/images/og-lizbeth-bernal.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Lizbeth Bernal Segundo - Abogada y Síndica Municipal de Villa de Allende",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lizbeth Bernal Segundo | Abogada & Síndica Municipal",
    description: PROFILE_DATA.site.description,
    images: ["https://lizbernal.mx/images/og-lizbeth-bernal.jpg"],
    creator: "@lizbernal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getProfilePageSchema();

  return (
    <html lang="es-MX" className={`${outfit.variable} ${plusJakartaSans.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFDFC] text-[#181412] font-sans antialiased selection:bg-[#FFE4DC] selection:text-[#B94F3D]">
        {children}
      </body>
    </html>
  );
}
