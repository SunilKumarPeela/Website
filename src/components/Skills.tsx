import React, { useState } from 'react';
import { Shield, Server, Code, Eye, Lock, Globe, Cpu, Cloud, Database, Network, Zap, Settings, CheckCircle, Wifi, HardDrive, Terminal, Key, FileText, Activity, Layers, GitBranch, Braces, Monitor, Target, Search } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  // Skills by major categories with company logos
  const skillCategories = [
    {
      name: "Security Tools",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Splunk", level: 90, logo: "https://www.splunk.com/content/dam/splunk2/images/logos/splunk-logo.svg" },
        { name: "WAZUH", level: 85, logo: "https://wazuh.com/uploads/2022/05/Wazuh-logo.png" },
        { name: "Nessus", level: 88, logo: "https://static-00.iconduck.com/assets.00/tenable-nessus-icon-1024x1024-c0o8ouqx.png" },
        { name: "Wireshark", level: 92, logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Wireshark_icon_new.png" },
        { name: "Burp Suite", level: 85, logo: "https://portswigger.net/content/images/logos/burp-suite-logo.svg" },
        { name: "Kali Linux", level: 90, logo: "https://www.kali.org/images/kali-logo.svg" },
        { name: "Metasploit", level: 80, logo: "https://www.rapid7.com/globalassets/_logos/rapid7_logo.svg" },
        { name: "Nmap", level: 95, logo: "https://nmap.org/images/nmap-logo-256x256.png" }
      ]
    },
    {
      name: "Cloud Platforms",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "AWS", level: 85, logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Azure", level: 80, logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
        { name: "Google Cloud", level: 75, logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png" },
        { name: "Kubernetes", level: 70, logo: "https://kubernetes.io/images/kubernetes-horizontal-color.png" },
        { name: "Docker", level: 85, logo: "https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png" },
        { name: "Cloud Security", level: 90, logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "IAM", level: 88, logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
        { name: "Serverless", level: 75, logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" }
      ]
    },
    {
      name: "Programming",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", level: 95, logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "Java", level: 85, logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
        { name: "JavaScript", level: 80, logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
        { name: "C/C++", level: 75, logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" },
        { name: "R", level: 70, logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" },
        { name: "PowerShell", level: 85, logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png" },
        { name: "Bash", level: 90, logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg" },
        { name: "SQL", level: 88, logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" }
      ]
    },
    {
      name: "Networking",
      icon: Network,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "TCP/IP", level: 95, logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Osi-model-7-layers.svg" },
        { name: "VLANs", level: 88, logo: "https://images.seeklogo.com/logo-png/3/2/cisco-logo-png_seeklogo-30674.png" },
        { name: "Subnetting", level: 90, logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Osi-model-7-layers.svg" },
        { name: "Routing", level: 85, logo: "https://images.seeklogo.com/logo-png/3/2/cisco-logo-png_seeklogo-30674.png" },
        { name: "VPN", level: 88, logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-blue_circle.svg" },
        { name: "Firewalls", level: 92, logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbG0qSOnkWntqk7zXknVCGVC9n18MFOcgfdA&s" },
        { name: "Load Balancers", level: 80, logo: "https://www.f5.com/content/dam/f5-com/global/logos/f5-logo.svg" },
        { name: "DNS/DHCP", level: 85, logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Osi-model-7-layers.svg" }
      ]
    },
    {
      name: "Compliance",
      icon: FileText,
      color: "from-orange-500 to-amber-500",
      skills: [
        { name: "NIST", level: 90, logo: "https://www.nist.gov/sites/default/files/images/2017/05/09/nist-logo-brand-2c.png" },
        { name: "ISO 27001", level: 85, logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/ISO_Logo_%28Red_square%29.svg" },
        { name: "STIG", level: 88, logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Department_of_Defense_Seal.svg" },
        { name: "CIS Controls", level: 90, logo: "https://www.cisecurity.org/wp-content/uploads/2016/12/CIS-Logo.png" },
        { name: "MITRE ATT&CK", level: 92, logo: "https://attack.mitre.org/theme/images/mitre_attack_logo.png" },
        { name: "PCI-DSS", level: 80, logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/PCI_Logo.svg" },
        { name: "HIPAA", level: 75, logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Seal_of_the_United_States_Department_of_Health_and_Human_Services.svg" },
        { name: "SOX", level: 70, logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" }
      ]
    },
    {
      name: "Incident Response",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Digital Forensics", level: 85, logo: "https://www.sans.org/images/logos/sans-logo.svg" },
        { name: "Malware Analysis", level: 80, logo: "https://www.virustotal.com/gui/images/VT_logo.svg" },
        { name: "Threat Hunting", level: 90, logo: "https://attack.mitre.org/theme/images/mitre_attack_logo.png" },
        { name: "Log Analysis", level: 95, logo: "https://www.splunk.com/content/dam/splunk2/images/logos/splunk-logo.svg" },
        { name: "SOAR", level: 85, logo: "https://www.phantom.us/4.0/img/phantom-logo.svg" },
        { name: "EDR", level: 88, logo: "https://www.crowdstrike.com/wp-content/uploads/2020/08/crowdstrike-logo-2018-white-text.png" },
        { name: "Threat Intel", level: 90, logo: "https://attack.mitre.org/theme/images/mitre_attack_logo.png" },
        { name: "Crisis Management", level: 85, logo: "https://www.sans.org/images/logos/sans-logo.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30">
              <Target className="h-12 w-12 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
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
        <div className="max-w-6xl mx-auto mb-16">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
                  {/* Company Logo */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className={`w-full h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded flex items-center justify-center`} style={{ display: 'none' }}>
                        <skillCategories[activeCategory].icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Skill Name and Level */}
                  <div className="text-center mb-4">
                    <h4 className="text-white font-bold text-lg mb-2">{skill.name}</h4>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-sm">Proficiency</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Skill Level Badge */}
                  <div className="text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      skill.level >= 90 ? 'bg-green-500/20 text-green-300 border border-green-500/50' :
                      skill.level >= 80 ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/50' :
                      skill.level >= 70 ? 'bg-orange-500/20 text-orange-300 border border-orange-500/50' :
                      'bg-red-500/20 text-red-300 border border-red-500/50'
                    }`}>
                      {skill.level >= 90 ? 'Expert' :
                       skill.level >= 80 ? 'Advanced' :
                       skill.level >= 70 ? 'Intermediate' :
                       'Beginner'}
                    </span>
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