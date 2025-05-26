
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            The Hidden Challenge
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              The world grapples with <span className="text-red-400 font-semibold">immense energy costs</span>. 
              Traditional methods rely on burning and inefficient processes.
            </p>
            <p>
              There's a growing demand for <span className="text-cyan-400 font-semibold">off-grid solutions</span> 
              that don't compromise our planet's future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
