import ScoresIllustration from "@/components/illustrations/ScoresIllustration";
import Stats from "@/components/blocks/Stats";
import Card from "@/components/ui/Card";

const metrics = [
  { value: "99.99%", label: "Uptime guarantee", description: "We ensure maximum availability of your MCP servers" },
  { value: "200+", label: "Edge locations", description: "Global network presence for reduced latency" },
  { value: "5,000+", label: "Active deployments", description: "Trusted by developers across industries" },
  { value: "<10ms", label: "Response time", description: "Lightning-fast request processing" },
];

export default function MetricsSection() {
  return (
    <section className="border-y border-white/10 bg-background/50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-container">
        <h2 className="text-center text-2xl font-medium text-foreground md:text-3xl">
          Industry-leading performance
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-accent">
          Our MCP servers offer exceptional speed and reliability, powering thousands of applications across the globe.
        </p>
        <div className="mt-12">
          <Stats items={metrics} />
        </div>
        <Card variant="bordered" className="mt-12 lg:mx-auto lg:max-w-md">
          <ScoresIllustration />
        </Card>
      </div>
    </section>
  );
}
