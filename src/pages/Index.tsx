
import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ThermalBatteriesSection from '@/components/ThermalBatteriesSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import GenesisSection from '@/components/GenesisSection';
import NewsletterSignup from '@/components/NewsletterSignup';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ThermalBatteriesSection />
        <ApplicationsSection />
        <GenesisSection />
        <NewsletterSignup />
      </div>
    </div>
  );
};

export default Index;
