
import React from 'react';
import SpotlightLogo from './SpotlightLogo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo with spotlight */}
        <SpotlightLogo />
        
        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight animate-fade-in">
          Off-grid Zero-Emission
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Heating & Cooling Solutions
          </span>
        </h1>
        
        {/* Sub-headlines */}
        <div className="space-y-4 mb-16 animate-fade-in animation-delay-300">
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Discover the secrets held within Thermal Energy Storage
          </p>
          <p className="text-lg md:text-xl text-cyan-400 font-medium">
            Zero Emissions. Untapped Potential.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
