import React, { useState, useEffect } from 'react';
import { Network, Database, Shield, Cloud, Code, Eye, Lock, Server, Zap, Globe, GitBranch, Activity, Terminal, Key, FileText, Layers, Cpu, Monitor, HardDrive, Wifi, Settings, CheckCircle, Award, Target, Search, AlertTriangle, Braces, Play, Pause, RotateCcw, FastForward } from 'lucide-react';

const SkillsGraph = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [matrixEffect, setMatrixEffect] = useState([]);

  // Cinematic cybersecurity scenes - like movie chapters
  const cyberSecurityScenes = [
    {
      id: 'digital-fortress',
      title: 'Digital Fortress Defense',
      subtitle: 'The First Line of Protection',
      description: 'In the digital realm, every network needs its guardians. These are the tools that stand watch at the gates.',
      atmosphere: 'from-blue-900 via-blue-800 to-cyan-900',
      skills: [
        { name: 'Firewalls', icon: Shield, position: { x: 20, y: 30 }, power: 95, color: 'from-red-500 to-orange-600' },
        { name: 'IDS/IPS', icon: Eye, position: { x: 80, y: 25 }, power: 90, color: 'from-purple-500 to-pink-600' },
        { name: 'VPN', icon: Lock, position: { x: 50, y: 60 }, power: 88, color: 'from-green-500 to-emerald-600' },
        { name: 'Network Segmentation', icon: Network, position: { x: 30, y: 70 }, power: 85, color: 'from-blue-500 to-cyan-600' },
        { name: 'Access Control', icon: Key, position: { x: 70, y: 50 }, power: 92, color: 'from-yellow-500 to-orange-600' }
      ]
    },
    {
      id: 'threat-hunter',
      title: 'The Threat Hunter',
      subtitle: 'Hunting in the Digital Shadows',
      description: 'When threats hide in the darkness, these tools illuminate the path to discovery and elimination.',
      atmosphere: 'from-gray-900 via-red-900 to-black',
      skills: [
        { name: 'Splunk', icon: Activity, position: { x: 25, y: 40 }, power: 95, color: 'from-orange-500 to-red-600' },
        { name: 'WAZUH', icon: Shield, position: { x: 75, y: 35 }, power: 88, color: 'from-blue-500 to-blue-700' },
        { name: 'MITRE ATT&CK', icon: Target, position: { x: 50, y: 20 }, power: 92, color: 'from-red-500 to-pink-600' },
        { name: 'Threat Intelligence', icon: Eye, position: { x: 40, y: 65 }, power: 90, color: 'from-purple-500 to-indigo-600' },
        { name: 'Digital Forensics', icon: Search, position: { x: 60, y: 70 }, power: 87, color: 'from-cyan-500 to-blue-600' }
      ]
    },
    {
      id: 'cloud-guardian',
      title: 'Cloud Guardian',
      subtitle: 'Securing the Infinite Sky',
      description: 'In the boundless cloud realm, these technologies ensure security scales with innovation.',
      atmosphere: 'from-cyan-900 via-blue-800 to-indigo-900',
      skills: [
        { name: 'AWS Security', icon: Cloud, position: { x: 30, y: 30 }, power: 90, color: 'from-orange-500 to-yellow-600' },
        { name: 'Azure Security', icon: Cloud, position: { x: 70, y: 25 }, power: 85, color: 'from-blue-500 to-cyan-600' },
        { name: 'Kubernetes', icon: Layers, position: { x: 50, y: 50 }, power: 82, color: 'from-blue-600 to-purple-600' },
        { name: 'Docker Security', icon: Server, position: { x: 25, y: 65 }, power: 88, color: 'from-cyan-500 to-blue-600' },
        { name: 'IAM', icon: Key, position: { x: 75, y: 60 }, power: 93, color: 'from-green-500 to-emerald-600' }
      ]
    },
    {
      id: 'code-warrior',
      title: 'The Code Warrior',
      subtitle: 'Forging Security Through Code',
      description: 'Where logic meets protection, these programming languages become weapons against cyber threats.',
      atmosphere: 'from-green-900 via-emerald-800 to-teal-900',
      skills: [
        { name: 'Python', icon: Code, position: { x: 40, y: 30 }, power: 95, color: 'from-blue-500 to-yellow-600' },
        { name: 'Java', icon: Code, position: { x: 60, y: 25 }, power: 85, color: 'from-orange-500 to-red-600' },
        { name: 'JavaScript', icon: Braces, position: { x: 30, y: 55 }, power: 80, color: 'from-yellow-500 to-orange-600' },
        { name: 'PowerShell', icon: Terminal, position: { x: 70, y: 50 }, power: 88, color: 'from-blue-600 to-cyan-600' },
        { name: 'SQL', icon: Database, position: { x: 50, y: 70 }, power: 90, color: 'from-indigo-500 to-purple-600' }
      ]
    },
    {
      id: 'penetration-master',
      title: 'Penetration Master',
      subtitle: 'Testing the Unbreakable',
      description: 'To defend effectively, one must think like an attacker. These tools reveal the hidden vulnerabilities.',
      atmosphere: 'from-red-900 via-pink-800 to-purple-900',
      skills: [
        { name: 'Kali Linux', icon: Terminal, position: { x: 35, y: 35 }, power: 92, color: 'from-gray-600 to-gray-800' },
        { name: 'Burp Suite', icon: Globe, position: { x: 65, y: 30 }, power: 88, color: 'from-orange-600 to-red-600' },
        { name: 'Metasploit', icon: Target, position: { x: 50, y: 55 }, power: 85, color: 'from-red-600 to-pink-600' },
        { name: 'Nmap', icon: Network, position: { x: 30, y: 70 }, power: 95, color: 'from-green-600 to-emerald-600' },
        { name: 'Wireshark', icon: Eye, position: { x: 70, y: 65 }, power: 93, color: 'from-blue-600 to-cyan-600' }
      ]
    },
    {
      id: 'compliance-architect',
      title: 'Compliance Architect',
      subtitle: 'Building Trust Through Standards',
      description: 'In the world of regulations and standards, these frameworks ensure security meets compliance.',
      atmosphere: 'from-indigo-900 via-purple-800 to-blue-900',
      skills: [
        { name: 'NIST Framework', icon: FileText, position: { x: 40, y: 25 }, power: 90, color: 'from-blue-600 to-blue-700' },
        { name: 'ISO 27001', icon: Award, position: { x: 60, y: 30 }, power: 88, color: 'from-green-600 to-emerald-600' },
        { name: 'PCI-DSS', icon: Shield, position: { x: 30, y: 60 }, power: 85, color: 'from-purple-600 to-pink-600' },
        { name: 'HIPAA', icon: FileText, position: { x: 70, y: 55 }, power: 82, color: 'from-cyan-600 to-blue-600' },
        { name: 'SOX Compliance', icon: CheckCircle, position: { x: 50, y: 75 }, power: 80, color: 'from-yellow-600 to-orange-600' }
      ]
    }
  ];

  // Matrix rain effect
  useEffect(() => {
    const generateMatrixRain = () => {
      const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
      const drops = [];
      for (let i = 0; i < 50; i++) {
        drops.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          char: chars[Math.floor(Math.random() * chars.length)],
          speed: 0.5 + Math.random() * 1.5,
          opacity: 0.1 + Math.random() * 0.3
        });
      }
      setMatrixEffect(drops);
    };

    generateMatrixRain();
  }, []);

  // Auto-advance scenes
  useEffect(() => {
    if (!isPlaying) return;

    const sceneInterval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % cyberSecurityScenes.length);
    }, 8000);

    return () => clearInterval(sceneInterval);
  }, [isPlaying, cyberSecurityScenes.length]);

  // Animation phases
  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4);
    }, 1000);

    return () => clearInterval(animationInterval);
  }, []);

  // Update matrix rain
  useEffect(() => {
    const matrixInterval = setInterval(() => {
      setMatrixEffect(prev => prev.map(drop => ({
        ...drop,
        y: (drop.y + drop.speed) % 100,
        char: drop.y > 95 ? '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'[Math.floor(Math.random() * 67)] : drop.char
      })));
    }, 100);

    return () => clearInterval(matrixInterval);
  }, []);

  const currentSceneData = cyberSecurityScenes[currentScene];

  const handleSceneChange = (sceneIndex) => {
    setCurrentScene(sceneIndex);
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const resetToStart = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  const skipToNext = () => {
    setCurrentScene((prev) => (prev + 1) % cyberSecurityScenes.length);
  };

  return (
    <section id="skills-graph" className="relative min-h-screen overflow-hidden">
      {/* Cinematic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSceneData.atmosphere} transition-all duration-2000`}>
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {matrixEffect.map((drop) => (
            <div
              key={drop.id}
              className="absolute text-green-400 font-mono text-sm pointer-events-none"
              style={{
                left: `${drop.x}%`,
                top: `${drop.y}%`,
                opacity: drop.opacity,
                transform: `translateY(-50%)`,
                textShadow: '0 0 10px currentColor'
              }}
            >
              {drop.char}
            </div>
          ))}
        </div>

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Scanning Lines Effect */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-0.5 bg-cyan-400/30 animate-pulse" 
               style={{ top: `${20 + animationPhase * 20}%` }}></div>
          <div className="absolute w-full h-0.5 bg-cyan-400/20 animate-pulse delay-500" 
               style={{ top: `${60 + animationPhase * 15}%` }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Cinematic Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-black/50 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium tracking-wide mb-8 backdrop-blur-sm">
            <Cpu className="h-4 w-4 mr-2" />
            CYBERSECURITY ARSENAL MATRIX
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills Graph
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the cinematic journey through my cybersecurity expertise - where each skill tells a story of digital protection and innovation
          </p>
        </div>

        {/* Movie Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/70 backdrop-blur-md rounded-2xl p-4 border border-cyan-500/30">
            <div className="flex items-center space-x-4">
              <button
                onClick={resetToStart}
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl text-cyan-400 hover:text-cyan-300 transition-all duration-200"
                title="Reset to Start"
              >
                <RotateCcw className="h-5 w-5" />
              </button>
              
              <button
                onClick={togglePlayback}
                className="p-3 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-xl text-cyan-400 hover:text-cyan-300 transition-all duration-200"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              
              <button
                onClick={skipToNext}
                className="p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl text-cyan-400 hover:text-cyan-300 transition-all duration-200"
                title="Next Scene"
              >
                <FastForward className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Current Scene Display */}
        <div className="mb-16">
          <div className="max-w-6xl mx-auto">
            {/* Scene Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-4 backdrop-blur-sm">
                <span>Scene {currentScene + 1} of {cyberSecurityScenes.length}</span>
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{currentSceneData.title}</h3>
              <p className="text-xl text-cyan-300 mb-4">{currentSceneData.subtitle}</p>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">{currentSceneData.description}</p>
            </div>

            {/* Skills Constellation */}
            <div className="relative h-96 bg-black/20 rounded-3xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden">
              {/* Grid Lines */}
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <div key={`v-${i}`} className="absolute h-full w-px bg-cyan-400/10" style={{ left: `${i * 10}%` }}></div>
                ))}
                {[...Array(10)].map((_, i) => (
                  <div key={`h-${i}`} className="absolute w-full h-px bg-cyan-400/10" style={{ top: `${i * 10}%` }}></div>
                ))}
              </div>

              {/* Skill Nodes */}
              {currentSceneData.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{
                    left: `${skill.position.x}%`,
                    top: `${skill.position.y}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Skill Node */}
                  <div className={`relative w-20 h-20 rounded-full border-2 transition-all duration-500 ${
                    hoveredSkill === skill.name
                      ? 'border-cyan-400 shadow-lg shadow-cyan-400/25 scale-125'
                      : 'border-gray-600 hover:border-gray-500 hover:scale-110'
                  }`}>
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center relative overflow-hidden`}>
                      <skill.icon className="h-8 w-8 text-white z-10" />
                      
                      {/* Power Level Ring */}
                      <div className="absolute inset-1 rounded-full border-2 border-white/30"></div>
                      
                      {/* Animated Pulse */}
                      <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
                    </div>
                  </div>

                  {/* Power Level Indicator */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="bg-black/70 px-2 py-1 rounded text-xs text-cyan-300 font-bold">
                      {skill.power}%
                    </div>
                  </div>

                  {/* Skill Name Tooltip */}
                  <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 border border-cyan-500/30`}>
                    <div className="text-center">
                      <div className="font-bold text-cyan-300">{skill.name}</div>
                      <div className="text-xs text-gray-300">Power Level: {skill.power}%</div>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  {hoveredSkill === skill.name && (
                    <div className="absolute inset-0">
                      {currentSceneData.skills.filter(s => s.name !== skill.name).map((otherSkill, otherIndex) => (
                        <div
                          key={otherIndex}
                          className="absolute w-px bg-cyan-400/50 origin-center animate-pulse"
                          style={{
                            height: `${Math.sqrt(
                              Math.pow(otherSkill.position.x - skill.position.x, 2) +
                              Math.pow(otherSkill.position.y - skill.position.y, 2)
                            ) * 4}px`,
                            transform: `rotate(${Math.atan2(
                              otherSkill.position.y - skill.position.y,
                              otherSkill.position.x - skill.position.x
                            )}rad)`,
                            transformOrigin: '0 50%',
                            left: '50%',
                            top: '50%'
                          }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Scene Atmosphere Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentSceneData.atmosphere}/20 pointer-events-none`}></div>
            </div>
          </div>
        </div>

        {/* Scene Navigation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Choose Your Scene</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cyberSecurityScenes.map((scene, index) => (
              <div
                key={scene.id}
                onClick={() => handleSceneChange(index)}
                className={`bg-black/40 backdrop-blur-sm rounded-xl p-6 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === currentScene
                    ? 'border-cyan-400 shadow-lg shadow-cyan-400/20'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${scene.atmosphere} mb-4`}></div>
                <h4 className="text-lg font-bold text-white mb-2">{scene.title}</h4>
                <p className="text-sm text-gray-300 mb-4">{scene.subtitle}</p>
                <div className="text-center">
                  <span className="text-xs text-cyan-400 font-medium">{scene.skills.length} Skills</span>
                </div>
                
                {/* Scene Preview */}
                <div className="mt-4 flex justify-center space-x-2">
                  {scene.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                    >
                      <skill.icon className="h-3 w-3 text-white" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arsenal Statistics */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Cybersecurity Arsenal Statistics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {cyberSecurityScenes.reduce((total, scene) => total + scene.skills.length, 0)}
              </div>
              <div className="text-gray-300">Total Skills</div>
              <div className="text-xs text-gray-500 mt-1">Across all domains</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {cyberSecurityScenes.length}
              </div>
              <div className="text-gray-300">Skill Domains</div>
              <div className="text-xs text-gray-500 mt-1">Specialized areas</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {Math.round(
                  cyberSecurityScenes.reduce((total, scene) => 
                    total + scene.skills.reduce((sum, skill) => sum + skill.power, 0), 0
                  ) / cyberSecurityScenes.reduce((total, scene) => total + scene.skills.length, 0)
                )}%
              </div>
              <div className="text-gray-300">Average Power</div>
              <div className="text-xs text-gray-500 mt-1">Skill proficiency</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                8+
              </div>
              <div className="text-gray-300">Years Experience</div>
              <div className="text-xs text-gray-500 mt-1">In cybersecurity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsGraph;