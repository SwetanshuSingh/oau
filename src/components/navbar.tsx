"use client";

import { motion } from "motion/react";

export default function Navbar() {
  const items = ["oau", "home", "initiatives", "work"];

  return (
    <nav className="w-full flex justify-start items-center text-white/80 gap-12">
      <p className="text-4xl font-bold uppercase cursor-default">OAU</p>
      <span className="text-3xl font-semibold text-white/80">/</span>
      <FlipLink href="#">Home</FlipLink>
      <span className="text-3xl font-semibold">/</span>
      <FlipLink href="#">Initiatives</FlipLink>
      <span className="text-3xl font-semibold">/</span>
      <FlipLink href="#">Work</FlipLink>
    </nav>
  );
}

function FlipLink({ children, href }: { children: string; href: string }) {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-bold uppercase text-white/80 cursor-pointer"
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
