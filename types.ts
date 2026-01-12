export interface ServiceItem {
  category: string;
  items: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  qualifications: string;
  bio: string;
  location?: string;
}

export interface CoreValue {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Affiliate {
  name: string;
  description: string;
}