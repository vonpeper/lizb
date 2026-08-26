import { ImageResponse } from "next/og";
import { PROFILE_DATA } from "@/data/profile";

export const runtime = "edge";
export const alt = "Lizbeth Bernal Segundo - Perfil Profesional";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FFFDFC",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative background circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            backgroundColor: "#FFE4DC",
            opacity: 0.6,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            backgroundColor: "#FFF6F2",
            opacity: 0.8,
          }}
        />

        {/* Top Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                backgroundColor: "#FFE4DC",
                border: "2px solid #EADDD8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#B94F3D",
              }}
            >
              {PROFILE_DATA.personal.monogram}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold", color: "#181412" }}>
                {PROFILE_DATA.personal.fullName}
              </span>
              <span style={{ fontSize: "12px", color: "#B94F3D", fontWeight: "600", textTransform: "uppercase" }}>
                {PROFILE_DATA.personal.location}
              </span>
            </div>
          </div>

          <div
            style={{
              padding: "8px 18px",
              borderRadius: "999px",
              backgroundColor: "#FFF6F2",
              border: "1px solid #EADDD8",
              color: "#B94F3D",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Síndica Municipal
          </div>
        </div>

        {/* Center Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 10 }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: "900",
              color: "#181412",
              lineHeight: 1.05,
              letterSpacing: "-1px",
            }}
          >
            {PROFILE_DATA.personal.fullName}
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#B94F3D",
              fontWeight: "700",
              lineHeight: 1.2,
            }}
          >
            {PROFILE_DATA.hero.punchline}
          </div>
          <div
            style={{
              fontSize: "18px",
              color: "#5E524E",
              maxWidth: "850px",
              lineHeight: 1.5,
            }}
          >
            Abogada &middot; Síndica Municipal &middot; Maestrante en Administración Pública (UVM)
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #EADDD8",
            paddingTop: "24px",
            zIndex: 10,
          }}
        >
          <div style={{ fontSize: "14px", color: "#5E524E", fontWeight: "600" }}>
            {PROFILE_DATA.site.domain}
          </div>
          <div style={{ fontSize: "14px", color: "#B94F3D", fontWeight: "700" }}>
            Legalidad &middot; Responsabilidad &middot; Servicio a la Comunidad
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
