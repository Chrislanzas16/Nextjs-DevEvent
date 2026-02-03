export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "KubeCon + CloudNativeCon Europe 2026",
    slug: "kubecon-cloudnativecon-europe-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-03-25",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "Las Vegas, NV, USA",
    date: "2026-04-09",
    time: "09:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "Microsoft Build 2026",
    slug: "microsoft-build-2026",
    location: "Seattle, WA, USA",
    date: "2026-05-19",
    time: "09:00 AM",
  },
  {
    image: "/images/event4.png",
    title: "React Summit 2026",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-06-12",
    time: "09:00 AM",
  },
  {
    image: "/images/event5.png",
    title: "Open Source Summit North America 2026",
    slug: "oss-na-2026",
    location: "Vancouver, Canada",
    date: "2026-06-22",
    time: "09:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "ETHGlobal Hackathon Paris 2026",
    slug: "ethglobal-paris-2026",
    location: "Paris, France",
    date: "2026-07-10",
    time: "10:00 AM",
  },
  {
    image: "/images/event-full.png",
    title: "AWS re:Invent 2026",
    slug: "aws-reinvent-2026",
    location: "Las Vegas, NV, USA",
    date: "2026-12-01",
    time: "08:30 AM",
  },
];

export default events;
