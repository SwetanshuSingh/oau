"use client";

import NewProjectDialog from "./new-project-dialog";

export default function Projects() {
  return (
    <section className="w-full flex flex-col gap-6">
      <h3 className="text-2xl font-medium text-neutral-200">
        Current Projects <span className="text-base text-neutral-400">(0)</span>
      </h3>

      <NewProjectDialog />
    </section>
  );
}
