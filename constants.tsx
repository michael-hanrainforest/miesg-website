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
    name: "Sarhan Bin Ismail",
    role: "President",
    bio: "Visionary leader with over 25 years in national sustainability strategy and international ESG advocacy, steering MiESG towards global excellence.",
    image: "https://drive.google.com/thumbnail?id=10lywmbmRjLgnrJeUqcsshezdlkwJb7GM&sz=w1000",
    specialty: "National Strategy"
  },
  {
    name: "Professor Dato’ Dr. Nor Aieni Mokhtar",
    role: "Deputy President",
    bio: "Distinguished authority in Ocean Engineering and Maritime Policy. Former Vice-Chancellor of UMT and Director of the National Oceanography Directorate, she is a recognized expert in coastal protection and climate resilience.",
    image: "https://img.astroawani.com/2021-02/61613378611_TBNorAieniMokhtar.jpg",
    specialty: "Maritime Policy & Ocean Engineering"
  },
  {
    name: "Prof. Dr. Vikneswaran Nair",
    role: "Vice President",
    bio: "Distinguished academic and global expert in Sustainable Tourism and Responsible Development. With a PhD in Systems Engineering, he has pioneered international research in community-based ecotourism and sustainable rural development.",
    image: "https://static.wixstatic.com/media/0d82eb_fd36f20e1ff54d0eacf317576d7acf89~mv2.jpg/v1/crop/x_0,y_14,w_570,h_679/fill/w_356,h_424,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/20180525_232224%20-%20Copy.jpg",
    specialty: "Sustainable Tourism & Systems Engineering"
  },
  {
    name: "Prof. Dr. Jennifer Kim Lian Chan",
    role: "Vice President",
    bio: "Prominent academic and Director of the Borneo Tourism Research Centre (BTRC) at Universiti Malaysia Sabah. An expert in Sustainable Tourism and Hospitality Management, she focuses on sustainable development and service quality.",
    image: "https://institutetourism.com/wp-content/uploads/2025/01/Jennifer-Kim-Lian-Chan.jpg",
    specialty: "Sustainable Hospitality & Tourism Development"
  },
  {
    name: "Dr. Ellieenn Tan",
    role: "Treasurer",
    bio: "Distinguished academic and financial governance authority with deep expertise in sustainable finance and ESG-linked investment frameworks.",
    image: "https://drive.google.com/thumbnail?id=1ogFOolAMcYgM4q6wrtkaFzhF8kSzn-Ny&sz=w800",
    specialty: "Sustainable Finance"
  },
  {
    name: "Frank Kee",
    role: "Secretary",
    bio: "Dedicated professional with extensive experience in operational excellence and maintaining the highest standards of organizational transparency for MiESG.",
    image: "https://drive.google.com/thumbnail?id=1Re8j3P8jD3qOpw65UyyNB87rxKnidyPu&sz=w800",
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