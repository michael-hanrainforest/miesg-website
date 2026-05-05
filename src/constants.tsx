import { Pillar, StrategicPoint, EcosystemPartner, TeamMember, ResourceItem, Publication, ResearchJournal } from './types';

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
    bio: "Sarhan Bin Ismail serves as the President of the Malaysia Institute of ESG (MiESG) and the General Manager of the Sultan Ahmad Shah Environmental Foundation. With over 13 years of dedicated hands-on environmental conservation work, alongside a broader career in national sustainability strategy, he is a prominent driving force in regional ecological protection and corporate ESG advocacy.\n\nThroughout his distinguished career, Sarhan has consistently championed initiatives that bridge economic development with vital environmental stewardship. His leadership at the Sultan Ahmad Shah Environmental Foundation underscores his profound commitment to preserving Malaysia's rich natural heritage, advocating for wildlife conservation, and rehabilitating critical ecosystems. This extensive grounding in active environmentalism informs his overarching vision for both public and private sectors.\n\nAt MiESG, he leverages this profound ecological expertise to shape policies that embed ESG principles deeply into corporate governance. Sarhan works closely with industry leaders, government bodies, and international organizations to demand transparency, accountability, and cohesive national sustainability frameworks. He believes deeply in empowering the next generation of leaders with the knowledge required to navigate complex environmental landscapes, ensuring a resilient economy that protects the natural world.",
    image: "https://drive.google.com/thumbnail?id=10lywmbmRjLgnrJeUqcsshezdlkwJb7GM&sz=w1000",
    specialty: "National Strategy"
  },
  {
    name: "Professor Dato’ Dr. Nor Aieni Mokhtar",
    role: "Deputy President",
    bio: "Professor Dato’ Dr. Nor Aieni Mokhtar is a highly distinguished authority in Ocean Engineering, Maritime Policy, and Ocean Governance. Serving as the Deputy President of MiESG, she brings an unparalleled depth of academic and leadership experience, having previously served as the Vice-Chancellor of Universiti Malaysia Terengganu (UMT) and the Director of the National Oceanography Directorate.\n\nHer illustrious career is defined by her unwavering commitment to coastal protection, marine conservation, and climate resilience frameworks. She has spearheaded numerous high-impact national and international collaborations aimed at integrating sustainable environmental, social, and governance (ESG) practices into maritime and ocean-based industries. Her work ensures that the Blue Economy remains ecologically viable and socially equitable.\n\nA respected voice in global maritime policy discourse, Prof. Dato’ Dr. Nor Aieni continuously champions science-based sustainability frameworks. At MiESG, she leverages her vast institutional knowledge to drive impactful environmental research, shaping policies that safeguard critical marine ecosystems while fostering resilient, future-ready coastal communities across the region.",
    image: "https://img.astroawani.com/2021-02/61613378611_TBNorAieniMokhtar.jpg",
    specialty: "Maritime Policy & Ocean Engineering"
  },
  {
    name: "Prof. Dr. Vikneswaran Nair",
    role: "Vice President",
    bio: "Prof. Dr. Vikneswaran Nair is a globally recognized academic and thought leader in Sustainable Tourism and Responsible Development. Holding a PhD in Systems Engineering, he uniquely combines rigorous systems thinking with ecological preservation, pioneering innovative research methodologies for community-based ecotourism and sustainable rural development.\n\nHis extensive body of research provides actionable frameworks for destinations seeking to balance visitor economies with environmental integrity and social equity. He has worked closely with international agencies and destination marketing organizations to establish resilient tourism models that empower indigenous and local communities while minimizing ecological footprints.\n\nAs Vice President at MiESG, Prof. Dr. Vikneswaran plays a critical role in advancing the institute's research and educational agendas. He is deeply committed to translating complex sustainability theories into practical, measurable ESG metrics for the hospitality and tourism sectors. His forward-thinking approach continuously shapes how industry stakeholders view, measure, and implement sustainable practices on a global scale.",
    image: "https://drive.google.com/thumbnail?id=1jM8WBRTnbdu5kTEFGBCzCjNyPDtJFvwf&sz=w800",
    specialty: "Sustainable Tourism & Systems Engineering"
  },
  {
    name: "Dr. Jennifer Chan Kim Lian",
    role: "Vice President",
    bio: "Dr. Jennifer Chan Kim Lian is a prominent academic force and serves on the Executive Board Committee of the Asian Ecotourism Network. As an esteemed Vice President of MiESG, she specializes in Sustainable Tourism, Hospitality Tourism Management, and service quality enhancement within ecological contexts.\n\nHer profound expertise is centered on advancing sustainable development initiatives in Borneo and beyond, focusing extensively on capacity building and community capability enhancement. She has authored numerous impactful studies that guide hospitality providers in adopting eco-friendly policies and improving service delivery without compromising the natural environment.\n\nAt MiESG, Dr. Jennifer bridges the gap between rigorous academic research and practical industry application. She actively mentors future sustainability practitioners and drives initiatives that embed robust ESG criteria directly into tourism operations. Her dedication ensures that cultural preservation and environmental protection remain at the forefront of the hospitality industry's developmental agenda.",
    image: "https://institutetourism.com/wp-content/uploads/2025/01/Jennifer-Kim-Lian-Chan.jpg",
    specialty: "Sustainable Hospitality & Tourism Development"
  },
  {
    name: "Kenny Ng How Ann",
    role: "Vice President",
    bio: "Kenny Ng How Ann is a highly seasoned professional with a robust background in corporate strategy, dedicated to advancing transformative ESG initiatives across diverse industries. As Vice President, he brings a wealth of practical corporate experience, prioritizing the critical transition from theoretical sustainability frameworks to measurable, on-the-ground business implementations.\n\nHis expertise lies in bridging the gap between corporate operational goals and long-term environmental realities. By fostering strategic collaborations and aligning business operations with ESG best practices, Kenny enables organizations to proactively manage environmental risks, optimize resource efficiency, and elevate their social impact. He is a strong advocate for stakeholder engagement, ensuring that diverse perspectives are considered in sustainability planning.\n\nWithin MiESG, Kenny serves as a critical link between the institute and strategic corporate partners. He guides industries on holistic ESG integration, ensuring that sustainability operates not merely as a compliance requirement, but as a core driver of institutional value, resilience, and competitive market advantage.",
    image: "https://drive.google.com/thumbnail?id=1PHJ5rtTrJcG_ExPx1W8nqCAEU5appOuD&sz=w800",
    specialty: "ESG Initiatives",
    imagePosition: "object-[center_20%]"
  },
  {
    name: "Lawrence Lo Kuan Mun",
    role: "Vice President",
    bio: "Lawrence Lo Kuan Mun is a visionary leader and esteemed Renewable Energy Expert, serving as the Vice President of the Malaysia Institute of ESG (MiESG). He concurrently holds the position of Managing Director at IONS TECHNOLOGIES (M) SDN BHD, a prominent firm specializing in innovative green technology solutions and sustainable energy practices.\n\nWith extensive hands-on industry experience, Lawrence is deeply committed to accelerating Malaysia's transition towards a low-carbon, energy-efficient economy. Under his leadership, IONS TECHNOLOGIES has successfully spearheaded numerous renewable energy projects, focusing on energy optimization and smart technological advancements.\n\nAt MiESG, Lawrence leverages his entrepreneurial background and technical expertise to drive sustainable energy initiatives. He passionately advocates for the integration of clean energy within corporate ecosystems, ensuring that businesses align their operational frameworks with global environmental standards. His strategic vision emphasizes both the ecological benefits of renewable energy and its long-term economic viability. Dedicated to empowering green technologists, Lawrence collaborates with industry stakeholders to innovate and deploy sustainable solutions that foster a greener and more resilient future.",
    image: "https://drive.google.com/thumbnail?id=1spjDntM7kCehjGe2eXFVb9rfT01mbZVm&sz=w800",
    specialty: "Renewable Energy",
    imagePosition: "object-[center_20%]"
  },
  {
    name: "Dr. Ellieenn Tan",
    role: "Treasurer",
    bio: "Dr. Ellieenn Tan functions as the Treasurer for MiESG, standing as a distinguished academic and financial governance authority. She possesses deep native expertise in sustainable finance, green economics, and ESG-linked investment frameworks, making her an indispensable asset to the institute's fiscal health and programmatic funding strategies.\n\nHer career is characterized by a strong commitment to integrating ethical guidelines and sustainability metrics into traditional financial systems. She researches and advocates for transparent ESG reporting mechanisms, helping investors accurately assess the environmental and social impacts of corporate portfolios. Her insights bridge the complex worlds of academic financial theory and practical, ethical investment banking.\n\nAt MiESG, Dr. Ellieenn oversees all fiscal governance, ensuring impeccable financial transparency and institutional accountability. She actively mentors professionals on the mechanisms of green financing, striving to unlock funding channels for sustainable initiatives while ensuring that all of MiESG's operations are financially resilient, ethically conducted, and structurally sound.",
    image: "https://drive.google.com/thumbnail?id=1ogFOolAMcYgM4q6wrtkaFzhF8kSzn-Ny&sz=w800",
    specialty: "Sustainable Finance"
  },
  {
    name: "Frank Kee Soon Chuan",
    role: "Secretary",
    bio: "Frank Kee Soon Chuan is a dedicated administrative and operational professional, serving as the Secretary of the Malaysia Institute of ESG. With an extensive background in organizational excellence, corporate governance, and process optimization, he ensures that the institute functions with the highest degree of structural and operational transparency.\n\nHis role is pivotal in orchestrating seamless coordination across MiESG's varied initiatives, research programs, and stakeholder engagements. Frank meticulously oversees the compliance, documentation, and statutory requirements of the institute, ensuring that its internal operations reflect the very same rigorous governance and accountability standards that MiESG advocates for in the wider business community.\n\nBy facilitating clear communication channels between the executive committee, members, and external partners, Frank strengthens the institute's collaborative capacity. His unwavering commitment to operational excellence provides a stable, resilient foundation upon which MiESG can confidently build and expand its national and international sustainability agendas.",
    image: "https://drive.google.com/thumbnail?id=1Re8j3P8jD3qOpw65UyyNB87rxKnidyPu&sz=w800",
    specialty: "Governance Operations"
  },
  {
    name: "Michael Ong Hwee Yang",
    role: "Assistant Secretary",
    bio: "Michael Ong Hwee Yang is an accomplished management and technology professional serving as the Assistant Secretary of the Malaysia Institute of ESG (MiESG). With a highly specialized focus on the tourism sector, he concurrently serves as the General Manager at Han Rainforest Sdn Bhd—a close strategic partner to MiESG—as well as the IT Manager at Han Travel Sdn Bhd.\n\nCombining his extensive knowledge of the local tourism industry with strong technological acumen, Michael is instrumental in driving practical, sustainable tourism models. At Han Rainforest, his operational leadership ensures that ecological conservation and responsible travel practices remain core to the business, directly aligning with MiESG's overarching mission to harmonize industry operations with robust environmental protection.\n\nIn his capacity as Assistant Secretary, Michael leverages his unique dual expertise in hospitality management and Information Technology to streamline MiESG's technical operations, optimize digital outreach, and support comprehensive governance frameworks. His deep understanding of the travel sector allows him to effectively design and advocate for ESG initiatives that are highly scalable within corporate tourism, ensuring the industry innovates while safeguarding the natural and cultural assets of the region.",
    image: "https://drive.google.com/thumbnail?id=1UHsP8iMD0MOSsYxZEKO9y2XM7pPionvU&sz=w800",
    specialty: "Sustainable Tourism & IT",
    imagePosition: "object-[center_20%]"
  },
  {
    name: "Prof. Dr. Lawal M. Marafa",
    role: "International Advisor",
    bio: "Prof. Dr. Lawal M. Marafa is a distinguished international scholar and professor in the Department of Geography and Resource Management at The Chinese University of Hong Kong (CUHK). Serving as the International Advisor for the Malaysia Institute of ESG (MiESG), he brings unparalleled global expertise in sustainable development, ecotourism, and environmental management. Recognizing the critical need for advanced educational frameworks, he also served as the founding Director of the Postgraduate Programme in Sustainable Tourism at CUHK, shaping the next generation of sustainability leaders.\n\nHis extensive research portfolio bridges the essential intersections of environmental protection, climate change resilience, leisure, and natural resource management. Prof. Dr. Marafa provides evidence-based methodologies that guide global policymakers in harmonizing rapid tourism development with long-term ecological conservation. His profound influence extends into prominent international organizations; he serves as a Senior Fellow and Board Member of the World Leisure Academy, and actively contributes to the UN World Committee on Tourism Ethics.\n\nPreviously functioning as a distinguished facilitator for the Clinton Global Initiative, his sustainable tourism advocacy is celebrated worldwide. His prestigious accolades include the “Exemplary Teacher Award” at CUHK and the Royal Belum Inaugural Ecotourism Award in Malaysia, underscoring his enduring academic and practical impact.",
    image: "https://drive.google.com/thumbnail?id=18d0H7CFbiBiCij_xW49ul4UDssg7qERm&sz=w800",
    specialty: "Sustainable Tourism & Environmental Management",
    imagePosition: "object-top"
  }
];

