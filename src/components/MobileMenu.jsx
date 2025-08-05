import { useEffect } from 'react';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg z-30 flex flex-col items-center justify-center
                    transition-all duration-300 ease-in-out ${
                      menuOpen
                        ? 'h-screen opacity-100 pointer-events-auto'
                        : 'h-0 opacity-0 pointer-events-none'
                    }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-ivory text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <nav className="flex flex-col items-center space-y-8">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-ivory transition-all duration-300 delay-75 hover:text-red-400 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-ivory transition-all duration-300 delay-100 hover:text-red-400 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-ivory transition-all duration-300 delay-150 hover:text-red-400 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-ivory transition-all duration-300 delay-200 hover:text-red-400 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
