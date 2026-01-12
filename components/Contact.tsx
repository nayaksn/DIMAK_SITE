import React from 'react';
import { Mail, MapPin, Phone, Globe, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ContactProps {
    onOpenContact: (title?: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenContact }) => {
    return (
        <footer id="contact" className="bg-dimak-darker text-white pt-24 pb-12 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-dimak-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* CTA Section */}
                <div className="border-b border-gray-800 pb-20 mb-20">
                    <div className="max-w-4xl">
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 text-white">
                            Let's scale your <br /> <span className="text-dimak-red">vision.</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={() => onOpenContact("Start a Project")}
                                className="group flex items-center justify-between bg-white text-dimak-darker px-8 py-4 rounded-lg font-bold text-lg hover:bg-dimak-gold transition-colors min-w-[200px]"
                            >
                                Start a Project
                                <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                            </button>
                            <a href={`tel:${CONTACT_INFO.phones[0]}`} className="flex items-center justify-center border border-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-white transition-colors">
                                Call Us Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 mb-16">
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-dimak-red rounded flex items-center justify-center font-bold text-white">D</div>
                            <span className="text-2xl font-display font-bold tracking-tight">DIMAK</span>
                        </div>
                        <p className="text-gray-400 max-w-sm mb-6">
                            Darubramha International Management and Konsulting Ltd. delivering value and driving growth since 2021.
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white font-display">Headquarters</h4>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-dimak-red flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">{CONTACT_INFO.addressLagos1}</p>
                                    <p className="text-gray-300 text-sm leading-relaxed">{CONTACT_INFO.addressLagos2}</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-white font-display">Connect</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-dimak-red" />
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-dimak-red" />
                                    <div className="text-gray-300 text-sm flex flex-col">
                                        {CONTACT_INFO.phones.map((p, i) => <span key={i}>{p}</span>)}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Globe className="w-5 h-5 text-dimak-red" />
                                    <span className="text-gray-300 text-sm">{CONTACT_INFO.globalLocations}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} DIMAK Ltd. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;