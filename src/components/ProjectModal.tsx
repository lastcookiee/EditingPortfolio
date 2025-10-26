"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "@/components/ProjectsSection";

type ProjectModalProps = {
  project: Project;
  onDismiss: () => void;
};

export default function ProjectModal({ project, onDismiss }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onDismiss();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onDismiss]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onDismiss}
    >
      <motion.div
        layoutId={project.id}
        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#4a3b29]/80 bg-[#0d0b09] shadow-[0_0_80px_rgba(0,0,0,0.6)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-title`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.24, 0.82, 0.25, 1] as [number, number, number, number] }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative aspect-video w-full overflow-hidden bg-[#1a1712]">
          <iframe
            title={project.title}
            src={project.videoUrl}
            className="h-full w-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#040303] via-transparent to-transparent p-6">
            <h3
              id={`${project.id}-title`}
              className="font-heading text-lg uppercase tracking-[0.25em] text-[#f5e6d3]"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[#d6c6a9]/90">{project.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#3a3125]/40 bg-[#0c0907] px-6 py-4">
          <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[#cabda0]/80">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#cabda0]/30 px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onDismiss}
            className="rounded-full border border-[#f0dfc3]/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#f5e6d3] transition-colors hover:border-[#f0dfc3]/70"
          >
            Close
          </button>
        </div>
        <p className="px-6 pb-6 text-[0.65rem] text-[#9c8f79]/80">
          Replace the embedded video source with Kunal’s hosted project reel links for production.
        </p>
      </motion.div>
    </motion.div>
  );
}
