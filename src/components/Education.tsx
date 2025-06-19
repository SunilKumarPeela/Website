import React from 'react';
import { GraduationCap, Calendar, Building2, MapPin, Award, Star, BookOpen, Lightbulb, Rocket, Heart, Target, CheckCircle } from 'lucide-react';

const Education = () => {
  const educationExperiences = [
    {
      title: "Master of Science in Computer Information Systems",
      institution: "Colorado State University",
      location: "Fort Collins, CO, USA",
      period: "January 2023 - May 2025",
      type: "education",
      gpa: "3.8 GPA",
      status: "Current",
      description: "Advanced cybersecurity and AI innovation program focusing on cutting-edge security technologies, quantum-resistant cryptography, and AI-driven defense systems. Leading research in cyber threat analysis and post-quantum security solutions.",
      achievements: [
        "Maintained 3.8 GPA while pursuing advanced cybersecurity research",
        "Leading 100+ students as VP of Tech Masters Connect organization",
        "Conducting cutting-edge research in AI-driven threat detection and quantum-inspired security systems",
        "Filed revolutionary patent for quantum-inspired cybersecurity system (EntangleX) for post-breach data control"
      ],
      logo: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/CSU-Ram-357-617.png",
      institutionColor: "from-green-600 to-green-700",
      specialization: "Cybersecurity & AI Innovation",
      skills: ["Advanced Threat Analysis", "AI Security", "Quantum Cryptography", "Research Leadership", "Patent Development"]
    },
    {
      title: "Master of Science in Nanotechnology",
      institution: "Jawaharlal Nehru Technological University",
      location: "Andhra Pradesh, India",
      period: "January 2015 - December 2016",
      type: "education",
      gpa: "91%",
      status: "Completed",
      description: "Specialized in quantum-scale technology research with focus on solar cell innovations and anti-reflection coatings. Developed interdisciplinary expertise bridging nanotechnology and materials science for sustainable energy solutions.",
      achievements: [
        "Graduated with Distinction achieving 91% overall performance",
        "Published research paper on advanced anti-reflection coatings for solar cell efficiency enhancement",
        "Received full merit scholarship for outstanding academic performance throughout the program",
        "Developed innovative nanotechnology solutions for renewable energy applications"
      ],
      logo: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-93oanq6nd5hs53iot0idsof0g4-20210913223956.Medi.jpeg",
      institutionColor: "from-purple-600 to-purple-700",
      specialization: "Quantum Technology & Materials Science",
      skills: ["Quantum Physics", "Materials Science", "Research Methodology", "Solar Technology", "Nanotechnology"]
    },
    {
      title: "Bachelor of Engineering in Electrical and Electronics",
      institution: "Jawaharlal Nehru Technological University",
      location: "Andhra Pradesh, India",
      period: "August 2010 - May 2014",
      type: "education",
      gpa: "80.5%",
      status: "Completed",
      description: "Comprehensive engineering program covering electrical systems, electronics design, and computer networks. Built strong foundation in technology fundamentals that sparked passion for cybersecurity and digital systems protection.",
      achievements: [
        "Received University Merit Scholarship for consistent academic excellence",
        "Awarded Best Final Year Project for innovative electrical system design",
        "Recognized as Student of the Year for outstanding overall performance and leadership",
        "Completed hands-on industrial internship at Steel Plant gaining practical engineering experience"
      ],
      logo: "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-93oanq6nd5hs53iot0idsof0g4-20210913223956.Medi.jpeg",
      institutionColor: "from-blue-600 to-blue-700",
      specialization: "Electrical & Electronics Engineering",
      skills: ["Circuit Design", "Network Fundamentals", "System Analysis", "Project Management", "Technical Leadership"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Current':
        return 'bg-green-500/20 text-green-300 border-green-500/50';
      case 'Completed':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Educational Journey</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic foundation and continuous learning that shaped my expertise in cybersecurity and technology innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 transform md:-translate-x-0.5"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationExperiences.map((edu, index) => (
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
                    {/* Institution Logo Header */}
                    <div className={`h-1 bg-gradient-to-r ${edu.institutionColor}`}></div>
                    
                    <div className="p-6">
                      {/* Header with Logo */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="h-5 w-5 text-cyan-400" />
                          <span className="px-2 py-1 rounded text-xs font-medium bg-purple-500/20 text-purple-300">
                            Education
                          </span>
                        </div>
                      </div>

                      {/* Institution Logo and Info */}
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-600 mr-4 flex-shrink-0">
                          <img 
                            src={edu.logo} 
                            alt={`${edu.institution} logo`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling.style.display = 'flex';
                            }}
                          />
                          <div className={`w-full h-full bg-gradient-to-r ${edu.institutionColor} flex items-center justify-center`} style={{ display: 'none' }}>
                            <Building2 className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{edu.title}</h3>
                          <div className="text-cyan-400 font-medium mb-1">{edu.institution}</div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      {/* GPA and Status */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="text-cyan-400 font-bold text-lg">{edu.gpa}</div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(edu.status)}`}>
                            {edu.status}
                          </span>
                        </div>
                        <div className="text-gray-400 text-sm">{edu.specialization}</div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-200 mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-gray-300 flex items-start">
                              <span className="text-cyan-400 mr-2 flex-shrink-0">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-200 mb-3">Skills Developed:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date Display with Horizontal Line */}
                <div className={`hidden md:block w-5/12 ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                } flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className="flex items-center">
                    {/* Horizontal line from timeline to date */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                        <div className="ml-4">
                          <div className="text-lg font-bold text-white select-none">
                            {edu.period}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="mr-4 text-right">
                          <div className="text-lg font-bold text-white select-none">
                            {edu.period}
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

        {/* Education Stats */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Educational Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">3</div>
              <div className="text-gray-300">Degrees Earned</div>
              <div className="text-xs text-gray-500 mt-1">Across multiple disciplines</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">91%</div>
              <div className="text-gray-300">Highest GPA</div>
              <div className="text-xs text-gray-500 mt-1">Academic excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-300">Academic Awards</div>
              <div className="text-xs text-gray-500 mt-1">Recognition received</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
              <div className="text-gray-300">Patent Filed</div>
              <div className="text-xs text-gray-500 mt-1">From research</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;