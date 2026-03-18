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

const gradients = [
  'linear-gradient(135deg, #FBBF24 0%, #D97706 100%)', // Gold -> Amber
  'linear-gradient(135deg, #D62329 0%, #991B1B 100%)', // Red -> Dark Red
  'linear-gradient(135deg, #475569 0%, #334155 100%)', // Slate -> Darker Slate
  'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', // Dark Slate -> Navy
  'linear-gradient(135deg, #020617 0%, #1E1B4B 100%)'  // Black -> Indigo Deep
];

const shadowColors = [
  'rgba(251, 191, 36, 0.5)', // Gold
  'rgba(214, 35, 41, 0.5)', // Red
  'rgba(71, 85, 105, 0.5)', // Slate
  'rgba(30, 41, 59, 0.6)', // Dark Slate
  'rgba(2, 6, 23, 0.7)'    // Black
];

interface ServicesProps {
  theme?: 'light' | 'dark';
  onOpenContact?: (title?: string) => void;
}

const Services: React.FC<ServicesProps> = ({ theme = 'light', onOpenContact }) => {
  const [activeIdx, setActiveIdx] = React.useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const initialMount = React.useRef(true);
  const isDark = theme === 'dark';
  const panelRef = React.useRef<HTMLDivElement>(null);

  // Handle Close
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setActiveIdx(null);
    }
  };

  // Body Scroll Lock for Mobile Modal
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  // Custom Slow Scroll Helper
  const customScroll = (targetY: number, duration: number) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Ease Out Quad
      const ease = progress * (2 - progress);

      window.scrollTo(0, startY + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  // Auto-scroll logic (Desktop Only - Slower)
  React.useEffect(() => {
    // Skip scroll on initial mount
    if (initialMount.current) {
      initialMount.current = false;
      return;
    }

    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      if (activeIdx !== null) {
        setTimeout(() => {
          if (panelRef.current) {
            const rect = panelRef.current.getBoundingClientRect();
            const targetY = window.pageYOffset + rect.top - (window.innerHeight - rect.height) / 2;
            customScroll(targetY, 1500); // 1.5s scroll for cinematic feel
          }
        }, 100);
      } else {
        const element = document.getElementById('services');
        if (element) {
          customScroll(element.offsetTop - 100, 1500);
        }
      }
    }
  }, [activeIdx]);

  return (
    <section
      id="services"
      className={`py-32 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-dimak-darker' : 'bg-dimak-light'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className={`text-4xl lg:text-5xl font-display font-bold mb-6 ${isDark ? 'text-white' : 'text-dimak-dark'
            }`}>Our Services</h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
            Explore our specialized categories designed to drive growth and ensure stability.
          </p>
        </div>

        {/* Interaction Area */}
        <div className="relative max-w-7xl mx-auto flex flex-col items-center">

          {/* Mobile/Tablet Wallet Stack View - Overlapping Portrait Style */}
          <div className="flex lg:hidden flex-col w-full px-2 items-center" style={{ minHeight: activeIdx !== null ? '800px' : '550px' }}>
            {SERVICES.map((service, idx) => {
              const Icon = icons[idx];
              const isActive = activeIdx === idx;

              return (
                <motion.div
                  key={idx}
                  layout
                  onClick={() => setActiveIdx(isActive ? null : idx)}
                  initial={false}
                  animate={{
                    height: '380px',
                    marginTop: idx === 0 ? 0 : (activeIdx !== null && idx === activeIdx + 1 ? 24 : -336),
                    zIndex: idx,
                    scale: isActive ? 1.02 : 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="relative w-full max-w-[300px] aspect-[22/32] overflow-hidden rounded-[1.5rem] cursor-pointer shadow-2xl border border-white/20 flex flex-col"
                  style={{ background: gradients[idx] }}
                >
                  {/* Card Header (Visible in stack) */}
                  <div className="pt-[14px] px-7 pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm shadow-inner flex-shrink-0">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-display font-bold text-[15px] leading-tight text-left">
                          {service.category}
                        </h3>
                      </div>
                    </div>

                    {/* Subheading Bullets (Desktop-style summary) */}
                    <div className="mt-4 pl-[52px] space-y-1.5">
                      {service.items[0].split(',').map((subItem, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                          <span className="text-white/80 text-[16.5px] font-medium leading-[1.2] truncate">
                            {subItem.trim()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Know More Peek Button (Face of the card) - Shifted Right */}
                  <div className="px-7 pb-6 mt-auto flex justify-end">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIdx(idx);
                        setIsModalOpen(true);
                      }}
                      className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider">Know more</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <ChevronRight size={12} />
                      </motion.div>
                    </button>
                  </div>

                  {/* Card Details Removed from inline - Now in shared Modal panel */}
                </motion.div>
              );
            })}
          </div>

          {/* High-End Stacked Cards (Desktop Only) - Tightened Height */}
          <div className="hidden lg:flex relative h-[400px] w-full items-center justify-center">
            {SERVICES.map((service, idx) => {
              const Icon = icons[idx];
              const isActive = activeIdx === idx;
              const isAnyActive = activeIdx !== null;

              // When none active: Cards overlap in a fan
              // When active: Cards stand side-by-side

              const baseRotation = (idx - 2) * 7;
              const baseOffset = (idx - 2) * 115;

              return (
                <motion.div
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  animate={{
                    x: isAnyActive ? (idx - 2) * 240 : baseOffset,
                    y: isAnyActive ? (isActive ? -30 : 20) : (Math.pow(idx - 2, 2) * 5 + (idx === 4 ? 3 : 0)),
                    rotate: isAnyActive ? 0 : baseRotation,
                    scale: isActive ? 1.15 : (isAnyActive ? 0.85 : 1),
                    zIndex: isActive ? 50 : (20 - idx),
                    boxShadow: isActive
                      ? `0 60px 100px -20px ${shadowColors[idx]}`
                      : `0 20px 50px -10px ${shadowColors[idx]}`
                  }}
                  whileHover={!isAnyActive ? {
                    y: -10,
                    scale: 1.025,
                    boxShadow: `0 40px 80px -15px ${shadowColors[idx]}`,
                    transition: { duration: 0.3 }
                  } : {}}
                  className={`absolute w-[220px] h-[320px] cursor-pointer rounded-[1rem] p-8 transition-shadow duration-500 overflow-hidden flex flex-col ${isActive ? 'ring-4 ring-offset-4 ring-white' : ''
                    }`}
                  style={{ background: gradients[idx] }}
                >
                  {/* Decorative Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />

                  <div className="flex-1 flex flex-col items-center justify-center text-center">
                    <div className="mb-4 p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-white text-[27px] font-display font-bold leading-[1.1] mb-4 px-1">
                      {service.category}
                    </h3>
                    <p className="text-white text-[13.5px] font-medium leading-snug px-1 opacity-90">
                      {service.items[0]}
                    </p>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Modal Panel - Mobile uses fixed Lightbox, Desktop uses inline fan-out */}
          <AnimatePresence>
            {activeIdx !== null && (isModalOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
              <motion.div
                ref={panelRef}
                initial={{ opacity: 0, y: isModalOpen ? 100 : 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: isModalOpen ? 100 : 50, scale: 0.95 }}
                className={isModalOpen
                  ? "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md pt-20"
                  : "mt-5 w-full max-w-5xl z-50 px-4 md:px-0"
                }
                onClick={handleClose}
              >
                <div
                  className={`relative bg-white rounded-[1.25rem] p-10 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 overflow-y-auto max-h-[85vh]`}
                  onClick={(e) => e.stopPropagation()}
                >

                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-8 right-8 p-3 rounded-full bg-gray-50 text-gray-400 hover:text-dimak-red hover:bg-red-50 transition-all duration-300 group shadow-sm"
                  >
                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <div className="grid md:grid-cols-12 gap-16 items-start">
                    {/* Left content */}
                    <div className="md:col-span-7">
                      <div className="flex items-center space-x-6 mb-10">
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl" style={{ backgroundColor: colors[activeIdx] }}>
                          {React.createElement(icons[activeIdx], { size: 32 })}
                        </div>
                        <div>
                          <p className="text-dimak-red font-bold text-xs uppercase tracking-[0.3em] mb-1">Service Expertise</p>
                          <h3 className="text-3xl md:text-5xl font-display font-bold text-dimak-dark">
                            {SERVICES[activeIdx].category}
                          </h3>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl font-medium">
                        Comprehensive solutions tailored for the {SERVICES[activeIdx].category.toLowerCase()} sector, ensuring compliance, strategic growth, and operational excellence.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">
                        {SERVICES[activeIdx].items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start space-x-4 group"
                          >
                            <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 transition-transform group-hover:scale-125" style={{ backgroundColor: colors[activeIdx] }} />
                            <span className="text-gray-700 font-semibold text-lg leading-tight">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Right CTA Area */}
                    <div className="md:col-span-5">
                      <div className="bg-gray-50 rounded-[1rem] p-10 flex flex-col items-center text-center border border-gray-100">
                        <div className="w-12 h-1 w-1 bg-gray-300 mb-10 rounded-full" />
                        <h4 className="text-2xl font-display font-bold text-dimak-dark mb-6">Need expert guidance?</h4>
                        <p className="text-gray-500 mb-10 leading-relaxed italic">
                          "Helping you navigate financial and strategic complexities with global expertise."
                        </p>
                        <button
                          onClick={() => onOpenContact?.("Schedule a consultation")}
                          className="w-full py-5 bg-dimak-red text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-dimak-dark transition-all duration-500 shadow-xl shadow-dimak-red/20 transform hover:-translate-y-1 active:scale-95 group"
                        >
                          <span>Get Detailed Consultation</span>
                          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="mt-6 text-sm font-medium text-gray-400">
                          Secure & confidential initial review.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
