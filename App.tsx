import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Team from './components/Team';
import Affiliates from './components/Affiliates';
import Contact from './components/Contact';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Request a Quote");

  const openContactModal = (title: string = "Request a Quote") => {
    setModalTitle(title);
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-dimak-red selection:text-white">
      <Navbar onOpenContact={openContactModal} />
      <main>
        <Hero onOpenContact={openContactModal} />
        <Highlights />
        <About />
        <Stats />
        <Services />
        <Team />
        <Affiliates />
      </main>
      <Contact onOpenContact={openContactModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} title={modalTitle} />
    </div>
  );
}

export default App;