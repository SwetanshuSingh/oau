"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  type: string;
  images: {
    id: string;
    name: string;
    type: string;
    projectId: string;
    customId: string | null;
    fileHash: string;
    key: string;
    lastModified: number | null;
    serverData: unknown;
    size: number | null;
    ufsUrl: string;
  }[];
};

type MasonaryGridProps = {
  projects: Project[];
};

export default function MasonaryGrid({ projects }: MasonaryGridProps) {
  return (
    <section className="w-full columns-1 sm:columns-2 lg:columns-3 gap-4">
      {projects.map((project) => (
        <Link key={project.id} href={`/work/${project.id}`}>
          <div className="relative mb-4 break-inside-avoid cursor-pointer group">
            <div className="absolute flex flex-col-reverse inset-0 bg-gradient-to-b hover:from-black/5 hover:to-black/80 transition-all duration-150 ease-out">
              <div className="w-full flex justify-between items-center text-white p-4">
                <span className="flex flex-col">
                  <p className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    {project.title}
                  </p>
                  <p className="text-lg text-neutral-200 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    Type: {project.type}
                  </p>
                </span>

                <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </div>
            </div>
            <Image
              width={1000}
              height={1000}
              className="w-full object-cover"
              alt=""
              src={project.images[0].ufsUrl}
            />
          </div>
        </Link>
      ))}
    </section>
  );
}
