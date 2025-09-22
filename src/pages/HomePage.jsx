import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import TechnologySection from '@/components/sections/TechnologySection';
import TokenomicsSection from '@/components/sections/TokenomicsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import RoadmapSection from '@/components/sections/RoadmapSection';
import CtaSection from '@/components/sections/CtaSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <TokenomicsSection />
      <FeaturesSection />
      <RoadmapSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
