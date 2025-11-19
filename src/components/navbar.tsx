"use client";

import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-start items-center gap-32 text-4xl">
      <h4 className="font-medium tracking-tight text-white">OAU</h4>

      <span className="flex justify-start items-center gap-5 uppercase">
        <FlipLink href="/initiatives">Initiatives</FlipLink>
        <p className="text-white/70">/</p>
        <FlipLink href="/initiatives">Work</FlipLink>
        <p className="text-white/70">/</p>
        <FlipLink href="/initiatives">News</FlipLink>
        <p className="text-white/70">/</p>
        <FlipLink href="/initiatives">Contact</FlipLink>
      </span>
    </nav>
  );
}

function FlipLink({ children, href }: { children: string; href: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-white/80 cursor-pointer"
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>

      <motion.div
        className="absolute inset-0 text-white"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
