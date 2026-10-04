"use client";

import { motion, type HTMLMotionProps } from "motion/react";

// Lifts its content a few pixels on hover and presses it down on tap. Critically damped
// (no bounce): nothing was thrown, so nothing should overshoot.
export function HoverLift({ lift = 4, ...props }: HTMLMotionProps<"div"> & { lift?: number }) {
  return (
    <motion.div
      whileHover={{ y: -lift }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", bounce: 0, duration: 0.35 }}
      {...props}
    />
  );
}
