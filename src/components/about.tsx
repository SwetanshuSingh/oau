export default function About() {
  return (
    <section className="w-full p-14">
      <div className="w-full flex gap-10">
        {/* Left Section */}
        <div className="w-3/6 flex flex-col gap-6">
          <h3 className="text-neutral-800 font-medium text-3xl text-justify">
            Office for Objects Architecture Urbanism (OAU) is an international
            architectural, urban planning/design practice established to
            initiate works that mediate between various scales from objects,
            architecture, & urban planning & design.
          </h3>

          <button className="w-fit py-2 px-5 text-[#1E1919] border border-[#1E1919] rounded-3xl text-xl hover:bg-[#1E1919] hover:text-white transition-colors duration-150">
            <p>Our Services</p>
          </button>
        </div>

        <div className="w-3/6 flex">
          <div className="flex flex-col gap-4">
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

            <p className="text-neutral-600 text-lg text-justify tracking-tight">
              Our architecture is an art of optimism, demanding of us a
              forward-looking attitude and the nerve to stand out of sync with
              present norms. We believe the significant work of reconciling past
              traumas and addressing contemporary discord requires an
              architecture that posits a more ideal world. Doing so is a
              naturally enriching process for us and our partners, as we
              collectively seek to expand our definitions of possibility toward
              the betterment of our clients, their institutions, and the
              cultures of which we are all part. As we live in an increasingly
              divided society, there is a tendency to address this division by
              counterproductively retreating into provincial understandings of
              identity. In contrast to current provincialisms, the vocation of
              modern architecture was, is, and should be cosmopolitan, committed
              to enhancing the lives of all people everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
