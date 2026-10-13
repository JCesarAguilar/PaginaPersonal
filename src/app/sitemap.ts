import type { MetadataRoute } from "next";
import { SITE } from "@/src/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE.url, lastModified: new Date(), priority: 1 }];
}
