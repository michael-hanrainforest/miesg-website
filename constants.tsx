
import { Pillar, StrategicPoint, EcosystemPartner, TeamMember, ResourceItem } from './types';

export const PILLARS: Pillar[] = [
  {
    id: 1,
    title: "Knowledge & Awareness",
    subtitle: "Advancing ESG Understanding",
    description: "Advancing awareness of ESG principles through strategic dissemination of insights across Malaysia.",
    points: [
      "Disseminating cutting-edge ESG insights across Malaysia.",
      "Hosting forums, webinars, and seminars for ESG discourse.",
      "Serving as a regional repository for sustainability data."
    ],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    color: "#1a2e28"
  },
  {
    id: 2,
    title: "Education & Capacity Building",
    subtitle: "Empowering Leaders",
    description: "Structured learning and professional development designed to create long-term social and environmental impact.",
    points: [
      "Curriculum designed for corporate and public sectors.",
      "Workshops focusing on ESG reporting and global compliance.",
      "Leadership programs for Board-level ESG integration."
    ],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    color: "#1a2e28"
  },
  {
    id: 3,
    title: "Research & Innovation",
    subtitle: "Data-Driven Solutions",
    description: "Promoting innovation and applied ESG studies to solve real-world sustainability challenges in the region.",
    points: [
      "Conducting applied research on local ESG challenges.",
      "Evidence-based policy making for government agencies.",
      "Driving innovation in green technology metrics."
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    color: "#1a2e28"
  },
  {
    id: 4,
    title: "Professional Certification",
    subtitle: "Setting Global Standards",
    description: "Providing recognized professional ESG qualifications that meet international standards of excellence and ethics.",
    points: [
      "Offering recognized professional ESG qualifications.",
      "Ensuring standards of competence across industries.",
      "Accrediting a network of ESG professionals."
    ],
    image: "https://images.unsplash.com/photo-1523240715639-9988d1ee9b48?auto=format&fit=crop&q=80&w=800",
    color: "#1a2e28"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Ariffin Aziz",
    role: "Executive Director",
    bio: "Over 20 years of experience in environmental policy and sustainable development across Southeast Asia.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    specialty: "Environmental Policy"
  },
  {
    name: "Sarah Wong",
    role: "Head of ESG Education",
    bio: "Lead architect of Malaysia's premier ESG curriculum for corporate leadership and governance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    specialty: "Capacity Building"
  },
  {
    name: "Rizal Ramli",
    role: "Director of Research",
    bio: "Specializes in green technology impact and data-driven sustainability metrics for SMEs.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    specialty: "Data Analytics"
  },
  {
    name: "Elena Tan",
    role: "Governance Advisor",
    bio: "Expert in institutional transparency and international ESG compliance frameworks.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    specialty: "Corporate Governance"
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    title: "National Tourism Sustainability Framework 2024",
    type: "Policy Brief",
    date: "Dec 2023",
    size: "2.4 MB",
    category: "Policy"
  },
  {
    title: "Impact of Green Tech on Malaysian SMEs",
    type: "Research Paper",
    date: "Oct 2023",
    size: "4.1 MB",
    category: "Tech"
  },
  {
    title: "Journal of ESG Excellence Vol. IV",
    type: "Journal",
    date: "Aug 2023",
    size: "1.8 MB",
    category: "Academic"
  },
  {
    title: "Annual MiESG Impact Report 2023",
    type: "Annual Report",
    date: "Jan 2024",
    size: "5.5 MB",
    category: "Corporate"
  }
];

export const STRATEGIC_FOCUS: StrategicPoint[] = [
  {
    title: "Talent Development",
    description: "Cultivating a pipeline of ESG-literate professionals ready to lead Malaysia's green transition.",
    icon: "Target"
  },
  {
    title: "Governance Excellence",
    description: "Enhancing transparency and ethical standards within institutional frameworks.",
    icon: "ShieldCheck"
  },
  {
    title: "Policy Influence",
    description: "Assisting national bodies in crafting sustainability policies that align with global SDGs.",
    icon: "Microscope"
  }
];

export const ECOSYSTEM_PARTNERS: EcosystemPartner[] = [
  {
    title: "Government Bodies",
    description: "Strategic alignment with national sustainability goals and policy implementation."
  },
  {
    title: "Corporate Sector",
    description: "Empowering businesses to transition from traditional models to ESG-centric operations."
  },
  {
    title: "Academic Institutions",
    description: "Collaborating on research projects that bridge the gap between theory and practice."
  }
];

export const LATEST_INSIGHTS = [
  {
    date: "Oct 24, 2023",
    category: "Report",
    title: "The State of ESG in Malaysian Tourism 2024",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400"
  },
  {
    date: "Sep 15, 2023",
    category: "Event",
    title: "MiESG Annual Sustainability Forum Recap",
    image: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?auto=format&fit=crop&q=80&w=400"
  },
  {
    date: "Aug 02, 2023",
    category: "Case Study",
    title: "Green Tech Adoption in SME Sectors",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=400"
  }
];
