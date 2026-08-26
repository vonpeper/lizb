import { ImageResponse } from "next/og";
import { PROFILE_DATA } from "@/data/profile";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "#FFE4DC",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#B94F3D",
          borderRadius: "50%",
          fontWeight: 700,
          border: "1px solid #EADDD8",
          fontFamily: "serif",
        }}
      >
        {PROFILE_DATA.personal.monogram}
      </div>
    ),
    {
      ...size,
    }
  );
}
