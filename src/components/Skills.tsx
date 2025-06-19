import React, { useState } from 'react';
import { Shield, Server, Code, Eye, Lock, Globe, Cpu, Cloud, Database, Network, Zap, Settings, CheckCircle, Wifi, HardDrive, Terminal, Key, FileText, Activity, Layers, GitBranch, Braces, Monitor, Target, Search, Clock } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skills by major categories with company logos
  const skillCategories = [
    {
      name: "Security Tools",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Splunk", company: "Splunk Inc.", logo: "https://www.splunk.com/content/dam/splunk2/images/logos/splunk-logo.svg", expertise: "Expert", years: "3+" },
        { name: "WAZUH", company: "Wazuh Inc.", logo: "https://wazuh.com/uploads/2022/05/Wazuh-logo.png", expertise: "Advanced", years: "2+" },
        { name: "Nessus", company: "Tenable", logo: "https://static-00.iconduck.com/assets.00/tenable-nessus-icon-1024x1024-c0o8ouqx.png", expertise: "Expert", years: "4+" },
        { name: "Wireshark", company: "Wireshark Foundation", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Wireshark_icon_new.png", expertise: "Expert", years: "5+" },
        { name: "Burp Suite", company: "PortSwigger", logo: "https://portswigger.net/content/images/logos/burp-suite-logo.svg", expertise: "Advanced", years: "3+" },
        { name: "Kali Linux", company: "Offensive Security", logo: "https://www.kali.org/images/kali-logo.svg", expertise: "Expert", years: "4+" },
        { name: "Metasploit", company: "Rapid7", logo: "https://www.rapid7.com/globalassets/_logos/rapid7_logo.svg", expertise: "Advanced", years: "2+" },
        { name: "Nmap", company: "Nmap Project", logo: "https://nmap.org/images/nmap-logo-256x256.png", expertise: "Expert", years: "5+" }
      ]
    },
    {
      name: "Cloud Platforms",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "AWS", company: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", expertise: "Advanced", years: "3+" },
        { name: "Azure", company: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg", expertise: "Advanced", years: "2+" },
        { name: "Google Cloud", company: "Google", logo: "https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png", expertise: "Intermediate", years: "2+" },
        { name: "Kubernetes", company: "CNCF", logo: "https://kubernetes.io/images/kubernetes-horizontal-color.png", expertise: "Intermediate", years: "2+" },
        { name: "Docker", company: "Docker Inc.", logo: "https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png", expertise: "Advanced", years: "3+" },
        { name: "Terraform", company: "HashiCorp", logo: "https://www.datocms-assets.com/2885/1629941242-logo-terraform-main.svg", expertise: "Intermediate", years: "1+" },
        { name: "CloudFormation", company: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", expertise: "Advanced", years: "2+" },
        { name: "Serverless", company: "Various Providers", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", expertise: "Intermediate", years: "1+" }
      ]
    },
    {
      name: "Programming",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", company: "Python Software Foundation", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", expertise: "Expert", years: "6+" },
        { name: "Java", company: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg", expertise: "Advanced", years: "4+" },
        { name: "JavaScript", company: "Ecma International", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", expertise: "Advanced", years: "3+" },
        { name: "C/C++", company: "ISO Standard", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg", expertise: "Intermediate", years: "3+" },
        { name: "R", company: "R Foundation", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg", expertise: "Intermediate", years: "2+" },
        { name: "PowerShell", company: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png", expertise: "Advanced", years: "3+" },
        { name: "Bash", company: "GNU Project", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg", expertise: "Expert", years: "5+" },
        { name: "SQL", company: "ISO Standard", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png", expertise: "Expert", years: "5+" }
      ]
    },
    {
      name: "Networking",
      icon: Network,
      color: "from-purple-500 to-violet-500",
      skills: [
        { name: "TCP/IP", company: "Internet Standards", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Osi-model-7-layers.svg", expertise: "Expert", years: "6+" },
        { name: "Cisco Technologies", company: "Cisco Systems", logo: "https://images.seeklogo.com/logo-png/3/2/cisco-logo-png_seeklogo-30674.png", expertise: "Advanced", years: "4+" },
        { name: "Subnetting", company: "Network Standards", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Osi-model-7-layers.svg", expertise: "Expert", years: "5+" },
        { name: "VPN Technologies", company: "Various Vendors", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-blue_circle.svg", expertise: "Advanced", years: "4+" },
        { name: "Palo Alto", company: "Palo Alto Networks", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbG0qSOnkWntqk7zXknVCGVC9n18MFOcgfdA&s", expertise: "Expert", years: "3+" },
        { name: "F5 Load Balancers", company: "F5 Networks", logo: "https://www.f5.com/content/dam/f5-com/global/logos/f5-logo.svg", expertise: "Advanced", years: "2+" },
        { name: "Fortinet", company: "Fortinet Inc.", logo: "https://brandlogos.net/wp-content/uploads/2021/11/fortinet-logo.png", expertise: "Advanced", years: "2+" },
        { name: "Network Protocols", company: "IEEE Standards", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Osi-model-7-layers.svg", expertise: "Expert", years: "6+" }
      ]
    },
    {
      name: "Compliance & Frameworks",
      icon: FileText,
      color: "from-orange-500 to-amber-500",
      skills: [
        { name: "NIST Framework", company: "NIST", logo: "https://www.nist.gov/sites/default/files/images/2017/05/09/nist-logo-brand-2c.png", expertise: "Expert", years: "4+" },
        { name: "ISO 27001", company: "ISO", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/ISO_Logo_%28Red_square%29.svg", expertise: "Advanced", years: "3+" },
        { name: "STIG", company: "DISA", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Department_of_Defense_Seal.svg", expertise: "Advanced", years: "3+" },
        { name: "CIS Controls", company: "CIS", logo: "https://www.cisecurity.org/wp-content/uploads/2016/12/CIS-Logo.png", expertise: "Expert", years: "4+" },
        { name: "MITRE ATT&CK", company: "MITRE Corporation", logo: "https://attack.mitre.org/theme/images/mitre_attack_logo.png", expertise: "Expert", years: "3+" },
        { name: "PCI-DSS", company: "PCI Security Standards Council", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b0/PCI_Logo.svg", expertise: "Advanced", years: "2+" },
        { name: "HIPAA", company: "HHS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Seal_of_the_United_States_Department_of_Health_and_Human_Services.svg", expertise: "Intermediate", years: "2+" },
        { name: "SOX Compliance", company: "SEC", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg", expertise: "Intermediate", years: "1+" }
      ]
    },
    {
      name: "Incident Response",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Digital Forensics", company: "SANS Institute", logo: "https://www.sans.org/images/logos/sans-logo.svg", expertise: "Advanced", years: "3+" },
        { name: "Malware Analysis", company: "VirusTotal", logo: "https://www.virustotal.com/gui/images/VT_logo.svg", expertise: "Advanced", years: "3+" },
        { name: "Threat Hunting", company: "MITRE Corporation", logo: "https://attack.mitre.org/theme/images/mitre_attack_logo.png", expertise: "Expert", years: "4+" },
        { name: "Log Analysis", company: "Splunk Inc.", logo: "https://www.splunk.com/content/dam/splunk2/images/logos/splunk-logo.svg", expertise: "Expert", years: "4+" },
        { name: "SOAR Platforms", company: "Phantom Cyber", logo: "https://www.phantom.us/4.0/img/phantom-logo.svg", expertise: "Advanced", years: "2+" },
        { name: "EDR Solutions", company: "CrowdStrike", logo: "https://www.crowdstrike.com/wp-content/uploads/2020/08/crowdstrike-logo-2018-white-text.png", expertise: "Advanced", years: "3+" },
        { name: "Threat Intelligence", company: "MITRE Corporation", logo: "https://attack.mitre.org/theme/images/mitre_attack_logo.png", expertise: "Expert", years: "4+" },
        { name: "Crisis Management", company: "SANS Institute", logo: "https://www.sans.org/images/logos/sans-logo.svg", expertise: "Advanced", years: "3+" }
      ]
    }
  ];

  const getExpertiseColor = (expertise) => {
    const colors = {
      'Expert': 'bg-green-500/20 text-green-300 border-green-500/50',
      'Advanced': 'bg-blue-500/20 text-blue-300 border-blue-500/50',
      'Intermediate': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50'
    };
    return colors[expertise] || 'bg-gray-500/20 text-gray-300 border-gray-500/50';
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
        <div className="max-w-7xl mx-auto mb-16">
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
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-xl p-6 border border-gray-600 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105 cursor-pointer relative overflow-hidden"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skillCategories[activeCategory].color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    {/* Company Logo */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <img 
                          src={skill.logo} 
                          alt={`${skill.company} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        <div className={`w-full h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-lg flex items-center justify-center`} style={{ display: 'none' }}>
                          {(() => {
                            const FallbackIcon = skillCategories[activeCategory].icon;
                            return <FallbackIcon className="h-6 w-6 text-white" />;
                          })()}
                        </div>
                      </div>
                    </div>

                    {/* Skill Information */}
                    <div className="text-center">
                      <h4 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                        {skill.name}
                      </h4>
                      
                      <p className="text-gray-400 text-sm mb-3 leading-tight">
                        {skill.company}
                      </p>

                      {/* Expertise and Experience */}
                      <div className="flex flex-col space-y-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getExpertiseColor(skill.expertise)} mx-auto`}>
                          {skill.expertise}
                        </span>
                        
                        <div className="flex items-center justify-center space-x-2">
                          <Clock className="h-3 w-3 text-cyan-400" />
                          <span className="text-cyan-400 text-xs font-medium">
                            {skill.years} experience
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect - Skill Details */}
                    {hoveredSkill === skill.name && (
                      <div className="absolute inset-0 bg-gray-800/95 backdrop-blur-sm rounded-xl flex items-center justify-center p-4 transition-all duration-300">
                        <div className="text-center">
                          <div className={`w-12 h-12 bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                            {(() => {
                              const IconComponent = skillCategories[activeCategory].icon;
                              return <IconComponent className="h-6 w-6 text-white" />;
                            })()}
                          </div>
                          <h5 className="text-white font-bold mb-2">{skill.name}</h5>
                          <p className="text-gray-300 text-sm mb-2">{skill.company}</p>
                          <div className="flex items-center justify-center space-x-2 text-xs">
                            <span className={`px-2 py-1 rounded-full ${getExpertiseColor(skill.expertise)}`}>
                              {skill.expertise}
                            </span>
                            <span className="text-cyan-400">{skill.years}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Floating particles effect */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400/50 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-1 h-1 bg-cyan-300/50 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
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
                
                {/* Expertise Distribution */}
                <div className="text-center">
                  <div className="flex justify-center space-x-1 mb-2">
                    {['Expert', 'Advanced', 'Intermediate'].map((level) => {
                      const count = category.skills.filter(skill => skill.expertise === level).length;
                      return count > 0 ? (
                        <div key={level} className={`px-2 py-1 rounded text-xs ${getExpertiseColor(level)}`}>
                          {count} {level}
                        </div>
                      ) : null;
                    })}
                  </div>
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
                {skillCategories.reduce((total, category) => 
                  total + category.skills.filter(skill => skill.expertise === 'Expert').length, 0
                )}
              </div>
              <div className="text-gray-300">Expert Level</div>
              <div className="text-xs text-gray-500 mt-1">Mastered technologies</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {skillCategories.length}
              </div>
              <div className="text-gray-300">Skill Categories</div>
              <div className="text-xs text-gray-500 mt-1">Specialized domains</div>
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