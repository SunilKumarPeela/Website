import React from 'react';
import { Trophy, Target, Users, Calendar, Medal, Award, Zap, Shield } from 'lucide-react';

const Competitions = () => {
  const competitions = [
    // 2025 Competitions - Latest Achievements
    {
      title: "Google Cloud Security Defenders Advantage",
      position: "6th Place",
      year: "2025",
      organizer: "Google Cloud",
      category: "CTF Hackathon",
      participants: 200,
      description: "A challenging and rewarding deep dive into Rhysida ransomware detection and live incident response. Advanced cloud security competition focusing on real-world threat scenarios.",
      skills: ["Ransomware Analysis", "Incident Response", "Cloud Security", "Threat Detection"],
      prize: "Recognition & Cloud Credits",
      icon: Shield,
      color: "from-green-500 to-green-600",
      rank: 6,
      featured: true
    },
    {
      title: "Media+Tech Collective Innovation Challenge",
      position: "2nd Place",
      year: "2025",
      organizer: "Media+Tech Collective",
      category: "Innovation Competition",
      participants: 150,
      description: "Innovative cybersecurity solutions for media and technology sectors, focusing on emerging threats and cutting-edge defense mechanisms.",
      skills: ["Innovation", "Media Security", "Technology Solutions", "Creative Problem Solving"],
      prize: "$1,500",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      rank: 2,
      featured: true
    },
    {
      title: "ISACA Case Study Competition",
      position: "4th Place",
      year: "2025",
      organizer: "ISACA",
      category: "Case Study Analysis",
      participants: 100,
      description: "Comprehensive analysis of real-world cybersecurity governance, risk management, and compliance challenges in enterprise environments.",
      skills: ["Risk Management", "Governance", "Compliance", "Strategic Analysis"],
      prize: "Professional Recognition",
      icon: Target,
      color: "from-blue-500 to-blue-600",
      rank: 4,
      featured: true
    },
    // 2024 Competitions
    {
      title: "Mountain West Cyber Capture the Flag Challenge",
      position: "36th Place",
      year: "2024",
      organizer: "Mountain West Cyber Conference",
      category: "CTF Competition",
      participants: 300,
      description: "Regional cybersecurity competition featuring diverse challenges in penetration testing, digital forensics, and security analysis.",
      skills: ["CTF Challenges", "Digital Forensics", "Penetration Testing", "Security Analysis"],
      prize: "Regional Recognition",
      icon: Medal,
      color: "from-orange-500 to-orange-600",
      rank: 36
    },
    {
      title: "ISACA Case Study Competition",
      position: "4th Place",
      year: "2024",
      organizer: "ISACA",
      category: "Case Study Analysis",
      participants: 120,
      description: "Strategic cybersecurity case study analysis focusing on enterprise risk management and governance frameworks.",
      skills: ["Risk Assessment", "Governance Frameworks", "Strategic Planning", "Case Analysis"],
      prize: "Professional Recognition",
      icon: Target,
      color: "from-indigo-500 to-indigo-600",
      rank: 4
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-400" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-300" />;
      case 3:
        return <Award className="h-5 w-5 text-orange-400" />;
      case 4:
        return <Target className="h-5 w-5 text-blue-400" />;
      case 6:
        return <Shield className="h-5 w-5 text-green-400" />;
      default:
        return <Target className="h-5 w-5 text-cyan-400" />;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
      case 2:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
      case 3:
        return 'bg-orange-500/20 text-orange-300 border-orange-500/50';
      case 4:
        return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
      case 6:
        return 'bg-green-500/20 text-green-300 border-green-500/50';
      default:
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50';
    }
  };

  // Separate featured (2025) competitions
  const featuredCompetitions = competitions.filter(comp => comp.featured);
  const otherCompetitions = competitions.filter(comp => !comp.featured);

  return (
    <section id="competitions" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Trophy className="h-12 w-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Competitions & Awards</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition and achievements in prestigious cybersecurity competitions worldwide
          </p>
        </div>

        {/* Latest 2025 Achievements - Featured Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-sm mb-4">
              <Zap className="h-4 w-4" />
              <span>Latest 2025 Achievements</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Recent Competition Wins</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {featuredCompetitions.map((competition, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg border-2 border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden relative"
              >
                {/* Featured badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                </div>

                {/* Competition Header */}
                <div className={`h-1 bg-gradient-to-r ${competition.color}`}></div>
                
                <div className="p-6">
                  {/* Position and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getRankColor(competition.rank)}`}>
                      {getRankIcon(competition.rank)}
                      <span className="text-sm font-bold">{competition.position}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {competition.year}
                    </div>
                  </div>

                  {/* Title and Organizer */}
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {competition.title}
                  </h3>
                  <div className="text-cyan-400 font-medium mb-1">{competition.organizer}</div>
                  
                  {/* Competition Details */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {competition.participants} participants
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      {competition.category}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {competition.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="text-gray-400 text-xs mb-2">Skills Demonstrated:</div>
                    <div className="flex flex-wrap gap-2">
                      {competition.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prize */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${competition.color}`}>
                        <competition.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs">Achievement</div>
                        <div className="text-white font-bold text-sm">{competition.prize}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Other Competitions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Competition History</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherCompetitions.map((competition, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 overflow-hidden"
              >
                {/* Competition Header */}
                <div className={`h-1 bg-gradient-to-r ${competition.color}`}></div>
                
                <div className="p-6">
                  {/* Position and Year */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border ${getRankColor(competition.rank)}`}>
                      {getRankIcon(competition.rank)}
                      <span className="text-sm font-bold">{competition.position}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {competition.year}
                    </div>
                  </div>

                  {/* Title and Organizer */}
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {competition.title}
                  </h3>
                  <div className="text-cyan-400 font-medium mb-1">{competition.organizer}</div>
                  
                  {/* Competition Details */}
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {competition.participants} participants
                    </div>
                    <div className="flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      {competition.category}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {competition.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="text-gray-400 text-xs mb-2">Skills Demonstrated:</div>
                    <div className="flex flex-wrap gap-2">
                      {competition.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prize */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${competition.color}`}>
                        <competition.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-400 text-xs">Prize/Recognition</div>
                        <div className="text-white font-bold">{competition.prize}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competition Statistics */}
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Competition Statistics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{competitions.length}</div>
              <div className="text-gray-300">Total Competitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {competitions.filter(c => c.rank <= 3).length}
              </div>
              <div className="text-gray-300">Top 3 Finishes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <div className="text-gray-300">2025 Competitions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {competitions.filter(c => c.year === "2025" || c.year === "2024").length}
              </div>
              <div className="text-gray-300">Recent Wins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">$1.5K</div>
              <div className="text-gray-300">Recent Prize Money</div>
            </div>
          </div>
        </div>

        {/* Competition Categories */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Competition Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['CTF Challenges', 'Case Study Analysis', 'Innovation Competitions', 'Ransomware Analysis', 'Cloud Security', 'Incident Response', 'Digital Forensics', 'Risk Management'].map((category, index) => (
              <div
                key={index}
                className="bg-gray-800 text-center py-4 px-3 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-200 hover:bg-gray-700"
              >
                <span className="text-gray-300 font-medium text-sm">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competitions;