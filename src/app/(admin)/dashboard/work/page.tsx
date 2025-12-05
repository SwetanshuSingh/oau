import Projects from "@/components/cms/projects";


export default async function WorkDashboard() {
  return (
    <main className="w-full flex flex-col gap-10 p-4">
      <Projects />
    </main>
  );
}
