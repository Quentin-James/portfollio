import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 'about', label: 'À propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'e4', label: 'Projets' },
    { id: 'e5', label: 'Expériences' },
    { id: 'veille', label: 'Veille' },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm text-white py-4 sticky top-0 z-50 shadow-xl border-b border-teal-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 text-transparent bg-clip-text">
            Portfolio
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-lg text-teal-400 hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>

          <div className={`absolute md:relative top-full left-0 right-0 md:top-auto md:flex md:space-x-1 ${isOpen ? 'block' : 'hidden'} md:block bg-gray-900/95 md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none`}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/20'
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-teal-400'
                  }`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;