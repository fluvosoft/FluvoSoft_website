import { buildKyotoJsonLdGraph } from "@/lib/kyotoSeo";

export default function KyotoJsonLd() {
  const schema = buildKyotoJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
