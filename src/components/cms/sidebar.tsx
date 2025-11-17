"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  const navItems = [
    { id: 1, name: "work" },
    { id: 2, name: "news" },
  ];

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <aside className="w-1/6 border-r border-neutral-800 flex flex-col gap-3 p-4">
      {navItems.map((item) => (
        <div
          key={item.name}
          onClick={() => {
            router.push(pathname + "?" + createQueryString("view", item.name));
          }}
          className={`w-full py-1 px-3 flex justify-start items-center rounded cursor-pointer ${
            view === item.name ? "bg-white/10 text-neutral-100" : "border-transparent text-neutral-400"
          }`}
        >
          <p className="capitalize">{item.name}</p>
        </div>
      ))}
    </aside>
  );
}
