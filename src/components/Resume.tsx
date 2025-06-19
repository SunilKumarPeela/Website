import React, { useState, useEffect } from 'react';
import { Download, FileText, Eye, Star, Award, CheckCircle, Calendar, User, Mail, Phone, MapPin, Sparkles, Heart, Trophy, Rocket } from 'lucide-react';

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [downloadCount, setDownloadCount] = useState(1247); // Simulated download count

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownload = () => {
    // Increment download count (in a real app, this would be tracked server-side)
    setDownloadCount(prev => prev + 1);
    
    // Create a download link for the resume
    const link = document.createElement('a');
    link.href = '/resume/Sunil_Kumar_Peela_Resume.pdf'; // You'll need to add your actual resume file
    link.download = 'Sunil_Kumar_Peela_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    // Open resume in new tab for preview
    window.open('/resume/Sunil_Kumar_Peela_Resume.pdf', '_blank');
  };

  const resumeHighlights = [
    {
      icon: Award,
      title: "14+ Certifications",
      description: "Industry-recognized credentials",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Trophy,
      title: "8+ Years Experience",
      description: "Cybersecurity expertise",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Patent Innovation",
      description: "Quantum-inspired security",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Rocket,
      title: "Leadership Roles",
      description: "VP of Tech Masters Connect",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "linussunil38@gmail.com" },
    { icon: Phone, label: "Phone", value: "+1 (XXX) XXX-XXXX" },
    { icon: MapPin, label: "Location", value: "Fort Collins, CO" },
    { icon: Calendar, label: "Available", value: "Immediately" }
  ];

  return (
    <section id="resume" className="relative min-h-screen overflow-hidden flex items-center py-20">
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

        {/* Floating document elements */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`doc-${i}`}
            className="absolute text-cyan-400/20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 ? <FileText className="h-4 w-4" /> : 
             i % 3 === 1 ? <Download className="h-4 w-4" /> : 
             <Eye className="h-4 w-4" />}
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
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            Professional document
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Download My
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Resume 📄
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get a comprehensive overview of my cybersecurity expertise, professional experience, and achievements in a beautifully formatted PDF document. Perfect for HR teams and hiring managers! 🚀
          </p>
        </div>

        {/* Main Resume Card */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-500 overflow-hidden group">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
              
              <div className="relative z-10 p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Resume Preview */}
                  <div className="text-center lg:text-left">
                    {/* Resume Icon */}
                    <div className="flex justify-center lg:justify-start mb-8">
                      <div className="relative">
                        <div className="w-32 h-40 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-2xl border-4 border-gray-300 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
                          <FileText className="h-16 w-16 text-gray-600 mb-2" />
                          <div className="text-gray-700 font-bold text-sm">RESUME</div>
                          <div className="text-gray-500 text-xs">PDF</div>
                        </div>
                        
                        {/* Floating elements around resume */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Star className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Resume Details */}
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Sunil Kumar Peela
                    </h3>
                    <p className="text-xl text-cyan-400 mb-6">
                      Cybersecurity Professional Resume
                    </p>
                    
                    {/* File Info */}
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center justify-center lg:justify-start text-gray-300">
                        <FileText className="h-5 w-5 mr-2 text-cyan-400" />
                        <span>PDF Format • 2 Pages • Updated January 2025</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start text-gray-300">
                        <Download className="h-5 w-5 mr-2 text-green-400" />
                        <span>{downloadCount.toLocaleString()} Downloads</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <button
                        onClick={handleDownload}
                        className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                      >
                        <Download className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                        Download Resume
                      </button>
                      
                      <button
                        onClick={handlePreview}
                        className="flex items-center justify-center px-8 py-4 border-2 border-cyan-500/30 text-white rounded-2xl font-bold transition-all duration-300 hover:border-cyan-400 hover:scale-105 bg-gray-800/50 backdrop-blur-sm"
                      >
                        <Eye className="h-5 w-5 mr-2" />
                        Preview
                      </button>
                    </div>
                  </div>

                  {/* Right Column - Resume Highlights */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">
                      What's Inside? ✨
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {resumeHighlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="bg-gray-900/50 rounded-xl p-4 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                        >
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-3`}>
                            <highlight.icon className="h-6 w-6 text-white" />
                          </div>
                          <h5 className="text-lg font-bold text-white mb-2">{highlight.title}</h5>
                          <p className="text-gray-300 text-sm">{highlight.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Quick Contact Info */}
                    <div className="mt-8 p-6 bg-gray-900/50 rounded-xl border border-cyan-500/20">
                      <h5 className="text-lg font-bold text-white mb-4 text-center">Quick Contact 📞</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {contactInfo.map((contact, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <contact.icon className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="text-gray-300">{contact.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Sections Preview */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center">
            <FileText className="h-8 w-8 text-cyan-400 mr-3" />
            Resume Sections 📋
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Professional Summary", icon: User, description: "Cybersecurity expert overview", color: "from-blue-500 to-blue-600" },
              { title: "Work Experience", icon: Award, description: "8+ years in cybersecurity", color: "from-green-500 to-green-600" },
              { title: "Education", icon: Star, description: "MS in Computer Information Systems", color: "from-purple-500 to-purple-600" },
              { title: "Certifications", icon: Trophy, description: "14+ industry certifications", color: "from-yellow-500 to-orange-500" },
              { title: "Technical Skills", icon: Rocket, description: "Comprehensive skill matrix", color: "from-cyan-500 to-blue-500" },
              { title: "Projects & Patents", icon: Heart, description: "Innovation and achievements", color: "from-pink-500 to-rose-500" }
            ].map((section, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center mx-auto mb-4`}>
                  <section.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{section.title}</h4>
                <p className="text-gray-300 text-sm">{section.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Statistics */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-yellow-400 mr-3" />
              Resume Impact 📊
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {downloadCount.toLocaleString()}
                </div>
                <div className="text-gray-300 font-medium">Total Downloads</div>
                <div className="text-xs text-gray-500 mt-1">And counting!</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <div className="text-gray-300 font-medium">Pages</div>
                <div className="text-xs text-gray-500 mt-1">Comprehensive yet concise</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  PDF
                </div>
                <div className="text-gray-300 font-medium">Format</div>
                <div className="text-xs text-gray-500 mt-1">Professional standard</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  2025
                </div>
                <div className="text-gray-300 font-medium">Last Updated</div>
                <div className="text-xs text-gray-500 mt-1">Always current</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;