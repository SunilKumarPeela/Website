import React, { useState, useEffect } from 'react';
import { Shield, Lock, Globe, Eye, ChevronDown, Linkedin, Github, Mail, Download } from 'lucide-react';

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
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    // Open Google Drive link in new tab
    window.open('https://drive.google.com/file/d/1l_UUleYsdXM9IlytpKy0Q_Pyf8ZDLanY/view?usp=sharing', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        {/* Animated cyber elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Shield Icon */}
            <div className="flex justify-center lg:justify-start mb-6 lg:mb-8">
              <div className="p-3 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-cyan-400" />
              </div>
            </div>
            
            {/* Name - Fixed sizing and overflow */}
            <div className="mb-6 lg:mb-8 w-full">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent leading-tight mb-4 lg:mb-6 break-words">
                Sunil Kumar Peela
              </h1>
              
              {/* Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-cyan-300 mb-2 lg:mb-4">
                Cyber Security Analyst
              </h2>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
                8+ Years of Experience in Cybersecurity
              </p>
            </div>

            {/* Contact Links with Resume */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-6 lg:mb-8">
              <a
                href="https://www.linkedin.com/in/sunilkumarpeela/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-gray-300 group-hover:text-white font-medium text-sm sm:text-base">LinkedIn</span>
              </a>
              
              <a
                href="https://github.com/SunilKumarPeela"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-gray-300 group-hover:text-white font-medium text-sm sm:text-base">GitHub</span>
              </a>
              
              <a
                href="mailto:linussunil38@gmail.com"
                className="group flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:bg-cyan-500/10 hover:scale-105"
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 group-hover:text-cyan-300" />
                <span className="text-gray-300 group-hover:text-white font-medium text-sm sm:text-base">Email</span>
              </a>

              {/* Resume Download Button */}
              <button
                onClick={handleResumeDownload}
                className="group flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                <span className="text-sm sm:text-base">Resume</span>
              </button>
            </div>

            {/* Expertise Icons */}
            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-8 mb-6 lg:mb-8">
              <div className="flex flex-col items-center">
                <div className="p-2 sm:p-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 mb-2">
                  <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                </div>
                <span className="text-xs sm:text-sm text-gray-300">Security</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-2 sm:p-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 mb-2">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                </div>
                <span className="text-xs sm:text-sm text-gray-300">Networks</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-2 sm:p-3 bg-gray-800/50 rounded-lg border border-cyan-500/20 mb-2">
                  <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
                </div>
                <span className="text-xs sm:text-sm text-gray-300">Monitoring</span>
              </div>
            </div>

            {/* Rotating Quotes */}
            <div className="mb-6 lg:mb-8">
              <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center lg:justify-start">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 italic max-w-2xl transition-all duration-500 opacity-100 text-center lg:text-left px-4 lg:px-0">
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
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Animated border rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-pulse"></div>
              <div className="absolute inset-0 rounded-full border border-cyan-300/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              
              {/* Professional headshot */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/25">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D35AQEp-5jBWYKafg/profile-framedphoto-shrink_400_400/B4DZblAMPMGYAg-/0/1747598755113?e=1750856400&v=beta&t=WY3bEwZX3T5CHmYJ7vFGDjR1hDUxo35BBc3Lxt-L2cE"
                  alt="Sunil Kumar Peela - Cybersecurity Professional"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800";
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating cyber elements */}
              <div className="absolute top-8 right-8 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 left-8 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-300"></div>
              <div className="absolute top-1/2 -right-4 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse delay-700"></div>

              {/* Curved Professional Badges - OUTSIDE the image with proper scaling */}
              <div className="absolute inset-0 pointer-events-none" style={{ transform: 'scale(1.5)' }}>
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    {/* Define curved paths OUTSIDE the circle - adjusted for better visibility */}
                    <path
                      id="topCurve"
                      d="M 80 60 A 120 120 0 0 1 320 60"
                      fill="none"
                    />
                    <path
                      id="bottomLeftCurve"
                      d="M 60 300 A 140 140 0 0 1 160 80"
                      fill="none"
                    />
                    <path
                      id="bottomRightCurve"
                      d="M 240 80 A 140 140 0 0 1 340 300"
                      fill="none"
                    />
                  </defs>
                  
                  {/* Curved Text Elements - OUTSIDE the image with enhanced visibility */}
                  <text className="fill-cyan-300 font-bold tracking-widest" style={{ fontSize: '18px', fontWeight: '800' }}>
                    <textPath href="#topCurve" startOffset="50%" textAnchor="middle">
                      BLUETEAM
                    </textPath>
                  </text>
                  
                  <text className="fill-cyan-300 font-bold tracking-widest" style={{ fontSize: '18px', fontWeight: '800' }}>
                    <textPath href="#bottomLeftCurve" startOffset="50%" textAnchor="middle">
                      REDTEAM
                    </textPath>
                  </text>
                  
                  <text className="fill-cyan-300 font-bold tracking-widest" style={{ fontSize: '16px', fontWeight: '800' }}>
                    <textPath href="#bottomRightCurve" startOffset="50%" textAnchor="middle">
                      CLOUDSECURITY
                    </textPath>
                  </text>
                </svg>

                {/* Enhanced decorative dots along the curves - OUTSIDE */}
                <div className="absolute top-[8%] left-[25%] w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                <div className="absolute top-[8%] right-[25%] w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse delay-300 shadow-lg shadow-cyan-400/50"></div>
                <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse delay-500 shadow-lg shadow-cyan-400/50"></div>
                
                <div className="absolute bottom-[8%] left-[20%] w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse delay-700 shadow-lg shadow-cyan-400/50"></div>
                <div className="absolute bottom-[8%] right-[20%] w-3 h-3 bg-cyan-400/80 rounded-full animate-pulse delay-1000 shadow-lg shadow-cyan-400/50"></div>
                
                {/* Additional accent elements for better visibility */}
                <div className="absolute top-[6%] left-[20%] w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-ping delay-700"></div>
                <div className="absolute top-[6%] right-[20%] w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-ping delay-1000"></div>
                <div className="absolute top-[3%] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-ping delay-1200"></div>
                
                <div className="absolute bottom-[6%] left-[15%] w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-ping delay-1400"></div>
                <div className="absolute bottom-[6%] right-[15%] w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-ping delay-1600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;