import RadarIllustration from "@/components/illustrations/RadarIllustration";
import NetworkIllustration from "@/components/illustrations/NetworkIllustration";
import TilesIllustration from "@/components/illustrations/TilesIllustration";
import BarChartIllustration from "@/components/illustrations/BarChartIllustration";

const capabilities = [
  { name: "SSL Encryption", desc: "Automatic SSL certificate provisioning and renewal for secure connections to your MCP servers.", icon: "radar" },
  { name: "Custom Domains", desc: "Connect your own domain names to your MCP servers with easy DNS configuration and management.", icon: "network" },
  { name: "API Integration", desc: "Comprehensive API access for automating deployments, configurations, and management tasks.", icon: "tiles" },
  { name: "Edge Computing", desc: "Execute code at the edge for faster responses and reduced backend load.", icon: "barchart" },
  { name: "Configuration Management", desc: "Version-controlled configuration files with easy rollback capabilities.", icon: "tiles" },
  { name: "Logging & Monitoring", desc: "Advanced logging with searchable history and customizable alerts for critical events.", icon: "barchart" },
  { name: "Priority Support", desc: "Priority support for critical issues and proactive assistance to ensure your MCP servers are always running smoothly.", icon: "radar" },
  { name: "Custom Integrations", desc: "Seamless integration with your existing systems and tools for a streamlined deployment process.", icon: "network" },
];

function CapIcon({ icon }: { icon: string }) {
  const className = "h-12 w-12 text-foreground";
  switch (icon) {
    case "radar": return <RadarIllustration className={className} />;
    case "network": return <NetworkIllustration className={className} />;
    case "tiles": return <TilesIllustration className={className} />;
    case "barchart": return <BarChartIllustration className={className} />;
    default: return null;
  }
}

export default function CapabilitiesSection() {
  return (
    <section className="border-t border-white/10 bg-background px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-container">
        <h2 className="text-center text-2xl font-medium text-foreground md:text-3xl">
          Comprehensive MCP infrastructure
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-accent">
          Our platform integrates seamlessly with your existing applications, providing a robust infrastructure for running your MCP servers across a global network.
        </p>
        <h3 className="mt-12 text-center text-lg font-medium text-foreground">
          MCP server capabilities
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 flex justify-center">
                <CapIcon icon={c.icon} />
              </div>
              <h4 className="font-medium text-foreground">{c.name}</h4>
              <p className="mt-2 text-sm text-accent">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
