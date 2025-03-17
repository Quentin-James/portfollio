import { Download, Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './Navbar'; // Importez le composant Navbar
import ActiveSection from './ActiveSection'; // Importez le composant ActiveSection
import React, { useState } from 'react';
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

  return (
    <div className="relative min-h-screen bg-gray-50">
      <AnimatedBackground className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Header/Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} className="relative z-10" />
      
      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <img
            src="img/1727011946257.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quentin James</h2>
          <p className="text-xl text-gray-600 mb-6">Étudiant en BTS SIO - Option SLAM</p>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="#" onClick={() => handleClick(urls.Github)} className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" onClick={() => handleClick(urls.Linkedin)} className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" onClick={() => handleClick(urls.Mail)} className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a
            href="../CV/CV Quentin-James Alternants.pdf"
            download
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
          >
            <Download className="w-5 h-5 mr-2" />
            Télécharger mon CV
          </a>
        </section>
        {/* Skills Section */}
        <section className="py-10 -mt-1 border-transparent bg-transparent text-black">
          <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-400 text-center mb-12">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
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
        </section>
        {/* Dynamic Content Sections */}
        <ActiveSection activeSection={activeSection} className="relative z-10" />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© {new Date().getFullYear()} - Portfolio BTS SIO</p>
            <p className="mt-2">Développé avec React et Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;