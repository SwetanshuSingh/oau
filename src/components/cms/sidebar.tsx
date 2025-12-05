"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { id: 1, name: "work", pathname: "/dashboard/work" },
    { id: 2, name: "news", pathname: "/dashboard/news" },
  ];

  return (
    <aside className="w-1/6 border-r border-neutral-800 flex flex-col gap-3 p-4">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => router.push(item.pathname)}
          className={`w-full py-1 px-3 flex justify-start items-center rounded cursor-pointer ${
            pathname === item.pathname
              ? "bg-white/10 text-neutral-100"
              : "border-transparent text-neutral-400"
          }`}
        >
          <p className="capitalize">{item.name}</p>
        </button>
      ))}
    </aside>
  );
}
