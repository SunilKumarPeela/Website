import React from 'react';
import { Briefcase, GraduationCap, Calendar, Building2, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "SOC Case Study",
      company: "Cloud Security Alliance",
      location: "Online",
      period: "June 2025 - Present",
      year: "2025",
      type: "work",
      description: "SOC analysis on Azure, Microsoft cloud with drop zone AI console. Advanced security operations and threat detection in cloud environments.",
      achievements: [
        "Utilized KQL commands in Microsoft Sentinel for analysis",
        "Solved 2 critical alerts stopping attacks in initial stages",
        "Conducted deep investigation finding evidence supporting attack patterns"
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-Ri0jbowLyVmRmlk7F7WiBLcKm7MJ3gxHsNHiRQ_530pCltbmYzgncJN4ajbuSHBVLk&usqp=CAU",
      companyColor: "from-blue-600 to-blue-700"
    },
    {
      title: "Vice President of Tech Masters connect",
      company: "Colorado State University",
      location: "Fort Collins, CO",
      period: "December 2024 - May 2025",
      year: "2024",
      type: "work",
      description: "Led Tech Masters Connect club, organizing cybersecurity events, workshops, and professional development activities for 100+ members.",
      achievements: [
        "Created and managed the TMC Newsletter, curating the latest trends in cybersecurity, AI, and emerging tech to keep 100+ members informed and engaged",
        "Organized and led multiple tech meetups, coordinating with industry experts, alumni, and tech companies to deliver impactful sessions on cybersecurity, cloud, and data science",
        "Planned and facilitated seminars and hands-on workshops, including ethical hacking demos, capture-the-flag (CTF) challenges, and cloud security labs"
      ],
      logo: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png",
      companyColor: "from-purple-600 to-purple-700"
    },
    {
      title: "Cybersecurity Research Assistant",
      company: "Colorado State University",
      location: "Fort Collins, CO",
      period: "January 2024 - May 2024",
      year: "2024",
      type: "work",
      description: "Performed network traffic analysis using packet capture tools and Python scripts to detect anomalous patterns across sample data sets.",
      achievements: [
        "Developed Python-based data normalization scripts to convert raw packet data into structured formats, enabling consistent anomaly detection across diverse sources",
        "Analyzed over 1 million packets using Wireshark and PyShark, identifying suspicious traffic patterns such as port scans and DNS tunneling in sample attack simulations",
        "Reduced false positives by 40% through feature extraction and standardization of key network attributes (IP headers, protocol flags, timestamps)"
      ],
      logo: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png",
      companyColor: "from-green-600 to-green-700"
    },
    {
      title: "Security Analyst",
      company: "Amazon",
      location: "Telangana, India",
      period: "October 2018 - December 2022",
      year: "2018",
      type: "work",
      description: "Investigated high-risk online transactions to prevent fraud and ensure the security and integrity of the Amazon marketplace. Conducted real-time transaction monitoring, risk assessment, and incident handling using Amazon's internal security tools and frameworks.",
      achievements: [
        "Investigated suspicious transactions and account activities using Amazon's internal tools, reducing financial fraud and improving account security posture",
        "Utilized Python and SQL scripts to automate repetitive tasks such as data extraction, pattern recognition, and rule-based filtering for faster investigation cycles",
        "Conducted deep-dive analysis into user behavior and transaction metadata to detect fraud indicators such as account takeovers and refund abuse",
        "Engaged directly with suspected threat actors during high-risk investigations to gather behavioral intelligence, validate fraudulent intent, and enforce account-level actions"
      ],
      logo: "https://seekvectors.com/files/download/Amazon-Logo-31.jpg",
      companyColor: "from-orange-600 to-orange-700"
    },
    {
      title: "Network Analyst",
      company: "Tech Mahindra",
      location: "Andhra Pradesh, India",
      period: "September 2016 - October 2018",
      year: "2016",
      type: "work",
      description: "Monitored, analyzed, and optimized network traffic and performance using packet analysis tools and custom Python scripts. Collaborated with security teams to identify anomalies, enhance incident response readiness, and strengthen overall network defense.",
      achievements: [
        "Monitored, maintained, and optimized enterprise-grade network infrastructure, including Cisco and HP switches, routers, and wireless access points across multiple distributed client environments",
        "Reduced network downtime by 30% through proactive health monitoring, firmware updates, and fault isolation across wireless infrastructure",
        "Collaborated with security analysts to analyze IDS/IPS alerts correlated with internal NetFlow logs, enabling faster threat identification"
      ],
      logo: "https://logowik.com/content/uploads/images/tech-mahindra-new6235.logowik.com.webp",
      companyColor: "from-green-600 to-green-700"
    },
    {
      title: "Research Assistant",
      company: "Jawaharlal Nehru Technological University",
      location: "AP, India",
      period: "2015 - 2017",
      year: "2015",
      type: "work",
      description: "Conducted interdisciplinary research on emerging Post-Quantum Encryption techniques to address vulnerabilities in classical cryptographic systems under quantum computing threats. Focused on quantum-safe cryptography integration with secure communication systems.",
      achievements: [
        "Implemented and benchmarked lattice-based cryptographic algorithms such as CRYSTALS-Kyber and Dilithium to assess performance against simulated quantum attack vectors",
        "Evaluated resilience of classical encryption (RSA, ECC) against quantum algorithms like Shor's and Grover's, demonstrating the critical need for PQC migration",
        "Identified key limitations in traditional encryption methods through comparative analysis with quantum-resistant algorithms, gaining deep insight into quantum computing threats to current public key infrastructures"
      ],
      logo: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-93oanq6nd5hs53iot0idsof0g4-20210913223956.Medi.jpeg",
      companyColor: "from-indigo-600 to-indigo-700"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Briefcase className="h-12 w-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From academic research to industry leadership - my career progression in cybersecurity and technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-none`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-800 transform md:-translate-x-2 z-10">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/10 hover:shadow-xl overflow-hidden">
                    {/* Company Logo Header */}
                    <div className={`h-1 bg-gradient-to-r ${exp.companyColor}`}></div>
                    
                    <div className="p-6">
                      {/* Header with Logo */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {exp.type === 'education' ? (
                            <GraduationCap className="h-5 w-5 text-cyan-400" />
                          ) : (
                            <Briefcase className="h-5 w-5 text-cyan-400" />
                          )}
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            exp.type === 'education' 
                              ? 'bg-purple-500/20 text-purple-300' 
                              : 'bg-cyan-500/20 text-cyan-300'
                          }`}>
                            {exp.type === 'education' ? 'Education' : 'Work Experience'}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Company Logo and Info */}
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-600 mr-4 flex-shrink-0">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling.style.display = 'flex';
                            }}
                          />
                          <div className={`w-full h-full bg-gradient-to-r ${exp.companyColor} flex items-center justify-center`} style={{ display: 'none' }}>
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                          <div className="text-cyan-400 font-medium mb-1">{exp.company}</div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-200 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-300 flex items-start">
                              <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Year Display with Horizontal Line */}
                <div className={`hidden md:block w-5/12 ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                } flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className="flex items-center">
                    {/* Horizontal line from timeline to year */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                        <div className="ml-4">
                          <div className="text-4xl font-bold text-white select-none mb-1">
                            {exp.year}
                          </div>
                          <div className="text-sm text-gray-400 font-medium">
                            {exp.period}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mr-4 text-right">
                          <div className="text-4xl font-bold text-white select-none mb-1">
                            {exp.year}
                          </div>
                          <div className="text-sm text-gray-400 font-medium">
                            {exp.period}
                          </div>
                        </div>
                        <div className="w-16 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Stats */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Career Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">Years Experience</div>
              <div className="text-xs text-gray-500 mt-1">In cybersecurity & tech</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1M+</div>
              <div className="text-gray-300">Packets Analyzed</div>
              <div className="text-xs text-gray-500 mt-1">Network traffic analysis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">14</div>
              <div className="text-gray-300">Certifications</div>
              <div className="text-xs text-gray-500 mt-1">Professional credentials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">40%</div>
              <div className="text-gray-300">False Positive Reduction</div>
              <div className="text-xs text-gray-500 mt-1">Through optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;