import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative w-full"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-5xl w-full">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            <span className="block sm:inline">Hi, I am</span>
            <span className="block sm:inline sm:ml-3">Abraham Deeb</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-sm sm:max-w-lg md:max-w-xl mx-auto px-2 sm:px-0 leading-relaxed">
            Aspiring full-stack engineer with 8+ years in data analytics and
            backend automation. Skilled in Python, Django, SQL, JavaScript,
            React, and TypeScript. Focused on building scalable apps and
            constantly leveling up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-4/5 sm:w-auto bg-red-700 text-ivory py-4 sm:py-3 px-8 sm:px-8 md:px-10 rounded-lg sm:rounded font-medium text-base sm:text-base md:text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:bg-red-700 active:scale-95 cursor-pointer"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-4/5 sm:w-auto border-2 border-red-500 text-ivory py-4 sm:py-3 px-8 sm:px-8 md:px-10 rounded-lg sm:rounded font-medium text-base sm:text-base md:text-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:bg-red-600/20 active:scale-95 cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
