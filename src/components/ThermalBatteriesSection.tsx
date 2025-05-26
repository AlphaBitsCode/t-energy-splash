
import React from 'react';

const ThermalBatteriesSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            What Lies Beneath?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Introducing <span className="text-cyan-400 font-bold">Thermal Batteries</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Heat Storage */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/30 backdrop-blur-sm animate-fade-in animation-delay-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">🔥</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Intense Heat</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              The power of intense heat, stored at temperatures reaching 
              <span className="text-orange-400 font-bold"> 300°C</span>, 
              in materials like sand.
            </p>
          </div>
          
          {/* Cold Storage */}
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm animate-fade-in animation-delay-400">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">❄️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Extreme Cold</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              The power of extreme cold, capable of reaching 
              <span className="text-cyan-400 font-bold"> -22°C or lower</span>. 
              These are not mere batteries as you know them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThermalBatteriesSection;
