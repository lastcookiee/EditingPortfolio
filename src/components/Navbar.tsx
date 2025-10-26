"use client";

import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useMemo } from "react";

export type NavItem = {
  id: string;
  label: string;
};

type NavbarProps = {
  items: NavItem[];
  activeSection?: string;
  onNavigate: (id: string) => void;
};

const NAV_EASE: [number, number, number, number] = [0.33, 1, 0.68, 1];

const NAV_VARIANTS: Variants = {
  initial: { y: -80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: NAV_EASE },
  },
};

export default function Navbar({ items, activeSection, onNavigate }: NavbarProps) {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 200],
    ["rgba(13, 13, 13, 0.15)", "rgba(13, 13, 13, 0.85)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 200],
    ["rgba(244, 236, 223, 0.2)", "rgba(244, 236, 223, 0.5)"]
  );

  const navItems = useMemo(() => items ?? [], [items]);

  return (
    <motion.header
      className="fixed inset-x-0 top-6 z-50 flex justify-center px-6"
      variants={NAV_VARIANTS}
      initial="initial"
      animate="animate"
    >
      <motion.nav
        aria-label="Primary navigation"
        style={{
          backgroundColor,
          borderColor,
        }}
        className="relative flex w-full max-w-3xl items-center justify-between rounded-full border px-4 py-2 backdrop-blur-xl"
      >
        {navItems.map((item) => {
          const isActive = item.id === activeSection;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#eee0c4] transition-colors hover:text-[#f7e9cc]"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-highlight"
                  className="absolute inset-0 -z-10 rounded-full bg-[#ab8f65]/30"
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          );
        })}
      </motion.nav>
    </motion.header>
  );
}
