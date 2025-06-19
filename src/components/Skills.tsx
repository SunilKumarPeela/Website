import React, { useState } from 'react';
import { Shield, Server, Code, Eye, Lock, Globe, Cpu, Cloud, Database, Network, Zap, Settings, CheckCircle, Wifi, HardDrive, Terminal, Key, FileText, Activity, Layers, GitBranch, Braces, Monitor, Target, Search } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Skills organized by categories with company logos
  const skillCategories = {
    'Security Tools & Platforms': [
      { name: 'Splunk', logo: 'https://www.splunk.com/content/dam/splunk2/images/logos/splunk-logo.svg', color: 'from-orange-500 to-red-500' },
      { name: 'WAZUH', logo: 'https://wazuh.com/uploads/2022/05/Wazuh-logo.png', color: 'from-blue-500 to-blue-600' },
      { name: 'Nessus', logo: 'https://static.tenable.com/marketing/brand/Tenable_Logo_FullColor.svg', color: 'from-green-500 to-green-600' },
      { name: 'Wireshark', logo: 'https://www.wireshark.org/assets/images/wireshark-logo.png', color: 'from-blue-600 to-cyan-500' },
      { name: 'Burp Suite', logo: 'https://portswigger.net/content/images/logos/portswigger-logo.svg', color: 'from-orange-600 to-red-600' },
      { name: 'Kali Linux', logo: 'https://www.kali.org/images/kali-logo.svg', color: 'from-gray-700 to-gray-800' },
      { name: 'Metasploit', logo: 'https://www.rapid7.com/globalassets/_logos/rapid7_logo.svg', color: 'from-red-600 to-pink-600' },
      { name: 'Nmap', logo: 'https://nmap.org/images/nmap-logo-256x256.png', color: 'from-green-600 to-emerald-600' },
      { name: 'MITRE ATT&CK', logo: 'https://attack.mitre.org/theme/images/mitre_attack_logo.png', color: 'from-red-500 to-red-600' },
      { name: 'Digital Forensics', logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-purple-500 to-purple-600' }
    ],
    'Cloud Technologies': [
      { name: 'Amazon Web Services (AWS)', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', color: 'from-orange-500 to-yellow-500' },
      { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg', color: 'from-blue-500 to-blue-600' },
      { name: 'Google Cloud Platform', logo: 'https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png', color: 'from-blue-400 to-green-500' },
      { name: 'Kubernetes', logo: 'https://kubernetes.io/images/kubernetes-horizontal-color.png', color: 'from-blue-600 to-purple-600' },
      { name: 'Docker', logo: 'https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png', color: 'from-blue-500 to-cyan-500' },
      { name: 'Terraform', logo: 'https://www.datocms-assets.com/2885/1629941242-logo-terraform-main.svg', color: 'from-purple-600 to-indigo-600' },
      { name: 'Serverless Computing', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-green-500 to-teal-500' }
    ],
    'Programming Languages': [
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg', color: 'from-blue-500 to-yellow-500' },
      { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg', color: 'from-orange-500 to-red-500' },
      { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', color: 'from-yellow-500 to-orange-500' },
      { name: 'C/C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg', color: 'from-blue-600 to-purple-600' },
      { name: 'R', logo: 'https://www.r-project.org/logo/Rlogo.svg', color: 'from-blue-500 to-blue-600' },
      { name: 'PowerShell', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png', color: 'from-blue-600 to-cyan-600' },
      { name: 'Bash/Shell', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg', color: 'from-gray-600 to-gray-700' },
      { name: 'SQL', logo: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg', color: 'from-blue-500 to-indigo-600' }
    ],
    'Networking & Infrastructure': [
      { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', color: 'from-blue-600 to-blue-700' },
      { name: 'Palo Alto Networks', logo: 'https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.svg', color: 'from-orange-500 to-red-500' },
      { name: 'Fortinet', logo: 'https://www.fortinet.com/content/dam/fortinet/assets/logos/fortinet-logo.svg', color: 'from-red-600 to-red-700' },
      { name: 'TCP/IP', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-blue-500 to-cyan-500' },
      { name: 'VPN Technologies', logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-green-500 to-teal-500' },
      { name: 'Network Protocols', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-purple-500 to-indigo-500' }
    ],
    'Compliance & Frameworks': [
      { name: 'NIST', logo: 'https://www.nist.gov/sites/default/files/images/2017/05/09/nist-logo-brand-refresh.svg', color: 'from-blue-600 to-blue-700' },
      { name: 'ISO 27001', logo: 'https://www.iso.org/files/live/sites/isoorg/files/archive/images/logo/iso_logo.svg', color: 'from-red-500 to-red-600' },
      { name: 'MITRE ATT&CK', logo: 'https://attack.mitre.org/theme/images/mitre_attack_logo.png', color: 'from-red-500 to-pink-500' },
      { name: 'CIS Controls', logo: 'https://www.cisecurity.org/wp-content/uploads/2016/12/CIS-Logo.png', color: 'from-blue-500 to-blue-600' },
      { name: 'PCI-DSS', logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-green-500 to-green-600' },
      { name: 'HIPAA', logo: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-purple-500 to-purple-600' }
    ],
    'Incident Response & Threat Management': [
      { name: 'Threat Hunting', logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-red-500 to-red-600' },
      { name: 'SOAR Platforms', logo: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-purple-500 to-purple-600' },
      { name: 'EDR Solutions', logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-orange-500 to-red-500' },
      { name: 'Threat Intelligence', logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-blue-500 to-purple-500' },
      { name: 'Crisis Management', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-red-600 to-pink-600' },
      { name: 'Forensic Investigation', logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=100', color: 'from-indigo-500 to-purple-500' }
    ],
    'Operating Systems': [
      { name: 'Linux (Ubuntu, CentOS, RHEL)', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg', color: 'from-yellow-500 to-orange-500' },
      { name: 'Windows Server', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg', color: 'from-blue-500 to-blue-600' },
      { name: 'macOS', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/MacOS_logo_%282017%29.svg', color: 'from-gray-600 to-gray-700' },
      { name: 'VMware vSphere', logo: 'https://logos-world.net/wp-content/uploads/2021/02/VMware-Logo.png', color: 'from-blue-600 to-cyan-600' },
      { name: 'Active Directory', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg', color: 'from-blue-500 to-indigo-500' }
    ],
    'Databases & Analytics': [
      { name: 'SQL Server', logo: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg', color: 'from-red-500 to-red-600' },
      { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png', color: 'from-blue-500 to-orange-500' },
      { name: 'PostgreSQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg', color: 'from-blue-600 to-blue-700' },
      { name: 'MongoDB', logo: 'https://www.mongodb.com/assets/images/global/favicon.ico', color: 'from-green-500 to-green-600' },
      { name: 'Elasticsearch', logo: 'https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt6ae3d6980b5fd629/5bbca1d1af3a954c36f95ed3/logo-elastic.svg', color: 'from-yellow-500 to-orange-500' },
      { name: 'Kibana', logo: 'https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt4466841eed0bf232/5bbca1d1af3a954c36f95ed5/logo-kibana.svg', color: 'from-pink-500 to-purple-500' }
    ]
  };

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
            Comprehensive cybersecurity and technology expertise with industry-leading tools and platforms
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

        {/* Skills Display with Logos */}
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
                    className="flex items-center p-4 bg-gray-900/50 rounded-lg border border-gray-600 hover:border-cyan-500/50 transition-all duration-300 hover:bg-gray-900/70 group hover:scale-105"
                  >
                    {/* Logo Circle */}
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 overflow-hidden border-2 border-white/10`}>
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'block';
                        }}
                      />
                      <div className="w-8 h-8 flex items-center justify-center" style={{ display: 'none' }}>
                        <Code className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    
                    {/* Skill Name */}
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium flex-1">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary Statistics */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Skills Portfolio Overview</h3>
          
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
                14+
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