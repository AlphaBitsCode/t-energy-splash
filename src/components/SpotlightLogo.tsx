
import React from 'react';

const SpotlightLogo = () => {
  return (
    <div className="relative flex justify-center items-center h-80 mb-16">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-conic from-cyan-400/20 via-blue-500/10 to-transparent opacity-40 rounded-full blur-2xl"></div>
      
      {/* Logo container */}
      <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/30 to-blue-600/30 rounded-lg blur-xl"></div>
          
          {/* Logo */}
          <img 
            src="/lovable-uploads/c2014a9e-8370-4e28-86f5-28ac6488b11d.png" 
            alt="Thermion Energy" 
            className="relative z-10 w-32 h-32 md:w-40 md:h-40 object-contain filter drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SpotlightLogo;
