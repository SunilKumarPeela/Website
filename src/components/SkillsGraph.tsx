import React, { useState, useEffect } from 'react';
import { Network, Database, Shield, Cloud, Code, Eye, Lock, Server, Zap, Globe, GitBranch, Activity, Terminal, Key, FileText, Layers, Cpu, Monitor, HardDrive, Wifi, Settings, CheckCircle, Award, Target, Search, AlertTriangle, Braces } from 'lucide-react';

const SkillsGraph = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Comprehensive cybersecurity pipeline stages with all tools
  const securityStages = [
    {
      id: 'reconnaissance',
      name: 'Reconnaissance & Discovery',
      description: 'Information gathering and network discovery phase',
      color: 'from-blue-500 to-cyan-500',
      icon: Search,
      tools: [
        { name: 'Nmap', category: 'Network Scanner', icon: Network, color: 'from-blue-600 to-blue-700' },
        { name: 'Wireshark', category: 'Packet Analyzer', icon: Eye, color: 'from-green-600 to-green-700' },
        { name: 'Nessus', category: 'Vulnerability Scanner', icon: Shield, color: 'from-yellow-600 to-yellow-700' },
        { name: 'Kali Linux', category: 'Penetration Testing OS', icon: Terminal, color: 'from-gray-600 to-gray-700' },
        { name: 'OSINT Tools', category: 'Intelligence Gathering', icon: Search, color: 'from-purple-600 to-purple-700' }
      ]
    },
    {
      id: 'assessment',
      name: 'Vulnerability Assessment',
      description: 'Identifying and analyzing security weaknesses',
      color: 'from-red-500 to-orange-500',
      icon: AlertTriangle,
      tools: [
        { name: 'Nessus', category: 'Vulnerability Scanner', icon: Shield, color: 'from-yellow-600 to-yellow-700' },
        { name: 'Burp Suite', category: 'Web App Security', icon: Globe, color: 'from-orange-600 to-orange-700' },
        { name: 'CIS-CAT', category: 'Configuration Assessment', icon: Settings, color: 'from-blue-700 to-blue-800' },
        { name: 'Python', category: 'Automation Scripts', icon: Code, color: 'from-blue-500 to-blue-600' },
        { name: 'STIG', category: 'Security Guidelines', icon: FileText, color: 'from-indigo-600 to-indigo-700' }
      ]
    },
    {
      id: 'penetration',
      name: 'Penetration Testing',
      description: 'Active security testing and exploitation',
      color: 'from-purple-500 to-pink-500',
      icon: Target,
      tools: [
        { name: 'Kali Linux', category: 'Penetration Testing OS', icon: Terminal, color: 'from-gray-600 to-gray-700' },
        { name: 'Burp Suite', category: 'Web App Testing', icon: Globe, color: 'from-orange-600 to-orange-700' },
        { name: 'Metasploit', category: 'Exploitation Framework', icon: Target, color: 'from-red-600 to-red-700' },
        { name: 'Java', category: 'Exploit Development', icon: Code, color: 'from-orange-500 to-orange-600' },
        { name: 'C', category: 'Low-level Programming', icon: Terminal, color: 'from-gray-500 to-gray-600' }
      ]
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure Security',
      description: 'Network and system hardening',
      color: 'from-green-500 to-emerald-500',
      icon: Server,
      tools: [
        { name: 'Firewalls', category: 'Network Security', icon: Shield, color: 'from-red-600 to-red-700' },
        { name: 'VLANs', category: 'Network Segmentation', icon: Network, color: 'from-blue-600 to-blue-700' },
        { name: 'VPN', category: 'Secure Tunneling', icon: Globe, color: 'from-teal-600 to-teal-700' },
        { name: 'TCP/IP', category: 'Network Protocols', icon: Wifi, color: 'from-cyan-600 to-cyan-700' },
        { name: 'Routing', category: 'Network Infrastructure', icon: GitBranch, color: 'from-indigo-600 to-indigo-700' },
        { name: 'Subnetting', category: 'Network Design', icon: Network, color: 'from-blue-700 to-blue-800' }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud Security',
      description: 'Cloud platform security and compliance',
      color: 'from-cyan-500 to-blue-500',
      icon: Cloud,
      tools: [
        { name: 'AWS', category: 'Cloud Platform', icon: Cloud, color: 'from-orange-500 to-orange-600' },
        { name: 'Azure', category: 'Cloud Platform', icon: Cloud, color: 'from-blue-600 to-blue-700' },
        { name: 'Google Cloud', category: 'Cloud Platform', icon: Cloud, color: 'from-green-600 to-green-700' },
        { name: 'IAM', category: 'Identity Management', icon: Key, color: 'from-purple-600 to-purple-700' },
        { name: 'RBAC', category: 'Access Control', icon: Lock, color: 'from-red-600 to-red-700' }
      ]
    },
    {
      id: 'monitoring',
      name: 'Security Monitoring',
      description: 'Continuous monitoring and threat detection',
      color: 'from-yellow-500 to-orange-500',
      icon: Eye,
      tools: [
        { name: 'Splunk', category: 'SIEM Platform', icon: Activity, color: 'from-purple-600 to-purple-700' },
        { name: 'WAZUH', category: 'Security Monitoring', icon: Eye, color: 'from-blue-600 to-blue-700' },
        { name: 'EDR', category: 'Endpoint Detection', icon: Monitor, color: 'from-green-600 to-green-700' },
        { name: 'Log Analysis', category: 'Security Analytics', icon: FileText, color: 'from-yellow-600 to-yellow-700' },
        { name: 'KQL', category: 'Query Language', icon: Database, color: 'from-indigo-600 to-indigo-700' }
      ]
    },
    {
      id: 'incident',
      name: 'Incident Response',
      description: 'Threat hunting and incident management',
      color: 'from-red-500 to-pink-500',
      icon: Zap,
      tools: [
        { name: 'MITRE ATT&CK', category: 'Threat Framework', icon: Activity, color: 'from-pink-600 to-pink-700' },
        { name: 'Digital Forensics', category: 'Evidence Analysis', icon: Search, color: 'from-purple-600 to-purple-700' },
        { name: 'Python', category: 'Automation Scripts', icon: Code, color: 'from-blue-500 to-blue-600' },
        { name: 'R', category: 'Data Analysis', icon: Code, color: 'from-blue-600 to-blue-700' },
        { name: 'Threat Intelligence', category: 'Threat Analysis', icon: Eye, color: 'from-red-600 to-red-700' }
      ]
    },
    {
      id: 'data',
      name: 'Data Security',
      description: 'Data protection and encryption',
      color: 'from-indigo-500 to-purple-500',
      icon: Database,
      tools: [
        { name: 'AES', category: 'Encryption', icon: Key, color: 'from-purple-600 to-purple-700' },
        { name: 'SSL/TLS', category: 'Transport Security', icon: Lock, color: 'from-green-600 to-green-700' },
        { name: 'SQL', category: 'Database Security', icon: Database, color: 'from-blue-600 to-blue-700' },
        { name: 'NoSQL', category: 'Database Technology', icon: HardDrive, color: 'from-orange-600 to-orange-700' },
        { name: 'Zero Trust', category: 'Security Model', icon: Shield, color: 'from-red-600 to-red-700' }
      ]
    },
    {
      id: 'compliance',
      name: 'Compliance & Governance',
      description: 'Regulatory compliance and frameworks',
      color: 'from-teal-500 to-cyan-500',
      icon: FileText,
      tools: [
        { name: 'NIST', category: 'Security Framework', icon: FileText, color: 'from-blue-600 to-blue-700' },
        { name: 'ISO 27001', category: 'Security Standard', icon: Award, color: 'from-green-600 to-green-700' },
        { name: 'PCI-DSS', category: 'Payment Security', icon: Shield, color: 'from-red-600 to-red-700' },
        { name: 'HIPAA', category: 'Healthcare Compliance', icon: FileText, color: 'from-purple-600 to-purple-700' },
        { name: 'SOX', category: 'Financial Compliance', icon: FileText, color: 'from-yellow-600 to-yellow-700' },
        { name: 'GLBA', category: 'Financial Privacy', icon: Lock, color: 'from-teal-600 to-teal-700' }
      ]
    },
    {
      id: 'development',
      name: 'Security Development',
      description: 'Secure coding and automation',
      color: 'from-orange-500 to-red-500',
      icon: Code,
      tools: [
        { name: 'Python', category: 'Security Automation', icon: Code, color: 'from-blue-500 to-blue-600' },
        { name: 'JavaScript', category: 'Web Security', icon: Braces, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Java', category: 'Enterprise Security', icon: Code, color: 'from-orange-500 to-orange-600' },
        { name: 'YAML', category: 'Configuration', icon: FileText, color: 'from-gray-600 to-gray-700' },
        { name: 'DevSecOps', category: 'Secure Development', icon: GitBranch, color: 'from-green-600 to-green-700' }
      ]
    }
  ];

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % securityStages.length);
    }, 5000);

    const animationInterval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 1000);

    return () => {
      clearInterval(stageInterval);
      clearInterval(animationInterval);
    };
  }, [securityStages.length]);

  const getToolPosition = (stageIndex, toolIndex, totalTools) => {
    const radius = 120;
    const centerX = 200;
    const centerY = 200;
    const angle = (toolIndex / totalTools) * 2 * Math.PI - Math.PI / 2;
    
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  const getStagePosition = (stageIndex, totalStages) => {
    const cols = 5;
    const rows = Math.ceil(totalStages / cols);
    const col = stageIndex % cols;
    const row = Math.floor(stageIndex / cols);
    
    return {
      x: (col + 1) * (100 / (cols + 1)),
      y: (row + 1) * (100 / (rows + 1))
    };
  };

  return (
    <section id="skills-graph" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <Cpu className="h-12 w-12 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Cybersecurity Arsenal Matrix</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Revolutionary visualization of comprehensive cybersecurity toolkit across the entire security lifecycle - from reconnaissance to compliance
          </p>
        </div>

        {/* Active Stage Display */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${securityStages[activeStage]?.color}/10`}></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r ${securityStages[activeStage]?.color} text-white font-bold text-lg mb-4`}>
                  {React.createElement(securityStages[activeStage]?.icon, { className: "h-6 w-6" })}
                  <span>Stage {activeStage + 1}: {securityStages[activeStage]?.name}</span>
                </div>
                <p className="text-gray-300 text-lg">
                  {securityStages[activeStage]?.description}
                </p>
              </div>

              {/* Tools Constellation */}
              <div className="relative h-96 mx-auto max-w-2xl">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                    </radialGradient>
                  </defs>
                  
                  {/* Center circle */}
                  <circle
                    cx="200"
                    cy="200"
                    r="60"
                    fill="url(#centerGradient)"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                  
                  {/* Connection lines to tools */}
                  {securityStages[activeStage]?.tools.map((tool, index) => {
                    const pos = getToolPosition(activeStage, index, securityStages[activeStage].tools.length);
                    return (
                      <line
                        key={index}
                        x1="200"
                        y1="200"
                        x2={pos.x}
                        y2={pos.y}
                        stroke="#06b6d4"
                        strokeWidth="1"
                        strokeOpacity="0.5"
                        strokeDasharray="3,3"
                        className="animate-pulse"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      />
                    );
                  })}
                </svg>

                {/* Center Stage Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${securityStages[activeStage]?.color} flex items-center justify-center border-4 border-white/20 shadow-2xl`}>
                    {React.createElement(securityStages[activeStage]?.icon, { 
                      className: "h-8 w-8 text-white" 
                    })}
                  </div>
                </div>

                {/* Tool Nodes */}
                {securityStages[activeStage]?.tools.map((tool, index) => {
                  const pos = getToolPosition(activeStage, index, securityStages[activeStage].tools.length);
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ left: `${(pos.x / 400) * 100}%`, top: `${(pos.y / 400) * 100}%` }}
                      onMouseEnter={() => setHoveredTool(tool.name)}
                      onMouseLeave={() => setHoveredTool(null)}
                    >
                      <div className={`w-16 h-16 rounded-xl border-2 transition-all duration-500 ${
                        hoveredTool === tool.name
                          ? `border-cyan-400 shadow-lg shadow-cyan-400/25 bg-gradient-to-br ${tool.color}/20 scale-125`
                          : 'border-gray-600 bg-gray-900 hover:border-gray-500 hover:scale-110'
                      }`}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        transform: `scale(${1 + Math.sin((animationPhase + index) * 0.5) * 0.1})`
                      }}>
                        <div className="h-full flex flex-col items-center justify-center p-2">
                          <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${tool.color} flex items-center justify-center mb-1`}>
                            <tool.icon className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs font-medium text-center leading-tight text-gray-300 truncate w-full">
                            {tool.name}
                          </span>
                        </div>
                      </div>

                      {/* Hover Tooltip */}
                      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20`}>
                        <div className="text-center">
                          <div className="font-medium">{tool.name}</div>
                          <div className="text-gray-300 text-xs">{tool.category}</div>
                        </div>
                      </div>

                      {/* Pulsing ring animation */}
                      <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-ping opacity-20" 
                           style={{ animationDelay: `${index * 0.3}s` }}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Complete Security Pipeline Overview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Complete Security Pipeline</h3>
          
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 relative overflow-hidden">
            <div className="relative h-96">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Pipeline flow lines */}
                {securityStages.map((stage, index) => {
                  if (index === securityStages.length - 1) return null;
                  const currentPos = getStagePosition(index, securityStages.length);
                  const nextPos = getStagePosition(index + 1, securityStages.length);
                  
                  return (
                    <line
                      key={index}
                      x1={currentPos.x}
                      y1={currentPos.y}
                      x2={nextPos.x}
                      y2={nextPos.y}
                      stroke="url(#pipelineGradient)"
                      strokeWidth="0.5"
                      strokeDasharray="2,1"
                      className="animate-pulse"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  );
                })}
              </svg>

              {/* Stage Nodes */}
              {securityStages.map((stage, index) => {
                const pos = getStagePosition(index, securityStages.length);
                return (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                    onClick={() => setActiveStage(index)}
                  >
                    <div className={`w-20 h-20 rounded-xl border-2 transition-all duration-300 ${
                      index === activeStage
                        ? `border-cyan-400 shadow-lg shadow-cyan-400/25 bg-gradient-to-br ${stage.color}/20 scale-125`
                        : 'border-gray-600 bg-gray-900 hover:border-gray-500 hover:scale-110'
                    }`}>
                      <div className="h-full flex flex-col items-center justify-center p-2">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${stage.color} flex items-center justify-center mb-1`}>
                          <stage.icon className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-center leading-tight text-gray-300">
                          Stage {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Stage tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20">
                      <div className="text-center">
                        <div className="font-medium">{stage.name}</div>
                        <div className="text-gray-300 text-xs">{stage.tools.length} tools</div>
                      </div>
                    </div>

                    {/* Active stage pulse */}
                    {index === activeStage && (
                      <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-ping opacity-75"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stage Selector Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Security Lifecycle Stages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {securityStages.map((stage, index) => (
              <div
                key={index}
                onClick={() => setActiveStage(index)}
                className={`bg-gray-800 rounded-lg p-4 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === activeStage
                    ? 'border-cyan-400 shadow-lg shadow-cyan-400/20'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${stage.color} mb-4`}></div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stage.color} flex items-center justify-center mx-auto mb-3`}>
                  <stage.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-sm font-bold text-white text-center mb-2">{stage.name}</h4>
                <p className="text-xs text-gray-400 text-center mb-3">{stage.description}</p>
                <div className="text-center">
                  <span className="text-xs text-cyan-400 font-medium">{stage.tools.length} Tools</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arsenal Statistics */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Arsenal Capabilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {securityStages.flatMap(stage => stage.tools).length}
              </div>
              <div className="text-gray-300">Total Tools</div>
              <div className="text-xs text-gray-500 mt-1">Across all stages</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {securityStages.length}
              </div>
              <div className="text-gray-300">Security Stages</div>
              <div className="text-xs text-gray-500 mt-1">Complete lifecycle</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {[...new Set(securityStages.flatMap(stage => stage.tools.map(tool => tool.category)))].length}
              </div>
              <div className="text-gray-300">Tool Categories</div>
              <div className="text-xs text-gray-500 mt-1">Specialized domains</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-gray-300">Coverage</div>
              <div className="text-xs text-gray-500 mt-1">End-to-end security</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGraph;