import React, { useState } from 'react';
import { Shield, Server, Code, Eye, Lock, Globe, Cpu, Cloud, Database, Network, Zap, Settings, CheckCircle, Wifi, HardDrive, Terminal, Key, FileText, Activity, Layers, GitBranch, Braces, Monitor, Target, Search, Clock } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Skills organized by categories in resume format
  const skillCategories = {
    'Security Tools & Platforms': [
      'Splunk', 'WAZUH', 'Nessus', 'Wireshark', 'Burp Suite', 'Kali Linux', 
      'Metasploit', 'Nmap', 'MITRE ATT&CK', 'Digital Forensics', 'Malware Analysis'
    ],
    'Cloud Technologies': [
      'AWS (EC2, S3, IAM, CloudFormation)', 'Microsoft Azure', 'Google Cloud Platform',
      'Kubernetes', 'Docker', 'Terraform', 'Serverless Computing', 'Cloud Security'
    ],
    'Programming Languages': [
      'Python', 'Java', 'JavaScript', 'C/C++', 'R', 'PowerShell', 'Bash/Shell Scripting', 
      'SQL', 'KQL (Kusto Query Language)', 'YAML'
    ],
    'Networking & Infrastructure': [
      'TCP/IP', 'VLANs', 'Subnetting', 'Routing & Switching', 'VPN Technologies',
      'Firewalls (Palo Alto, Fortinet)', 'Load Balancers', 'DNS/DHCP', 'Network Protocols'
    ],
    'Compliance & Frameworks': [
      'NIST Cybersecurity Framework', 'ISO 27001', 'STIG', 'CIS Controls',
      'PCI-DSS', 'HIPAA', 'SOX Compliance', 'Risk Assessment', 'Audit & Compliance'
    ],
    'Incident Response & Threat Management': [
      'Threat Hunting', 'Log Analysis', 'SOAR Platforms', 'EDR Solutions',
      'Threat Intelligence', 'Crisis Management', 'Forensic Investigation', 'Vulnerability Assessment'
    ],
    'Operating Systems': [
      'Linux (Ubuntu, CentOS, RHEL)', 'Windows Server', 'macOS', 'VMware vSphere',
      'System Administration', 'Active Directory'
    ],
    'Databases & Analytics': [
      'SQL Server', 'MySQL', 'PostgreSQL', 'NoSQL (MongoDB)', 'Elasticsearch',
      'Kibana', 'Data Analysis', 'Statistical Analysis'
    ]
  };

  const certifications = [
    'CompTIA Security+', 'CompTIA CySA+', 'Microsoft SC-900', 'AWS Cloud Practitioner',
    'Google Cybersecurity Certificate', 'ISC² Certified in Cybersecurity (CC)',
    'Google Threat Intelligence Certificate', 'IBM Cybersecurity Fundamentals',
    'Cisco Junior Cybersecurity Analyst', 'Palo Alto Networks Security Fundamentals'
  ];

  const categories = ['all', ...Object.keys(skillCategories)];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return skillCategories;
    }
    return { [activeCategory]: skillCategories[activeCategory] };
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <Target className="h-12 w-12 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity and technology expertise developed through 8+ years of professional experience
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
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
                {category === 'all' ? 'All Skills' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Display */}
        <div className="space-y-8 mb-16">
          {Object.entries(getFilteredSkills()).map(([categoryName, skills]) => (
            <div key={categoryName} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full mr-4"></div>
                {categoryName}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-600 hover:border-cyan-500/50 transition-all duration-200 hover:bg-gray-900/70 group"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-200"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Certifications */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full mr-4"></div>
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-600 hover:border-green-500/50 transition-all duration-200 hover:bg-gray-900/70 group"
              >
                <CheckCircle className="h-5 w-5 text-green-400 mr-3 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary Statistics */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Skills Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {Object.values(skillCategories).reduce((total, skills) => total + skills.length, 0)}
              </div>
              <div className="text-gray-300 font-medium">Technical Skills</div>
              <div className="text-xs text-gray-500 mt-1">Across all domains</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {certifications.length}
              </div>
              <div className="text-gray-300 font-medium">Certifications</div>
              <div className="text-xs text-gray-500 mt-1">Industry recognized</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {Object.keys(skillCategories).length}
              </div>
              <div className="text-gray-300 font-medium">Skill Categories</div>
              <div className="text-xs text-gray-500 mt-1">Specialized domains</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                8+
              </div>
              <div className="text-gray-300 font-medium">Years Experience</div>
              <div className="text-xs text-gray-500 mt-1">In cybersecurity</div>
            </div>
          </div>
        </div>

        {/* Core Competencies Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Cybersecurity Analysis',
              'Threat Detection & Response', 
              'Cloud Security',
              'Network Security',
              'Vulnerability Assessment',
              'Incident Response',
              'Security Automation',
              'Compliance & Risk Management',
              'Digital Forensics',
              'Security Architecture'
            ].map((competency, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg"
              >
                {competency}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;