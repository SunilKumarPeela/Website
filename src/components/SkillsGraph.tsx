import React, { useState, useEffect } from 'react';
import { Network, Database, Shield, Cloud, Code, Eye, Lock, Server, Zap, Globe, GitBranch, Activity, Terminal, Key, FileText, Layers, Cpu, Monitor, HardDrive, Wifi, Settings, CheckCircle, Award, Target, Search, AlertTriangle, Braces, Play, Pause, RotateCcw, FastForward } from 'lucide-react';

const SkillsGraph = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Clear, organized skill categories with modern visualization
  const skillCategories = [
    {
      id: 'security-operations',
      name: 'Security Operations',
      description: 'Core security monitoring and incident response capabilities',
      color: 'from-red-500 to-pink-500',
      icon: Shield,
      skills: [
        { name: 'Splunk SIEM', level: 95, icon: Activity, description: 'Advanced log analysis and threat detection' },
        { name: 'WAZUH', level: 88, icon: Shield, description: 'Open-source security monitoring platform' },
        { name: 'Microsoft Sentinel', level: 85, icon: Eye, description: 'Cloud-native SIEM and SOAR solution' },
        { name: 'Threat Hunting', level: 90, icon: Target, description: 'Proactive threat identification and analysis' },
        { name: 'Incident Response', level: 92, icon: Zap, description: 'Rapid security incident management' },
        { name: 'Digital Forensics', level: 85, icon: Search, description: 'Evidence collection and analysis' }
      ]
    },
    {
      id: 'cloud-security',
      name: 'Cloud Security',
      description: 'Multi-cloud security architecture and protection strategies',
      color: 'from-blue-500 to-cyan-500',
      icon: Cloud,
      skills: [
        { name: 'AWS Security', level: 90, icon: Cloud, description: 'Amazon Web Services security implementation' },
        { name: 'Azure Security', level: 85, icon: Cloud, description: 'Microsoft Azure cloud protection' },
        { name: 'Google Cloud Security', level: 80, icon: Cloud, description: 'GCP security best practices' },
        { name: 'Kubernetes Security', level: 82, icon: Layers, description: 'Container orchestration security' },
        { name: 'Docker Security', level: 88, icon: Server, description: 'Container security and hardening' },
        { name: 'Cloud IAM', level: 93, icon: Key, description: 'Identity and access management' }
      ]
    },
    {
      id: 'programming',
      name: 'Programming & Automation',
      description: 'Security automation and development capabilities',
      color: 'from-green-500 to-emerald-500',
      icon: Code,
      skills: [
        { name: 'Python', level: 95, icon: Code, description: 'Security automation and scripting' },
        { name: 'PowerShell', level: 88, icon: Terminal, description: 'Windows automation and administration' },
        { name: 'Bash/Shell', level: 90, icon: Terminal, description: 'Linux system automation' },
        { name: 'SQL', level: 88, icon: Database, description: 'Database security and analysis' },
        { name: 'JavaScript', level: 80, icon: Braces, description: 'Web application security testing' },
        { name: 'Java', level: 85, icon: Code, description: 'Enterprise application security' }
      ]
    },
    {
      id: 'network-security',
      name: 'Network Security',
      description: 'Network infrastructure protection and monitoring',
      color: 'from-purple-500 to-violet-500',
      icon: Network,
      skills: [
        { name: 'Wireshark', level: 95, icon: Eye, description: 'Network packet analysis and monitoring' },
        { name: 'Nmap', level: 92, icon: Network, description: 'Network discovery and security auditing' },
        { name: 'Firewall Management', level: 90, icon: Shield, description: 'Network perimeter security' },
        { name: 'VPN Technologies', level: 88, icon: Lock, description: 'Secure remote access solutions' },
        { name: 'Network Protocols', level: 95, icon: Wifi, description: 'TCP/IP, DNS, DHCP expertise' },
        { name: 'Network Segmentation', level: 85, icon: GitBranch, description: 'Network isolation strategies' }
      ]
    },
    {
      id: 'vulnerability-management',
      name: 'Vulnerability Management',
      description: 'Vulnerability assessment and penetration testing',
      color: 'from-orange-500 to-red-500',
      icon: Target,
      skills: [
        { name: 'Nessus', level: 90, icon: Search, description: 'Vulnerability scanning and assessment' },
        { name: 'Burp Suite', level: 88, icon: Globe, description: 'Web application security testing' },
        { name: 'Kali Linux', level: 92, icon: Terminal, description: 'Penetration testing platform' },
        { name: 'Metasploit', level: 85, icon: Target, description: 'Exploitation framework and testing' },
        { name: 'OWASP Testing', level: 87, icon: Shield, description: 'Web application security standards' },
        { name: 'Risk Assessment', level: 90, icon: AlertTriangle, description: 'Security risk evaluation' }
      ]
    },
    {
      id: 'compliance',
      name: 'Compliance & Frameworks',
      description: 'Security standards and regulatory compliance',
      color: 'from-indigo-500 to-purple-500',
      icon: FileText,
      skills: [
        { name: 'NIST Framework', level: 90, icon: FileText, description: 'Cybersecurity framework implementation' },
        { name: 'ISO 27001', level: 85, icon: Award, description: 'Information security management' },
        { name: 'MITRE ATT&CK', level: 92, icon: Activity, description: 'Threat modeling and analysis' },
        { name: 'CIS Controls', level: 88, icon: CheckCircle, description: 'Critical security controls' },
        { name: 'PCI-DSS', level: 82, icon: Shield, description: 'Payment card industry compliance' },
        { name: 'STIG Compliance', level: 85, icon: Settings, description: 'Security technical implementation guides' }
      ]
    }
  ];

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(animationInterval);
  }, []);

  const currentCategory = skillCategories[activeCategory];

  // Calculate skill positions in a modern grid layout
  const getSkillPosition = (index, total) => {
    const cols = Math.ceil(Math.sqrt(total));
    const rows = Math.ceil(total / cols);
    const col = index % cols;
    const row = Math.floor(index / cols);
    
    const centerX = 50;
    const centerY = 50;
    const spacing = 60 / Math.max(cols, rows);
    
    return {
      x: centerX + (col - (cols - 1) / 2) * spacing,
      y: centerY + (row - (rows - 1) / 2) * spacing
    };
  };

  return (
    <section id="skills-graph" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clear Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide mb-8">
            <Cpu className="h-4 w-4 mr-2" />
            Interactive Skills Visualization
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Skills
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Graph
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Interactive visualization of my cybersecurity expertise across different domains. Click on categories to explore specific skill sets and proficiency levels.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  index === activeCategory
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
                }`}
              >
                <category.icon className="h-5 w-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Skills Visualization */}
        <div className="mb-16">
          <div className="max-w-6xl mx-auto">
            {/* Category Info */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${currentCategory.color} text-white font-bold text-lg mb-4`}>
                <currentCategory.icon className="h-6 w-6 mr-2" />
                {currentCategory.name}
              </div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {currentCategory.description}
              </p>
            </div>

            {/* Skills Graph Container */}
            <div className="relative bg-gray-800/30 rounded-3xl border border-gray-700 p-8 backdrop-blur-sm">
              {/* Grid Background */}
              <div className="absolute inset-8 opacity-10">
                <div className="h-full w-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px'
                }}></div>
              </div>

              {/* Skills Visualization */}
              <div className="relative h-96">
                {currentCategory.skills.map((skill, index) => {
                  const position = getSkillPosition(index, currentCategory.skills.length);
                  const isHovered = hoveredSkill === skill.name;
                  
                  return (
                    <div
                      key={skill.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Node */}
                      <div className={`relative transition-all duration-500 ${
                        isHovered ? 'scale-125' : 'hover:scale-110'
                      }`}>
                        {/* Proficiency Ring */}
                        <div className="relative w-24 h-24">
                          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              stroke="rgba(75, 85, 99, 0.3)"
                              strokeWidth="6"
                              fill="none"
                            />
                            {/* Progress circle */}
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              stroke="url(#gradient)"
                              strokeWidth="6"
                              fill="none"
                              strokeDasharray={`${skill.level * 2.83} 283`}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                              style={{ animationDelay: `${index * 0.2}s` }}
                            />
                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#3b82f6" />
                              </linearGradient>
                            </defs>
                          </svg>
                          
                          {/* Skill Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentCategory.color} flex items-center justify-center shadow-lg`}>
                              <skill.icon className="h-6 w-6 text-white" />
                            </div>
                          </div>
                          
                          {/* Proficiency Percentage */}
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gray-900/90 px-2 py-1 rounded text-xs text-cyan-300 font-bold border border-cyan-500/30">
                              {skill.level}%
                            </div>
                          </div>
                        </div>

                        {/* Skill Name */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                          <div className="text-white font-medium text-sm whitespace-nowrap">
                            {skill.name}
                          </div>
                        </div>

                        {/* Detailed Tooltip */}
                        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-3 bg-gray-900/95 backdrop-blur-sm text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 border border-cyan-500/30 shadow-xl`}>
                          <div className="text-center">
                            <div className="font-bold text-cyan-300 mb-1">{skill.name}</div>
                            <div className="text-gray-300 text-xs mb-2">{skill.description}</div>
                            <div className="flex items-center justify-center space-x-2">
                              <div className="text-cyan-400 font-bold">{skill.level}%</div>
                              <div className="text-gray-400">Proficiency</div>
                            </div>
                          </div>
                        </div>

                        {/* Hover Effect */}
                        {isHovered && (
                          <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-pulse opacity-75"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Category Overview Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">All Skill Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`bg-gray-800/50 rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === activeCategory
                    ? 'border-cyan-400 shadow-lg shadow-cyan-400/20'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4 ${
                    index === activeCategory ? 'scale-110' : ''
                  } transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-400 mb-4">{category.description}</p>
                  
                  {/* Skills Count and Average */}
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{category.skills.length}</div>
                      <div className="text-xs text-gray-500">Skills</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                        {Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length)}%
                      </div>
                      <div className="text-xs text-gray-500">Avg Level</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Statistics */}
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Skills Portfolio Statistics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
              </div>
              <div className="text-gray-300">Total Skills</div>
              <div className="text-xs text-gray-500 mt-1">Across all domains</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {skillCategories.length}
              </div>
              <div className="text-gray-300">Skill Categories</div>
              <div className="text-xs text-gray-500 mt-1">Specialized domains</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {Math.round(
                  skillCategories.reduce((totalSum, category) => 
                    totalSum + category.skills.reduce((sum, skill) => sum + skill.level, 0), 0
                  ) / skillCategories.reduce((total, category) => total + category.skills.length, 0)
                )}%
              </div>
              <div className="text-gray-300">Average Proficiency</div>
              <div className="text-xs text-gray-500 mt-1">Overall expertise level</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                8+
              </div>
              <div className="text-gray-300">Years Experience</div>
              <div className="text-xs text-gray-500 mt-1">In cybersecurity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGraph;