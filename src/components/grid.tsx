export default function Grid() {
  return (
    <section className="w-full flex justify-between gap-10 px-6">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col gap-5">
        <p className="text-3xl text-black/80 text-justify font-instrument font-medium">
          Throughout history, architecture & build mass has always been at the
          forefront of guiding civilizations, enriching experiences with novel
          ideas of utopia. It is imperative that we understand agencies and
          develop modalities that can foster a sustainable build environment for
          all species.{" "}
        </p>

        <img
          className="w-full h-[400px] object-cover"
          src="https://plus.unsplash.com/premium_photo-1744079117031-002ea792bfc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071"
          alt="image"
        />
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col">
        <p className="text-3xl text-black/80 text-justify font-instrument">
          Office for Objects Architecture Urbanism (OAU) is an international
          architectural, urban planning/design practice established to initiate
          works that mediate between various scales from objects, architecture,
          and urban planning & design. The motivation for starting the office
          comes from the realization of finding the true potential of our given
          spaces and their ability to transcend the faculties of our sensorial
          perception. OAU engages in physical (build forms) and metaphysical
          (ideas of tomorrow) that addresses the immediate need for our spaces
          and their relativity to our built environment. OAU aims to curate
          spaces that answer questions of our known & unknown perceptive
          environment through context research and design strategy.
        </p>
      </div>
    </section>
  );
}
