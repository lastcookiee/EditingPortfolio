"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

export default function ContactSection() {
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const message = form.get("message")?.toString() ?? "";
    const subject = encodeURIComponent(`Project Inquiry — ${name || "Kunal Singh Portfolio"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:kunalsingh.prf@gmail.com?subject=${subject}&body=${body}`;
  }, []);

  return (
    <motion.section
      id="contact"
      className="relative mx-auto flex max-w-4xl flex-col gap-10 px-6 pb-32 sm:px-10"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] }}
    >
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-heading text-3xl uppercase tracking-[0.3em] text-[#f3e2c4] sm:text-4xl">
          Contact
        </h2>
        <p className="text-sm text-[#d6c6a9]/85">
          Let’s build cinematic stories together. Reach out for collaborations, edits, or full production support.
        </p>
      </div>
      <div className="flex flex-col gap-10 rounded-3xl border border-[#3a3125]/60 bg-[#0f0d0b]/70 p-8">
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#cdbda1]/70">Name</span>
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="rounded-full border border-[#3a3125]/60 bg-black/40 px-4 py-3 text-sm text-[#f5e6d3] outline-none transition-colors focus:border-[#c49a6c]/60"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#cdbda1]/70">Email</span>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="rounded-full border border-[#3a3125]/60 bg-black/40 px-4 py-3 text-sm text-[#f5e6d3] outline-none transition-colors focus:border-[#c49a6c]/60"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#cdbda1]/70">Message</span>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Share your project vision..."
              className="rounded-3xl border border-[#3a3125]/60 bg-black/40 px-4 py-3 text-sm text-[#f5e6d3] outline-none transition-colors focus:border-[#c49a6c]/60"
            />
          </label>
          <motion.button
            type="submit"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#f0dfc3]/40 px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#f5e6d3]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 translate-y-full bg-[#b9996f]/40 transition-transform duration-500 ease-out group-hover:translate-y-0" />
            <span className="relative">Send Message</span>
          </motion.button>
        </form>
        <div className="flex flex-col gap-3 text-center text-xs uppercase tracking-[0.3em] text-[#cabda0]/70">
          <span>Connect</span>
          <div className="flex flex-wrap justify-center gap-4 text-[0.7rem] text-[#f5e6d3]">
            <a
              href="https://www.instagram.com/m_kunxl/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#f6e8cb]"
            >
              Instagram @m_kunxl
            </a>
            <a
              href="mailto:kunalsingh.prf@gmail.com"
              className="transition-colors hover:text-[#f6e8cb]"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
