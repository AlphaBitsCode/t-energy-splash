
import React from 'react';

const GenesisSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            The Genesis
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              Born from observing traditional processes and inspired by pioneering innovations, 
              our founder, <span className="text-white font-semibold">Kent Nguyen</span>, 
              a serial technologist and inventor, began tinkering.
            </p>
            <p>
              Proving concepts from simple origins, this is a journey into 
              <span className="text-cyan-400 font-semibold"> uncharted science frontiers</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenesisSection;