// Empty resources to show "Available Soon" state in UI
export const RESOURCES: ResourceItem[] = [];

export const PUBLICATIONS: Publication[] = [
  {
    id: "biodiversity-ecotourism",
    title: "Malaysia's Biodiversity for Ecotourism: Aligning Nature with ESG Values",
    subtitle: "A practical guide to responsible travel, Conservation, and Community Empowerment in Malaysia.",
    description: "Malaysia’s Biodiversity for Ecotourism: Aligning Nature with ESG Values is a practical handbook on experiencing Malaysia’s forests, rivers, islands, and indigenous cultures while protecting them. It introduces Malaysia as a megadiverse country and explains why its rainforests, reefs, mangroves, and rivers are vital for climate resilience and local livelihoods. The book links key ecosystems and iconic species to ESG principles, showing how responsible tourism can cut impacts, empower communities, and strengthen governance. Aimed at guides, students, policymakers, operators, and travellers, it supports higher-value, low-impact tourism and encourages visitors to travel with purpose and care for Malaysia’s natural heritage.",
    image: "https://drive.google.com/thumbnail?id=1scJy89D0aizlFBkykZ72uuT80lg7Kdav&sz=w800",
    type: "Book",
    imagePosition: "object-right",
    isForSale: true,
    price: "RM45",
    orderNote: "Note: The RM45 price includes a complete set of two books: the main publication and the companion 'Malaysia's Biodiversity for Ecotourism Infographics'."
  },
  {
    id: "biodiversity-ecotourism-infographics",
    title: "Malaysia's Biodiversity for Ecotourism Infographics",
    subtitle: "A Visual Guide to Nature for Young Explorers",
    description: "The infographics presented in Malaysia’s Biodiversity for Ecotourism: Aligning Nature with ESG Values offer a structured and accessible synthesis of Malaysia’s ecological wealth and its relevance to sustainable tourism development. They translate complex relationships between biodiversity, community livelihoods, and environmental stewardship into clear visual narratives that support both learning and practical application.\n\nBy integrating themes such as forest and marine ecosystems, indigenous knowledge, ESG principles, and emerging technologies, the infographics position ecotourism not merely as a niche activity but as a strategic pathway for conservation and inclusive development. Collectively, they serve as a practical guide for policymakers, practitioners, and communities seeking to align tourism practices with long-term environmental and social sustainability.",
    image: "https://drive.google.com/thumbnail?id=1Cl5XILIu7naTjsqrLPdsUAmgbbq-pwp0&sz=w800",
    type: "Publication"
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

export const RESEARCH_JOURNALS: ResearchJournal[] = [
  {
    title: "Positioning ESG with Sustainable Development",
    url: "https://drive.google.com/file/d/128Fr7FZAyZdZumdtjuGVwbgLIhO7KP7a/view?usp=sharing"
  },
  {
    title: "Digital Systems and ESG",
    url: "https://drive.google.com/file/d/1AOEFdMwSXg8DU9pR3Yu6Z6fBYna8sB7C/view?usp=sharing"
  },
  {
    title: "Data to Decisions",
    url: "https://drive.google.com/file/d/1mCwoXC3-ATDIGtX9h_ieI8B6831KmjcD/view?usp=sharing"
  },
  {
    title: "Reframing ESG and Sustainability",
    url: "https://drive.google.com/file/d/1vR3sQG931exmsL6-rEIJx1Y66bIQ8WSR/view?usp=sharing"
  }
];