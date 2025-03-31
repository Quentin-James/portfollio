import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './Navbar';
import ActiveSection from './ActiveSection';
import React, { useState, useRef, useEffect } from 'react';
import SkillBadge from './SkillBadges';
import AnimatedBackground from './AnimatedBackground';

const urls = {
  Github: "https://github.com/Quentin-James",
  Linkedin: "https://www.linkedin.com/feed/",
  Mail: "mailto:jamesquentin46@gmail.com"
};

const handleClick = (url: string) => {
  window.location.href = url;
};

const Home = () => {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    e4: useRef<HTMLDivElement>(null),
    e5: useRef<HTMLDivElement>(null),
    veille: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionId: string) => {
    const section = sectionRefs[sectionId as keyof typeof sectionRefs]?.current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    scrollToSection(activeSection);
  }, [activeSection]);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <AnimatedBackground className="absolute top-0 left-0 w-full h-full z-0" />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} className="relative z-10" />
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Left Column - Profile */}
          <div className="text-left">
            <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">Quentin James</h2>
            <p className="text-2xl text-teal-400 mb-6 font-light">Étudiant en BTS SIO - Option SLAM</p>
            
            <div className="flex space-x-4 mb-8">
              {Object.entries(urls).map(([key, url]) => (
                <button
                  key={key}
                  onClick={() => handleClick(url)}
                  className="p-3 rounded-full bg-gray-800 text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  {key === 'Github' && <Github className="w-6 h-6" />}
                  {key === 'Linkedin' && <Linkedin className="w-6 h-6" />}
                  {key === 'Mail' && <Mail className="w-6 h-6" />}
                </button>
              ))}
            </div>

            <a
              href="../CV/CV Quentin-James Alternants.pdf"
              download
              className="inline-flex items-center px-6 py-3 text-lg font-medium rounded-full text-white bg-teal-500 hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5 mr-2" />
              Télécharger mon CV
            </a>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            <img
              src="../../public/img/144670197.png"
              alt="Profile"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl ring-4 ring-teal-400/50"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-teal-400/20 to-transparent"></div>
          </div>
        </div>

        {/* Skills Section */}
        <div ref={sectionRefs.skills} className="mb-12 py-8">
          <h2 className="text-3xl font-bold text-teal-400 mb-8">Compétences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillBadge name="React" level="Intermediate" />
            <SkillBadge name="TypeScript" level="Intermediate" />
            <SkillBadge name="PHP" level="Intermediate" />
            <SkillBadge name="C#" level="Advanced" />
            <SkillBadge name="Bash" level="Intermediate" />
            <SkillBadge name="Python" level="Intermediate" />
            <SkillBadge name="Angular" level="Beginner" />
            <SkillBadge name="AzureDevOps" level="Intermediate" />
          </div>
        </div>

        {/* Content Sections with Refs */}
        <div ref={sectionRefs.about} id="about" className="py-8">
          <ActiveSection activeSection="about" />
        </div>
        <div ref={sectionRefs.e4} id="e4" className="py-8">
          <ActiveSection activeSection="e4" />
        </div>
        <div ref={sectionRefs.e5} id="e5" className="py-8">
          <ActiveSection activeSection="e5" />
        </div>
        <div ref={sectionRefs.veille} id="veille" className="py-8">
          <ActiveSection activeSection="veille" />
        </div>
      </main>

      <footer className="relative z-10 bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg">© {new Date().getFullYear()} - Portfolio BTS SIO</p>
            <p className="mt-2 text-teal-400">Développé avec React et Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;