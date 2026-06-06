import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import Packages from '../components/Packages';
import Philosophy from '../components/Philosophy';
import CaseStudiesHome from '../components/CaseStudiesHome';
import AlaCarte from '../components/AlaCarte';
import Commitments from '../components/Commitments';
import BottomCTA from '../components/BottomCTA';
import Contact from '../components/Contact';

function Home() {
  return (
    <>
      <SEO />
      {/* Section 1: Hero */}
      <Hero />
      {/* Section 2: Thực trạng – Nỗi đau từ sự manh mún */}
      <PainPoints />
      {/* Section 3: 3 Gói Combo Marketing */}
      <Packages />
      {/* Section 4: Triết lý The Monri Way */}
      <Philosophy />
      {/* Section 5: Case Studies */}
      <CaseStudiesHome />
      {/* Section 6: Dịch vụ à la carte */}
      <AlaCarte />
      {/* Section 7: Cam kết vận hành */}
      <Commitments />
      {/* Section 8: Bottom CTA */}
      <BottomCTA />
      {/* Contact form */}
      <Contact />
    </>
  );
}

export default Home;
