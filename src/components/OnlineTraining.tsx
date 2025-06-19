import React, { useState, useEffect } from 'react';
import { BookOpen, Award, ExternalLink, Calendar, CheckCircle, Filter, Star, Sparkles, Trophy, Target, Zap, Brain, Code, Shield, Globe, Users, Heart, Lightbulb, Rocket, Play, Clock, TrendingUp } from 'lucide-react';

const OnlineTraining = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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

  const categories = [
    'all',
    'Security Operations',
    'Threat Intelligence',
    'AI Security',
    'Hands-on Training',
    'Web Security',
    'Cloud & Containers',
    'Professional Development',
    'Programming',
    'Infrastructure Security',
    'Policy & Governance'
  ];

  const filteredCertificates = activeCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Security Operations': 'from-blue-500 to-blue-600',
      'Security Testing': 'from-red-500 to-red-600',
      'Security Awareness': 'from-green-500 to-green-600',
      'Threat Intelligence': 'from-purple-500 to-purple-600',
      'Endpoint Protection': 'from-orange-500 to-orange-600',
      'Cloud & Containers': 'from-cyan-500 to-cyan-600',
      'Web Security': 'from-pink-500 to-pink-600',
      'Artificial Intelligence': 'from-indigo-500 to-indigo-600',
      'AI Security': 'from-violet-500 to-violet-600',
      'Hands-on Training': 'from-emerald-500 to-emerald-600',
      'Job Simulation': 'from-yellow-500 to-yellow-600',
      'Professional Development': 'from-gray-500 to-gray-600',
      'Programming': 'from-teal-500 to-teal-600',
      'Personal Security': 'from-rose-500 to-rose-600',
      'Infrastructure Security': 'from-amber-500 to-amber-600',
      'Policy & Governance': 'from-slate-500 to-slate-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

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

          {/* Active Certificate Details */}
          <div className="max-w-2xl mx-auto mt-8">
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

        {/* Category Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center mb-6">
            <Filter className="h-5 w-5 text-cyan-400 mr-2" />
            <span className="text-gray-300 font-medium">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-cyan-500/20'
                }`}
              >
                {category === 'all' ? 'All Certificates ✨' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCertificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden group hover:scale-105"
              >
                {/* Certificate Header */}
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(cert.category)}`}></div>
                
                <div className="p-6">
                  {/* Certificate Icon and Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color}`}>
                      <cert.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {cert.duration}
                    </div>
                  </div>

                  {/* Certificate Name */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200 leading-tight">
                    {cert.name}
                  </h3>

                  {/* Issuing Company */}
                  <div className="text-cyan-400 font-medium text-sm mb-4">{cert.company}</div>

                  {/* Category and Level */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium border border-cyan-500/20">
                      {cert.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert.level)}`}>
                      {cert.level}
                    </span>
                  </div>

                  {/* Verification Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-400 text-sm">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      <span>Verified ✅</span>
                    </div>
                    
                    <button className="flex items-center space-x-1 px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-200 text-sm font-medium">
                      <ExternalLink className="h-4 w-4" />
                      <span>View</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Statistics */}
        <div className={`mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-yellow-400 mr-3" />
              Training Portfolio Overview 📊
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {certificates.length}
                </div>
                <div className="text-gray-300 font-medium">Total Certificates</div>
                <div className="text-sm text-gray-500 mt-1">Across all domains</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {certificates.reduce((total, cert) => total + parseInt(cert.duration), 0)}+
                </div>
                <div className="text-gray-300 font-medium">Training Hours</div>
                <div className="text-sm text-gray-500 mt-1">Continuous learning</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {[...new Set(certificates.map(cert => cert.category))].length}
                </div>
                <div className="text-gray-300 font-medium">Skill Categories</div>
                <div className="text-sm text-gray-500 mt-1">Specialized areas</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  2024
                </div>
                <div className="text-gray-300 font-medium">Latest Year</div>
                <div className="text-sm text-gray-500 mt-1">Recent achievements</div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Providers */}
        <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center">
            <Users className="h-8 w-8 text-blue-400 mr-3" />
            Training Organizations 🏢
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...new Set(certificates.map(cert => cert.company))].map((company, index) => (
              <div
                key={index}
                className="bg-gray-800/50 text-center py-6 px-4 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-200 hover:shadow-md hover:scale-105"
              >
                <span className="text-white font-medium text-sm">{company}</span>
                <div className="text-xs text-cyan-400 mt-2">
                  {certificates.filter(cert => cert.company === company).length} certificate{certificates.filter(cert => cert.company === company).length > 1 ? 's' : ''} 🎯
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineTraining;