import Footer from "@/components/footer";
import { Timeline, type TimelineItem } from "@/components/timeline";
import Link from "next/link";

const demoItems: TimelineItem[] = [
  {
    id: "2022-09-09-oau-studio-jaipur",
    date: "September 9th, 2022",
    description: "OAU established studio space in Jaipur, India",
  },
  {
    id: "2022-12-12-govind-dev-ji-appointment",
    date: "December 12th, 2022",
    description:
      'OAU appointed as Chief Architect for "Renovation, Beautification, Expansion of Public Facilities at Govind Dev Ji Temple, Zone 2A", Jaipur Rajasthan by GoR',
  },
  {
    id: "2023-03-29-govind-dev-ji-dpr",
    date: "March 29th, 2023",
    description:
      'OAU submitted a Detailed Project Report (DPR) of "Renovation, Beautification, Expansion of Public Facilities at Govind Dev Ji Temple, Zone 2A", Jaipur Rajasthan',
  },
  {
    id: "2023-04-12-arch-college-session",
    date: "April 12th, 2023",
    description:
      'OAU delivers a session on "Designing for a sustainable future" at The ARCH College Campus, Jaipur',
  },
  {
    id: "2023-04-16-jnu-chief-architect",
    date: "April 16th, 2023",
    description:
      "OAU appointed as Chief Architect for Jaipur National University (JNU) for various development works",
  },
  {
    id: "2023-05-30-govind-dev-ji-press-release",
    date: "May 30th, 2023",
    description:
      'Press release on "Renovation, Beautification, Expansion of Public Facilities at Govind Dev Ji Temple, Zone 2A", Jaipur Rajasthan',
  },
  {
    id: "2023-06-30-hyderabad-rooftop-bar",
    date: "June 30th, 2023",
    description:
      'OAU successfully finished execution of a 20,000 SF "Largest rooftop bar in Hyderabad", Telangana',
  },
  {
    id: "2023-07-10-gor-approval-govind-dev-ji",
    date: "July 10th, 2023",
    description:
      "The Government of Rajasthan (GoR) approved a financial proposal made by OAU of Rs. 20.39 Crore for development works at Shri Govind Dev Ji Temple, Jaipur",
  },
  {
    id: "2023-07-19-rhb-empanelment",
    date: "July 19th, 2023",
    description:
      "OAU empanelled by The Rajasthan Housing Board (RBH) for various Architectural consultancy services",
  },
  {
    id: "2023-09-22-constitution-club-press-release",
    date: "September 22nd, 2023",
    description: "Press release on Constitution Club of Rajasthan",
  },
];

export default async function News() {
  return (
    <main className="w-full font-futura-book flex flex-col gap-32">
      <div className="p-14 flex flex-col gap-10">
        <Link href="/">
          <h4 className="font-medium tracking-tight text-black text-4xl">
            OAU
          </h4>
        </Link>
        <Timeline items={demoItems} />
      </div>
      <Footer />
    </main>
  );
}
