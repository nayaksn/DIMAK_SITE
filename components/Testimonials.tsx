import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    text: string;
    rating: number;
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "COO",
        company: "Global Logistics Corp",
        text: "DIMAK's strategic guidance was instrumental in our expansion into the West African market. Their local expertise and global perspective are unmatched in the region.",
        rating: 5
    },
    {
        id: 2,
        name: "Marcus Thorne",
        role: "Director of Finance",
        company: "Apex FinTech",
        text: "The forensic audit provided by DIMAK revealed critical efficiencies we hadn't considered. They don't just find problems; they provide actionable, high-impact solutions.",
        rating: 5
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Founder",
        company: "EcoWorld Energy",
        text: "Working with the advisory team at DIMAK transformed our approach to governance and board strategy. They are true partners who care deeply about our long-term success.",
        rating: 5
    }
];

interface TestimonialsProps {
    theme?: 'light' | 'dark';
}

const Testimonials: React.FC<TestimonialsProps> = ({ theme = 'light' }) => {
    const [current, setCurrent] = React.useState(0);
    const isDark = theme === 'dark';

    const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <section className={`py-24 transition-colors duration-500 ${isDark ? 'bg-dimak-dark' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl lg:text-5xl font-display font-bold mb-4 ${isDark ? 'text-white' : 'text-dimak-dark'}`}>
                        Client Voice
                    </h2>
                    <div className="w-20 h-1 bg-dimak-red mx-auto rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto relative px-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className={`relative rounded-[1.25rem] p-10 md:p-16 border ${isDark ? 'bg-slate-900 border-slate-800 shadow-2xl' : 'bg-white border-gray-100 shadow-xl'
                                }`}
                        >
                            <Quote className="absolute top-10 right-10 w-16 h-16 text-dimak-red/10 animate-pulse" />

                            <div className="flex space-x-1 mb-8">
                                {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-dimak-gold text-dimak-gold" />
                                ))}
                            </div>

                            <p className={`text-xl md:text-2xl italic leading-relaxed mb-10 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                "{TESTIMONIALS[current].text}"
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${isDark ? 'bg-slate-800 text-dimak-gold' : 'bg-gray-100 text-dimak-red'
                                    }`}>
                                    {TESTIMONIALS[current].name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-dimak-dark'}`}>
                                        {TESTIMONIALS[current].name}
                                    </h4>
                                    <p className="text-sm text-dimak-gold font-medium">
                                        {TESTIMONIALS[current].role}, {TESTIMONIALS[current].company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-white hover:shadow-lg transition-all text-gray-400 hover:text-dimak-red"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full hover:bg-white hover:shadow-lg transition-all text-gray-400 hover:text-dimak-red"
                    >
                        <ChevronRight size={32} />
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-12 space-x-3">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-dimak-red' : 'w-2 bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
