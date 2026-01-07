type FooterLinks = {
  category: "our work" | "initiatives" | "what's new" | "legal";
  items: FootLink[];
};

type FootLink = {
  label: string;
  href: string;
};

export default function Footer() {
  const footerLinks: FooterLinks[] = [
    {
      category: "our work",
      items: [
        { label: "Projects", href: "" },
        { label: "News", href: "" },
        { label: "Blogs", href: "" },
      ],
    },
    {
      category: "initiatives",
      items: [
        { label: "Paraorbism", href: "" },
        { label: "OAU Builds", href: "" },
        { label: "Arch Article", href: "" },
        { label: "llaxrworld", href: "" },
      ],
    },
    {
      category: "what's new",
      items: [
        { label: "Instagram", href: "" },
        { label: "Linkedin", href: "" },
        { label: "Twitter", href: "" },
      ],
    },
    {
      category: "legal",
      items: [
        { label: "Privacy Policy", href: "" },
        { label: "Terms & Conditions", href: "" },
      ],
    },
  ];

  return (
    <footer className="w-full p-5 md:p-14 bg-[#051F2C] text-white/80 flex flex-col gap-8">
      <section className="flex justify-start items-start gap-40">
        <div className="flex flex-col gap-6">
          <h4 className="text-4xl font-medium tracking-tight text-white">
            OAU
          </h4>
          <span>
            <p>F-16, Shankar Path, Toder Mal Marg,</p>
            <p>Kanti Chandra Marg, Bani Park</p>
            <p>Jaipur, Rajasthan - 302016</p>
          </span>
        </div>

        <div className="hidden xl:flex gap-20">
          {footerLinks.map((footLink) => (
            <div key={footLink.category} className="flex flex-col gap-6">
              <h5 className="text-white text-2xl capitalize">
                {footLink.category}
              </h5>

              <span className="flex flex-col gap-3 text-lg">
                {footLink.items.map((item) => (
                  <p
                    key={item.label}
                    className="hover:text-white transition-all duration-150 cursor-pointer hover:underline underline-offset-[6px] decoration-wavy"
                  >
                    {item.label}
                  </p>
                ))}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full border-t border-white/70 pt-5">
        <p>© 2025 OAU - Objects Architecture Urbansism</p>
      </section>
    </footer>
  );
}
