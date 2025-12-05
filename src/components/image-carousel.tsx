import Image from "next/image";

type Item = {
  id: string;
  label: "project" | "blog" | "news";
  title: string;
  content: string;
  img: string;
};

export default function ImageCarousel() {
  const items: Item[] = [
    {
      id: "item-001",
      label: "blog",
      title:
        "Belongings Begins at Home: Why Attainable Housing Is an Imperative",
      content:
        "We explore 5 strategies that demonstrate how design and policy planning can come together to build more inclusive communities.",
      img: "https://images.unsplash.com/photo-1763300883076-4f18083e59d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    },
    {
      id: "item-002",
      label: "project",
      title: "Adaptive Courtyard Living: A Prototype for Urban Cohesion",
      content:
        "An investigation into modular courtyards that weave social spaces with private dwellings to enhance neighborly bonds.",
      img: "https://images.unsplash.com/photo-1763060723047-fa6e82b6e2b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    },
    {
      id: "item-003",
      label: "news",
      title: "OAU Announces Fellowship Focused on Climate-Positive Urbanism",
      content:
        "A yearlong program pairing research and applied design to accelerate climate-positive interventions across districts.",
      img: "https://images.unsplash.com/photo-1762545112336-646c69e4888b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    },
    {
      id: "item-004",
      label: "blog",
      title: "Streets as Rooms: Rethinking the Public Realm for Daily Joy",
      content:
        "We outline approachable tactics that convert corridors into human-scale rooms, supporting play, commerce, and care.",
      img: "https://images.unsplash.com/photo-1762545352529-1e624dad0548?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    },
    // {
    //   id: "item-005",
    //   label: "project",
    //   title: "Riverfront Regeneration: Resilience Through Landscape",
    //   content:
    //     "A multi-phase approach that braids flood management with habitat restoration and civic promenades.",
    //   img: "https://images.unsplash.com/photo-1762545078318-8443881c2d83?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    // },
    // {
    //   id: "item-006",
    //   label: "news",
    //   title: "Award Shortlist: OAU’s Circular Materials Library",
    //   content:
    //     "Recognized for advancing low-carbon construction through a shared catalog of reusable assemblies and parts.",
    //   img: "https://images.unsplash.com/photo-1762600749688-8dfc960d86c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
    // },
  ];

  return (
    <section className="w-full flex gap-6 p-10">
      {items.map((item) => (
        <div
          key={item.id}
          className="max-w-1/4 w-1/4 flex flex-col gap-8 cursor-pointer hover:scale-105 transition-transform duration-150 select-none"
        >
          <Image
            width={1000}
            height={1000}
            className="w-full h-[200px] object-cover object-center"
            src={item.img}
            alt="dummy-image"
          />

          <div className="flex flex-col gap-5">
            <span>
              <p className="text-sm uppercase text-neutral-600">{item.label}</p>
              <h4 className="font-medium text-xl text-neutral-800">
                {item.title}
              </h4>
            </span>
            <p className="text-lg text-neutral-600 tracking-tight">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
