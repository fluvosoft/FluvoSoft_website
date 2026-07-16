import { buildResumeBuilderJsonLdGraph } from "@/lib/resumeBuilderSeo";

export default function ResumeBuilderJsonLd() {
  const schema = buildResumeBuilderJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
