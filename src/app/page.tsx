import Grid from "@/components/grid";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="w-full h-full font-sans flex flex-col gap-10">
      <Hero />
      <Grid />
      <section className="w-full flex bg-[#FAFBFC] border-y border-gray-100 p-6">
        <div className="flex flex-col gap-4 w-1/4">
          <p className="text-4xl font-bold uppercase text-black">OAU</p>

          <div className="flex flex-col text-gray-600 tracking-tight leading-none gap-1.5">
            <p>
              F-16, Shankar Path, Todel Marg, Kanti Chandra Road, Bani Park,
              Jaipur
            </p>
            <p>Rajasthan, 302016</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-2 flex">
        <p></p>
      </section>
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="w-full h-full font-sans flex flex-col gap-10">
//       <Hero />

//       <section className="w-full flex px-6">
//         <div className="w-full flex flex-col gap-5">
//           {/* <p className="w-2/4 text-4xl text-black/80 font-medium">
//             Serenity in Heaven: Embracing Nature in Architecture
//           </p> */}
//           <p className="w-3/6 text-2xl text-black/60 text-justify font-instrument">
//             Throughout history, architecture & build mass has always been at the
//             forefront of guiding civilizations, enriching experiences with novel
//             ideas of utopia. It is imperative that we understand agencies and
//             develop modalities that can foster a sustainable build environment
//             for all species.{" "}
//           </p>

//           <span className="w-full flex justify-end">
//             <p className="w-2/4 text-2xl text-black/60 text-justify font-instrument">
//               Office for Objects Architecture Urbanism (OAU) is an international
//               architectural, urban planning/design practice established to
//               initiate works that mediate between various scales from objects,
//               architecture, and urban planning & design. The motivation for
//               starting the office comes from the realization of finding the true
//               potential of our given spaces and their ability to transcend the
//               faculties of our sensorial perception. OAU engages in physical
//               (build forms) and metaphysical (ideas of tomorrow) that addresses
//               the immediate need for our spaces and their relativity to our
//               built environment. OAU aims to curate spaces that answer questions
//               of our known & unknown perceptive environment through context
//               research and design strategy.
//             </p>
//           </span>
//         </div>
//       </section>

//       <section className="w-full max-h-[800px] px-6">
//         <img
//           className="w-1/2 h-[500px] object-cover rounded-lg"
//           src="https://images.unsplash.com/photo-1762424361036-ec4c08265053?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=985"
//           alt=""
//         />
//       </section>

//       <footer className="border-t border-gray-100 bg-gray-200 w-full h-[300px]"></footer>
//     </main>
//   );
// }
