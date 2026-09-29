"use client";

import { motion, useScroll, useSpring } from "motion/react";

// Thin bar along the top edge that fills as you read. Sits above the sticky nav.
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-operate"
      style={{ scaleX }}
    />
  );
}
