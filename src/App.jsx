import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import FAQ from './components/FAQ';
import Process from './components/Process';
import CTABand from './components/CTABand';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Process />
        <CTABand />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
