import { buildCareersJsonLdGraph } from "@/lib/careersSeo";

export default function CareersJsonLd() {
  const schema = buildCareersJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
