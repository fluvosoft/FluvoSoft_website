type EasyInvoiceSectionWaveProps = {
  flip?: boolean;
  className?: string;
};

export default function EasyInvoiceSectionWave({
  flip = false,
  className = "",
}: EasyInvoiceSectionWaveProps) {
  return (
    <div className={`relative -mt-px w-full leading-[0] ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className={`block h-10 w-full md:h-14 ${flip ? "rotate-180" : ""}`}
      >
        <path
          fill="currentColor"
          d="M0,32L60,29.3C120,27,240,21,360,18.7C480,16,600,16,720,21.3C840,27,960,37,1080,40C1200,43,1320,37,1380,34.7L1440,32L1440,56L1380,56C1320,56,1200,56,1080,56C960,56,840,56,720,56C600,56,480,56,360,56C240,56,120,56,60,56L0,56Z"
        />
      </svg>
    </div>
  );
}
