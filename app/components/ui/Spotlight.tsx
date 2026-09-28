"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";

// Brand-tinted glow plus a brighter patch of the background grid that trails the pointer.
// Positioned by its parent; only runs for mouse/trackpad users without reduced motion.
export function Spotlight({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 150, damping: 25 });
  const y = useSpring(useMotionValue(0), { stiffness: 150, damping: 25 });
  const opacity = useSpring(0, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    let placed = false;
    const onMove = (event: PointerEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const px = event.clientX - rect.left;
      const py = event.clientY - rect.top;
      // Jump to the first position instead of sliding in from the corner.
      if (!placed) {
        x.jump(px);
        y.jump(py);
        placed = true;
      }
      x.set(px);
      y.set(py);
      opacity.set(py < rect.height ? 1 : 0);
    };
    const onLeave = () => opacity.set(0);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [reduce, x, y, opacity]);

  const glow = useMotionTemplate`radial-gradient(360px circle at ${x}px ${y}px, var(--brand-soft), transparent 70%)`;
  const mask = useMotionTemplate`radial-gradient(220px circle at ${x}px ${y}px, black, transparent 80%)`;

  return (
    <motion.div ref={ref} aria-hidden className={className} style={{ opacity }}>
      <motion.div className="absolute inset-0" style={{ background: glow }} />
      <motion.div className="bg-grid-brand absolute inset-0" style={{ maskImage: mask, WebkitMaskImage: mask }} />
    </motion.div>
  );
}
