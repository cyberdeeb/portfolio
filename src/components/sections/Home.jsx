import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative w-full"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-5xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            <span className="block sm:inline">Hi, I am</span>
            <span className="block sm:inline sm:ml-3">Abraham Deeb</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Aspiring full-stack engineer with 8+ years in data analytics and
            backend automation. Skilled in Python, Django, JavaScript, React,
            and Node.js. Focused on building scalable apps and constantly
            leveling up.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4 sm:px-0">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-red-600 text-ivory py-4 sm:py-3 px-8 sm:px-6 rounded-lg sm:rounded font-medium text-base sm:text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:bg-red-700 active:scale-95"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border-2 border-red-500 text-ivory py-4 sm:py-3 px-8 sm:px-6 rounded-lg sm:rounded font-medium text-base sm:text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:bg-red-600/20 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
