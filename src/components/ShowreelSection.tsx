"use client";

import { motion } from "framer-motion";

export default function ShowreelSection() {
  return (
    <motion.section
      id="showreel"
      className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-28 text-center sm:px-10"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
    >
      <div className="flex flex-col items-center gap-6">
        <h2 className="font-heading text-3xl uppercase tracking-[0.3em] text-[#f3e2c4] sm:text-4xl">
          Showreel
        </h2>
        <p className="max-w-2xl text-sm text-[#d6c6a9]/85">
          “The Art of Motion — by Kunal Singh” is a montage of kinetic typography, dramatic pacing, and seamless transitions crafted for brand, content, and esports storytelling.
        </p>
      </div>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-[#3a3125]/60 bg-[#0f0d0b]/70 p-3">
        <div className="absolute inset-0 bg-linear-to-br from-[#c49a6c]/20 via-transparent to-transparent" />
        <div className="relative aspect-video w-full overflow-hidden rounded-[1.8rem] border border-[#4a3b29]/60">
          <video
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            muted
            loop
            autoPlay
          >
            <source src="/videos/showreel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-linear-to-t from-black/70 via-black/10 to-transparent p-6 text-left">
            <span className="text-xs uppercase tracking-[0.35em] text-[#e8d7b8]/70">
              Kunal Singh
            </span>
            <span className="font-heading text-lg uppercase tracking-[0.3em] text-[#f5e6d3]">
              The Art of Motion — Showreel
            </span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
