import About from "@/components/about";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="w-full flex flex-col font-futura-book">
      <Hero />
      <About />
    </main>
  );
}
