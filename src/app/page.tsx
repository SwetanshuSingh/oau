import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import ImageCarousel from "@/components/image-carousel";

export default function Home() {
  return (
    <main className="w-full flex flex-col font-futura-book">
      <Hero />
      <About />
      {/* <ImageCarousel />
      <Footer /> */}
    </main>
  );
}
