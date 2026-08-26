import { MetadataRoute } from "next";
import { PROFILE_DATA } from "@/data/profile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/api/"],
    },
    sitemap: `${PROFILE_DATA.site.url}/sitemap.xml`,
  };
}
