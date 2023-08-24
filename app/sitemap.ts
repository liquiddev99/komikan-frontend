import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://komikan.org",
      lastModified: new Date(),
    },
    {
      url: "https://komikan.org/about",
      lastModified: new Date(),
    },
    {
      url: "https://komikan.org/advanced-search",
      lastModified: new Date(),
    },
  ];
}
