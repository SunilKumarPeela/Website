import React from 'react';
import { Lightbulb, Calendar, MapPin, ExternalLink, Shield, Award, FileText } from 'lucide-react';

const Patents = () => {
  const patents = [
    {
      title: "EntangleX: A Quantum-Inspired Cybersecurity System for Post-Breach Data Control",
      patentNumber: "63/793,391",
      status: "Filed",
      filingDate: "2025-05-15",
      grantDate: null,
      category: "Quantum-Inspired Cybersecurity",
      description: "Revolutionary quantum-inspired cybersecurity system designed for post-breach data control, utilizing quantum entanglement principles to maintain data integrity and security even after system compromise. This groundbreaking innovation represents the next generation of cybersecurity defense mechanisms.",
      inventors: ["Sunil Kumar Peela"],
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Filed':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
    }
  };

  return (
    <section id="patents" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Lightbulb className="h-12 w-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Patent Innovation</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering quantum-inspired cybersecurity innovation that redefines post-breach data protection
          </p>
        </div>

        {/* Featured Patent - EntangleX */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg mb-6">
              <Lightbulb className="h-5 w-5" />
              <span>Revolutionary Innovation</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Quantum-Inspired Cybersecurity</h3>
            <p className="text-lg text-gray-300">The future of post-breach data control</p>
          </div>
          
          <div className="max-w-5xl mx-auto bg-gray-800 rounded-3xl border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
            <div className={`h-3 bg-gradient-to-r ${patents[0].color}`}></div>
            
            <div className="p-12">
              <div className="flex items-center justify-between mb-8">
                <span className={`px-6 py-3 rounded-full text-lg font-bold border-2 ${getStatusColor(patents[0].status)}`}>
                  {patents[0].status} • Patent Application
                </span>
                <span className="text-gray-400 text-2xl font-mono tracking-wider">{patents[0].patentNumber}</span>
              </div>

              <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                {patents[0].title}
              </h3>

              <div className="flex items-center mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${patents[0].color} mr-6`}>
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-cyan-400 font-bold text-2xl">{patents[0].category}</span>
                  <div className="text-gray-400 text-lg">Next-Generation Security Technology</div>
                </div>
              </div>

              <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                {patents[0].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="h-5 w-5 mr-2" />
                    Filing Date
                  </div>
                  <div className="text-white text-2xl font-bold">
                    {new Date(patents[0].filingDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <FileText className="h-5 w-5 mr-2" />
                    Patent Claims
                  </div>
                  <div className="text-white text-2xl font-bold">
                    {patents[0].claims} Claims
                  </div>
                </div>
                <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Lightbulb className="h-5 w-5 mr-2" />
                    Innovation Type
                  </div>
                  <div className="text-white text-2xl font-bold">
                    Quantum-Inspired
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-gray-400 text-lg mb-4">Research Team:</div>
                <div className="flex flex-wrap gap-4">
                  {patents[0].inventors.map((inventor, invIndex) => (
                    <span
                      key={invIndex}
                      className="px-6 py-3 bg-gray-700 text-gray-200 rounded-xl text-lg font-medium border border-gray-600"
                    >
                      {inventor}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-lg text-gray-400">
                  <span className="text-cyan-400 font-bold text-3xl">{patents[0].claims}</span> Total Claims Filed
                </div>
                
                <button className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl">
                  <ExternalLink className="h-6 w-6" />
                  <span>View Patent Application</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Innovation Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Quantum-Inspired</h4>
              <p className="text-gray-300 text-sm">Leveraging quantum entanglement principles for unprecedented security</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Post-Breach Control</h4>
              <p className="text-gray-300 text-sm">Maintaining data integrity even after system compromise</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Future-Ready</h4>
              <p className="text-gray-300 text-sm">Next-generation cybersecurity for tomorrow's threats</p>
            </div>
          </div>
        </div>

        {/* Patent Statistics */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Patent Innovation Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1</div>
              <div className="text-gray-300">Revolutionary Patent</div>
              <div className="text-xs text-gray-500 mt-1">Quantum-inspired innovation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">25</div>
              <div className="text-gray-300">Patent Claims</div>
              <div className="text-xs text-gray-500 mt-1">Comprehensive protection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">2025</div>
              <div className="text-gray-300">Filing Year</div>
              <div className="text-xs text-gray-500 mt-1">Latest innovation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">Filed</div>
              <div className="text-gray-300">Current Status</div>
              <div className="text-xs text-gray-500 mt-1">Under review</div>
            </div>
          </div>
        </div>

        {/* Innovation Impact */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Innovation Impact Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Quantum Cybersecurity', 
              'Post-Breach Control', 
              'Data Integrity',
              'Advanced Threat Protection',
              'Next-Gen Security',
              'Quantum Entanglement',
              'Revolutionary Defense',
              'Future Security'
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patents;