import React, { useState, useEffect } from 'react';
import { Lightbulb, Sparkles, Star, Zap, Rocket, Brain, Shield, Lock, Globe, Target, Award, Trophy, Heart, Eye, Cpu, Code, Database, Network, Activity, FileText } from 'lucide-react';

const Patents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const animationInterval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 1500);

    return () => clearInterval(animationInterval);
  }, []);

  const patentName = "EntangleX: A Quantum-Inspired Cybersecurity System for Post-Breach Data Control";

  // Floating elements for visual enhancement
  const floatingElements = [
    { icon: Lightbulb, color: 'text-yellow-400', delay: 0 },
    { icon: Star, color: 'text-cyan-400', delay: 0.5 },
    { icon: Zap, color: 'text-purple-400', delay: 1 },
    { icon: Rocket, color: 'text-green-400', delay: 1.5 },
    { icon: Brain, color: 'text-pink-400', delay: 2 },
    { icon: Shield, color: 'text-blue-400', delay: 2.5 },
    { icon: Lock, color: 'text-orange-400', delay: 3 },
    { icon: Globe, color: 'text-teal-400', delay: 3.5 }
  ];

  return (
    <section id="patents" className="relative min-h-screen overflow-hidden flex items-center py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        
        {/* Quantum-inspired floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Floating innovation icons */}
        {floatingElements.map((element, i) => (
          <div
            key={i}
            className={`absolute ${element.color} animate-bounce opacity-20`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${4 + Math.random()}s`
            }}
          >
            <element.icon className="h-6 w-6" />
          </div>
        ))}

        {/* Quantum entanglement lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${i * 12.5}%`}
              y1="0%"
              x2={`${100 - i * 12.5}%`}
              y2="100%"
              stroke="url(#quantumGradient)"
              strokeWidth="0.5"
              strokeDasharray="2,4"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide mb-8">
            <Lightbulb className="h-4 w-4 mr-2" />
            Revolutionary Innovation
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Patent
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Innovation 🚀
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of cybersecurity with quantum-inspired innovation that redefines post-breach data protection
          </p>
        </div>

        {/* Main Patent Display */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-5xl mx-auto">
            {/* Patent Name Card */}
            <div className="relative bg-gray-800/50 backdrop-blur-md rounded-3xl border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-500 overflow-hidden group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 animate-pulse"></div>
              
              <div className="relative z-10 p-12 text-center">
                {/* Patent Icon */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                      <Lightbulb className="h-12 w-12 text-white" />
                    </div>
                    
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border border-cyan-300/30 animate-pulse" style={{ animationDuration: '3s' }}></div>
                  </div>
                </div>

                {/* Patent Status Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-bold text-lg mb-8 shadow-lg">
                  <Award className="h-5 w-5 mr-2" />
                  Patent Filed • Revolutionary Innovation
                </div>

                {/* Patent Name */}
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight group-hover:text-cyan-300 transition-colors duration-300">
                  {patentName}
                </h3>

                {/* Innovation Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Quantum-Inspired</h4>
                    <p className="text-gray-300 text-sm">Leveraging quantum entanglement principles</p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Post-Breach Control</h4>
                    <p className="text-gray-300 text-sm">Data protection after system compromise</p>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-xl p-6 border border-cyan-500/20">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Future-Ready</h4>
                    <p className="text-gray-300 text-sm">Next-generation cybersecurity solution</p>
                  </div>
                </div>

                {/* Patent Number */}
                <div className="text-center">
                  <div className="text-gray-400 text-sm mb-2">Patent Application Number</div>
                  <div className="text-2xl font-mono font-bold text-cyan-400 tracking-wider">
                    63/793,391
                  </div>
                </div>
              </div>

              {/* Floating quantum particles inside card */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-ping"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + Math.random()}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Innovation Impact */}
        <div className={`mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <Star className="h-8 w-8 text-yellow-400 mr-3" />
              Innovation Impact Areas ✨
            </h3>
            <p className="text-lg text-gray-300">Transforming cybersecurity across multiple domains</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Quantum Cybersecurity', icon: Cpu, color: 'from-purple-500 to-pink-600' },
              { name: 'Post-Breach Control', icon: Shield, color: 'from-cyan-500 to-blue-600' },
              { name: 'Data Integrity', icon: Database, color: 'from-green-500 to-emerald-600' },
              { name: 'Advanced Threat Protection', icon: Target, color: 'from-red-500 to-orange-600' },
              { name: 'Next-Gen Security', icon: Rocket, color: 'from-yellow-500 to-orange-500' },
              { name: 'Quantum Entanglement', icon: Network, color: 'from-indigo-500 to-purple-600' },
              { name: 'Revolutionary Defense', icon: Eye, color: 'from-teal-500 to-cyan-600' },
              { name: 'Future Security', icon: Globe, color: 'from-blue-500 to-indigo-600' }
            ].map((area, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-r ${area.color} text-white px-6 py-4 rounded-2xl font-bold hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex items-center space-x-3`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <area.icon className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>{area.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Patent Statistics */}
        <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-yellow-400 mr-3" />
              Innovation Metrics 📊
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <div className="text-gray-300 font-medium">Revolutionary Patent</div>
                <div className="text-xs text-gray-500 mt-1">Quantum-inspired innovation</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  2025
                </div>
                <div className="text-gray-300 font-medium">Filing Year</div>
                <div className="text-xs text-gray-500 mt-1">Latest innovation</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  ∞
                </div>
                <div className="text-gray-300 font-medium">Future Impact</div>
                <div className="text-xs text-gray-500 mt-1">Limitless potential</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <div className="text-gray-300 font-medium">Innovation Level</div>
                <div className="text-xs text-gray-500 mt-1">Revolutionary</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-pink-400 mr-3" />
              Shaping the Future of Cybersecurity 💫
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              This patent represents more than just an innovation—it's a vision for a safer digital future where data remains protected even in the face of sophisticated cyber threats.
            </p>
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <Sparkles className="h-5 w-5 mr-2" />
              The Future is Quantum-Secured ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Patents;