import { buildEasyInvoiceJsonLdGraph } from "@/lib/easyInvoiceSeo";

export default function EasyInvoiceJsonLd() {
  const schema = buildEasyInvoiceJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
