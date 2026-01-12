import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-dimak-darker overflow-hidden text-white pt-20">

      {/* Abstract Background Animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-dimak-red/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-dimak-gold/10 rounded-full mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-purple-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 mb-8"
          >
            <span className="h-[1px] w-12 bg-dimak-gold"></span>
            <span className="text-dimak-gold font-medium tracking-[0.2em] uppercase text-sm">Corporate Consulting</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold leading-[1.1] mb-8"
          >
            Delivering Value. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Driving Growth.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed"
          >
            Darubramha International Management and <span className="text-dimak-red font-semibold">Konsulting</span> Ltd.
            empowers businesses with world-class financial, legal, and operational strategies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-5 bg-dimak-red text-white font-bold rounded-full shadow-[0_10px_40px_-10px_rgba(214,35,41,0.5)] hover:bg-red-700 hover:scale-105 transition-all duration-300 group"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border border-gray-700 text-white font-bold rounded-full hover:bg-white hover:text-dimak-dark hover:border-white transition-all duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-auto md:right-10 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest writing-vertical-rl">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-700 overflow-hidden">
          <div className="w-full h-1/2 bg-dimak-gold animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;