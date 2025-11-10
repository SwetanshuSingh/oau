import { HTMLAttributes } from "react";

export default function Navbar() {
  const items = ["oau", "home", "initiatives", "work"];

  return (
    <nav className="w-full flex justify-start items-center text-white gap-12">
      <p className="text-4xl font-bold uppercase">OAU</p>
      <span className="text-3xl font-semibold text-white/80">/</span>
      <p className="text-4xl font-bold uppercase cursor-pointer">Home</p>
      <span className="text-3xl font-semibold">/</span>
      <p className="text-4xl font-bold uppercase">Initiatives</p>
      <span className="text-3xl font-semibold">/</span>
      <p className="text-4xl font-bold uppercase">Work</p>
    </nav>
  );
}
