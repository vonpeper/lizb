import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { PROFILE_DATA } from "@/data/profile";
import { getProfilePageSchema } from "@/lib/structured-data";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
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
    default: PROFILE_DATA.site.title,
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
    type: "profile",
    locale: "es_MX",
    url: PROFILE_DATA.site.url,
    title: PROFILE_DATA.site.title,
    description: PROFILE_DATA.site.description,
    siteName: `${PROFILE_DATA.personal.fullName} - Perfil Profesional`,
    firstName: "Lizbeth",
    lastName: "Bernal Segundo",
    gender: "female",
  },
  twitter: {
    card: "summary_large_image",
    title: PROFILE_DATA.site.title,
    description: PROFILE_DATA.site.description,
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
    <html lang="es-MX" className={`${cormorantGaramond.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FFFDFC] text-[#181412] antialiased selection:bg-[#FFE4DC] selection:text-[#B94F3D]">
        {children}
      </body>
    </html>
  );
}
