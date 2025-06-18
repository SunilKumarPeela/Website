import React from 'react';
import { Folder, ExternalLink, Github, Shield, Server, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise SIEM Implementation",
      description: "Designed and deployed a comprehensive SIEM solution for a Fortune 500 company, integrating multiple security tools and reducing threat detection time by 60%.",
      technologies: ["Splunk", "Python", "REST APIs", "Linux"],
      category: "Security Operations",
      icon: Eye,
      color: "from-blue-500 to-blue-600",
      achievements: [
        "Reduced false positives by 40%",
        "Automated 80% of routine tasks",
        "Improved incident response time by 50%"
      ]
    },
    {
      title: "Automated Threat Hunting Platform",
      description: "Developed an AI-powered threat hunting platform that proactively identifies advanced persistent threats using machine learning algorithms.",
      technologies: ["Python", "TensorFlow", "Elasticsearch", "Kibana"],
      category: "Threat Intelligence",
      icon: Shield,
      color: "from-red-500 to-red-600",
      achievements: [
        "Detected 95% of advanced threats",
        "Reduced manual analysis time by 70%",
        "Implemented behavioral analytics"
      ]
    },
    {
      title: "Cloud Security Assessment Framework",
      description: "Created a comprehensive security assessment framework for cloud environments, focusing on AWS infrastructure security and compliance.",
      technologies: ["AWS", "CloudFormation", "Lambda", "Python"],
      category: "Cloud Security",
      icon: Server,
      color: "from-green-500 to-green-600",
      achievements: [
        "Assessed 100+ cloud deployments",
        "Improved security posture by 80%",
        "Automated compliance reporting"
      ]
    },
    {
      title: "Network Intrusion Detection System",
      description: "Developed a custom network IDS using deep packet inspection and behavioral analysis to detect sophisticated network attacks.",
      technologies: ["C++", "Python", "Wireshark", "Suricata"],
      category: "Network Security",
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      achievements: [
        "99.5% accuracy in threat detection",
        "Real-time packet analysis",
        "Custom signature development"
      ]
    },
    {
      title: "Security Orchestration Platform",
      description: "Built a security orchestration and automated response (SOAR) platform to streamline incident response workflows and improve team efficiency.",
      technologies: ["Python", "Docker", "REST APIs", "PostgreSQL"],
      category: "Automation",
      icon: Server,
      color: "from-orange-500 to-orange-600",
      achievements: [
        "Automated 90% of tier-1 responses",
        "Reduced response time by 75%",
        "Integrated 15+ security tools"
      ]
    },
    {
      title: "Mobile App Security Scanner",
      description: "Developed a comprehensive mobile application security scanner that identifies vulnerabilities in Android and iOS applications.",
      technologies: ["Java", "Swift", "Python", "OWASP"],
      category: "Application Security",
      icon: Shield,
      color: "from-cyan-500 to-cyan-600",
      achievements: [
        "Scanned 500+ mobile applications",
        "Identified critical vulnerabilities",
        "OWASP compliance validation"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Folder className="h-12 w-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Key Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Strategic security implementations and innovative solutions that enhanced organizational security posture
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              {/* Project Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-6">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color}`}>
                      <project.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">{project.category}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-xs text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2 text-sm">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors duration-200 text-sm">
                    <ExternalLink className="h-4 w-4" />
                    <span>Details</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
            <div className="text-gray-300">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-300">Technologies Used</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">75%</div>
            <div className="text-gray-300">Average Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;