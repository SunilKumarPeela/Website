import React, { useState, useEffect } from 'react';
import { BookOpen, Award, Calendar, CheckCircle, Star, Sparkles, Trophy, Target, Zap, Brain, Code, Shield, Globe, Users, Heart, Lightbulb, Rocket, Clock } from 'lucide-react';

const OnlineTraining = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-advance timeline
    const timelineInterval = setInterval(() => {
      setCurrentTimelineIndex((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(timelineInterval);
  }, []);

  const certificates = [
    // Security Fundamentals
    { name: "Introduction to SIEM", company: "LinkedIn Learning", category: "Security Operations", year: "2024", level: "Intermediate", icon: Shield, color: "from-blue-500 to-blue-600", duration: "3 hours" },
    { name: "Security Testing Essential Training", company: "LinkedIn Learning", category: "Security Testing", year: "2024", level: "Advanced", icon: Target, color: "from-red-500 to-red-600", duration: "4 hours" },
    { name: "Cybersecurity Awareness", company: "LinkedIn Learning", category: "Security Awareness", year: "2024", level: "Beginner", icon: Brain, color: "from-green-500 to-green-600", duration: "2 hours" },
    
    // Specialized Security Training
    { name: "Introduction to Threat Hunting", company: "Security Blue Team", category: "Threat Intelligence", year: "2024", level: "Advanced", icon: Target, color: "from-purple-500 to-purple-600", duration: "6 hours" },
    { name: "Endpoint Security", company: "Cisco", category: "Endpoint Protection", year: "2024", level: "Intermediate", icon: Shield, color: "from-orange-500 to-orange-600", duration: "5 hours" },
    { name: "Introduction to Cybersecurity Awareness", company: "HP", category: "Security Awareness", year: "2024", level: "Beginner", icon: Brain, color: "from-green-500 to-green-600", duration: "2 hours" },
    
    // Technical Skills
    { name: "LFS158 Introduction to Kubernetes", company: "Linux Foundation", category: "Cloud & Containers", year: "2024", level: "Intermediate", icon: Globe, color: "from-cyan-500 to-cyan-600", duration: "8 hours" },
    { name: "SQL Injection Attacks", company: "EC-Council", category: "Web Security", year: "2024", level: "Advanced", icon: Code, color: "from-pink-500 to-pink-600", duration: "4 hours" },
    
    // AI & Machine Learning
    { name: "Introduction to AI", company: "Linx Unhatched", category: "Artificial Intelligence", year: "2024", level: "Beginner", icon: Brain, color: "from-indigo-500 to-indigo-600", duration: "3 hours" },
    { name: "Foundations of AI Security", company: "AttackIQ", category: "AI Security", year: "2024", level: "Intermediate", icon: Zap, color: "from-violet-500 to-violet-600", duration: "5 hours" },
    { name: "Beyond File Names: Using Machine Learning to Reduce Alert Fatigue", company: "SANS", category: "AI Security", year: "2024", level: "Advanced", icon: Lightbulb, color: "from-yellow-500 to-orange-500", duration: "6 hours" },
    
    // Practical Training
    { name: "Try Hack Me Pre Security Certificate", company: "TryHackMe", category: "Hands-on Training", year: "2024", level: "Beginner", icon: Trophy, color: "from-emerald-500 to-emerald-600", duration: "10 hours" },
    { name: "Mastermind Cybersecurity Job Simulation", company: "Forage", category: "Job Simulation", year: "2024", level: "Intermediate", icon: Users, color: "from-yellow-500 to-yellow-600", duration: "8 hours" },
    
    // Professional Development
    { name: "Information Security Professional", company: "Institute of Management Technology and Finance", category: "Professional Development", year: "2024", level: "Advanced", icon: Award, color: "from-gray-500 to-gray-600", duration: "12 hours" },
    
    // Programming & Development
    { name: "Introduction to Cybersecurity Course", company: "Codecademy", category: "Programming", year: "2024", level: "Beginner", icon: Code, color: "from-teal-500 to-teal-600", duration: "6 hours" },
    { name: "Introduction to Personal Digital Security Course", company: "Codecademy", category: "Personal Security", year: "2024", level: "Beginner", icon: Heart, color: "from-rose-500 to-rose-600", duration: "4 hours" },
    
    // Infrastructure Protection
    { name: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)", company: "OPSWAT", category: "Infrastructure Security", year: "2024", level: "Intermediate", icon: Shield, color: "from-amber-500 to-amber-600", duration: "7 hours" },
    
    // International & Policy
    { name: "Cyberdiplomacy Course", company: "United Nations Office for Disarmament Affairs", category: "Policy & Governance", year: "2024", level: "Advanced", icon: Globe, color: "from-slate-500 to-slate-600", duration: "9 hours" }
  ];

  const getLevelColor = (level) => {
    const colors = {
      'Beginner': 'bg-green-500/20 text-green-300 border-green-500/50',
      'Intermediate': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
      'Advanced': 'bg-red-500/20 text-red-300 border-red-500/50'
    };
    return colors[level] || 'bg-gray-500/20 text-gray-300 border-gray-500/50';
  };

  // Calculate position for circular timeline
  const getCircularPosition = (index, total, radius = 280) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2; // Start from top
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  return (
    <section id="training" className="relative min-h-screen overflow-hidden flex items-center py-20">
      {/* Matching Home Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        
        {/* Animated cyber elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping delay-1000"></div>

        {/* Floating training elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`training-${i}`}
            className="absolute text-cyan-400/20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {i % 4 === 0 ? <BookOpen className="h-4 w-4" /> : 
             i % 4 === 1 ? <Award className="h-4 w-4" /> : 
             i % 4 === 2 ? <Trophy className="h-4 w-4" /> :
             <Star className="h-4 w-4" />}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            Continuous learning journey
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Professional
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Training Portfolio 🎓
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive collection of professional training certificates from leading cybersecurity and technology organizations. Every course represents a step forward in my mission to protect the digital world! 🚀
          </p>
        </div>

        {/* Circular Timeline Visualization */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <Clock className="h-8 w-8 text-cyan-400 mr-3" />
              Training Timeline Constellation ⭐
            </h3>
            <p className="text-lg text-gray-300">Interactive circular timeline showcasing my learning journey</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Circular Timeline Container */}
            <div className="relative h-[700px] flex items-center justify-center">
              {/* Center Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl">
                  <div className="text-center">
                    <BookOpen className="h-8 w-8 text-white mx-auto mb-2" />
                    <div className="text-white font-bold text-lg">{certificates.length}</div>
                    <div className="text-white/80 text-xs">Certificates</div>
                  </div>
                </div>
                
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border border-cyan-300/20 animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>

              {/* Certificate Nodes */}
              {certificates.slice(0, 16).map((cert, index) => {
                const position = getCircularPosition(index, 16);
                const isActive = index === currentTimelineIndex;
                
                return (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% + ${position.y}px)`
                    }}
                    onClick={() => setCurrentTimelineIndex(index)}
                  >
                    {/* Connection Line to Center */}
                    <div 
                      className="absolute w-0.5 bg-gradient-to-r from-cyan-400/50 to-transparent origin-center"
                      style={{
                        height: `${Math.sqrt(position.x * position.x + position.y * position.y)}px`,
                        transform: `rotate(${Math.atan2(position.y, position.x) + Math.PI}rad)`,
                        transformOrigin: '0 50%',
                        left: '50%',
                        top: '50%'
                      }}
                    ></div>

                    {/* Certificate Node */}
                    <div className={`relative w-20 h-20 rounded-full border-2 transition-all duration-500 ${
                      isActive
                        ? `border-cyan-400 shadow-lg shadow-cyan-400/25 bg-gradient-to-br ${cert.color}/20 scale-125`
                        : 'border-gray-600 bg-gray-900/80 hover:border-gray-500 hover:scale-110'
                    }`}>
                      <div className="h-full flex flex-col items-center justify-center p-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center mb-1`}>
                          <cert.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-center leading-tight text-gray-300 truncate w-full">
                          {cert.company.split(' ')[0]}
                        </span>
                      </div>

                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-75"></div>
                      )}
                    </div>

                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-3 bg-gray-800/95 backdrop-blur-sm text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 border border-cyan-500/20">
                      <div className="text-center">
                        <div className="font-bold text-cyan-300">{cert.name}</div>
                        <div className="text-gray-300 text-xs">{cert.company}</div>
                        <div className="text-gray-400 text-xs mt-1">{cert.duration} • {cert.level}</div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Timeline Progress Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  {certificates.slice(0, 16).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTimelineIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTimelineIndex ? 'bg-cyan-400 scale-150' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Certificate Display */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
              <div className="text-center">
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${certificates[currentTimelineIndex]?.color} text-white font-bold mb-4`}>
                  {React.createElement(certificates[currentTimelineIndex]?.icon, { className: "h-5 w-5 mr-2" })}
                  Featured Certificate
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3">
                  {certificates[currentTimelineIndex]?.name}
                </h4>
                
                <div className="text-cyan-400 font-medium text-lg mb-4">
                  {certificates[currentTimelineIndex]?.company}
                </div>

                <div className="flex justify-center space-x-4 mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(certificates[currentTimelineIndex]?.level)}`}>
                    {certificates[currentTimelineIndex]?.level}
                  </span>
                  <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm font-medium border border-cyan-500/20">
                    {certificates[currentTimelineIndex]?.category}
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/50">
                    {certificates[currentTimelineIndex]?.duration}
                  </span>
                </div>

                <div className="flex items-center justify-center text-green-400 text-sm">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  <span>Completed & Verified ✅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineTraining;