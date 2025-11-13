import Navbar from "@/components/cms/navbar";
import ProjectCard from "@/components/cms/project-card";
import Sidebar from "@/components/cms/sidebar";

export default async function Dashboard({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const data = await searchParams;
    console.log("Search Params", data)


  return <main className="w-full flex flex-col gap-10 p-4"></main>;
}
