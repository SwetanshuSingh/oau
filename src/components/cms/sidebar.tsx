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
    <aside className="w-1/6 border-r border-[#333435] flex flex-col gap-3 p-4">
      {navItems.map((item) => (
        <div
          key={item.name}
          onClick={() => {
            router.push(pathname + "?" + createQueryString("view", item.name));
          }}
          className={`w-full py-0.5 px-3 flex justify-start items-center rounded cursor-pointer border ${
            view === item.name
              ? "border-[#333435] bg-[#252728]"
              : "border-transparent"
          }`}
        >
          <p className="capitalize">{item.name}</p>
        </div>
      ))}
    </aside>
  );
}
