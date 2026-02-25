const features: Array<{ title: string; description: string; icon: string; icon2?: string }> = [
  {
    title: "Accessibility first",
    description: "Fully WCAG 2.0 compliment, made with best a11y practices",
    icon: "M3 7V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H7M17 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V7M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17M7 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01",
  },
  {
    title: "Responsive design",
    description: "Looks and works great on any device and screen size",
    icon: "M18 8V6C18 5.46957 17.7893 4.96086 17.4142 4.58579C17.0391 4.21071 16.5304 4 16 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V13C2 13.5304 2.21071 14.0391 2.58579 14.4142C2.96086 14.7893 3.46957 15 4 15H12M10 19V15.04V18.19M7 19H12M18 12H20C21.1046 12 22 12.8954 22 14V20C22 21.1046 21.1046 22 20 22H18C16.8954 22 16 21.1046 16 20V14C16 12.8954 16.8954 12 18 12Z",
  },
  {
    title: "Light and dark mode",
    description: "Seamless switching between color schemes, 6 themes included",
    icon: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M22 12C22 6.47715 17.5228 2 12 2M22 12C20.6739 13.3261 18.8754 14.0711 17 14.0711C15.1246 14.0711 13.3261 13.3261 12 12C10.6739 10.6739 9.92893 8.87536 9.92893 7C9.92893 5.12464 10.6739 3.32608 12 2",
  },
  {
    title: "Easy to customize",
    description: "Flexible options to match your product or brand",
    icon: "M10 21V8C10 7.73478 9.89464 7.48043 9.70711 7.29289C9.51957 7.10536 9.26522 7 9 7H4C3.73478 7 3.48043 7.10536 3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H16C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20V15C17 14.7348 16.8946 14.4804 16.7071 14.2929C16.5196 14.1054 16.2652 14 16 14H3M15 3H20C20.5523 3 21 3.44772 21 4V9C21 9.55228 20.5523 10 20 10H15C14.4477 10 14 9.55228 14 9V4C14 3.44772 14.4477 3 15 3Z",
  },
  {
    title: "Top-level performance",
    description: "Made for lightning-fast load times and smooth interactions",
    icon: "M13 19L22 12L13 5V19Z",
    icon2: "M2 19L11 12L2 5V19Z",
  },
  {
    title: "Production ready",
    description: "Thoroughly tested and launch-prepared",
    icon: "M12 15L9 12M12 15C13.3968 14.4687 14.7369 13.7987 16 13M12 15V20C12 20 15.03 19.45 16 18C17.08 16.38 16 13 16 13M9 12C9.53214 10.6194 10.2022 9.29607 11 8.05C12.1652 6.18699 13.7876 4.65305 15.713 3.5941C17.6384 2.53514 19.8027 1.98637 22 2C22 4.72 21.22 9.5 16 13M9 12H4C4 12 4.55 8.97 6 8C7.62 6.92 11 8 11 8M4.5 16.5C3 17.76 2.5 21.5 2.5 21.5C2.5 21.5 6.24 21 7.5 19.5C8.21 18.66 8.2 17.37 7.41 16.59C7.02131 16.219 6.50929 16.0046 5.97223 15.988C5.43516 15.9714 4.91088 16.1537 4.5 16.5Z",
  },
  {
    title: "Made for localisation",
    description: "Easy to implement support for multiple languages and regions",
    icon: "M5 8L11 14M4 14L10 8L12 5M2 5H14M7 2H8M22 22L17 12L12 22M14 18H20",
  },
  {
    title: "CMS friendly",
    description: "Built to work with your any headless content management system",
    icon: "M12 2.99998H5C4.46957 2.99998 3.96086 3.2107 3.58579 3.58577C3.21071 3.96084 3 4.46955 3 4.99998V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V12M18.375 2.62498C18.7728 2.22716 19.3124 2.00366 19.875 2.00366C20.4376 2.00366 20.9772 2.22716 21.375 2.62498C21.7728 3.02281 21.9963 3.56237 21.9963 4.12498C21.9963 4.68759 21.7728 5.22716 21.375 5.62498L12.362 14.639C12.1245 14.8762 11.8312 15.0499 11.509 15.144L8.636 15.984C8.54995 16.0091 8.45874 16.0106 8.37191 15.9883C8.28508 15.9661 8.20583 15.9209 8.14245 15.8575C8.07907 15.7942 8.03389 15.7149 8.01164 15.6281C7.9894 15.5412 7.9909 15.45 8.016 15.364L8.856 12.491C8.95053 12.169 9.12453 11.876 9.362 11.639L18.375 2.62498Z",
  },
];

function Icon({ d, d2 }: { d: string; d2?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-foreground"
    >
      <path d={d} />
      {d2 && <path d={d2} />}
    </svg>
  );
}

export default function FeaturesSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-container px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl">
          Everything you need.
          <br />
          Nothing you don&apos;t.
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Icon d={f.icon} d2={f.icon2} />
                <h3 className="text-lg font-medium text-foreground">{f.title}</h3>
              </div>
              <p className="text-base text-accent">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
