"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import MobileSidebar from "./mobile-sidebar";

type NavbarProps = {
  variant: "dark" | "light";
};

type NavLinkProps = {
  label: string;
  href: string;
  variant: "dark" | "light";
};

export default function Navbar({ variant }: NavbarProps) {
  return (
    <nav className="w-full flex justify-between lg:justify-start items-center text-xl lg:text-3xl lg:gap-20 xl:text-4xl xl:gap-32">
      <h4
        className={`font-medium tracking-tight ${
          variant === "dark" ? "text-white" : "text-black"
        }`}
      >
        OAU
      </h4>

      <span
        className={`hidden lg:flex justify-start items-center gap-5 uppercase ${
          variant === "dark" ? "text-white/70" : "text-neutral-400"
        }`}
      >
        <NavLink label="Initiatives" href="/initiatives" variant={variant} />
        <p>/</p>
        <NavLink label="Work" href="/work" variant={variant} />
        <p>/</p>
        <NavLink label="Blogs" href="/blogs" variant={variant} />
        <p>/</p>
        <NavLink label="News" href="/news" variant={variant} />
        <p>/</p>
        <NavLink label="Contact" href="/contact" variant={variant} />
      </span>

      <MobileSidebar />
    </nav>
  );
}

function NavLink({ label, href, variant }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`cursor-pointer transition-colors duration-150 ${
        variant === "dark"
          ? "text-white/80 hover:text-white"
          : "text-neutral-500 hover:text-black"
      }`}
    >
      {label}
    </Link>
  );
}
