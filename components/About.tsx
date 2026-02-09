import React from 'react';
import { Eye, Flag, Target, Users, Zap, Award, Globe } from 'lucide-react';
import { CORE_VALUES } from '../constants';

const About: React.FC = () => {
  return (
    <>
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">

          {/* Intro Layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-dimak-dark leading-tight mb-6">
                Global Standards, <br />
                <span className="text-dimak-red">Local Expertise.</span>
              </h2>
              <div className="w-20 h-1.5 bg-dimak-gold mb-6"></div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Incorporated in 2021, <strong>DIMAK</strong> is a premier integrated consulting firm.
                We bridge the gap between complex global business challenges and actionable local solutions.
                With offices in Lagos, Abuja, Ilorin, and Kano, and a network spanning continents, we are positioned to drive your success.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-dimak-red/10 rounded-lg text-dimak-red"><Eye size={24} /></div>
                    <h3 className="font-display font-bold text-lg">Our Vision</h3>
                  </div>
                  <p className="text-gray-600 text-sm">To be a trusted global consulting partner, driving ethical and impactful growth.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-dimak-gold/20 rounded-lg text-yellow-700"><Flag size={24} /></div>
                    <h3 className="font-display font-bold text-lg">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 text-sm">Delivering services with integrity, precision, and global best practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;