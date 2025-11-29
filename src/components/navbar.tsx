"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-start items-center gap-32 text-4xl">
      <h4 className="font-medium tracking-tight text-white">OAU</h4>

      <span className="flex justify-start items-center gap-5 uppercase">
        <NavLink href="/initiatives">Initiatives</NavLink>
        <p className="text-white/70">/</p>
        <NavLink href="/work">Work</NavLink>
        <p className="text-white/70">/</p>
        <NavLink href="/blogs">Blogs</NavLink>
        <p className="text-white/70">/</p>
        <NavLink href="/news">News</NavLink>
        <p className="text-white/70">/</p>
        <NavLink href="/contact">Contact</NavLink>
      </span>
    </nav>
  );
}

function NavLink({ children, href }: { children: string; href: string }) {
  return (
    <Link href={href} className="text-white/80 cursor-pointer hover:text-white">
      {children}
    </Link>
  );
}
