
import React from 'react';

const GenesisSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            The Genesis
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            <p>
              Inspired by traditional agriculture processes and thermal energy innovations, our Founder, <br />
              <a 
                href="https://www.kentnguyen.com/?utm_source=tenergy&utm_medium=splash&utm_campaign&debug" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-cyan-400 transition-colors duration-300 underline decoration-cyan-400/30 hover:decoration-cyan-400"
              >Kent Nguyen</a>,
              a tech entrepreneur, started working on the Sand Battery solution in October 2022.
            </p>
            <p>
              From DIY components to proven concepts, this journey explores <span className="text-cyan-400 font-semibold">new scientific frontiers</span>.
              And we are still at the beginning of something much bigger, the future is bright.
            </p>
          </div>

          {/* Prototype Image */}
          <div className="mb-8 animate-fade-in animation-delay-200">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-sm inline-block">
              <img 
                src="https://blog.kentnguyen.com/content/images/size/w1200/2025/05/IMG_20250523_151253-1.jpg" 
                alt="Sand Battery & ICE Battery first prototypes" 
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
              />
              <p className="text-sm text-gray-400 mt-3">
                Sand Battery & ICE Battery first prototypes - Jan 2025
              </p>
            </div>
          </div>

          {/* Patent Link */}
          <div className="animate-fade-in animation-delay-400">
            <a 
              href="https://www.kentnguyen.com/sand-battery-patent-download?utm_source=thermion&utm_medium=99&utm_campaign=debug" 
              target="_blank" 
              className="inline-flex items-center gap-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              <img 
                src="https://blog.kentnguyen.com/content/images/2025/05/USPTO-Sand-Battery-cover-2.png" 
                alt="USPTO Sand Battery Patent" 
                className="w-12 h-12 rounded object-cover"
              />
              <div className="text-left">
                <p className="text-white font-semibold">Sand Battery USPTO Patent</p>
                <p className="text-gray-400 text-sm">Download Patent Document</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenesisSection;
