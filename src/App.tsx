import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Certifications from './components/Certifications'
import OnlineTraining from './components/OnlineTraining'
import Experience from './components/Experience'
import Skills from './components/Skills'
import SkillsGraph from './components/SkillsGraph'
import Projects from './components/Projects'
import Patents from './components/Patents'
import Competitions from './components/Competitions'
import Clubs from './components/Clubs'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Navigation sections
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'training', label: 'Training' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'skills-graph', label: 'Skills Graph' },
    { id: 'projects', label: 'Projects' },
    { id: 'patents', label: 'Patents' },
    { id: 'competitions', label: 'Competitions' },
    { id: 'clubs', label: 'Clubs' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      // Find the current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === section.id
                      ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-500/50 shadow-lg shadow-cyan-500/25'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                  }`}
                >
                  {section.label}
                  
                  {/* Active indicator */}
                  {activeSection === section.id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white focus:outline-none focus:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden bg-gray-900/98 backdrop-blur-sm border-t border-gray-700">
          <div className="px-4 py-3 space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === section.id
                    ? 'text-cyan-300 bg-cyan-500/20 border border-cyan-500/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  {section.label}
                  {activeSection === section.id && (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <OnlineTraining />
        <Experience />
        <Skills />
        <SkillsGraph />
        <Projects />
        <Patents />
        <Competitions />
        <Clubs />
        <Contact />
      </main>
    </div>
  )
}

export default App