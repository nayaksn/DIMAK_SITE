import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';
import {
    Calculator,
    TrendingUp,
    ShieldCheck,
    Gavel,
    Briefcase,
    ChevronRight,
    X
} from 'lucide-react';

const icons = [
    Calculator,
    TrendingUp,
    ShieldCheck,
    Gavel,
    Briefcase
];

const colors = [
    '#FBBF24', // Gold
    '#D62329', // Red
    '#475569', // Slate
    '#1E293B', // Dark Slate
    '#020617'  // Black
];

interface ServicesProps {
    theme?: 'light' | 'dark';
}

const Services1: React.FC<ServicesProps> = ({ theme = 'light' }) => {
    const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
    const isDark = theme === 'dark';

    return (
        <section
            id="services-constellation"
            className={`py-24 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-dimak-darker' : 'bg-dimak-light'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className={`text-4xl lg:text-5xl font-display font-bold mb-6 ${isDark ? 'text-white' : 'text-dimak-dark'
                        }`}>Alternative Constellation Style</h2>
                    <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        For comparison: The interconnected ecosystem design.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto min-h-[600px] flex flex-col items-center">

                    <div className="flex flex-wrap justify-center gap-4 mb-12 lg:hidden">
                        {SERVICES.map((service, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIdx(idx)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 shadow-sm ${activeIdx === idx
                                    ? 'bg-dimak-red text-white border-dimak-red scale-105'
                                    : isDark
                                        ? 'bg-slate-800 text-gray-400 border-slate-700'
                                        : 'bg-white text-gray-500 border-gray-200'
                                    }`}
                            >
                                <span className="text-sm font-bold uppercase tracking-wide">{service.category.split(',')[0]}</span>
                            </button>
                        ))}
                    </div>

                    <div className="hidden lg:block absolute inset-0 pt-10">
                        <svg viewBox="0 0 1000 400" className="w-full h-auto">
                            {!isDark && (
                                <motion.path
                                    d="M150 300 L325 150 L500 100 L675 150 L850 300"
                                    fill="none"
                                    stroke="#CBD5E1"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.5 }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                />
                            )}

                            {isDark && (
                                <path
                                    d="M150 300 Q500 0 850 300"
                                    fill="none"
                                    stroke="#334155"
                                    strokeWidth="2"
                                    strokeDasharray="10 10"
                                />
                            )}

                            {SERVICES.map((service, idx) => {
                                const t = idx / (SERVICES.length - 1);
                                const x = 150 + t * 700;
                                const y = 300 - Math.sin(Math.PI * t) * 200;
                                const Icon = icons[idx];
                                const isActive = activeIdx === idx;
                                const isOverview = activeIdx === null;

                                return (
                                    <motion.g
                                        key={idx}
                                        className="cursor-pointer group"
                                        onClick={() => setActiveIdx(idx)}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {!isDark && isActive && (
                                            <motion.line
                                                x1={500} y1={450} x2={x} y2={y}
                                                stroke={colors[idx]}
                                                strokeWidth="2"
                                                strokeDasharray="5 5"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 0.3 }}
                                            />
                                        )}

                                        <motion.circle
                                            cx={x} cy={y}
                                            r={isActive ? 65 : (isOverview ? 50 : 40)}
                                            fill={isActive || isOverview ? colors[idx] : (isDark ? '#1E293B' : '#F8FAFC')}
                                            stroke={isActive ? (isDark ? '#fff' : colors[idx]) : (isDark ? '#334155' : '#E2E8F0')}
                                            strokeWidth={isActive ? 4 : 2}
                                            className="transition-all duration-500 shadow-xl"
                                            animate={{
                                                r: isActive ? 65 : (isOverview ? 50 : 40),
                                                opacity: isActive || isOverview ? 1 : 0.5,
                                                boxShadow: isActive ? "0 20px 25px -5px rgb(0 0 0 / 0.1)" : "none"
                                            }}
                                        />

                                        <foreignObject x={x - (isActive ? 25 : 20)} y={y - (isActive ? 25 : 20)} width={isActive ? 50 : 40} height={isActive ? 50 : 40}>
                                            <div className={`flex items-center justify-center h-full transition-colors duration-300 ${isActive || isOverview ? 'text-white' : (isDark ? 'text-gray-500' : 'text-slate-400')
                                                }`}>
                                                <Icon size={isActive ? 32 : 24} />
                                            </div>
                                        </foreignObject>

                                        <text
                                            x={x}
                                            y={y + (isActive ? 90 : 75)}
                                            textAnchor="middle"
                                            className={`text-[12px] font-bold uppercase tracking-widest transition-all duration-300 ${isActive || isOverview
                                                ? (isDark ? 'fill-white' : 'fill-dimak-dark')
                                                : 'fill-gray-500'
                                                }`}
                                        >
                                            {service.category.split(',')[0]}
                                        </text>
                                    </motion.g>
                                );
                            })}
                        </svg>
                    </div>

                    <div className="lg:mt-[400px] w-full max-w-5xl relative z-10">
                        <AnimatePresence mode="wait">
                            {activeIdx !== null && (
                                <motion.div
                                    key={activeIdx}
                                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -30 }}
                                    className={`relative rounded-[2rem] p-8 md:p-12 shadow-2xl border transition-colors duration-500 flex flex-col md:flex-row gap-12 items-stretch ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'
                                        }`}
                                >
                                    <button
                                        onClick={() => setActiveIdx(null)}
                                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-600"
                                    >
                                        <X size={24} />
                                    </button>

                                    <div className="flex-1">
                                        <div className="flex items-center space-x-6 mb-8">
                                            <motion.div
                                                key={`icon-${activeIdx}`}
                                                initial={{ rotate: -20, scale: 0.8 }}
                                                animate={{ rotate: 0, scale: 1 }}
                                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg"
                                                style={{ backgroundColor: colors[activeIdx] }}
                                            >
                                                {React.createElement(icons[activeIdx], { size: 32 })}
                                            </motion.div>
                                            <div>
                                                <span className="text-dimak-red font-bold text-xs uppercase tracking-[0.2em] mb-1 block">Service Category</span>
                                                <h3 className={`text-3xl md:text-4xl font-display font-bold ${isDark ? 'text-white' : 'text-dimak-dark'
                                                    }`}>{SERVICES[activeIdx].category}</h3>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                            {SERVICES[activeIdx].items.map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className={`flex items-center space-x-3 group ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                                                >
                                                    <ChevronRight className="w-5 h-5 text-dimak-gold group-hover:translate-x-1 transition-transform flex-shrink-0" />
                                                    <span className="text-base font-medium leading-tight">{item}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={`w-full md:w-80 flex flex-col items-center justify-center p-10 rounded-3xl border-2 border-dashed transition-colors duration-500 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-50 border-gray-200'
                                        }`}>
                                        <p className={`text-center text-base mb-8 italic leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'
                                            }`}>
                                            "Empowering your business with global perspective and local precision."
                                        </p>
                                        <button className="w-full py-4 bg-dimak-red text-white rounded-full font-bold hover:bg-dimak-dark transition-all duration-300 shadow-xl shadow-dimak-red/20 transform hover:-translate-y-1 active:scale-95">
                                            Let's Talk Growth
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services1;
