const tools = [
  {
    name: "Figma",
    version: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <circle cx="12" cy="6" r="3" />
        <circle cx="12" cy="15" r="3" />
        <circle cx="6" cy="10.5" r="3" />
        <circle cx="18" cy="10.5" r="3" />
      </svg>
    ),
  },
  {
    name: "React.js",
    version: "18.3.1",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-7 w-7" fill="currentColor">
        <circle r="2.05" fill="currentColor" />
        <g stroke="currentColor" fill="none" strokeWidth="1.1">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    version: "5.6.2",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M3 3h18v18H3V3zm9 12.5h2.5v2H12v-2zm0-10v7h5v1.5h-5v1h5v1.5H12V17h-1.5V5.5H12z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    version: "14.2",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M11.572 0c-.182 0-.354.07-.483.197L.278 11.11a.672.672 0 0 0 0 .953l10.817 10.74a.672.672 0 0 0 .966 0l10.817-10.74a.672.672 0 0 0 0-.953L12.055.197A.672.672 0 0 0 11.572 0zm.428 5.274l6.604 6.609-6.604 6.609V14.09l3.89-3.896-3.89-3.897V5.274zm-.856 8.435v2.137L5.145 12 11.144 6v2.137L8.29 11.09l2.854 2.854z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    version: "3.4.11",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Shadcn UI",
    version: "2.0.7",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    version: "20.x",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    version: null,
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M24 22.525H0L12 1.475l12 21.05z" />
      </svg>
    ),
  },
  {
    name: "ESLint",
    version: "8.x",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l7 7 7-7M4 20l7-7 7 7" />
      </svg>
    ),
  },
  {
    name: "PostCSS",
    version: "8.x",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    version: null,
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function BuiltWithTools() {
  return (
    <section className="bg-background px-6 py-10 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-container">
        <h2 className="text-center text-xl font-semibold text-foreground md:text-2xl">
          Build AI — Powering Frontier AI
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-accent">
          Next Generation AI powered by world-class data.
        </p>
        <div className="mt-12 flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-14 sm:gap-y-12">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 text-foreground"
            >
              <span className="flex shrink-0 text-accent">{tool.icon}</span>
              <span className="text-sm font-medium md:text-base">
                {tool.name}
                {tool.version != null && (
                  <span className="ml-1.5 text-accent">{tool.version}</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
