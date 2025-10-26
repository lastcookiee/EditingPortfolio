"use client";

import { motion } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  tags: string[];
  accent: string;
};

type ProjectsSectionProps = {
  projects: Project[];
  onOpenProject: (project: Project) => void;
};

export default function ProjectsSection({ projects, onOpenProject }: ProjectsSectionProps) {
  return (
    <motion.section
      id="work"
      className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-28 sm:px-10"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="font-heading text-3xl uppercase tracking-[0.3em] text-[#f3e2c4] sm:text-4xl">
          Work
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-[#5b4b34]/0 via-[#5b4b34]/50 to-[#5b4b34]/0" />
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.button
            key={project.id}
            type="button"
            onClick={() => onOpenProject(project)}
            aria-label={`Open ${project.title}`}
            className={`group relative overflow-hidden rounded-3xl border border-[#3a3125]/70 bg-[#0f0d0b]/70 p-6 text-left transition-transform`}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35, ease: [0.24, 0.82, 0.25, 1] as [number, number, number, number] }}
          >
            <motion.span
              className={`absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${project.accent} bg-linear-to-br`}
              aria-hidden
            />
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-[#f3e2c4]/70">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span>Cinematic Cut</span>
            </div>
            <h3 className="mt-6 font-heading text-xl uppercase tracking-[0.2em] text-[#f5e6d3]">
              {project.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#d6c6a9]/90">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-[#cabda0]/80">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#cabda0]/30 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] text-[#f6e8cb]">
              View Project
              <motion.span
                className="inline-block h-px w-8 bg-[#f6e8cb]"
                initial={{ width: 24 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
              />
            </span>
          </motion.button>
        ))}
      </div>
    </motion.section>
  );
}
