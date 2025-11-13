"use client";
import { useState } from "react";

export default function Sidebar() {
  const navItems = [{ name: "Work" }, { name: "News" }];
  const [active, setActive] = useState<"Work" | "News">("Work");

  return (
    <aside className="w-1/6 h-full border-r border-[#333435] flex flex-col gap-3 p-4">
      {navItems.map((item) => (
        <div
          key={item.name}
          onClick={() => setActive(item.name as "Work" | "News")}
          className={`w-full py-0.5 px-3 flex justify-start items-center rounded cursor-pointer border ${
            active === item.name
              ? "border-[#333435] bg-[#252728]"
              : "border-transparent"
          }`}
        >
          <p>{item.name}</p>
        </div>
      ))}
    </aside>
  );
}
