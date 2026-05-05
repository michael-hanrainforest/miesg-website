
export interface Pillar {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  image: string;
  color: string;
}

export interface StrategicPoint {
  title: string;
  description: string;
  icon: string;
}

export interface EcosystemPartner {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
  imagePosition?: string;
}

export interface ResourceItem {
  title: string;
  type: 'Research Paper' | 'Journal' | 'Policy Brief' | 'Annual Report';
  date: string;
  size: string;
  category: string;
}

export interface ResearchJournal {
  title: string;
  url: string;
}

export interface Publication {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  type: string;
  imagePosition?: string;
  isForSale?: boolean;
  price?: string;
  orderNote?: string;
}
