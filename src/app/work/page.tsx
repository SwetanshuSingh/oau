import MasonaryGrid from "@/components/masonary-grid";
import Navbar from "@/components/navbar";
import { db } from "@/db";
import { projects } from "@/db/schema";
import Link from "next/link";

export default async function Work() {
  const existingProjects = await db.query.projects.findMany({
    columns: {
      id: true,
      title: true,
      type: true,
    },
    with: {
      images: {
        limit: 1,
        orderBy: (images, { asc }) => [asc(images.id)],
      },
    },
  });

  return (
    <main>
      <MasonaryGrid projects={existingProjects} />
    </main>
  );
}
