import React, { useState, useEffect } from 'react';
import { Network, Database, Shield, Cloud, Code, Eye, Lock, Server, Zap, Globe, GitBranch, Activity, Terminal, Key, FileText, Layers, Cpu, Monitor, HardDrive, Wifi, Settings, CheckCircle, Award, Target, Search, AlertTriangle, Braces, Play, Pause, RotateCcw, FastForward, Volume2, Film, Camera, Sparkles } from 'lucide-react';

const SkillsGraph = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [cinematicPhase, setCinematicPhase] = useState(0);
  const [showCredits, setShowCredits] = useState(false);

  // Cinematic skill scenes - like movie chapters
  const cinematicScenes = [
    {
      id: 'opening',
      title: 'The Digital Guardian Awakens',
      subtitle: 'Security Operations Center',
      description: 'In a world where cyber threats lurk in every shadow, our hero masters the art of digital surveillance and threat detection.',
      color: 'from-red-500 via-orange-500 to-yellow-500',
      atmosphere: 'from-red-900/20 via-orange-900/10 to-transparent',
      icon: Shield,
      mood: 'intense',
      skills: [
        { name: 'Splunk SIEM', level: 95, icon: Activity, description: 'Master of log analysis and threat correlation', position: { x: 30, y: 25 }, intensity: 'high' },
        { name: 'WAZUH', level: 88, icon: Shield, description: 'Guardian of endpoint security', position: { x: 70, y: 30 }, intensity: 'high' },
        { name: 'Microsoft Sentinel', level: 85, icon: Eye, description: 'Cloud security orchestrator', position: { x: 50, y: 15 }, intensity: 'medium' },
        { name: 'Threat Hunting', level: 90, icon: Target, description: 'Predator of hidden threats', position: { x: 25, y: 60 }, intensity: 'high' },
        { name: 'Incident Response', level: 92, icon: Zap, description: 'Crisis management specialist', position: { x: 75, y: 65 }, intensity: 'high' },
        { name: 'Digital Forensics', level: 85, icon: Search, description: 'Digital detective extraordinaire', position: { x: 50, y: 80 }, intensity: 'medium' }
      ]
    },
    {
      id: 'cloud-realm',
      title: 'Journey to the Cloud Realm',
      subtitle: 'Multi-Cloud Security Architecture',
      description: 'Ascending to the ethereal cloud kingdoms, where data flows like rivers and security barriers protect digital realms.',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      atmosphere: 'from-blue-900/20 via-cyan-900/10 to-transparent',
      icon: Cloud,
      mood: 'mystical',
      skills: [
        { name: 'AWS Security', level: 90, icon: Cloud, description: 'Amazon cloud fortress architect', position: { x: 35, y: 20 }, intensity: 'high' },
        { name: 'Azure Security', level: 85, icon: Cloud, description: 'Microsoft cloud guardian', position: { x: 65, y: 25 }, intensity: 'high' },
        { name: 'Google Cloud Security', level: 80, icon: Cloud, description: 'Google cloud protector', position: { x: 50, y: 10 }, intensity: 'medium' },
        { name: 'Kubernetes Security', level: 82, icon: Layers, description: 'Container orchestration master', position: { x: 20, y: 55 }, intensity: 'medium' },
        { name: 'Docker Security', level: 88, icon: Server, description: 'Container security specialist', position: { x: 80, y: 60 }, intensity: 'high' },
        { name: 'Cloud IAM', level: 93, icon: Key, description: 'Identity fortress commander', position: { x: 50, y: 75 }, intensity: 'high' }
      ]
    },
    {
      id: 'code-matrix',
      title: 'The Code Matrix Unveiled',
      subtitle: 'Programming & Automation Mastery',
      description: 'Deep within the digital matrix, lines of code become weapons of defense, automation scripts dance like digital warriors.',
      color: 'from-green-500 via-emerald-500 to-lime-500',
      atmosphere: 'from-green-900/20 via-emerald-900/10 to-transparent',
      icon: Code,
      mood: 'futuristic',
      skills: [
        { name: 'Python', level: 95, icon: Code, description: 'The serpent of automation', position: { x: 40, y: 20 }, intensity: 'high' },
        { name: 'PowerShell', level: 88, icon: Terminal, description: 'Windows command sorcerer', position: { x: 60, y: 35 }, intensity: 'high' },
        { name: 'Bash/Shell', level: 90, icon: Terminal, description: 'Unix shell wizard', position: { x: 30, y: 50 }, intensity: 'high' },
        { name: 'SQL', level: 88, icon: Database, description: 'Database query master', position: { x: 70, y: 55 }, intensity: 'medium' },
        { name: 'JavaScript', level: 80, icon: Braces, description: 'Web security architect', position: { x: 45, y: 70 }, intensity: 'medium' },
        { name: 'Java', level: 85, icon: Code, description: 'Enterprise fortress builder', position: { x: 25, y: 80 }, intensity: 'medium' }
      ]
    },
    {
      id: 'network-battlefield',
      title: 'The Network Battlefield',
      subtitle: 'Digital Infrastructure Warfare',
      description: 'On the vast network battlefield, packets flow like armies, firewalls stand as digital fortresses, and protocols govern the rules of engagement.',
      color: 'from-purple-500 via-violet-500 to-indigo-500',
      atmosphere: 'from-purple-900/20 via-violet-900/10 to-transparent',
      icon: Network,
      mood: 'epic',
      skills: [
        { name: 'Wireshark', level: 95, icon: Eye, description: 'Packet analysis overlord', position: { x: 35, y: 25 }, intensity: 'high' },
        { name: 'Nmap', level: 92, icon: Network, description: 'Network reconnaissance master', position: { x: 65, y: 20 }, intensity: 'high' },
        { name: 'Firewall Management', level: 90, icon: Shield, description: 'Digital fortress commander', position: { x: 50, y: 40 }, intensity: 'high' },
        { name: 'VPN Technologies', level: 88, icon: Lock, description: 'Secure tunnel architect', position: { x: 25, y: 65 }, intensity: 'medium' },
        { name: 'Network Protocols', level: 95, icon: Wifi, description: 'Protocol symphony conductor', position: { x: 75, y: 70 }, intensity: 'high' },
        { name: 'Network Segmentation', level: 85, icon: GitBranch, description: 'Digital territory strategist', position: { x: 50, y: 85 }, intensity: 'medium' }
      ]
    },
    {
      id: 'vulnerability-hunt',
      title: 'The Great Vulnerability Hunt',
      subtitle: 'Penetration Testing & Assessment',
      description: 'In the shadows of cyberspace, vulnerability hunters seek out weaknesses, wielding powerful tools to expose hidden flaws before malicious forces can exploit them.',
      color: 'from-orange-500 via-red-500 to-pink-500',
      atmosphere: 'from-orange-900/20 via-red-900/10 to-transparent',
      icon: Target,
      mood: 'dramatic',
      skills: [
        { name: 'Nessus', level: 90, icon: Search, description: 'Vulnerability scanner supreme', position: { x: 30, y: 30 }, intensity: 'high' },
        { name: 'Burp Suite', level: 88, icon: Globe, description: 'Web application hunter', position: { x: 70, y: 25 }, intensity: 'high' },
        { name: 'Kali Linux', level: 92, icon: Terminal, description: 'Penetration testing arsenal', position: { x: 50, y: 15 }, intensity: 'high' },
        { name: 'Metasploit', level: 85, icon: Target, description: 'Exploitation framework master', position: { x: 25, y: 60 }, intensity: 'medium' },
        { name: 'OWASP Testing', level: 87, icon: Shield, description: 'Web security standard bearer', position: { x: 75, y: 65 }, intensity: 'medium' },
        { name: 'Risk Assessment', level: 90, icon: AlertTriangle, description: 'Risk evaluation specialist', position: { x: 50, y: 80 }, intensity: 'high' }
      ]
    },
    {
      id: 'compliance-citadel',
      title: 'The Compliance Citadel',
      subtitle: 'Frameworks & Standards Mastery',
      description: 'Within the towering citadel of compliance, ancient frameworks and modern standards converge to create an unbreachable fortress of regulatory adherence.',
      color: 'from-indigo-500 via-purple-500 to-pink-500',
      atmosphere: 'from-indigo-900/20 via-purple-900/10 to-transparent',
      icon: FileText,
      mood: 'majestic',
      skills: [
        { name: 'NIST Framework', level: 90, icon: FileText, description: 'Cybersecurity framework architect', position: { x: 40, y: 20 }, intensity: 'high' },
        { name: 'ISO 27001', level: 85, icon: Award, description: 'Information security standard keeper', position: { x: 60, y: 30 }, intensity: 'medium' },
        { name: 'MITRE ATT&CK', level: 92, icon: Activity, description: 'Threat modeling grandmaster', position: { x: 30, y: 50 }, intensity: 'high' },
        { name: 'CIS Controls', level: 88, icon: CheckCircle, description: 'Critical controls guardian', position: { x: 70, y: 55 }, intensity: 'medium' },
        { name: 'PCI-DSS', level: 82, icon: Shield, description: 'Payment security protector', position: { x: 45, y: 70 }, intensity: 'medium' },
        { name: 'STIG Compliance', level: 85, icon: Settings, description: 'Security configuration master', position: { x: 55, y: 85 }, intensity: 'medium' }
      ]
    }
  ];

  useEffect(() => {
    let sceneInterval;
    let phaseInterval;

    if (isPlaying) {
      // Auto-advance scenes
      sceneInterval = setInterval(() => {
        setCurrentScene((prev) => {
          const next = (prev + 1) % cinematicScenes.length;
          if (next === 0) {
            setShowCredits(true);
            setTimeout(() => setShowCredits(false), 3000);
          }
          return next;
        });
      }, 8000);

      // Cinematic phase animation
      phaseInterval = setInterval(() => {
        setCinematicPhase((prev) => (prev + 1) % 8);
      }, 1000);
    }

    return () => {
      clearInterval(sceneInterval);
      clearInterval(phaseInterval);
    };
  }, [isPlaying]);

  const currentSceneData = cinematicScenes[currentScene];

  const getSkillIntensityEffect = (intensity) => {
    switch (intensity) {
      case 'high':
        return 'animate-pulse shadow-lg shadow-cyan-400/50 scale-110';
      case 'medium':
        return 'animate-bounce shadow-md shadow-blue-400/30 scale-105';
      default:
        return 'hover:scale-105';
    }
  };

  const getMoodEffect = (mood) => {
    switch (mood) {
      case 'intense':
        return 'animate-pulse';
      case 'mystical':
        return 'animate-bounce';
      case 'futuristic':
        return 'animate-spin';
      case 'epic':
        return 'animate-ping';
      case 'dramatic':
        return 'animate-pulse';
      case 'majestic':
        return 'animate-bounce';
      default:
        return '';
    }
  };

  return (
    <section id="skills-graph" className="relative min-h-screen overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        {/* Dynamic atmosphere based on current scene */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSceneData.atmosphere} transition-all duration-2000`}></div>
        
        {/* Animated particles based on scene mood */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-cyan-400/30 rounded-full ${getMoodEffect(currentSceneData.mood)}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Cinematic grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      {/* Cinematic UI Controls */}
      <div className="absolute top-8 left-8 z-50">
        <div className="flex items-center space-x-4 bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/30">
          <Film className="h-5 w-5 text-cyan-400" />
          <span className="text-white font-medium">Skills Cinema</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-colors duration-200"
            >
              {isPlaying ? <Pause className="h-4 w-4 text-cyan-400" /> : <Play className="h-4 w-4 text-cyan-400" />}
            </button>
            <button
              onClick={() => setCurrentScene((prev) => (prev + 1) % cinematicScenes.length)}
              className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-full transition-colors duration-200"
            >
              <FastForward className="h-4 w-4 text-cyan-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Scene Progress Bar */}
      <div className="absolute top-8 right-8 z-50">
        <div className="bg-black/80 backdrop-blur-sm rounded-full px-6 py-3 border border-cyan-500/30">
          <div className="flex items-center space-x-3">
            <Camera className="h-4 w-4 text-cyan-400" />
            <span className="text-white text-sm">Scene {currentScene + 1}/{cinematicScenes.length}</span>
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-8000"
                style={{ width: `${((currentScene + 1) / cinematicScenes.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Cinematic Title Card */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-black/50 border border-cyan-500/20 rounded-full text-cyan-300 text-sm font-medium tracking-wide mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            A Cybersecurity Epic
          </div>
          <h1 className="text-6xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className={`bg-gradient-to-r ${currentSceneData.color} bg-clip-text text-transparent transition-all duration-2000`}>
              Skills Graph
            </span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            An immersive journey through the cybersecurity mastery landscape
          </p>
        </div>

        {/* Current Scene Display */}
        <div className="mb-16">
          <div className="max-w-6xl mx-auto">
            {/* Scene Title Card */}
            <div className="text-center mb-12">
              <div className={`inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r ${currentSceneData.color} text-white font-bold text-2xl mb-6 shadow-2xl`}>
                <currentSceneData.icon className="h-8 w-8 mr-3" />
                {currentSceneData.title}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{currentSceneData.subtitle}</h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto italic">
                "{currentSceneData.description}"
              </p>
            </div>

            {/* Cinematic Skills Stage */}
            <div className="relative bg-black/30 rounded-3xl border border-gray-700/50 p-12 backdrop-blur-sm overflow-hidden">
              {/* Stage lighting effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentSceneData.color}/10 animate-pulse`}></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl"></div>

              {/* Skills Performance Stage */}
              <div className="relative h-[600px]">
                {currentSceneData.skills.map((skill, index) => {
                  const isHovered = hoveredSkill === skill.name;
                  
                  return (
                    <div
                      key={skill.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{
                        left: `${skill.position.x}%`,
                        top: `${skill.position.y}%`,
                        animationDelay: `${index * 0.3}s`
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Spotlight */}
                      <div className={`absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r ${currentSceneData.color}/20 blur-xl transition-all duration-500 ${
                        isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
                      }`}></div>

                      {/* Skill Performance Node */}
                      <div className={`relative w-24 h-24 transition-all duration-500 ${
                        isHovered ? 'scale-125' : getSkillIntensityEffect(skill.intensity)
                      }`}>
                        {/* Proficiency Ring */}
                        <div className="relative w-24 h-24">
                          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                            {/* Background circle */}
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              stroke="rgba(75, 85, 99, 0.3)"
                              strokeWidth="4"
                              fill="none"
                            />
                            {/* Progress circle with cinematic glow */}
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              stroke={`url(#gradient-${index})`}
                              strokeWidth="4"
                              fill="none"
                              strokeDasharray={`${skill.level * 2.83} 283`}
                              strokeLinecap="round"
                              className="transition-all duration-1000 drop-shadow-lg"
                              style={{ 
                                animationDelay: `${index * 0.2}s`,
                                filter: `drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))`
                              }}
                            />
                            <defs>
                              <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="50%" stopColor="#3b82f6" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                              </linearGradient>
                            </defs>
                          </svg>
                          
                          {/* Skill Icon with cinematic glow */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${currentSceneData.color} flex items-center justify-center shadow-2xl border-2 border-white/20`}>
                              <skill.icon className="h-7 w-7 text-white drop-shadow-lg" />
                            </div>
                          </div>
                          
                          {/* Proficiency Badge */}
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                            <div className="bg-black/90 px-3 py-1 rounded-full text-xs text-cyan-300 font-bold border border-cyan-500/50 shadow-lg">
                              {skill.level}%
                            </div>
                          </div>
                        </div>

                        {/* Skill Name with cinematic styling */}
                        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
                          <div className="text-white font-bold text-sm whitespace-nowrap drop-shadow-lg">
                            {skill.name}
                          </div>
                        </div>

                        {/* Cinematic Tooltip */}
                        <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-6 px-6 py-4 bg-black/95 backdrop-blur-sm text-white text-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 border border-cyan-500/50 shadow-2xl`}>
                          <div className="text-center">
                            <div className="font-bold text-cyan-300 text-lg mb-2">{skill.name}</div>
                            <div className="text-gray-300 text-sm mb-3 italic">"{skill.description}"</div>
                            <div className="flex items-center justify-center space-x-3">
                              <div className={`text-lg font-bold bg-gradient-to-r ${currentSceneData.color} bg-clip-text text-transparent`}>
                                {skill.level}%
                              </div>
                              <div className="text-gray-400">Mastery Level</div>
                            </div>
                          </div>
                        </div>

                        {/* Cinematic Effects */}
                        {isHovered && (
                          <>
                            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping opacity-75"></div>
                            <div className="absolute inset-0 rounded-full border border-white/50 animate-pulse"></div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Scene Navigation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Choose Your Chapter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cinematicScenes.map((scene, index) => (
              <div
                key={scene.id}
                onClick={() => setCurrentScene(index)}
                className={`bg-black/50 rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                  index === currentScene
                    ? 'border-cyan-400 shadow-lg shadow-cyan-400/20'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${scene.color} flex items-center justify-center mx-auto mb-4 shadow-xl ${
                    index === currentScene ? 'scale-110' : ''
                  } transition-transform duration-300`}>
                    <scene.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{scene.title}</h4>
                  <p className="text-sm text-gray-400 mb-4">{scene.subtitle}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-sm font-bold text-cyan-400">{scene.skills.length}</div>
                      <div className="text-xs text-gray-500">Skills</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-sm font-bold bg-gradient-to-r ${scene.color} bg-clip-text text-transparent`}>
                        {Math.round(scene.skills.reduce((sum, skill) => sum + skill.level, 0) / scene.skills.length)}%
                      </div>
                      <div className="text-xs text-gray-500">Avg Level</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Credits */}
        {showCredits && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
            <div className="text-center text-white">
              <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                THE END
              </h2>
              <p className="text-2xl mb-4">A Cybersecurity Skills Journey</p>
              <p className="text-lg text-gray-400">Starring: Sunil Kumar Peela</p>
              <p className="text-sm text-gray-500 mt-8">Thank you for watching</p>
            </div>
          </div>
        )}

        {/* Epic Statistics */}
        <div className="bg-black/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Epic Skills Statistics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {cinematicScenes.reduce((total, scene) => total + scene.skills.length, 0)}
              </div>
              <div className="text-gray-300">Total Skills</div>
              <div className="text-xs text-gray-500 mt-1">Across all scenes</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {cinematicScenes.length}
              </div>
              <div className="text-gray-300">Epic Chapters</div>
              <div className="text-xs text-gray-500 mt-1">Cinematic scenes</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {Math.round(
                  cinematicScenes.reduce((totalSum, scene) => 
                    totalSum + scene.skills.reduce((sum, skill) => sum + skill.level, 0), 0
                  ) / cinematicScenes.reduce((total, scene) => total + scene.skills.length, 0)
                )}%
              </div>
              <div className="text-gray-300">Master Level</div>
              <div className="text-xs text-gray-500 mt-1">Average proficiency</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                8+
              </div>
              <div className="text-gray-300">Years Journey</div>
              <div className="text-xs text-gray-500 mt-1">Epic adventure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGraph;