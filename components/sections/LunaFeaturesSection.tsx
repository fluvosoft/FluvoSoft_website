import InfrastructureIllustration from "@/components/illustrations/InfrastructureIllustration";
import ChatIllustration from "@/components/illustrations/ChatIllustration";
import PipelineIllustration from "@/components/illustrations/PipelineIllustration";
import RippleIllustration from "@/components/illustrations/RippleIllustration";
import LineChartIllustration from "@/components/illustrations/LineChartIllustration";

const features = [
  {
    title: "Easy Deployment",
    description: "Deploy your MCP server with just a few clicks using our intuitive interface or via CLI. No complex configuration required to get started.",
    illustration: "infrastructure",
  },
  {
    title: "Global Distribution",
    description: "Automatically distribute your MCP instances across our global edge network to ensure low latency and high availability for all users.",
    illustration: "chat",
  },
  {
    title: "Scalable Infrastructure",
    description: "Our system automatically scales your MCP servers based on traffic demands, ensuring optimal performance even during traffic spikes.",
    illustration: "pipeline",
  },
  {
    title: "Advanced Caching",
    description: "Intelligent caching mechanisms dramatically reduce load times and minimize origin server requests, improving user experience.",
    illustration: "ripple",
  },
  {
    title: "Real-time Analytics",
    description: "Monitor your MCP server performance, traffic patterns, and resource usage with comprehensive real-time analytics.",
    illustration: "linechart",
  },
];

function FeatureIllustration({ name }: { name: string }) {
  switch (name) {
    case "infrastructure":
      return <InfrastructureIllustration className="mt-2" />;
    case "chat":
      return <ChatIllustration className="mt-2" />;
    case "pipeline":
      return <PipelineIllustration className="mt-2 text-foreground" />;
    case "ripple":
      return <div className="mt-2 flex justify-center"><RippleIllustration className="text-foreground" /></div>;
    case "linechart":
      return <div className="mt-2 h-16 w-full text-brand"><LineChartIllustration className="h-full w-full" /></div>;
    default:
      return null;
  }
}

export default function LunaFeaturesSection() {
  return (
    <section className="bg-background px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-container">
        <h2 className="text-center text-2xl font-medium text-foreground md:text-3xl">
          Advanced MCP server features
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-accent">
          Our platform provides a comprehensive suite of tools for deploying, managing, and scaling your MCP servers on the CloudFlare Network infrastructure.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-medium text-foreground">{f.title}</h3>
              <p className="text-sm text-accent">{f.description}</p>
              <FeatureIllustration name={f.illustration} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
