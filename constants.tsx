
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
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800",
    color: "#1a2e28"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dr. Ariffin Aziz",
    role: "President",
    bio: "Visionary leader with over 25 years in national sustainability strategy and international ESG advocacy.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
    specialty: "National Strategy"
  },
  {
    name: "Sarah Wong",
    role: "Deputy President",
    bio: "Specialist in institutional capacity building and high-level corporate ESG transformation programs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    specialty: "Institutional Development"
  },
  {
    name: "Rizal Ramli",
    role: "Vice President",
    bio: "Leading expert in green innovation metrics and regional sustainability compliance for the industrial sector.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    specialty: "Innovation & Growth"
  },
  {
    name: "Elena Tan",
    role: "Treasurer",
    bio: "Financial governance authority with deep expertise in sustainable finance and ESG-linked investment frameworks.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    specialty: "Sustainable Finance"
  },
  {
    name: "David Kumar",
    role: "Secretary",
    bio: "Dedicated to operational excellence and maintaining the highest standards of organizational transparency.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    specialty: "Governance Operations"
  }
];

// Empty resources to show "Available Soon" state in UI
export const RESOURCES: ResourceItem[] = [];

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
