import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Proof from '../components/Proof';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Services />
      <Process />
      <Proof />
      <Contact />
    </>
  );
}

export default Home;
