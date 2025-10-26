"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import CursorGlow from "@/components/CursorGlow";
import Navbar, { NavItem } from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection, { Project } from "@/components/ProjectsSection";
import ShowreelSection from "@/components/ShowreelSection";
import ContactSection from "@/components/ContactSection";
import ProjectModal from "@/components/ProjectModal";

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "showreel", label: "Showreel" },
  { id: "contact", label: "Contact" },
];

const PROJECTS: Project[] = [
  {
    id: "typography-reel",
    title: "Typography Reel Series",
    description:
      "A kinetic typography exploration blending bold type, motion gradients, and rhythmic pacing for social activation.",
    videoUrl: "https://player.vimeo.com/video/placeholder",
    tags: ["Motion Typography", "Brand Social", "After Effects"],
    accent: "from-[#c49a6c] via-[#f5e6d3] to-[#c49a6c]",
  },
  {
    id: "behind-the-door",
    title: "WHAT IS BEHIND THE DOOR",
    description:
      "Short-form suspense edit focused on tension building, atmospheric sound design, and match-cut storytelling.",
    videoUrl: "https://player.vimeo.com/video/placeholder",
    tags: ["Narrative Edit", "Sound Design", "Premiere Pro"],
    accent: "from-[#362821] via-[#5e4837] to-[#f2d6b9]",
  },
  {
    id: "lanfest-aftermovie",
    title: "LAN Fest Aftermovie (9MM)",
    description:
      "High-energy esports recap stitched with speed-ramping, crowd energy, and custom glitch transitions for LAN Fest.",
    videoUrl: "https://player.vimeo.com/video/placeholder",
    tags: ["Esports", "Speed Ramping", "Color Grading"],
    accent: "from-[#3c3f4a] via-[#1b1c23] to-[#a99f8f]",
  },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>(NAV_ITEMS[0]?.id);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionIds = useMemo(() => NAV_ITEMS.map((item) => item.id), []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#040303] text-[#f4ecdf]">
      <CursorGlow />
      <Navbar
        items={NAV_ITEMS}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />
      <main className="relative z-10">
        <Hero onViewWork={() => scrollToSection("work")} />
        <AboutSection />
        <ProjectsSection
          projects={PROJECTS}
          onOpenProject={setSelectedProject}
        />
        <ShowreelSection />
        <ContactSection />
      </main>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onDismiss={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
