import Footer from "@/components/footer";
import Grid from "@/components/grid";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col gap-10 font-instrument-serif">
      <section className="w-full h-screen flex flex-col">
        <Navbar />
        <Hero />
      </section>

      <section className="flex justify-center">
        <div className="w-1/2 flex flex-col gap-4 px-2 text-center">
          <p className="text-2xl text-black/90 tracking-tight">
            Throughout history, architecture & build mass has always been at the
            forefront of guiding civilizations, enriching experiences with novel
            ideas of utopia. It is imperative that we understand agencies and
            develop modalities that can foster a sustainable build environment
            for all species.{" "}
          </p>

          <p className="text-3xl text-black/90">
            Office for Objects Architecture Urbanism (OAU) is an international
            Architectural, Urban Planning/Design practice established to
            initiate works that mediate between various scales from Objects,
            Architecture, and Urban Planning & Design. The motivation for
            starting the office comes from the realization of finding the true
            potential of our given spaces and their ability to transcend the
            faculties of our sensorial perception. OAU engages in physical
            (build forms) and metaphysical (ideas of tomorrow) that addresses
            the immediate need for our spaces and their relativity to our built
            environment. OAU aims to curate spaces that answer questions of our
            known & unknown perceptive environment through context research and
            design strategy.
          </p>
        </div>
      </section>

      <Grid />

      <Footer />
    </main>
  );
}

// Note - Second Iteration for Hero Section

// <main className="w-full h-full flex flex-col gap-10">
//   <section className="w-full h-screen bg-center bg-[url(https://images.unsplash.com/photo-1761839258671-6495fdc188b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070)]">
//     <div className="w-full h-full p-7 bg-black/25">
//       <nav className="w-full flex items-center justify-between text-4xl text-white">
//         <p>OAU</p>
//         <p>Initiatives</p>
//         <p>Work</p>
//         Contact
//       </nav>
//     </div>
//   </section>
// </main>
