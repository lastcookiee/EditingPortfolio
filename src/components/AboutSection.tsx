"use client";

import { motion } from "framer-motion";

const paragraph = `I’m a 21-year-old video editor with over 5 years of experience in Adobe After Effects and Premiere Pro. I specialize in storytelling, typography, transitions, and cinematic pacing. I’ve edited for creators, brands, and esports teams — turning raw footage into impactful visual narratives.`;

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-28 sm:px-10"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="font-heading text-3xl uppercase tracking-[0.3em] text-[#f3e2c4] sm:text-4xl">
          About
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-[#5b4b34]/0 via-[#5b4b34]/50 to-[#5b4b34]/0" />
      </div>
      <p className="max-w-3xl text-lg leading-relaxed text-[#dac9aa]/90">
        {paragraph}
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Expertise",
            copy: "Adobe After Effects · Premiere Pro · Sound Design · Color Theory",
          },
          {
            title: "Focus",
            copy: "Story-first edits that balance pacing, emotion, and dynamic typography.",
          },
          {
            title: "Approach",
            copy: "Every cut is intentional — engineered to feel like a frame-perfect transition on a cinematic timeline.",
          },
        ].map((item) => (
          <motion.div
            key={item.title}
            className="rounded-3xl border border-[#3b3124] bg-[#0d0b09]/60 p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.24, 0.82, 0.25, 1] as [number, number, number, number] }}
          >
            <h3 className="font-heading text-sm uppercase tracking-[0.25em] text-[#f5e6d3]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-[#d4c4a9]/90">{item.copy}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
