import React, { useState } from 'react';
import { Shield, Server, Code, Eye, Lock, Globe, Cpu, Cloud, Database, Network, Zap, Settings, CheckCircle, Wifi, HardDrive, Terminal, Key, FileText, Activity, Layers, GitBranch, Braces, Monitor, Target, Search } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  // Simplified skills by major categories
  const skillCategories = [
    {
      name: "Security Tools",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Splunk", level: 90 },
        { name: "WAZUH", level: 85 },
        { name: "Nessus", level: 88 },
        { name: "Wireshark", level: 92 },
        { name: "Burp Suite", level: 85 },
        { name: "Kali Linux", level: 90 },
        { name: "Metasploit", level: 80 },
        { name: "Nmap", level: 95 }
      ]
    },
    {
      name: "Cloud Platforms",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Google Cloud", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "Docker", level: 85 },
        { name: "Cloud Security", level: 90 },
        { name: "IAM", level: 88 },
        { name: "Serverless", level: 75 }
      ]
    },
    {
      name: "Programming",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "R", level: 70 },
        { name: "PowerShell", level: 85 },
        { name: "Bash", level: 90 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      name: "Networking",
      icon: Network,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "TCP/IP", level: 95 },
        { name: "VLANs", level: 88 },
        { name: "Subnetting", level: 90 },
        { name: "Routing", level: 85 },
        { name: "VPN", level: 88 },
        { name: "Firewalls", level: 92 },
        { name: "Load Balancers", level: 80 },
        { name: "DNS/DHCP", level: 85 }
      ]
    },
    {
      name: "Compliance",
      icon: FileText,
      color: "from-orange-500 to-amber-500",
      skills: [
        { name: "NIST", level: 90 },
        { name: "ISO 27001", level: 85 },
        { name: "STIG", level: 88 },
        { name: "CIS Controls", level: 90 },
        { name: "MITRE ATT&CK", level: 92 },
        { name: "PCI-DSS", level: 80 },
        { name: "HIPAA", level: 75 },
        { name: "SOX", level: 70 }
      ]
    },
    {
      name: "Incident Response",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Digital Forensics", level: 85 },
        { name: "Malware Analysis", level: 80 },
        { name: "Threat Hunting", level: 90 },
        { name: "Log Analysis", level: 95 },
        { name: "SOAR", level: 85 },
        { name: "EDR", level: 88 },
        { name: "Threat Intel", level: 90 },
        { name: "Crisis Management", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <Cpu className="h-12 w-12 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity expertise across multiple domains and technologies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                index === activeCategory
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              <category.icon className="h-5 w-5 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Category Skills */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} text-white font-bold text-lg mb-4`}>
                {(() => {
                  const IconComponent = skillCategories[activeCategory].icon;
                  return <IconComponent className="h-6 w-6 mr-2" />;
                })()}
                {skillCategories[activeCategory].name}
              </div>
              <p className="text-gray-300">
                {skillCategories[activeCategory].skills.length} specialized skills in this category
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  
                  {/* Skill Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`bg-gray-800 rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
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
                <div className="text-sm text-gray-400 mb-4">
                  {category.skills.length} Skills
                </div>
                
                {/* Average Skill Level */}
                <div className="text-center">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {Math.round(category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length)}%
                  </div>
                  <div className="text-xs text-gray-500">Average Proficiency</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Statistics */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Technical Expertise Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
              </div>
              <div className="text-gray-300">Total Skills</div>
              <div className="text-xs text-gray-500 mt-1">Across all domains</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {skillCategories.length}
              </div>
              <div className="text-gray-300">Skill Categories</div>
              <div className="text-xs text-gray-500 mt-1">Specialized domains</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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

          {/* Professional Certifications */}
          <div className="mt-12 text-center">
            <h4 className="text-xl font-bold text-white mb-6">Professional Certifications</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'CompTIA Security+',
                'CompTIA CySA+', 
                'Microsoft SC-900',
                'AWS Cloud Practitioner',
                'Google Cybersecurity',
                'ISC² CC',
                'Google Threat Intelligence'
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;