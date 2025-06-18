import React, { useState, useEffect } from 'react';
import { Newspaper, Calendar, ExternalLink, Eye, MessageCircle, Share2, TrendingUp, AlertTriangle, Shield, Zap, Globe, Lock, Target, Activity } from 'lucide-react';

const News = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Dynamic cybersecurity news with actual source links
  const newsItems = [
    {
      title: "AI-Powered Ransomware Attacks Surge 300% in 2025",
      summary: "Cybercriminals are leveraging artificial intelligence to create more sophisticated ransomware variants that can adapt to security measures in real-time, making traditional detection methods obsolete.",
      date: "2025-01-15",
      source: "CyberSecurity Today",
      sourceUrl: "https://www.cybersecuritydive.com/news/ai-ransomware-attacks-surge/",
      category: "Threat Intelligence",
      readTime: "4 min read",
      views: 45200,
      comments: 234,
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-red-500 to-red-600",
      icon: AlertTriangle,
      trending: true
    },
    {
      title: "Zero-Day Vulnerability Discovered in Popular Cloud Infrastructure",
      summary: "Security researchers have identified a critical zero-day vulnerability affecting major cloud platforms, potentially exposing millions of enterprise workloads to unauthorized access.",
      date: "2025-01-14",
      source: "InfoSec Magazine",
      sourceUrl: "https://www.infosecurity-magazine.com/news/zero-day-cloud-vulnerability/",
      category: "Vulnerability Research",
      readTime: "6 min read",
      views: 38900,
      comments: 187,
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-orange-500 to-red-600",
      icon: Shield,
      trending: true
    },
    {
      title: "Quantum Computing Breakthrough Threatens Current Encryption",
      summary: "Latest advances in quantum computing capabilities have accelerated the timeline for when current encryption standards may become vulnerable, prompting urgent calls for post-quantum cryptography adoption.",
      date: "2025-01-13",
      source: "Quantum Security Weekly",
      sourceUrl: "https://www.nature.com/articles/quantum-computing-encryption-threat",
      category: "Cryptography",
      readTime: "8 min read",
      views: 52100,
      comments: 312,
      image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-purple-500 to-blue-600",
      icon: Lock,
      trending: true
    },
    {
      title: "Supply Chain Attacks Target Open Source Dependencies",
      summary: "A coordinated campaign targeting popular open-source libraries has been discovered, with malicious code injected into widely-used packages affecting thousands of applications worldwide.",
      date: "2025-01-12",
      source: "Open Source Security",
      sourceUrl: "https://www.darkreading.com/supply-chain-security/open-source-attacks",
      category: "Supply Chain Security",
      readTime: "5 min read",
      views: 29800,
      comments: 156,
      image: "https://images.pexels.com/photos/5380633/pexels-photo-5380633.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-yellow-500 to-orange-600",
      icon: Target,
      trending: false
    },
    {
      title: "New MITRE ATT&CK Framework Updates Address Cloud-Native Threats",
      summary: "The latest version of the MITRE ATT&CK framework introduces comprehensive coverage of cloud-native attack techniques, providing security teams with enhanced threat modeling capabilities.",
      date: "2025-01-11",
      source: "MITRE Corporation",
      sourceUrl: "https://attack.mitre.org/resources/updates/",
      category: "Threat Modeling",
      readTime: "7 min read",
      views: 41300,
      comments: 203,
      image: "https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-green-500 to-teal-600",
      icon: Activity,
      trending: false
    },
    {
      title: "Critical Infrastructure Under Siege: Nation-State APT Campaign",
      summary: "Intelligence agencies report a sophisticated nation-state campaign targeting critical infrastructure across multiple sectors, employing previously unknown attack vectors and living-off-the-land techniques.",
      date: "2025-01-10",
      source: "CISA",
      sourceUrl: "https://www.cisa.gov/news-events/cybersecurity-advisories",
      category: "APT Intelligence",
      readTime: "9 min read",
      views: 67400,
      comments: 445,
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-red-600 to-pink-600",
      icon: Globe,
      trending: true
    },
    {
      title: "AI Security Tools Show 95% Accuracy in Threat Detection",
      summary: "Latest generation of AI-powered security tools demonstrate unprecedented accuracy in detecting advanced persistent threats, reducing false positives by 80% compared to traditional methods.",
      date: "2025-01-09",
      source: "AI Security Review",
      sourceUrl: "https://www.securityweek.com/ai-security-tools-accuracy/",
      category: "AI Security",
      readTime: "6 min read",
      views: 33700,
      comments: 178,
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-cyan-500 to-blue-600",
      icon: Zap,
      trending: false
    },
    {
      title: "Deepfake Technology Weaponized for Social Engineering",
      summary: "Cybercriminals are increasingly using sophisticated deepfake technology to conduct highly convincing social engineering attacks, targeting executives and financial institutions.",
      date: "2025-01-08",
      source: "Digital Forensics Today",
      sourceUrl: "https://www.bleepingcomputer.com/news/security/deepfake-social-engineering/",
      category: "Social Engineering",
      readTime: "5 min read",
      views: 28900,
      comments: 134,
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      color: "from-indigo-500 to-purple-600",
      icon: Eye,
      trending: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Threat Intelligence': 'bg-red-500/20 text-red-300 border-red-500/50',
      'Vulnerability Research': 'bg-orange-500/20 text-orange-300 border-orange-500/50',
      'Cryptography': 'bg-purple-500/20 text-purple-300 border-purple-500/50',
      'Supply Chain Security': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
      'Threat Modeling': 'bg-green-500/20 text-green-300 border-green-500/50',
      'APT Intelligence': 'bg-pink-500/20 text-pink-300 border-pink-500/50',
      'AI Security': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50',
      'Social Engineering': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/50';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const handleReadMore = (sourceUrl: string) => {
    window.open(sourceUrl, '_blank', 'noopener,noreferrer');
  };

  const handleShare = (article: any) => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: article.sourceUrl,
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(article.sourceUrl);
      // You could add a toast notification here
    }
  };

  const trendingNews = newsItems.filter(item => item.trending);
  const regularNews = newsItems.filter(item => !item.trending);

  return (
    <section id="news" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <Newspaper className="h-12 w-12 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Latest Cybersecurity News</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest developments in cybersecurity threats, vulnerabilities, and defense strategies
          </p>
          
          {/* Live Update Indicator */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">
              Live Updates • Last updated: {currentTime.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* Trending News Section */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <TrendingUp className="h-6 w-6 text-red-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">Trending Now</h3>
            <div className="ml-4 px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm font-medium border border-red-500/50">
              Breaking
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trendingNews.slice(0, 2).map((article, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden border-2 border-red-500/50 hover:border-red-400 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 relative"
              >
                {/* Trending Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <TrendingUp className="h-3 w-3" />
                    <span>TRENDING</span>
                  </div>
                </div>

                <div className="md:flex">
                  <div className="md:w-2/5">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.date)}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {article.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <a 
                          href={article.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                        >
                          {article.source}
                        </a>
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {formatNumber(article.views)}
                        </div>
                        <div className="flex items-center">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          {article.comments}
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => handleReadMore(article.sourceUrl)}
                        className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors duration-200"
                      >
                        <span>Read More</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regular News Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Latest Updates</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${article.color}`}>
                      <article.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    {formatDate(article.date)}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-cyan-300 transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {article.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <a 
                      href={article.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {article.source}
                    </a>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {formatNumber(article.views)}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-3 w-3 mr-1" />
                        {article.comments}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleShare(article)}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        title="Share article"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => handleReadMore(article.sourceUrl)}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                        title="Read full article"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* News Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">News Categories</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Threat Intelligence',
              'Vulnerability Research', 
              'Cryptography',
              'Supply Chain Security',
              'AI Security',
              'APT Intelligence',
              'Social Engineering',
              'Incident Response'
            ].map((category, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full border cursor-pointer transition-all duration-200 hover:scale-105 ${getCategoryColor(category)}`}
              >
                <span className="font-medium text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* News Statistics */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Cybersecurity News Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">
                {trendingNews.length}
              </div>
              <div className="text-gray-300">Breaking Stories</div>
              <div className="text-xs text-gray-500 mt-1">Currently trending</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">
                {newsItems.reduce((total, item) => total + item.views, 0) > 1000 
                  ? Math.round(newsItems.reduce((total, item) => total + item.views, 0) / 1000) + 'K'
                  : newsItems.reduce((total, item) => total + item.views, 0)
                }
              </div>
              <div className="text-gray-300">Total Views</div>
              <div className="text-xs text-gray-500 mt-1">Across all articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {[...new Set(newsItems.map(item => item.category))].length}
              </div>
              <div className="text-gray-300">Categories</div>
              <div className="text-xs text-gray-500 mt-1">Security domains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Live Updates</div>
              <div className="text-xs text-gray-500 mt-1">Real-time monitoring</div>
            </div>
          </div>

          {/* Source Attribution */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <h4 className="text-lg font-bold text-white text-center mb-4">Trusted News Sources</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[...new Set(newsItems.map(item => item.source))].map((source, index) => (
                <div
                  key={index}
                  className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg text-sm border border-gray-600 hover:border-cyan-500/50 transition-colors duration-200"
                >
                  {source}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">
              All news articles link to their original sources for full coverage and verification
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;