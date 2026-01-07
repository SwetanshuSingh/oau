import { db } from "@/db";
import { projects } from "@/db/schema";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Project({ params }: { params: { id: string } }) {
  const [project] = await db.query.projects.findMany({
    where: (projects, { eq }) => eq(projects.id, params.id),
    with: { images: true },
  });

  return (
    <main className="flex flex-col gap-10">
      <div className="flex gap-1 text-neutral-500">
        <Link href="/work">
          <p>Work</p>
        </Link>
        <ChevronRight />
        <p className="text-black">{project.title}</p>
      </div>

      <div className="flex flex-col gap-5">
        <h4 className="text-3xl font-medium text-neutral-800">
          {project.title}
        </h4>
        <div className="w-full flex text-lg text-neutral-600 tracking-tight">
          <span className="w-2/6">
            <p>Type: {project.type}</p>
            <p>Location: {project.location}</p>
            <p>Status: {project.status}</p>
          </span>

          <p className="w-4/6">{project.description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5">
          {project.images[0]?.ufsUrl && (
            <Image
              width={1000}
              height={1000}
              className="h-[500px] w-2/4 object-cover"
              src={project.images[0].ufsUrl}
              alt={project.images[0].name || project.title}
            />
          )}

          {project.images[1]?.ufsUrl && (
            <Image
              width={1000}
              height={1000}
              className="h-[500px] w-2/4 object-cover"
              src={project.images[1].ufsUrl}
              alt={project.images[1].name || project.title}
            />
          )}
        </div>

        {project.images[2]?.ufsUrl && (
          <div className="w-full">
            <Image
              width={1000}
              height={1000}
              className="w-full h-[800px] object-cover"
              src={project.images[2].ufsUrl}
              alt={project.images[2].name || project.title}
            />
          </div>
        )}

        <div className="w-full flex gap-5">
          {project.images[3]?.ufsUrl && (
            <Image
              width={1000}
              height={1000}
              className="h-[500px] w-2/4 object-cover"
              src={project.images[3].ufsUrl}
              alt={project.images[3].name || project.title}
            />
          )}

          {project.images[4]?.ufsUrl && (
            <Image
              width={1000}
              height={1000}
              className="h-[500px] w-2/4 object-cover"
              src={project.images[4].ufsUrl}
              alt={project.images[4].name || project.title}
            />
          )}
        </div>
      </div>
    </main>
  );
}
