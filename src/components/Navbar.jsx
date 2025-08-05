import { useEffect } from 'react';
import logo from '../assets/logo.png';

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto md:h-14 transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_20px_rgba(239,68,68,0.7)]"
            />
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
            <a
              href="#home"
              className="text-gray-300 hover:text-ivory transition-colors hover:text-red-400"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-ivory transition-colors hover:text-red-400"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-ivory transition-colors hover:text-red-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-ivory transition-colors hover:text-red-400"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
