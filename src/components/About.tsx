import React, { useState, useEffect } from 'react';
import { Heart, Lightbulb, Target, Zap, Globe, Award, CheckCircle, ArrowRight, Star, Sparkles, Brain, Shield, Code, Users, Trophy, Rocket, Eye } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState('passion');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const storyTabs = [
    { id: 'passion', label: 'My Passion', icon: Heart },
    { id: 'journey', label: 'My Journey', icon: Star },
    { id: 'vision', label: 'My Vision', icon: Lightbulb }
  ];

  const achievements = [
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Currently pursuing MS in Computer Information Systems while earning 14+ professional certifications",
      color: "from-blue-400 to-blue-600",
      stats: "Always Growing"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Leading 100+ tech professionals as VP of Tech Masters Connect, fostering cybersecurity education",
      color: "from-pink-400 to-pink-600",
      stats: "100+ Lives Touched"
    },
    {
      icon: Zap,
      title: "Innovation Drive",
      description: "Filed patent for quantum-inspired cybersecurity system, pushing boundaries of digital protection",
      color: "from-yellow-400 to-orange-500",
      stats: "1 Patent Filed"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Experience across continents, from India's tech hubs to Colorado's innovation ecosystem",
      color: "from-green-400 to-emerald-600",
      stats: "2 Continents"
    }
  ];

  const personalValues = [
    "Making technology safer for everyone",
    "Empowering others through knowledge sharing",
    "Building bridges between security and usability",
    "Creating inclusive cybersecurity communities",
    "Turning complex problems into simple solutions",
    "Inspiring the next generation of cyber defenders"
  ];

  return (
    <section id="about" className="relative min-h-screen overflow-hidden flex items-center py-20">
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
        
        {/* Additional floating elements for richness */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Warm Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            Getting to know me
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            My Story of
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Passion & Purpose
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every great cybersecurity professional has a story. Here's mine - filled with curiosity, determination, and an unwavering commitment to making the digital world safer.
          </p>
        </div>

        {/* Story Navigation */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex bg-gray-800/50 backdrop-blur-md rounded-3xl p-2 border border-cyan-500/20">
            {storyTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStory(tab.id)}
                className={`flex items-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeStory === tab.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Story Content */}
        <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {activeStory === 'passion' && (
            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Why I Love Cybersecurity</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      My passion for cybersecurity began with a simple belief: <span className="text-cyan-300 font-semibold">technology should empower, not endanger</span>. 
                      Every day, I wake up excited to solve puzzles that protect people's digital lives.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      From analyzing threat patterns to building secure systems, I find joy in being the guardian that stands between 
                      cyber threats and the people who depend on technology to live, work, and dream.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-cyan-300 mb-4">What Drives Me Daily:</h4>
                    {personalValues.slice(0, 4).map((value, index) => (
                      <div key={index} className="flex items-start">
                        <Heart className="h-5 w-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeStory === 'journey' && (
            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">My Path to Excellence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {achievements.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-gray-900/50 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white mb-2">{item.stats}</div>
                      <h4 className="text-sm font-bold text-cyan-300 mb-3">{item.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeStory === 'vision' && (
            <div className="max-w-5xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
                <h3 className="text-3xl font-bold text-white mb-6 text-center">Building Tomorrow's Security</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300 mb-4">My Vision for the Future</h4>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      I envision a world where cybersecurity is seamless, intuitive, and accessible to everyone. 
                      Where small businesses have the same protection as Fortune 500 companies, and where 
                      <span className="text-cyan-300 font-semibold"> innovation and security work hand in hand</span>.
                    </p>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Through quantum-inspired solutions, AI-driven defense systems, and community education, 
                      I'm working to make this vision a reality.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cyan-300 mb-4">How I'm Making It Happen</h4>
                    <div className="space-y-3">
                      {personalValues.slice(4).map((value, index) => (
                        <div key={index} className="flex items-start">
                          <Lightbulb className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Inspiring Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: "8+", label: "Years of Dedication", color: "from-blue-400 to-blue-600" },
            { value: "14+", label: "Certifications Earned", color: "from-green-400 to-emerald-600" },
            { value: "100+", label: "People Mentored", color: "from-purple-400 to-pink-600" },
            { value: "∞", label: "Dreams Protected", color: "from-yellow-400 to-orange-600" }
          ].map((stat, index) => (
            <div key={index} className="text-center group bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300">
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Warm Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span>Let's Create Something Amazing Together</span>
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;