export default function QualitySection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-10 lg:px-8 lg:py-14" aria-labelledby="quality-heading">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          id="quality-heading"
          className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Our focus is progressing markets
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground md:text-lg">
          Effectively deploying enterprise solutions requires a deep knowledge of business operations, technology implementation, practical workflows, and industry best practices.
        </p>

        {/* Glowing orange full circle - positioned in middle below text */}
        <div className="relative mt-12 flex justify-center">
          <div className="pointer-events-none flex items-center justify-center">
            <svg
              className="h-[900px] w-[900px]"
              viewBox="0 0 900 900"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="orangeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(30,15,8,0)" />
                  <stop offset="20%" stopColor="rgba(30,15,8,0)" />
                  <stop offset="40%" stopColor="rgba(30,15,8,0)" />
                  <stop offset="50%" stopColor="rgba(30,15,8,0)" />
                  <stop offset="55%" stopColor="rgba(30,15,8,0.02)" />
                  <stop offset="60%" stopColor="rgba(50,25,12,0.05)" />
                  <stop offset="70%" stopColor="rgba(80,40,20,0.15)" />
                  <stop offset="80%" stopColor="rgba(120,60,30,0.3)" />
                  <stop offset="87%" stopColor="rgba(180,90,40,0.5)" />
                  <stop offset="92%" stopColor="rgba(220,110,50,0.75)" />
                  <stop offset="96%" stopColor="rgba(245,130,50,0.9)" />
                  <stop offset="98%" stopColor="rgba(255,170,80,1)" />
                  <stop offset="100%" stopColor="rgba(255,240,180,1)" />
                </radialGradient>
                <linearGradient id="halfMoonMask" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="white" stopOpacity="1" />
                  <stop offset="35%" stopColor="white" stopOpacity="1" />
                  <stop offset="40%" stopColor="white" stopOpacity="0.9" />
                  <stop offset="45%" stopColor="white" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.3" />
                  <stop offset="55%" stopColor="white" stopOpacity="0.1" />
                  <stop offset="60%" stopColor="white" stopOpacity="0.05" />
                  <stop offset="65%" stopColor="white" stopOpacity="0.02" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <mask id="halfMoonMaskId">
                  <rect width="900" height="900" fill="url(#halfMoonMask)" />
                </mask>
              </defs>
              {/* Full circle with half-moon fade */}
              <circle
                cx="450"
                cy="450"
                r="420"
                fill="url(#orangeGlow)"
                mask="url(#halfMoonMaskId)"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
