import { inventoryStockTrackerJsonLdBlocks } from "@/lib/inventoryStockTrackerSeo";

export default function InventoryStockTrackerJsonLd() {
  return (
    <>
      {inventoryStockTrackerJsonLdBlocks.map((buildSchema) => {
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
