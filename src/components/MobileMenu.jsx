import { scrollToSection } from '../utils/scrollToSection';

const navItems = [
  { id: 'home', label: 'Home', delay: 'delay-75' },
  { id: 'about', label: 'About', delay: 'delay-100' },
  { id: 'client-work', label: 'Client Work', delay: 'delay-150' },
  { id: 'projects', label: 'Projects', delay: 'delay-150' },
  { id: 'contact', label: 'Contact', delay: 'delay-200' },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  // Closing the menu is what releases the `overflow: hidden` lock Navbar puts
  // on <body>, so the scroll has to wait a frame for that to take effect.
  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    requestAnimationFrame(() => scrollToSection(sectionId));
  };

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
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`text-2xl font-semibold text-ivory transition-all duration-300 ${item.delay} hover:text-red-400 cursor-pointer ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};
