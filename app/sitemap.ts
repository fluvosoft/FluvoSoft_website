import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { getAllBlogSlugs } from "@/data/blogPosts";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/easy-invoice", priority: 0.9, changeFrequency: "weekly" },
  { path: "/inventory-stock-tracker", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/security", priority: 0.7, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.7, changeFrequency: "monthly" },
  { path: "/research", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/blockchain", priority: 0.7, changeFrequency: "monthly" },
  { path: "/automation", priority: 0.7, changeFrequency: "monthly" },
  { path: "/custom-development", priority: 0.7, changeFrequency: "monthly" },
  { path: "/saas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/rnd", priority: 0.7, changeFrequency: "monthly" },
  { path: "/components", priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const blogEntries = getAllBlogSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
