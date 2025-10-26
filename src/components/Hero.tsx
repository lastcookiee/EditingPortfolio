"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroProps = {
  onViewWork: () => void;
};

export default function Hero({ onViewWork }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        playsInline
        muted
        loop
  src="/videos/bg.mp4"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(12,11,11,0.45),rgba(8,7,7,0.9))]" />
  <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/60 to-[#040303]" />

      <motion.div
        className="relative z-10 flex max-w-4xl flex-col items-center gap-8 px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.24, 0.82, 0.25, 1] as [number, number, number, number] }}
      >
        <motion.h1
          style={{ y: titleY }}
          className="font-heading text-4xl uppercase tracking-[0.35em] text-[#f5e6d3] drop-shadow-xl sm:text-5xl md:text-6xl"
        >
          Kunal Singh
        </motion.h1>
        <motion.p
          style={{ opacity: subtitleOpacity }}
          className="max-w-2xl text-base text-[#d9c7a8]/90 sm:text-lg"
        >
          Video Editor & Motion Designer crafting cinematic stories with rhythm,
          typography, and emotion.
        </motion.p>
        <motion.button
          type="button"
          onClick={onViewWork}
          className="group relative overflow-hidden rounded-full border border-[#f0dfc3]/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#f5e6d3] transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="absolute inset-0 translate-y-full bg-[#b9996f]/40 transition-transform duration-500 ease-out group-hover:translate-y-0" />
          <span className="relative">View My Work</span>
        </motion.button>
      </motion.div>
    </section>
  );
}
