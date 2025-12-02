import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Project({ params }: { params: { id: string } }) {
  console.log("Project Id", params);
  return (
    <main className="flex flex-col gap-10">
      <div className="flex gap-1 text-neutral-500">
        <Link href="/work">
          <p>Work</p>
        </Link>
        <ChevronRight />
        <p className="text-black">Pavilion Road</p>
      </div>

      <div className="flex flex-col gap-5">
        <h4 className="text-3xl font-medium text-neutral-800">Pavilion Road</h4>
        <div className="w-full flex text-lg text-neutral-600 tracking-tight">
          <span className="w-2/6">
            <p>Type: Urban, Pavilion</p>
            <p>Location: Venice, Italy</p>
            <p>Status: Proposed</p>
          </span>

          <p className="w-4/6">
            ROAD “Reality of a dream” proposes a reflection on our constant
            migration from waking to dream state. Born out of a desire to
            acknowledge the presence of our dream state, Pavilion ROAD
            recognizes our walls of known perception and the formless transition
            of our waking state to our dream state. Resembling our dream state
            where one witnesses images, inhabiting thoughts, sensations, and
            collective intelligence, The pavilion invites the public to a place
            where all our observed perceptions merge into a reality of
            communion, belonging, and absolute rest. 
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-full flex gap-5">
          <img
            className="h-[500px] w-2/4 object-cover"
            src="https://images.unsplash.com/photo-1762115839572-b858cc6efb61?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
            alt=""
          />

          <img
            className="h-[500px] w-2/4 object-cover"
            src="https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full">
          <img
            className="w-full h-[800px] object-cover"
            src="https://images.unsplash.com/photo-1763351866319-5851eb0c9018?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <div className="w-full flex gap-5">
          <img
            className="h-[500px] w-2/4 object-cover"
            src="https://images.unsplash.com/photo-1762115839572-b858cc6efb61?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
            alt=""
          />

          <img
            className="h-[500px] w-2/4 object-cover"
            src="https://images.unsplash.com/photo-1761839257469-96c78a7c2dd3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
