"use client";

import { motion, type HTMLMotionProps } from "motion/react";

// Lifts its content a few pixels on hover with a soft spring.
export function HoverLift({ lift = 4, ...props }: HTMLMotionProps<"div"> & { lift?: number }) {
  return (
    <motion.div
      whileHover={{ y: -lift }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      {...props}
    />
  );
}
