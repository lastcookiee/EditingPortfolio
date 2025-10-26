"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const GLOW_SIZE = 320;

export default function CursorGlow() {
  const x = useMotionValue(-GLOW_SIZE);
  const y = useMotionValue(-GLOW_SIZE);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      x.set(event.clientX - GLOW_SIZE / 2);
      y.set(event.clientY - GLOW_SIZE / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    >
      <motion.div
        className="h-80 w-80 rounded-full bg-[#e6d2af]/10 blur-3xl"
        style={{ translateX: x, translateY: y }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
      />
    </motion.div>
  );
}
