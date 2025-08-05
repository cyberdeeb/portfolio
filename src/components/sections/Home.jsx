import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative w-full"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-5xl w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-500 bg-clip-text text-transparent leading-tight">
            Hi, I am Abraham Deeb
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Aspiring full-stack engineer with 8+ years in data analytics and
            backend automation. Skilled in Python, Django, JavaScript, React,
            and Node.js. Focused on building scalable apps and constantly
            leveling up.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-red-500 text-ivory py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-red-500/50 text-ivory py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
