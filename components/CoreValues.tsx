import React from 'react';
import { Globe, Award, Zap } from 'lucide-react';
import { CORE_VALUES } from '../constants';

const CoreValues: React.FC = () => {
    return (
        <section id="values" className="py-24 bg-dimak-light relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12">
                    <h3 className="text-3xl font-display font-bold text-dimak-dark">Our Core Values</h3>
                    <p className="text-gray-500 max-w-md text-right hidden md:block">
                        The principles that guide every decision, transaction, and strategy we implement.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {CORE_VALUES.map((val, idx) => (
                        <div key={val.id} className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-display font-black text-8xl text-gray-400 group-hover:text-dimak-red transition-colors select-none">
                                {val.id}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 w-14 h-14 rounded-full bg-dimak-light flex items-center justify-center text-dimak-red group-hover:bg-dimak-red group-hover:text-white transition-colors">
                                    {idx === 0 ? <Globe size={28} /> : idx === 1 ? <Award size={28} /> : <Zap size={28} />}
                                </div>

                                <h4 className="text-xl font-bold text-dimak-dark mb-2 group-hover:text-dimak-red transition-colors">{val.title}</h4>
                                <p className="text-dimak-gold font-medium text-sm mb-4 uppercase tracking-wide">{val.subtitle}</p>
                                <p className="text-gray-500 leading-relaxed text-sm mt-auto">{val.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
