"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden">
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent
        className="font-futura-book uppercase font-medium tracking-tight"
        side="right"
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription className="flex items-start flex-col gap-5 text-black/80 text-xl">
            <Link href="/initiatives">
              <span>Initiatives</span>
            </Link>
            <Link href="/work">
              <span>Work</span>
            </Link>
            <Link href="/blogs">
              <span>Blogs</span>
            </Link>
            <Link href="/news">
              <span>News</span>
            </Link>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
