import NewsCard from "@/components/cms/news-card";
import ProjectCard from "@/components/cms/project-card";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = searchParams;
  const view = params.view;

  return (
    <main className="w-full flex flex-col gap-10 p-4">
      {view && view == "work" && (
        <section className="w-full flex flex-col gap-6">
          <h3 className="text-2xl font-medium">Current Projects <span className="text-base">(6)</span></h3>
          <ProjectCard />
          <ProjectCard />
        </section>
      )}

      {view && view == "news" && (
        <section className="w-full flex flex-col gap-6">
          <h3 className="text-2xl font-medium">Current News <span className="text-base">(8)</span></h3>
          <NewsCard />
        </section>
      )}
    </main>
  );
}
