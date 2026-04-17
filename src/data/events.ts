export interface EventData {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: string;
  requiresRegistration?: boolean;
  registrationLink?: string;
  fullDescription?: string;
  image?: string;
}

export const UPCOMING_EVENTS: EventData[] = [
  {
    id: 1,
    title: "Meeting with MPC",
    date: "2026-03-26",
    time: "TBA",
    location: "TBA",
    description: "Tentative meeting with MPC.",
    type: "Meeting"
  },
  {
    id: 12,
    title: "Asia Offroad Expo & Convention 2026 (AOX 2026) Launching",
    date: "2026-04-28",
    time: "TBA",
    location: "TBA",
    description: "Official launch event for Asia Offroad Expo & Convention 2026.",
    type: "Launch"
  },
  {
    id: 2,
    title: "UNIMY–MiESG Earth Day 2026 Webinar",
    date: "2026-04-22",
    time: "02:00 PM - 04:30 PM",
    location: "Zoom (Virtual)",
    description: "Earth Day Webinar hosted by UNIMY.",
    type: "Webinar",
    requiresRegistration: true,
    registrationLink: "https://baceducation.zoom.us/meeting/register/ySUDD1lZT0mtlhYusYwJfQ#/registration",
    image: "/earth-day-poster.jpg",
    fullDescription: `In conjunction with Earth Day 2026, this webinar brings together academic, industry, and sustainability perspectives to discuss how ESG thinking and digital innovation can contribute to more practical, responsible, and accountable environmental action. It will also examine both the potential and the limitations of technology in supporting sustainable systems.

Our Power, Our Planet: Advancing ESG and Digital Innovation for Sustainable Systems

📅 Date: 22 April 2026
🕑 Time: 2.00 PM – 4.30 PM
💻 Platform: Zoom
🎟️ Admission: FREE

Programme
▪️ 2.00 PM – 2.10 PM
Welcome remarks by UNIMY/BAC Education and MiESG

▪️ 2.10 PM – 2.40 PM
Keynote Address:
“Our Power, Our Planet: Technology, ESG and the Future of Sustainable Action”
Speaker: Prof. Lawal Marafa
Professor, Department of Geography & Resources Management, The Chinese University of Hong Kong

▪️ 2.40 PM – 3.40 PM
Panel Discussion:
“From Innovation to Impact: Can Digital and ESG Systems Deliver Real Sustainability Outcomes?”
Moderator:
Prof. Dr. Vikneswaran Nair
Deputy Vice Chancellor, University Malaysia of Computer Science & Engineering (UNIMY)

Panellists:
• Say Lim
Co-Founder & Chief Executive Officer, SquareCloud (Malaysia) Sdn. Bhd.

• Sarhan Bin Ismail
President, Malaysia Institute of ESG (MiESG)

• Dr. Jennifer Kim Lian Chan
Executive Board Member, Asian Ecotourism Network

▪️ 3.40 PM – 3.55 PM
Moderated Q&A Session

▪️ 3.55 PM – 4.00 PM
Closing remarks`
  },
  {
    id: 3,
    title: "Official meeting of MiESG",
    date: "2026-05-16",
    time: "09:00 AM - 12:00 PM",
    location: "MIRCA",
    description: "Official meeting of MiESG.",
    type: "Meeting"
  },
  {
    id: 4,
    title: "Tree Planting Day",
    date: "2026-06-05",
    time: "TBA",
    location: "TBC",
    description: "Tree Planting Day with Raja Muda Selangor.",
    type: "Event"
  },
  {
    id: 5,
    title: "Rimba Park Resort Launching",
    date: "2026-06-08",
    time: "Multi-day (June 8 - June 10)",
    location: "Rimba Park Resort",
    description: "Launching event for Rimba Park Resort.",
    type: "Launch"
  },
  {
    id: 6,
    title: "Rimba Park Resort Launching",
    date: "2026-06-09",
    time: "Multi-day (June 8 - June 10)",
    location: "Rimba Park Resort",
    description: "Launching event for Rimba Park Resort.",
    type: "Launch"
  },
  {
    id: 7,
    title: "Rimba Park Resort Launching",
    date: "2026-06-10",
    time: "Multi-day (June 8 - June 10)",
    location: "Rimba Park Resort",
    description: "Launching event for Rimba Park Resort.",
    type: "Launch"
  },
  {
    id: 8,
    title: "MiESG Official Meeting",
    date: "2026-07-01",
    time: "First week of July",
    location: "MIRCA",
    description: "MiESG official meeting with Raja Muda Selangor.",
    type: "Meeting"
  },
  {
    id: 9,
    title: "Offroad Fair",
    date: "2026-10-23",
    time: "Multi-day (Oct 23 - Oct 25)",
    location: "Putra World Trade Centre",
    description: "Offroad Fair (Explorer outfitter, ooi).",
    type: "Fair"
  },
  {
    id: 10,
    title: "Offroad Fair",
    date: "2026-10-24",
    time: "Multi-day (Oct 23 - Oct 25)",
    location: "Putra World Trade Centre",
    description: "Offroad Fair (Explorer outfitter, ooi).",
    type: "Fair"
  },
  {
    id: 11,
    title: "Offroad Fair",
    date: "2026-10-25",
    time: "Multi-day (Oct 23 - Oct 25)",
    location: "Putra World Trade Centre",
    description: "Offroad Fair (Explorer outfitter, ooi).",
    type: "Fair"
  }
];
