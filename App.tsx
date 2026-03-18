import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Stats from './components/Stats';
import Services from './components/Services';
import Team from './components/Team';
import Affiliates from './components/Affiliates';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Schedule a consultation");

  // Simple path-based routing
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const theme = currentPath === '/1' ? 'dark' : '/';

  const openContactModal = (title: string = "Schedule a consultation") => {
    setModalTitle(title);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className={`min-h-screen font-sans selection:bg-dimak-red selection:text-white transition-colors duration-500 ${theme === 'dark' ? 'bg-dimak-darker text-gray-100' : 'bg-gray-50 text-gray-800'
      }`}>
      <Navbar onOpenContact={openContactModal} theme={theme} />
      <main>
        <Hero onOpenContact={openContactModal} theme={theme} />
        <About />
        <Services onOpenContact={openContactModal} theme={theme} />
        <Stats />
        <CoreValues />
        <Team />
        <Affiliates />
      </main>
      <Contact onOpenContact={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} title={modalTitle} />
    </div>
  );
}

export default App;