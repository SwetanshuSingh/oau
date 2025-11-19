export default function About() {
  return (
    <section className="w-full bg-white p-10 flex flex-col gap-10">
      <button className="w-fit py-2 px-5 bg-[#1E1919] text-white rounded-3xl text-xl uppercase">
        <p>About Us</p>
      </button>

      <div className="w-full flex gap-8">
        {/* Left Section */}
        <div className="w-4/6 flex flex-col gap-6">
          <h3 className="text-neutral-800 font-medium text-2xl italic text-justify">
            Office for Objects Architecture Urbanism (OAU) is an international
            architectural, urban planning/design practice established to
            initiate works that mediate between various scales from objects,
            architecture, & urban planning & design.
          </h3>

          <div className="flex flex-col gap-2">
            <p className="text-neutral-600 text-lg text-justify tracking-tight">
              Throughout history, architecture & build mass has always been at
              the forefront of guiding civilizations, enriching experiences with
              novel ideas of utopia. It is imperative that we understand
              agencies and develop modalities that can foster a sustainable
              build environment for all species.
            </p>
            <p className="text-neutral-600 text-lg text-justify tracking-tight">
              The motivation for starting the office comes from the realization
              of finding the true potential of our given spaces and their
              ability to transcend the faculties of our sensorial perception.
              OAU engages in physical (build forms) and metaphysical (ideas of
              tomorrow) that addresses the immediate need for our spaces and
              their relativity to our built environment. OAU aims to curate
              spaces that answer questions of our known & unknown perceptive
              environment through context research and design strategy.
            </p>
          </div>

          <button className="w-fit py-2 px-5 text-[#1E1919] border border-[#1E1919] rounded-3xl text-xl hover:bg-[#1E1919] hover:text-white transition-colors duration-150">
            <p>Our Services</p>
          </button>
        </div>

        <div className="w-2/6 flex">
          <div className="relative w-full h-full">
            <img
              src="https://images.unsplash.com/photo-1763286056614-0fc228bf7139?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="OAU showcase"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
