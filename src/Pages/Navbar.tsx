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

  return (
    <nav className="bg-gray-900 text-white py-4 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`flex-col md:flex md:flex-row ${isOpen ? 'flex' : 'hidden'} space-y-4 md:space-y-0 md:space-x-4`}>
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'about' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('about')}
          >
            À propos
          </button>
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'e4' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('e4')}
          >
            Projets
          </button>
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'e5' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('e5')}
          >
            Expériences Professionnelles
          </button>
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === 'veille' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('veille')}
          >
            Veille Technologique
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;