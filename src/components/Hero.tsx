import React, { useState, useEffect } from 'react';
import { Shield, Lock, Globe, Eye, ChevronDown, Linkedin, Github, Mail } from 'lucide-react';

const Hero = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const cyberQuotes = [
    "I don't just study threats. I simulate them, break them, reprogram them and turn them into allies.",
    "While others monitor logs, I monitor behavior, anomalies, and intent",
    "In cybersecurity, we trust no one and verify everyone.",
    "In the silence between packets, I find the signal of the breach."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % cyberQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        {/* Animated cyber elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Name without Shield Icon */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                Sunil Kumar Peela
              </h1>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-cyan-300 mb-2">
                Cyber Security Analyst
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                8+ Years of Experience in Cybersecurity
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/sunilkumarpeela/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-4 py-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105"
              >
                <Linkedin className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-gray-300 group-hover:text-white font-medium">LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/SunilKumarPeela"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-4 py-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105"
              >
                <Github className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-gray-300 group-hover:text-white font-medium">GitHub</span>
              </a>
              
              <a
                href="mailto:linussunil38@gmail.com"
                className="group flex items-center space-x-2 px-4 py-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105"
              >
                <Mail className="h-5 w-5 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-gray-300 group-hover:text-white font-medium">Email</span>
              </a>
            </div>

            {/* Expertise Icons */}
            <div className="flex justify-center lg:justify-start space-x-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 mb-2">
                  <Lock className="h-6 w-6 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">Security</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 mb-2">
                  <Globe className="h-6 w-6 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">Networks</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 mb-2">
                  <Eye className="h-6 w-6 text-cyan-400" />
                </div>
                <span className="text-sm text-gray-300">Monitoring</span>
              </div>
            </div>

            {/* Rotating Quotes */}
            <div className="mb-8">
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p className="text-base md:text-lg lg:text-xl text-gray-300 italic max-w-2xl transition-all duration-500 opacity-100">
                  "{cyberQuotes[currentQuote]}"
                </p>
              </div>
              
              {/* Quote indicators */}
              <div className="flex justify-center lg:justify-start space-x-2 mt-4">
                {cyberQuotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuote(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuote ? 'bg-cyan-400' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <button
              onClick={scrollToNext}
              className="group flex flex-col items-center space-y-2 mx-auto lg:mx-0 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
            >
              <span className="text-sm font-medium">Explore My Work</span>
              <ChevronDown className="h-6 w-6 animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right Column - Professional Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Animated border rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-cyan-300/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              
              {/* Professional headshot - Using LinkedIn image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/25">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D35AQEp-5jBWYKafg/profile-framedphoto-shrink_400_400/B4DZblAMPMGYAg-/0/1747598755113?e=1750856400&v=beta&t=WY3bEwZX3T5CHmYJ7vFGDjR1hDUxo35BBc3Lxt-L2cE"
                  alt="Sunil Kumar Peela - Cybersecurity Professional"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    // Fallback to a professional cybersecurity image if LinkedIn image fails
                    e.currentTarget.src = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
                
                {/* Overlay gradient for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating cyber elements around image */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 left-8 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-300"></div>
              <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-8 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>

              {/* Professional badges */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="bg-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-cyan-300">BlueTeam</span>
                </div>
                <div className="bg-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-cyan-300">RedTeam</span>
                </div>
                <div className="bg-gray-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-cyan-300">CloudSecurity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;