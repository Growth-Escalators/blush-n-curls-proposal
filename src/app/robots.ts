import type { MetadataRoute } from "next";

// Private client-proposal microsite — must never be publicly indexed.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
