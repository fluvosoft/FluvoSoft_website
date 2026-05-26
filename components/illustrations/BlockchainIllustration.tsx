"use client";

import { useState, useEffect } from "react";

interface Block {
  id: number;
  hash: string;
  isActive: boolean;
}

const BLOCKS: Block[] = [
  { id: 1, hash: "0x1a2b...", isActive: false },
  { id: 2, hash: "0x3c4d...", isActive: false },
  { id: 3, hash: "0x5e6f...", isActive: false },
  { id: 4, hash: "0x7g8h...", isActive: false },
  { id: 5, hash: "0x9i0j...", isActive: false },
  { id: 6, hash: "0xklmn...", isActive: false },
  { id: 7, hash: "0xopqr...", isActive: false },
  { id: 8, hash: "0xstuv...", isActive: false },
  { id: 9, hash: "0xwxyz...", isActive: false },
  { id: 10, hash: "0x10ab...", isActive: false },
  { id: 11, hash: "0x11cd...", isActive: false },
  { id: 12, hash: "0x12ef...", isActive: false },
];

const BLOCKS_PER_ROW = 3;

export default function BlockchainIllustration({ className = "" }: { className?: string }) {
  const [activeBlock, setActiveBlock] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBlock((prev) => (prev + 1) % BLOCKS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Group blocks into rows
  const rows: Block[][] = [];
  for (let i = 0; i < BLOCKS.length; i += BLOCKS_PER_ROW) {
    rows.push(BLOCKS.slice(i, i + BLOCKS_PER_ROW));
  }

  const getBlockIndex = (rowIndex: number, colIndex: number) => {
    return rowIndex * BLOCKS_PER_ROW + colIndex;
  };

  return (
    <div className={`flex w-full items-center justify-center ${className}`} aria-hidden>
      <div className="flex w-full max-w-[168px] flex-col justify-evenly gap-0.5 py-1 sm:max-w-[380px] sm:gap-2 sm:py-2 md:max-w-[440px] lg:max-w-[520px]">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-center justify-center gap-0.5 sm:gap-2">
            {row.map((block, colIndex) => {
              const index = getBlockIndex(rowIndex, colIndex);
              const isActive = activeBlock === index;
              const isPrevious =
                activeBlock === index + 1 || (activeBlock === 0 && index === BLOCKS.length - 1);
              const isLastInRow = colIndex === row.length - 1;

              return (
                <div key={block.id} className="flex items-center gap-1 sm:gap-3">
                  <div
                    className={`relative flex flex-col items-center transition-all duration-500 ${
                      isActive ? "scale-105 sm:scale-110" : isPrevious ? "scale-100 sm:scale-105" : "scale-100"
                    }`}
                  >
                    <div
                      className={`h-[36px] w-[44px] rounded-md border p-1 transition-all duration-500 sm:h-[92px] sm:w-[108px] sm:rounded-xl sm:border-2 sm:p-3 md:h-[104px] md:w-[120px] lg:h-[112px] lg:w-[128px] ${
                        isActive
                          ? "border-brand bg-brand/20 shadow-lg shadow-brand/30"
                          : isPrevious
                            ? "border-brand/50 bg-brand/10"
                            : "border-white/20 bg-white/5"
                      }`}
                    >
                      <div className="flex h-full w-full flex-col items-center justify-center">
                        <div
                          className={`text-[8px] font-mono font-medium leading-none transition-colors duration-500 sm:text-base sm:leading-normal ${
                            isActive ? "text-brand" : "text-accent/70"
                          }`}
                        >
                          #{block.id}
                        </div>
                        <div
                          className={`mt-0.5 text-[6px] font-mono leading-none transition-colors duration-500 sm:mt-1 sm:text-[11px] sm:leading-normal ${
                            isActive ? "text-brand/80" : "text-accent/50"
                          }`}
                        >
                          <span className="block max-w-full truncate text-center">{block.hash}</span>
                        </div>
                        <div
                          className={`text-[5px] font-mono leading-none transition-colors duration-500 sm:mt-1 sm:text-[10px] sm:leading-normal ${
                            isActive ? "text-brand/60" : "text-accent/40"
                          }`}
                        >
                          <span className="block max-w-full truncate text-center">
                            {index === 0 ? "Gen" : `${index * 12}t`}
                          </span>
                        </div>
                      </div>

                      {isActive && (
                        <div className="absolute -top-0.5 -right-0.5 h-1 w-1 rounded-full border border-black bg-brand animate-pulse sm:-top-1 sm:-right-1 sm:h-2.5 sm:w-2.5 sm:border-2" />
                      )}
                    </div>
                  </div>

                  {!isLastInRow && (
                    <div
                      className={`h-px w-1 transition-all duration-500 sm:h-0.5 sm:w-4 md:w-5 ${
                        isActive && index === activeBlock - 1
                          ? "bg-brand"
                          : isPrevious && index === activeBlock
                            ? "bg-brand/50"
                            : "bg-white/20"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
