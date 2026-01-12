import React, { useState } from 'react';
import { TEAM } from '../constants';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';

const Team: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTeam = showAll ? TEAM : TEAM.slice(0, 4);

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-dimak-dark mb-6">Leadership</h2>
            <p className="text-gray-600 text-lg">
              Led by veterans with decades of experience in finance, law, engineering, and management across the globe.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center font-bold text-dimak-red hover:text-dimak-dark transition-colors">
            Join our network →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {displayedTeam.map((member, index) => (
            <div key={index} className="group relative bg-white">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-lg mb-6 relative">
                <img
                  src={member.image ? `/assets/${member.image}` : `https://picsum.photos/seed/${member.name.replace(/ /g, '')}/500/625`}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-3 py-1 bg-dimak-red text-white text-xs font-bold uppercase tracking-wider rounded mb-2">
                    {member.role}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-dimak-dark mb-1 group-hover:text-dimak-red transition-colors">{member.name}</h3>
                <p className="text-xs text-dimak-gold font-bold mb-3 uppercase tracking-wide">{member.qualifications}</p>
                <p className="text-gray-500 text-sm line-clamp-3 mb-4 leading-relaxed">
                  {member.bio}
                </p>
                {member.location && (
                  <div className="flex items-center text-gray-400 text-xs">
                    <MapPin className="w-3 h-3 mr-1" />
                    {member.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {TEAM.length > 4 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 rounded-full font-bold text-dimak-dark shadow-sm hover:shadow-md hover:border-dimak-red hover:text-dimak-red transition-all"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  See More Leadership <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;