import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-red-500">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all flex flex-col gap-4">
              <h3 className="text-xl font-bold">Lead Validator API</h3>
              <p className="text-gray-300">
                A secure REST API for real time lead validation, integrating
                third party services to verify emails and phone numbers.
                Includes a custom API key system with rate limiting and usage
                tracking, plus a lightweight HTML dashboard for user signup and
                key management.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Django', 'DRF', 'Twilio', 'Hunter.io', 'PostgreSQL'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm hover:bg-red-600/30 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://lead-validator-api-production.up.railway.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 hover:underline transition-colors"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/cyberdeeb/lead-validator-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all flex flex-col gap-4">
              <h3 className="text-xl font-bold">
                AI Mood-Based Playlist Generator
              </h3>
              <p className="text-gray-300">
                A full-stack web app that generates personalized Spotify
                playlists based on user mood. Combines OpenAI for mood analysis,
                Spotify's API for real time music data, and a responsive React +
                CSS frontend for a smooth user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'JavaScript',
                  'React',
                  'Typescript',
                  'CSS',
                  'OpenAI API',
                  'Spotify API',
                  'express.js',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm hover:bg-red-600/30 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://ai-mood-generator-playlist.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 hover:underline transition-colors"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/cyberdeeb/ai-mood-playlist-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all flex flex-col gap-4">
              <h3 className="text-xl font-bold">IdeaLab</h3>
              <p className="text-gray-300">
                A hackathon project idea generator that suggests personalized,
                buildable software projects based on a user’s skills, interests,
                and availability. Powered by OpenAI, with a clean React +
                Tailwind UI for a smooth user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'JavaScript',
                  'React',
                  'Tailwind CSS',
                  'express.js',
                  'OpenAI API',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm hover:bg-red-600/30 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-2">
                <a
                  href="https://project-idea-generator-frontend.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 hover:underline transition-colors"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/cyberdeeb/project-idea-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
