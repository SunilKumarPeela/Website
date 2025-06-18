import React from 'react';
import { Users, Shield, Award, Code, Globe, Target } from 'lucide-react';

const Clubs = () => {
  const clubs = [
    {
      name: "Information Systems Audit and Control Association",
      acronym: "ISACA",
      icon: Shield,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "International Information System Security Certification Consortium",
      acronym: "ISC²",
      icon: Award,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Women in Cybersecurity",
      acronym: "WiCyS",
      icon: Users,
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Institute of Electrical and Electronics Engineers",
      acronym: "IEEE",
      icon: Code,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Media+Tech Collective",
      acronym: "Media+Tech",
      icon: Globe,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Tech Masters Connect",
      acronym: "TMC",
      icon: Target,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="clubs" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-cyan-400" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Professional Organizations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Active membership in leading cybersecurity and technology professional organizations
          </p>
        </div>

        {/* Organizations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 p-8 text-center group"
            >
              {/* Organization Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${club.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <club.icon className="h-8 w-8 text-white" />
              </div>

              {/* Organization Name */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                {club.name}
              </h3>
              
              {/* Acronym */}
              <div className="text-cyan-400 font-bold text-lg mb-4">
                {club.acronym}
              </div>

              {/* Member Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium border border-cyan-500/50">
                Active Member
              </div>
            </div>
          ))}
        </div>

        {/* Professional Engagement Summary */}
        <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Professional Engagement</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{clubs.length}</div>
              <div className="text-gray-300">Professional Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">Active</div>
              <div className="text-gray-300">Membership Status</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Global</div>
              <div className="text-gray-300">Network Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clubs;