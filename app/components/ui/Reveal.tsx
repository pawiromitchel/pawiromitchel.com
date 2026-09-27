"use client";

import { motion, type HTMLMotionProps } from "motion/react";

// Fades content up once as it scrolls into view. Only used below the fold so the
// first screen never waits on an animation.
export function Reveal({ delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    />
  );
}
