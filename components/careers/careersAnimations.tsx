"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const PULL_UP_EASE = [0.16, 1, 0.3, 1] as const;

export function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  as: Tag = "div",
}: {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  as?: "h1" | "h2" | "div";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, index) => {
        const isLast = index === words.length - 1;
        const showStar = showAsterisk && isLast && word.toLowerCase().endsWith("a");

        return (
          <span
            key={`${word}-${index}`}
            className={`inline-block overflow-hidden pb-1 pl-[0.02em] ${isLast ? "pr-[0.14em]" : "pr-[0.04em]"}`}
          >
            <motion.span
              className="relative inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: PULL_UP_EASE,
              }}
            >
              {word}
              {showStar ? (
                <span
                  className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]"
                  aria-hidden
                >
                  *
                </span>
              ) : null}
              {index < words.length - 1 ? "\u00A0" : null}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}

export function WordsPullUpMultiStyle({
  segments,
  className = "",
}: {
  segments: { text: string; className?: string }[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const words = segments.flatMap((segment) =>
    segment.text.split(" ").map((word) => ({
      word,
      className: segment.className ?? "",
    }))
  );

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((item, index) => (
        <span key={`${item.word}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: PULL_UP_EASE,
            }}
          >
            {item.word}
            {index < words.length - 1 ? "\u00A0" : null}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

export function AnimatedLetterParagraph({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className}>
      {chars.map((char, index) => (
        <AnimatedLetter
          key={`${char}-${index}`}
          char={char}
          index={index}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

function AnimatedLetter({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const charProgress = index / total;
  const opacity = useTransform(
    scrollYProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }} className="inline">
      {char}
    </motion.span>
  );
}
