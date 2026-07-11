import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogPostExperience from "@/components/blog/BlogPostExperience";
import { getAllBlogSlugs, getBlogPost } from "@/data/blogPosts";
import { siteConfig } from "@/lib/seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) {
    return { title: "Post not found | FluvoSoft" };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | FluvoSoft Blog`,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: siteConfig.openGraph.siteName,
      publishedTime: post.publishedAt,
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

function buildArticleJsonLd(slug: string) {
  const post = getBlogPost(slug);
  if (!post) return null;

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/fluvo_logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.tag,
    url,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const jsonLd = buildArticleJsonLd(params.slug);

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <Navbar />
      <main className="min-h-screen" role="main">
        <BlogPostExperience post={post} />
      </main>
      <Footer />
    </>
  );
}
