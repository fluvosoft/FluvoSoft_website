import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Tabs,
  Accordion,
  Alert,
  Separator,
} from "@/components/ui";
import {
  BentoGrid,
  BentoCell,
  Stats,
  Logos,
  FeatureList,
  TestimonialCard,
  PricingCard,
  CTA,
} from "@/components/blocks";

export const metadata = {
  title: "Components – Launch UI",
  description: "All Launch UI components and blocks.",
};

export default function ComponentsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-container px-6 py-16 lg:px-8">
        <div className="mb-16">
          <Link href="/" className="text-sm text-accent hover:text-foreground">← Back to home</Link>
          <h1 className="mt-4 text-4xl font-medium text-foreground">Launch UI Components</h1>
          <p className="mt-2 text-accent">
            All components and blocks from Launch UI. Built with React, Tailwind and TypeScript.
          </p>
        </div>

        <Separator className="my-12" />

        <section id="ui" className="scroll-mt-24">
          <h2 className="text-2xl font-medium text-foreground">UI Components</h2>
          <p className="mt-2 text-accent">Buttons, badges, cards, inputs, tabs, accordion, alert.</p>

          <div className="mt-8 space-y-12">
            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Button</h3>
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="link">Link</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Badge</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="brand">Brand</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Card</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <Card variant="default">
                  <CardHeader>
                    <CardTitle>Default card</CardTitle>
                    <CardDescription>Description text here.</CardDescription>
                  </CardHeader>
                  <CardContent>Content</CardContent>
                  <CardFooter><Button size="sm">Action</Button></CardFooter>
                </Card>
                <Card variant="bordered">
                  <CardTitle>Bordered</CardTitle>
                  <CardDescription>With border.</CardDescription>
                </Card>
                <Card variant="elevated">
                  <CardTitle>Elevated</CardTitle>
                  <CardDescription>With shadow.</CardDescription>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Input</h3>
              <div className="max-w-xs space-y-2">
                <Input placeholder="Placeholder" />
                <Input placeholder="With error" error />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Tabs</h3>
              <Tabs
                items={[
                  { value: "a", label: "Tab A", content: <p className="text-accent">Content for Tab A.</p> },
                  { value: "b", label: "Tab B", content: <p className="text-accent">Content for Tab B.</p> },
                  { value: "c", label: "Tab C", content: <p className="text-accent">Content for Tab C.</p> },
                ]}
              />
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Accordion</h3>
              <Accordion
                items={[
                  { value: "1", trigger: "First item", content: "Content for first item." },
                  { value: "2", trigger: "Second item", content: "Content for second item." },
                  { value: "3", trigger: "Third item", content: "Content for third item." },
                ]}
              />
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Alert</h3>
              <div className="max-w-md space-y-3">
                <Alert title="Default">Default alert message.</Alert>
                <Alert variant="success" title="Success">Success message.</Alert>
                <Alert variant="warning" title="Warning">Warning message.</Alert>
                <Alert variant="destructive" title="Error">Error message.</Alert>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        <section id="blocks" className="scroll-mt-24">
          <h2 className="text-2xl font-medium text-foreground">Blocks</h2>
          <p className="mt-2 text-accent">Stats, Logos, Feature list, Bento grid, Testimonial, Pricing, CTA.</p>

          <div className="mt-8 space-y-16">
            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Stats</h3>
              <Stats
                items={[
                  { value: "99.99%", label: "Uptime", description: "Guaranteed" },
                  { value: "200+", label: "Edge locations" },
                  { value: "5,000+", label: "Deployments" },
                  { value: "<10ms", label: "Response time" },
                ]}
              />
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Logos</h3>
              <Logos title="Trusted by">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-24 rounded bg-white/10" />
                ))}
              </Logos>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Feature list</h3>
              <FeatureList
                title="Features"
                subtitle="Short subtitle."
                items={[
                  { title: "Feature one", description: "Description for feature one." },
                  { title: "Feature two", description: "Description for feature two." },
                  { title: "Feature three", description: "Description for feature three." },
                ]}
              />
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Bento grid</h3>
              <BentoGrid>
                <BentoCell title="Cell 1" description="Description" span="1">Content</BentoCell>
                <BentoCell title="Cell 2" span="2">Wider content</BentoCell>
                <BentoCell title="Cell 3" span="1">Content</BentoCell>
                <BentoCell title="Cell 4" span="1">Content</BentoCell>
                <BentoCell title="Cell 5" span="1">Content</BentoCell>
              </BentoGrid>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Testimonial card</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <TestimonialCard
                  quote="Great product. Would recommend."
                  name="Jane Doe"
                  role="CTO, Company"
                  initial="J"
                />
                <TestimonialCard quote="Simple and fast." name="John Smith" role="Developer" />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">Pricing card</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <PricingCard
                  name="Starter"
                  description="For individuals"
                  price="$0"
                  period="one-time"
                  cta="Get started"
                  features={["Feature A", "Feature B", "Feature C"]}
                />
                <PricingCard
                  name="Pro"
                  description="For teams"
                  price="$16"
                  period="one-time"
                  cta="Get started"
                  features={["Everything in Starter", "Feature D", "Feature E"]}
                  featured
                />
                <PricingCard
                  name="Enterprise"
                  description="For organizations"
                  price="$66"
                  period="one-time"
                  cta="Contact sales"
                  features={["Everything in Pro", "Feature F", "Support"]}
                />
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-medium text-foreground">CTA block</h3>
              <CTA
                title="Ready to get started?"
                description="Join thousands of developers."
                primaryAction={{ label: "Get started" }}
                secondaryAction={{ label: "View docs" }}
              />
            </div>
          </div>
        </section>

        <div className="mt-24 pt-12 border-t border-white/10">
          <p className="text-sm text-accent">
            Launch UI – Next.js Website Components Template. Blocks, components and illustrations for building websites.
          </p>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
