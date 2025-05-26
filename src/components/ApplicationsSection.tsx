
import React from 'react';

const ApplicationsSection = () => {
  const applications = [
    {
      icon: "🏠",
      title: "Off-grid Heating & Cooling",
      description: "Without emissions, without compromise"
    },
    {
      icon: "🐟",
      title: "Food & Seafood Preservation", 
      description: "Powered sustainably, preserved perfectly"
    },
    {
      icon: "🔥",
      title: "Hot Water & Sous Vide",
      description: "From stored heat, on demand"
    },
    {
      icon: "🏭",
      title: "Industrial Applications",
      description: "Agriculture, manufacturing, hospitality, healthcare"
    },
    {
      icon: "📱",
      title: "Portable Solutions",
      description: "Days of consistent temperature control from a single charge"
    },
    {
      icon: "⚙️",
      title: "Passive Operation",
      description: "Minimal interaction, precise control"
    }
  ];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Transformative Applications
          </h2>
          <p className="text-xl text-gray-300">
            Imagine the possibilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 text-center">{app.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{app.title}</h3>
              <p className="text-gray-300 text-center">{app.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
