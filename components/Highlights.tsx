import React from 'react';
import {
  Rocket,
  Handshake,
  Landmark,
  Lightbulb,
  FileSpreadsheet,
  Calculator,
  Gavel,
  Users,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Rocket, label: "New Business Set-Up", delay: 0 },
  { icon: Handshake, label: "M&A and Takeover", delay: 0.1 },
  { icon: Landmark, label: "Banking Syndication", delay: 0.2 },
  { icon: Lightbulb, label: "Business Consulting", delay: 0.3 },
  { icon: FileSpreadsheet, label: "Accounts, Audit Assurance & Taxation Advisory", delay: 0.4 },
  { icon: Gavel, label: "Legal Services", delay: 0.5 },
  { icon: Users, label: "Recruitment and Training", delay: 0.6 },
  { icon: TrendingUp, label: "Operational Excellence", delay: 0.7 },
  { icon: Cpu, label: "IT Services", delay: 0.8 }
];

const Highlights: React.FC = () => {
  return (
    <section className="py-24 bg-dimak-light relative overflow-hidden">
      {/* Abstract connecting lines background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q50,0 100,50 T200,50" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-dimak-dark" />
          <path d="M0,30 Q50,80 100,30 T200,30" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-dimak-red" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dimak-dark mb-4">Core Competencies</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A holistic ecosystem of services designed to support every stage of your business lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="group flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-dimak-red/30 transition-all duration-300"
            >
              <div className="flex-shrink-0 mr-5 w-14 h-14 bg-dimak-light rounded-full flex items-center justify-center text-dimak-dark group-hover:bg-dimak-red group-hover:text-white transition-colors duration-300">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display font-bold text-dimak-dark text-lg leading-tight group-hover:text-dimak-red transition-colors">
                  {item.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;