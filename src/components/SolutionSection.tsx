
import React from 'react';

const SolutionSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            The Revelation
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 animate-fade-in animation-delay-200">
            <p className="text-lg md:text-xl leading-relaxed">
              What if energy wasn't just <em className="text-white font-semibold">consumed</em>, 
              but <em className="text-cyan-400 font-semibold">stored</em>?
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Stored not in volatile fuels, but in <span className="text-blue-400 font-semibold">silent, passive forms</span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              A technology emerges that could dramatically reduce the global energy bill – 
              potentially cutting energy costs <span className="text-green-400 font-bold">up to 50% annually</span>
              <br />
              for some applications.
            </p>
          </div>
          
          <div className="text-center animate-fade-in animation-delay-400">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm">
              <img 
                src="/images/thermal_battery.jpg" 
                alt="Sand Battery & ICE Battery first prototypes" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <h3 className="text-2xl font-bold text-white mb-4">Thermal Battery</h3>
              <p className="text-cyan-400 text-lg">Captured and released on demand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
