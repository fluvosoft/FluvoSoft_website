"use client";

import { useState } from "react";

const TABS = ["components/Button.tsx", "app/page.tsx", "tailwind.config.ts"] as const;

const CODE_CONTENT = {
  "components/Button.tsx": [
    { line: 1, code: <><span className="text-[#c792ea]">import</span> <span className="text-[#82aaff]">&#123; ButtonHTMLAttributes &#125;</span> <span className="text-[#c792ea]">from</span> <span className="text-[#c3e88d]">&quot;react&quot;</span><span className="text-[#89ddff]">;</span></> },
    { line: 2, code: <><span className="text-[#c792ea]">import</span> <span className="text-[#c3e88d]">&quot;./button.css&quot;</span><span className="text-[#89ddff]">;</span></> },
    { line: 3, code: <></> },
    { line: 4, code: <><span className="text-[#c792ea]">interface</span> <span className="text-[#82aaff]">ButtonProps</span> <span className="text-[#89ddff]">extends</span> <span className="text-[#82aaff]">ButtonHTMLAttributes</span><span className="text-[#89ddff]">&lt;</span><span className="text-[#82aaff]">HTMLButtonElement</span><span className="text-[#89ddff]">&gt;</span> <span className="text-[#89ddff]">&#123;</span></> },
    { line: 5, code: <>  <span className="text-[#82aaff]">variant</span><span className="text-[#89ddff]">?:</span> <span className="text-[#c3e88d]">&quot;primary&quot;</span> <span className="text-[#89ddff]">|</span> <span className="text-[#c3e88d]">&quot;secondary&quot;</span><span className="text-[#89ddff]">;</span></> },
    { line: 6, code: <><span className="text-[#89ddff]">&#125;</span></> },
    { line: 7, code: <></> },
    { line: 8, code: <><span className="text-[#c792ea]">export default function</span> <span className="text-[#82aaff]">Button</span><span className="text-[#89ddff]">(&#123;</span> <span className="text-[#82aaff]">variant</span> <span className="text-[#89ddff]">=</span> <span className="text-[#c3e88d]">&quot;primary&quot;</span><span className="text-[#89ddff]">,</span> <span className="text-[#82aaff]">children</span><span className="text-[#89ddff]">,</span> <span className="text-[#89ddff]">...</span><span className="text-[#82aaff]">props</span> <span className="text-[#89ddff]">&#125;:</span> <span className="text-[#82aaff]">ButtonProps</span><span className="text-[#89ddff]">) &#123;</span></> },
    { line: 9, code: <>  <span className="text-[#c792ea]">return</span> <span className="text-[#89ddff]">(</span></> },
    { line: 10, code: <>    <span className="text-[#89ddff]">&lt;</span><span className="text-[#ff5370]">button</span></> },
    { line: 11, code: <>      <span className="text-[#82aaff]">className</span><span className="text-[#89ddff]">=</span><span className="text-[#c3e88d]">&quot;btn btn-</span><span className="text-[#c3e88d]">&#123;</span><span className="text-[#82aaff]">variant</span><span className="text-[#c3e88d]">&#125;&quot;</span></> },
    { line: 12, code: <>      <span className="text-[#89ddff]">&#123;...</span><span className="text-[#82aaff]">props</span><span className="text-[#89ddff]">&#125;</span></> },
    { line: 13, code: <>    <span className="text-[#89ddff]">&gt;</span></> },
    { line: 14, code: <>      <span className="text-[#89ddff]">&#123;</span><span className="text-[#82aaff]">children</span><span className="text-[#89ddff]">&#125;</span></> },
    { line: 15, code: <>    <span className="text-[#89ddff]">&lt;/</span><span className="text-[#ff5370]">button</span><span className="text-[#89ddff]">&gt;</span></> },
    { line: 16, code: <>  <span className="text-[#89ddff]">);</span></> },
    { line: 17, code: <><span className="text-[#89ddff]">&#125;</span></> },
  ],
  "app/page.tsx": [
    { line: 1, code: <><span className="text-[#c792ea]">import</span> <span className="text-[#82aaff]">Button</span> <span className="text-[#c792ea]">from</span> <span className="text-[#c3e88d]">&quot;@/components/Button&quot;</span><span className="text-[#89ddff]">;</span></> },
    { line: 2, code: <></> },
    { line: 3, code: <><span className="text-[#c792ea]">export default function</span> <span className="text-[#82aaff]">Page</span><span className="text-[#89ddff]">() &#123;</span></> },
    { line: 4, code: <>  <span className="text-[#c792ea]">return</span> <span className="text-[#89ddff]">(</span></> },
    { line: 5, code: <>    <span className="text-[#89ddff]">&lt;</span><span className="text-[#ff5370]">main</span> <span className="text-[#82aaff]">className</span><span className="text-[#89ddff]">=</span><span className="text-[#c3e88d]">&quot;container&quot;</span><span className="text-[#89ddff]">&gt;</span></> },
    { line: 6, code: <>      <span className="text-[#89ddff]">&lt;</span><span className="text-[#ff5370]">h1</span><span className="text-[#89ddff]">&gt;Welcome&lt;/</span><span className="text-[#ff5370]">h1</span><span className="text-[#89ddff]">&gt;</span></> },
    { line: 7, code: <>      <span className="text-[#89ddff]">&lt;</span><span className="text-[#82aaff]">Button</span> <span className="text-[#82aaff]">variant</span><span className="text-[#89ddff]">=</span><span className="text-[#c3e88d]">&quot;primary&quot;</span><span className="text-[#89ddff]">&gt;</span></> },
    { line: 8, code: <>        Get Started</> },
    { line: 9, code: <>      <span className="text-[#89ddff]">&lt;/</span><span className="text-[#82aaff]">Button</span><span className="text-[#89ddff]">&gt;</span></> },
    { line: 10, code: <>    <span className="text-[#89ddff]">&lt;/</span><span className="text-[#ff5370]">main</span><span className="text-[#89ddff]">&gt;</span></> },
    { line: 11, code: <>  <span className="text-[#89ddff]">);</span></> },
    { line: 12, code: <><span className="text-[#89ddff]">&#125;</span></> },
  ],
  "tailwind.config.ts": [
    { line: 1, code: <><span className="text-[#c792ea]">import type</span> <span className="text-[#82aaff]">&#123; Config &#125;</span> <span className="text-[#c792ea]">from</span> <span className="text-[#c3e88d]">&quot;tailwindcss&quot;</span><span className="text-[#89ddff]">;</span></> },
    { line: 2, code: <></> },
    { line: 3, code: <><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">config</span><span className="text-[#89ddff]">:</span> <span className="text-[#82aaff]">Config</span> <span className="text-[#89ddff]">= &#123;</span></> },
    { line: 4, code: <>  <span className="text-[#82aaff]">content</span><span className="text-[#89ddff]">: [</span></> },
    { line: 5, code: <>    <span className="text-[#c3e88d]">&quot;./app/**/*.&#123;js,ts,jsx,tsx&#125;&quot;</span><span className="text-[#89ddff]">,</span></> },
    { line: 6, code: <>    <span className="text-[#c3e88d]">&quot;./components/**/*.&#123;js,ts,jsx,tsx&#125;&quot;</span><span className="text-[#89ddff]">,</span></> },
    { line: 7, code: <>  <span className="text-[#89ddff]">],</span></> },
    { line: 8, code: <>  <span className="text-[#82aaff]">theme</span><span className="text-[#89ddff]">: &#123;</span></> },
    { line: 9, code: <>    <span className="text-[#82aaff]">extend</span><span className="text-[#89ddff]">: &#123;</span></> },
    { line: 10, code: <>      <span className="text-[#82aaff]">colors</span><span className="text-[#89ddff]">: &#123;</span></> },
    { line: 11, code: <>        <span className="text-[#82aaff]">brand</span><span className="text-[#89ddff]">: </span><span className="text-[#c3e88d]">&quot;#fb923c&quot;</span><span className="text-[#89ddff]">,</span></> },
    { line: 12, code: <>      <span className="text-[#89ddff]">&#125;,</span></> },
    { line: 13, code: <>    <span className="text-[#89ddff]">&#125;,</span></> },
    { line: 14, code: <>  <span className="text-[#89ddff]">&#125;,</span></> },
    { line: 15, code: <><span className="text-[#89ddff]">&#125;;</span></> },
    { line: 16, code: <></> },
    { line: 17, code: <><span className="text-[#c792ea]">export default</span> <span className="text-[#82aaff]">config</span><span className="text-[#89ddff]">;</span></> },
  ],
};

export default function CodeEditorIllustration({ className = "" }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]>("app/page.tsx");

  const currentCode = CODE_CONTENT[activeTab];

  return (
    <div className={`h-full overflow-hidden rounded-lg border border-white/20 bg-black shadow-lg transition-shadow duration-200 hover:border-white/30 hover:shadow-xl ${className}`} aria-hidden>
      {/* Window controls */}
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] transition-opacity hover:opacity-80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] transition-opacity hover:opacity-80" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f] transition-opacity hover:opacity-80" />
        </div>
        <div className="ide-scrollbar ml-3 flex flex-1 gap-1 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-1.5 rounded-t px-3 py-1.5 text-xs transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-1 focus:ring-offset-black ${
                activeTab === tab
                  ? "border border-b-0 border-white/20 bg-black text-foreground"
                  : "text-accent/70 hover:bg-white/5 hover:text-foreground"
              }`}
            >
              {tab === "components/Button.tsx" && (
                <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              )}
              {tab === "app/page.tsx" && (
                <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              )}
              {tab === "tailwind.config.ts" && (
                <svg className="h-3 w-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
              )}
              <span className="truncate">{tab}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Code editor */}
      <div className="flex h-full flex-1 overflow-hidden">
        {/* Line numbers */}
        <div className="select-none border-r border-white/10 bg-black px-3 py-2 text-right font-mono text-xs leading-relaxed text-accent/50">
          {currentCode.map((_, i) => (
            <div key={i} className="h-[18px]">
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Code content */}
        <div className="ide-scrollbar flex-1 overflow-auto p-3 font-mono text-xs leading-relaxed">
          {currentCode.map((item, i) => (
            <div key={i} className="flex h-[18px] items-center">
              <span>{item.code}</span>
            </div>
          ))}
          {/* Cursor */}
          <div className="mt-1 inline-block h-[14px] w-[1px] animate-pulse bg-brand" />
        </div>
      </div>
    </div>
  );
}
