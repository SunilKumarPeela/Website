import React, { useState, useEffect } from 'react';
import { BookOpen, Award, ExternalLink, Calendar, CheckCircle, Filter, Star, Sparkles, Trophy, Target, Zap, Brain, Code, Shield, Globe, Users, Heart, Lightbulb, Rocket } from 'lucide-react';

const OnlineTraining = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const animationInterval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 1500);

    return () => clearInterval(animationInterval);
  }, []);

  const certificates = [
    // Security Fundamentals
    { name: "Introduction to SIEM", company: "LinkedIn Learning", category: "Security Operations", year: "2024", level: "Intermediate", icon: Shield, color: "from-blue-500 to-blue-600" },
    { name: "Security Testing Essential Training", company: "LinkedIn Learning", category: "Security Testing", year: "2024", level: "Advanced", icon: Target, color: "from-red-500 to-red-600" },
    { name: "Cybersecurity Awareness", company: "LinkedIn Learning", category: "Security Awareness", year: "2024", level: "Beginner", icon: Brain, color: "from-green-500 to-green-600" },
    
    // Specialized Security Training
    { name: "Introduction to Threat Hunting", company: "Security Blue Team", category: "Threat Intelligence", year: "2024", level: "Advanced", icon: Target, color: "from-purple-500 to-purple-600" },
    { name: "Endpoint Security", company: "Cisco", category: "Endpoint Protection", year: "2024", level: "Intermediate", icon: Shield, color: "from-orange-500 to-orange-600" },
    { name: "Introduction to Cybersecurity Awareness", company: "HP", category: "Security Awareness", year: "2024", level: "Beginner", icon: Brain, color: "from-green-500 to-green-600" },
    
    // Technical Skills
    { name: "LFS158 Introduction to Kubernetes", company: "Linux Foundation", category: "Cloud & Containers", year: "2024", level: "Intermediate", icon: Globe, color: "from-cyan-500 to-cyan-600" },
    { name: "SQL Injection Attacks", company: "EC-Council", category: "Web Security", year: "2024", level: "Advanced", icon: Code, color: "from-pink-500 to-pink-600" },
    
    // AI & Machine Learning
    { name: "Introduction to AI", company: "Linx Unhatched", category: "Artificial Intelligence", year: "2024", level: "Beginner", icon: Brain, color: "from-indigo-500 to-indigo-600" },
    { name: "Foundations of AI Security", company: "AttackIQ", category: "AI Security", year: "2024", level: "Intermediate", icon: Zap, color: "from-violet-500 to-violet-600" },
    { name: "Beyond File Names: Using Machine Learning to Reduce Alert Fatigue", company: "SANS", category: "AI Security", year: "2024", level: "Advanced", icon: Lightbulb, color: "from-yellow-500 to-orange-500" },
    
    // Practical Training
    { name: "Try Hack Me Pre Security Certificate", company: "TryHackMe", category: "Hands-on Training", year: "2024", level: "Beginner", icon: Trophy, color: "from-emerald-500 to-emerald-600" },
    { name: "Mastermind Cybersecurity Job Simulation", company: "Forage", category: "Job Simulation", year: "2024", level: "Intermediate", icon: Users, color: "from-yellow-500 to-yellow-600" },
    
    // Professional Development
    { name: "Information Security Professional", company: "Institute of Management Technology and Finance", category: "Professional Development", year: "2024", level: "Advanced", icon: Award, color: "from-gray-500 to-gray-600" },
    
    // Programming & Development
    { name: "Introduction to Cybersecurity Course", company: "Codecademy", category: "Programming", year: "2024", level: "Beginner", icon: Code, color: "from-teal-500 to-teal-600" },
    { name: "Introduction to Personal Digital Security Course", company: "Codecademy", category: "Personal Security", year: "2024", level: "Beginner", icon: Heart, color: "from-rose-500 to-rose-600" },
    
    // Infrastructure Protection
    { name: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)", company: "OPSWAT", category: "Infrastructure Security", year: "2024", level: "Intermediate", icon: Shield, color: "from-amber-500 to-amber-600" },
    
    // International & Policy
    { name: "Cyberdiplomacy Course", company: "United Nations Office for Disarmament Affairs", category: "Policy & Governance", year: "2024", level: "Advanced", icon: Globe, color: "from-slate-500 to-slate-600" }
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

  return (
    <section id="training" className="relative min-h-screen overflow-hidden flex items-center py-20">
      {/* Matching Home Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
        
        {/* Animated cyber elements matching home */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping delay-1000"></div>

        {/* Floating training elements */}
        {[...Array(10)].map((_, i) => (
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
            {i % 4 === 0 ? <BookOpen className="h-5 w-5" /> : 
             i % 4 === 1 ? <Award className="h-5 w-5" /> : 
             i % 4 === 2 ? <Trophy className="h-5 w-5" /> :
             <Star className="h-5 w-5" />}
          </div>
        ))}

        {/* Additional floating elements for richness */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Warm Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            Continuous learning journey
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Professional
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Training 🎓
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive collection of professional training certificates from leading cybersecurity and technology organizations. Every course represents a step forward in my mission to protect the digital world! 🚀
          </p>
        </div>

        {/* Category Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCertificates.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden group hover:scale-105"
              >
                {/* Certificate Header */}
                <div className={`h-2 bg-gradient-to-r ${getCategoryColor(cert.category)}`}></div>
                
                <div className="p-6">
                  {/* Certificate Icon and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color}`}>
                      <cert.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {cert.year}
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
        <div className={`mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                  {[...new Set(certificates.map(cert => cert.company))].length}
                </div>
                <div className="text-gray-300 font-medium">Training Providers</div>
                <div className="text-sm text-gray-500 mt-1">Industry leaders</div>
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
                <div className="text-sm text-gray-500 mt-1">Continuous learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Training Providers */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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