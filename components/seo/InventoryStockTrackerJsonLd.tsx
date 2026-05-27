import { buildInventoryStockTrackerJsonLdGraph } from "@/lib/inventoryStockTrackerSeo";

export default function InventoryStockTrackerJsonLd() {
  const schema = buildInventoryStockTrackerJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
