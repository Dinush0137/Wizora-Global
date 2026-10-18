import React from 'react';
import SkipLink from './components/common/SkipLink';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients/Clients';
import Innovations from './components/Innovations';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="site-wrapper">
      <SkipLink targetId="main-content" />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Clients />
        <Innovations />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
