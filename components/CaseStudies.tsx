import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
    id: number;
    title: string;
    industry: string;
    problem: string;
    outcome: string;
    image: string;
}

const CASE_STUDIES: CaseStudy[] = [
    {
        id: 1,
        title: "EcoWorld Energy Expansion",
        industry: "Renewable Energy",
        problem: "Navigating cross-border regulatory frameworks and scaling operations in new markets.",
        outcome: "Successfully established 3 new regional hubs with full local compliance and 40% growth in first year.",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Apex FinTech Audit",
        industry: "Financial Technology",
        problem: "Identifying operational leaks and optimizing accounting processes for high-volume transactions.",
        outcome: "Recovered $1.2M in annual leaks and implemented automated SOPs that reduced manual audit time by 60%.",
        image: "/Users/vx/.gemini/antigravity/brain/5400ad50-fdb1-493d-8aac-5588478b9eef/fintech_audit_case_study_v1_1770678260804.png"
    },
    {
        id: 3,
        title: "Global Logistics Re-Strategy",
        industry: "Logistics & Supply Chain",
        problem: "Legacy operational models hindering competitive advantage in a digital-first market.",
        outcome: "Complete digital transformation of strategy and governance, leading to a successful Series B funding round.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    }
];

interface CaseStudiesProps {
    theme?: 'light' | 'dark';
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ theme = 'light' }) => {
    const isDark = theme === 'dark';

    return (
        <section className={`py-24 transition-colors duration-500 ${isDark ? 'bg-dimak-darker' : 'bg-white'}`}>
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className={`text-4xl lg:text-5xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-dimak-dark'}`}>
                            Case Studies
                        </h2>
                        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Real challenges. Strategic solutions. Tangible results. Explore how we deliver excellence across industries.
                        </p>
                    </div>
                    <button className="flex items-center space-x-2 text-dimak-red font-bold group">
                        <span>View All Success Stories</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {CASE_STUDIES.map((study, idx) => (
                        <motion.div
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group flex flex-col rounded-[1.25rem] overflow-hidden border transition-all duration-500 hover:shadow-2xl ${isDark ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-gray-50 border-gray-100'
                                }`}
                        >
                            {/* Image Header */}
                            <div className="relative h-64 overflow-hidden">
                                <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="px-4 py-1.5 bg-dimak-red text-white text-xs font-bold uppercase tracking-widest rounded-full">
                                        {study.industry}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-10 flex-1 flex flex-col">
                                <h3 className={`text-2xl font-display font-bold mb-6 ${isDark ? 'text-white' : 'text-dimak-dark'}`}>
                                    {study.title}
                                </h3>

                                <div className="space-y-6 flex-1">
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-dimak-gold mb-2">Challenge</h4>
                                        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {study.problem}
                                        </p>
                                    </div>

                                    <div className={`p-6 rounded-xl ${isDark ? 'bg-slate-800/50' : 'bg-white shadow-sm'}`}>
                                        <div className="flex items-center space-x-2 mb-3">
                                            <CheckCircle2 size={16} className="text-dimak-red" />
                                            <h4 className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white' : 'text-dimak-dark'}`}>Outcome</h4>
                                        </div>
                                        <p className={`text-sm font-medium leading-relaxed ${isDark ? 'text-white/90' : 'text-gray-800'}`}>
                                            {study.outcome}
                                        </p>
                                    </div>
                                </div>

                                <button className={`mt-8 py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 border-2 ${isDark ? 'border-slate-800 text-white hover:bg-dimak-red hover:border-dimak-red' : 'border-gray-200 text-dimak-dark hover:border-dimak-red hover:text-dimak-red'
                                    }`}>
                                    <span>Read Full Story</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
