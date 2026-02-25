"use client";

import { useEffect, useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "left" | "right";
  delay: number;
}

const MESSAGES: Message[] = [
  { id: 1, text: "We need to update this heading before launch", sender: "left", delay: 0 },
  { id: 2, text: "Let me quickly jump into Sanity and fix it", sender: "right", delay: 1500 },
  { id: 3, text: "Done!", sender: "left", delay: 3000 },
  { id: 4, text: "Perfect! The data updates are seamless", sender: "right", delay: 4500 },
  { id: 5, text: "Exactly, that's the beauty of data-agnostic components", sender: "left", delay: 6000 },
  { id: 6, text: "Can we connect this to our CMS?", sender: "right", delay: 7500 },
  { id: 7, text: "Absolutely! Just swap the data source", sender: "left", delay: 9000 },
];

const MAX_VISIBLE_MESSAGES = 4;

export default function TextingMockupIllustration({ className = "" }: { className?: string }) {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Cycle through messages continuously
    if (messageIndex >= MESSAGES.length) {
      // Restart from beginning
      const restartTimeout = setTimeout(() => {
        setVisibleMessages([]);
        setMessageIndex(0);
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(restartTimeout);
    }

    const currentMsg = MESSAGES[messageIndex];
    const timeouts: NodeJS.Timeout[] = [];

    // Show typing indicator before message (except first)
    if (messageIndex > 0) {
      setIsTyping(true);
    }

    // Show typing for 800ms, then show message
    const typingDelay = messageIndex > 0 ? 800 : 0;
    const showTimeout = setTimeout(() => {
      setIsTyping(false);
      setVisibleMessages((prev) => {
        const updated = [...prev, currentMsg.id];
        // Keep only the last MAX_VISIBLE_MESSAGES messages
        return updated.slice(-MAX_VISIBLE_MESSAGES);
      });
      
      // Move to next message after a short delay
      const nextTimeout = setTimeout(() => {
        setMessageIndex((prev) => prev + 1);
      }, 1500);
      timeouts.push(nextTimeout);
    }, typingDelay);

    timeouts.push(showTimeout);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [messageIndex]);

  return (
    <div className={`flex flex-col ${className}`} aria-hidden>
      {/* Header */}
      <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-3">
        <h4 className="text-base font-medium text-foreground">Client Support Automation</h4>
        <div className="flex items-center gap-1.5">
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
          <span className="text-xs text-accent">Online</span>
        </div>
      </div>
      
      {/* Messages container - fixed height for 4 messages */}
      <div className="relative flex h-[240px] flex-col gap-2 overflow-hidden rounded-lg border border-white/10 p-4">
        {MESSAGES.filter((msg) => visibleMessages.includes(msg.id)).map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2 transition-all duration-500 ${
              msg.sender === "left" ? "" : "justify-end"
            } ${
              visibleMessages.includes(msg.id)
                ? "translate-x-0 opacity-100"
                : msg.sender === "left"
                  ? "-translate-x-4 opacity-0"
                  : "translate-x-4 opacity-0"
            }`}
          >
            {/* Left sender avatar */}
            {msg.sender === "left" && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand/80 to-brand/60 text-xs font-medium text-white shadow-sm">
                SG
              </div>
            )}
            {/* Message bubble */}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm text-foreground shadow-sm transition-all duration-300 ${
                msg.sender === "left"
                  ? "rounded-tl-sm bg-white/10 hover:bg-white/15"
                  : "rounded-tr-sm bg-brand/20 hover:bg-brand/25"
              }`}
            >
              {msg.text}
            </div>
            {/* Right sender avatar */}
            {msg.sender === "right" && (
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/80 to-accent/60 text-xs font-medium text-white shadow-sm">
                ED
              </div>
            )}
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-start gap-2 justify-end animate-in fade-in slide-in-from-right-2 duration-300">
            <div className="rounded-2xl rounded-tr-sm bg-brand/20 px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/60" style={{ animationDelay: "0ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/60" style={{ animationDelay: "150ms" }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-foreground/60" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/80 to-accent/60 text-xs font-medium text-white shadow-sm">
              ED
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
