import { easyInvoiceJsonLdBlocks } from "@/lib/easyInvoiceSeo";

export default function EasyInvoiceJsonLd() {
  return (
    <>
      {easyInvoiceJsonLdBlocks.map((buildSchema) => {
        const schema = buildSchema();
        const key =
          "@type" in schema && typeof schema["@type"] === "string"
            ? schema["@type"]
            : "schema";
        return (
          <script
            key={key}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        );
      })}
    </>
  );
}
