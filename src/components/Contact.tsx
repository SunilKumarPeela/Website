import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, MessageCircle, User, Calendar, Zap, Globe, Shield, Heart, Star, Coffee, Sparkles, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      value: "linussunil38@gmail.com",
      link: "mailto:linussunil38@gmail.com",
      color: "from-pink-400 to-rose-500",
      description: "I love hearing from new people!",
      emoji: "💌"
    },
    {
      icon: Linkedin,
      title: "Connect on LinkedIn",
      value: "Let's network professionally",
      link: "https://www.linkedin.com/in/sunilkumarpeela/",
      color: "from-blue-400 to-indigo-500",
      description: "Share ideas and opportunities",
      emoji: "🤝"
    },
    {
      icon: Github,
      title: "Check My Code",
      value: "See what I'm building",
      link: "https://github.com/SunilKumarPeela",
      color: "from-gray-400 to-slate-500",
      description: "Open source contributions",
      emoji: "💻"
    },
    {
      icon: MapPin,
      title: "Meet in Person",
      value: "Fort Collins, CO",
      link: "#",
      color: "from-green-400 to-emerald-500",
      description: "Coffee chats welcome!",
      emoji: "☕"
    }
  ];

  const quickFacts = [
    { label: "Response Time", value: "< 24 hours", icon: Zap, color: "text-yellow-400" },
    { label: "Availability", value: "Open to opportunities", icon: Calendar, color: "text-green-400" },
    { label: "Collaboration", value: "Always excited", icon: Heart, color: "text-pink-400" },
    { label: "Time Zone", value: "Mountain Time (MT)", icon: Globe, color: "text-blue-400" }
  ];

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden flex items-center py-20">
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
        
        {/* Floating heart and message elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`heart-${i}`}
            className="absolute text-pink-400/20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 ? <Heart className="h-4 w-4" /> : 
             i % 3 === 1 ? <Mail className="h-4 w-4" /> : 
             <MessageCircle className="h-4 w-4" />}
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
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide mb-8">
            <Heart className="h-4 w-4 mr-2" />
            Let's start a conversation
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Let's Create
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Something Amazing ✨
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I believe the best projects start with great conversations. Whether you have an exciting opportunity, 
            a challenging problem to solve, or just want to chat about cybersecurity, I'd love to hear from you! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Friendly Style */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Coffee className="h-8 w-8 text-yellow-400 mr-3" />
              Ways to Connect
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group flex items-center p-6 bg-gray-800/50 backdrop-blur-md rounded-3xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mr-4">{method.emoji}</div>
                  <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white text-lg mb-1">{method.title}</div>
                    <div className="text-cyan-300 text-sm mb-1">
                      {method.value}
                    </div>
                    <div className="text-gray-300 text-sm">{method.description}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Facts - Friendly Style */}
            <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
              <h4 className="font-bold text-white text-xl mb-6 flex items-center">
                <Star className="h-6 w-6 text-yellow-400 mr-2" />
                Good to Know ⭐
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-900/50 rounded-2xl border border-cyan-500/20">
                    <fact.icon className={`h-6 w-6 ${fact.color} mr-4`} />
                    <div className="flex-1">
                      <div className="text-white font-medium">{fact.label}</div>
                      <div className="text-gray-300 text-sm">{fact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form - Warm and Inviting */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <MessageCircle className="h-8 w-8 text-purple-400 mr-3" />
              Send Me a Message 💬
            </h3>
            
            {isSubmitted ? (
              <div className="bg-gray-800/50 backdrop-blur-md border border-green-400/50 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-6">🎉</div>
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h4>
                <p className="text-green-300 text-lg">Thank you for reaching out! I'm excited to connect with you and will get back to you within 24 hours. 😊</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                      What should I call you? *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      placeholder="Your awesome name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      How can I reach you? *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                    What's this about? *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
                    placeholder="Job opportunity, collaboration, or just saying hi!"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                    Tell me more! *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="I'd love to hear about your project, opportunity, or just chat about cybersecurity! Don't be shy - I'm friendly! 😊"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group w-full px-8 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Send My Message! 🚀</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Warm Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Something Amazing Together? 🌟</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              Whether you're looking for a cybersecurity expert, a passionate collaborator, or just want to chat about the latest in tech, 
              I'm always excited to meet new people and explore new possibilities! ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:linussunil38@gmail.com"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <Mail className="h-5 w-5 mr-2" />
                Let's Chat! 💬
              </a>
              <a
                href="https://www.linkedin.com/in/sunilkumarpeela/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500/30 text-white rounded-2xl font-bold transition-all duration-300 hover:border-cyan-400 hover:scale-105 bg-gray-800/50 backdrop-blur-sm"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn 🤝
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;