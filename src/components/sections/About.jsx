import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  const Languages = ['JavaScript', 'TypeScript', 'Python', 'SQL'];

  const Frameworks = [
    'Django',
    'React',
    'Node.js',
    'Express.js',
    'REST Framework',
    'Tailwind CSS',
  ];

  const Databases = ['PostgreSQL', 'SQLite', 'Snowflake'];

  const toolsSkills = [
    'Git',
    'GitHub',
    'VS Code',
    'Postman',
    'Docker',
    'RabbitMQ',
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-red-500">
            About me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Data engineer turned builder, 8+ years turning data problems into
              automated systems, now focused on backend and full-stack software
              engineering. Portfolio includes a distributed notification
              platform with RabbitMQ and Docker, a production-grade validation
              API, and several AI-integrated applications. Comfortable across
              the stack, with a bias toward clean APIs, reliable systems, and
              shipping things that work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {Languages.map((lang, index) => (
                    <span
                      key={index}
                      className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm hover:bg-red-600/30 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {Frameworks.map((framework, index) => (
                    <span
                      key={index}
                      className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm hover:bg-red-600/30 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all"
                    >
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {Databases.map((db, index) => (
                    <span
                      key={index}
                      className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm hover:bg-red-600/30 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm hover:bg-red-600/30 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold text-ivory">
                    MBA, Finance Concentration
                  </h4>
                  <p className="text-gray-300">University of La Verne</p>
                  <p className="text-gray-400 text-sm">2018 - 2020</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold text-ivory">
                    Bachelor of Business Administration, Entrepreneurship
                  </h4>
                  <p className="text-gray-300">
                    California State University, San Bernardino
                  </p>
                  <p className="text-gray-400 text-sm">2014 - 2016</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold">
                    Director, Data & Operations
                  </h4>
                  <p className="text-gray-300">
                    <strong>Company:</strong> MHP Brokerage
                  </p>
                  <p className="text-gray-300">
                    <strong>Duration:</strong> Nov 2023 - Present
                  </p>
                  <p className="text-gray-300">
                    Built Python automation scripts, ETL pipelines, and
                    refactored a PostgreSQL schema to support a full CRM
                    migration.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold">Business Analyst</h4>
                  <p className="text-gray-300">
                    <strong>Company:</strong> Iterable
                  </p>
                  <p className="text-gray-300">
                    <strong>Duration:</strong> May 2022 - May 2023
                  </p>
                  <p className="text-gray-300">
                    Wrote Python scripts for data automation and built Snowflake
                    data models to standardize historical account data.
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-semibold">
                    Customer Success Data Analyst
                  </h4>
                  <p className="text-gray-300">
                    <strong>Company:</strong> Bamboo Health
                  </p>
                  <p className="text-gray-300">
                    <strong>Duration:</strong> Sept 2021 - May 2022
                  </p>
                  <p className="text-gray-300">
                    Refactored SQL queries and rebuilt client-facing Tableau
                    reports to improve performance and cross-team visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
