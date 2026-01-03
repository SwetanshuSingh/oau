import NewProjectDialog from "@/components/cms/new-project-dialog";
import ProjectCard from "@/components/cms/project-card";
import { db } from "@/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function WorkDashboard() {
  const session = await auth.api.getSession({
    headers: headers(),
  });

  if (!session || !session.user)
    redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/login`);

  const existingProjects = await db.query.projects.findMany({
    with: {
      images: true,
    },
  });

  console.log("Projects", existingProjects);

  return (
    <main className="w-full flex flex-col gap-10 p-4">
      <section className="w-full flex flex-col gap-6">
        <h3 className="text-2xl font-medium text-neutral-200">
          Current Projects{" "}
          <span className="text-base text-neutral-400">
            ({existingProjects.length})
          </span>
        </h3>

        <div className="flex flex-col gap-5">
          {existingProjects &&
            existingProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
        </div>

        <NewProjectDialog />
      </section>
    </main>
  );
}
