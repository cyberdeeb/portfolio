import { useEffect } from 'react';
import logo from '../assets/logo.png';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="https://github.com/cyberdeeb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]"
          >
            <span className="text-xl md:text-xl font-bold">
              <span className="text-ivory">cyber</span>
              <span className="text-red-600">deeb</span>
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative flex flex-col justify-center items-center w-8 h-8 cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? 'rotate-45' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? '-rotate-45' : 'translate-y-1.5'
              }`}
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
