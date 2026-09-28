"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

// The point on screen (from the top) where the line's tip sits while scrolling.
const TIP = "60%";

// Vertical rail on the left that fills in brand color as the list scrolls past.
export function ScrollTimeline({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [`start ${TIP}`, `end ${TIP}`] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <div ref={ref} className={cn("relative pl-6 md:pl-10", className)}>
      <div aria-hidden className="absolute inset-y-0 left-0 w-px -translate-x-1/2 bg-border" />
      <motion.div
        aria-hidden
        className="absolute inset-y-0 left-0 w-0.5 origin-top -translate-x-1/2 rounded-full bg-brand"
        style={{ scaleY: reduce ? 1 : scaleY }}
      />
      {children}
    </div>
  );
}

// A dot on the rail that lights up once the line's tip reaches it. Place inside a
// `relative` element that sits in the ScrollTimeline's padded area.
export function TimelineDot({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: [`center ${TIP}`, `center 52%`] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <span
      ref={ref}
      aria-hidden
      className={cn(
        "absolute -left-6 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-muted-foreground/40 md:-left-10",
        className
      )}
    >
      <motion.span
        className="absolute -inset-0.5 rounded-full bg-brand ring-4 ring-brand-soft"
        style={reduce ? undefined : { opacity: scrollYProgress, scale }}
      />
    </span>
  );
}
