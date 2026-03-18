import { ServiceItem, TeamMember, CoreValue, Affiliate } from './types';

export const CORE_VALUES: CoreValue[] = [
  {
    id: "01",
    title: "Client-Centricity and Global Perspective",
    subtitle: "Your growth is our priority.",
    description: "Local expertise, global standards."
  },
  {
    id: "02",
    title: "Integrity and Excellence",
    subtitle: "Transparency & ethics in every action.",
    description: "Technology enabled scalable solutions."
  },
  {
    id: "03",
    title: "Innovation and Collaboration",
    subtitle: "Adopting modern, future-ready practices.",
    description: "Working together to optimize ideas, skills, and resources to achieve business goals."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    category: "Accounting & Taxation",
    items: [
      "Bookkeeping, IFRS, Tax planning, Transfer pricing",
      "Financial Statement Preparation",
      "Management Accounting & Payroll",
      "Fixed Asset Register & Inventory",
      "CIT, PIT/PAYE, VAT, WHT",
      "Tax Health Checks & Audit Representation"
    ]
  },
  {
    category: "Audit & Assurance",
    items: [
      "Internal, Statutory, Forensic, ESG audits and SOPS",
      "Risk-Based Audit",
      "Compliance Audit",
      "Value-for-Money & Donor-Funded Audit",
      "Fraud Detection",
      "Special Investigations"
    ]
  },
  {
    category: "Management & Advisory",
    items: [
      "Strategy, M&A, Business Turnaround, and virtual CFO services",
      "Strategic Planning & BPR",
      "Operations & Change Management",
      "KPI Design & MIS Setup",
      "Debt Recovery & ESG",
      "IPO Readiness"
    ]
  },
  {
    category: "Legal & Governance",
    items: [
      "Corporate legal Compliance, Governance roadmaps",
      "PPP & Regulatory Compliance",
      "GRC Frameworks",
      "Board Strategy Advisor",
      "Company Secretarial Services"
    ]
  },
  {
    category: "Specialized Services",
    items: [
      "Loan syndication, Recruitment, Training, Insurance advisory, Business setup",
      "Process Audit",
      "SOP Preparations",
      "Merger & Acquisition Tax",
      "Digital Transformation"
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Anthony Idigbe",
    role: "Chairman",
    image: "anthony-idigbe.png",
    qualifications: "SAN, Ph.D. (Osgoode)",
    bio: "Senior Partner at PUNUKA Attorneys & Solicitors. President of PUNUKA Consulting Inc. Experienced corporate director and board chair (Capital Hotel Plc, Ikeja Hotel Plc). Licensed to practice law in Nigeria and Ontario, Canada.",
    location: "Lagos"
  },
  {
    name: "Ramesh Biswal",
    role: "Managing Director",
    image: "ramesh-biswal.png",
    qualifications: "B. Com (Hons), FCA, FCS",
    bio: "38+ years progressive leadership experience, 28 years in Africa. Expert in strategic financial management, fund syndication, IPOs, M&A, and ESG principles.",
    location: "Lagos"
  },
  {
    name: "Adeboye Joseph Taiwo",
    role: "Board Member & Director",
    image: "adeboye-joseph-taiwo.png",
    qualifications: "FCA, ACTI, CISA, CISM",
    bio: "25+ years experience across banking, investment management, taxation, auditing, and risk advisory. Deep expertise in market and credit risk, M&A, and financial strategy.",
    location: "Pan Africa"
  },
  {
    name: "Sonali Pradhan",
    role: "Founding Shareholder & Director",
    image: "sonali-pradhan.png",
    qualifications: "M.Sc in Botany",
    bio: "25+ years experience in Travel and Metal industries. Faculty and skill development mentor. Passionate about empowering women entrepreneurs.",
    location: "Global"
  },
  {
    name: "Chinedu C Onyia",
    role: "Associate Consultant",
    image: "Chiyendu.png",
    qualifications: "B.Sc Chemical Engineering, Fellow CIBN, FCIA, LBS",
    bio: "23+ years in Corporate Banking (IMB, Citi Bank, Keystone). Strong expertise in business development, strategy formulation, and change management.",
    location: "Lagos"
  },
  {
    name: "Shekhar Kar",
    role: "Associate Consultant",
    image: "Shekhar-Kar.png",
    qualifications: "B.E. Mechanical, MBA",
    bio: "35+ years technical commercial exposure in steel and aluminum industry. Expert in plant operations, project implementation, and supply chain.",
    location: "Nigeria"
  },
  {
    name: "Ajay Giri",
    role: "Associate Consultant",
    image: "Ajay-Giri.png",
    qualifications: "B.Com, FCA, MBA",
    bio: "Seasoned CFO with 24+ years experience. Specialist in financial transformation, operational excellence, and cost optimization ($2.5M+ saved annually).",
    location: "Lagos"
  },
  {
    name: "Sukanta Beura",
    role: "Associate Consultant",
    image: "Sukant-Beura.png",
    qualifications: "FCA, FCS, LLB",
    bio: "35+ years leadership. Expert in large-scale operations, digital transformation, AI, RPA, and cloud technologies in Fortune 500 environments.",
    location: "Global Office / Mumbai"
  },
  {
    name: "Manoj Chanduka",
    role: "Associate Consultant",
    image: "Manoj-Chanduka.png",
    qualifications: "B.Com (Hons), FCA, FCS",
    bio: "35 years post-qualification experience (Adani Group, Public Financial Institutions). Expert in project appraisal, fund management, and regulatory frameworks.",
    location: "Global Office / Ahmedabad"
  },
  {
    name: "Jaladhar Swain",
    role: "Associate Consultant",
    image: "Jaladhar-Swain.png",
    qualifications: "B.Com (Hons), FCA",
    bio: "25+ years as project consultant. Deep expertise in critical project analysis, stressed asset management, private equity, and forensic audits.",
    location: "Global Office / Kolkata"
  },
  {
    name: "B N Mohanty",
    role: "Associate Consultant",
    image: "B-N-Mohanty.png",
    qualifications: "B.Com (Hons), FCA",
    bio: "Managing Partner of B N Mohanty & Associates. Extensive expertise in Corporate Income Tax, Audit, GST, and Tax Planning.",
    location: "Global Office / Puri"
  },
  {
    name: "Parth Sarathi Choudhury",
    role: "Associate Consultant",
    image: "Parth-Sarathi.png",
    qualifications: "B.Com, LLB, MBA",
    bio: "Corporate Lawyer and Business Consultant with 20+ years. Managing Partner of Elevate Business Solutions DMCC (UAE).",
    location: "Global Office / Dubai"
  },
  {
    name: "Sarbeswar Sahoo",
    role: "Associate Consultant",
    image: "Sarbeswar-Sahoo.png",
    qualifications: "M.Com, MBA, FIII, ACIN",
    bio: "34+ years in insurance and risk management. Former CEO/CRO at Prestige Assurance (Nigeria). Best CEO among Nigerian insurers (2020).",
    location: "Risk & Insurance - Global"
  },
  {
    name: "Amish Mehta",
    role: "Advisor & Mentor",
    image: "Amish-Mehta.png",
    qualifications: "FCA, FCS, LLB",
    bio: "40+ years experience in India, London, Singapore. Board member across diverse industries. Focus on M&A, JVs, compliance, and systems.",
    location: "Singapore & London"
  },
  {
    name: "Bijaya Krishna Dash",
    role: "Advisor & Associate Consultant",
    image: "Bijaya-Krishna-Dash.png",
    qualifications: "B.Com(Hons), FCA, DISA, CAAT, IFRS",
    bio: "42+ years experience. Managing Partner of LALDASH & CO. Specialized in Forensic and Fraud Audits, Tax Planning, and Corporate Governance.",
    location: "Pan India"
  }
];

export const AFFILIATES: Affiliate[] = [
  {
    name: "Adeboye Taiwo & Co.",
    description: "A Chartered Accountant Firm located in PAN NIGERIA cities."
  },
  {
    name: "Infytel Communications Limited",
    description: "A Technology firm in Nigeria providing ERP, AML Solutions, RPA, AI Chat Bots, and Cyber Security."
  },
  {
    name: "Lal Dash & Co.",
    description: "A Chartered Accountant Firm in Bhubaneswar, India, capable of delivering assignments globally."
  },
  {
    name: "Punuka Attorneys & Solicitors",
    description: "Full-service Nigerian law firm. Corporate law, dispute resolution, banking finance, and regulatory compliance."
  }
];

export const CONTACT_INFO = {
  addressLagos1: "Block H, 3rd floor, Nigerian Institution of Surveyors Building, Opp. Lagos State Revenue House, CBD Alausa, Ikeja, Lagos",
  addressLagos2: "Office II- 8 Egebeyemi street, Ilupeju, Lagos",
  globalLocations: "Abuja | Ilorin | Kano | India | Singapore | UK | Dubai | Kenya",
  phones: ["+234-90-2000-7000", "+234-802-692-2332", "+234-803-580-2699"],
  email: "darubrahmaindimak@gmail.com"
};