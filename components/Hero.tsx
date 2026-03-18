import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  theme?: 'light' | 'dark';
}

const Hero: React.FC<HeroProps> = ({ onOpenContact, theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden pt-20 transition-colors duration-500 ${isDark ? 'bg-dimak-darker text-white' : 'bg-dimak-light text-dimak-dark'
        }`}
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Main Background Image with Panning Effect */}
        <motion.div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url("/assets/hero-bg${isDark ? '' : '-light'}.png")` }}
          animate={{ backgroundPosition: ['50% 100%', '50% 0%'] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>

        {/* Overlays for Readability */}
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-dimak-darker/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-dimak-darker/90 via-dimak-darker/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dimak-darker via-transparent to-transparent"></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-white/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>
          </>
        )}

        {/* Subtle gold accent pulse */}
        <div className={`absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-dimak-gold/10 rounded-full filter blur-[100px] animate-pulse ${isDark ? 'mix-blend-screen' : 'mix-blend-multiply'
          }`}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-4 mb-10"
          >
            <span className="h-[3px] w-10 bg-dimak-gold"></span>
            <span className="text-dimak-gold font-extrabold tracking-[0.3em] uppercase text-xl md:text-3xl">Corporate Consulting</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] mb-8"
          >
            Delivering Value. <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark
              ? 'from-white via-gray-200 to-gray-400'
              : 'from-dimak-dark via-slate-800 to-slate-600'
              }`}>
              Driving Growth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl md:text-2xl mb-12 max-w-2xl font-medium leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'
              }`}
          >
            Darubramha International Management and <span className="text-dimak-red font-semibold">Konsulting</span> Ltd.
            empowers businesses with world-class financial, legal, and operational strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 items-start"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-5 bg-dimak-red text-white font-bold rounded-full shadow-[0_10px_40px_-10px_rgba(214,35,41,0.5)] hover:bg-red-700 hover:scale-105 transition-all duration-300 group w-full sm:w-auto"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col items-center sm:items-start w-full sm:w-auto">
              <button
                onClick={() => onOpenContact()}
                className={`inline-flex items-center justify-center px-10 py-5 font-bold rounded-full shadow-xl transition-all duration-300 w-full sm:w-auto ${isDark
                  ? 'bg-white text-dimak-dark hover:bg-gray-200'
                  : 'bg-white text-dimak-dark hover:bg-dimak-dark hover:text-white'
                  }`}
              >
                Let's talk Growth
              </button>
              <span className={`mt-3 text-sm font-semibold tracking-wide ${isDark ? 'text-gray-400' : 'text-slate-500'
                }`}>
                Free consultation with our experts
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={`absolute bottom-10 left-6 md:left-auto md:right-10 hidden md:flex flex-col items-center gap-2 ${isDark ? 'text-gray-500' : 'text-slate-400'
          }`}
      >
        <span className="text-xs uppercase tracking-widest writing-vertical-rl">Scroll</span>
        <div className={`w-[1px] h-12 overflow-hidden ${isDark ? 'bg-gray-700' : 'bg-slate-200'}`}>
          <div className="w-full h-1/2 bg-dimak-gold animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;