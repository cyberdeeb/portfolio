import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {
  const Languages = ['JavaScript', 'TypeScript', 'Python', 'SQL'];

  const Frameworks = [
    'Django',
    'React',
    'Express.js',
    'Node.js',
    'REST Framework',
  ];

  const Databases = ['PostgreSQL', 'SQLite', 'Snowflake'];

  const toolsSkills = ['Git', 'GitHub', 'VS Code', 'Postman', 'DBT'];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-red-500">
            About me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a passionate web developer with a knack for creating dynamic
              and responsive web applications. My journey in tech started with a
              curiosity for how things work, and it has evolved into a
              full-fledged career where I get to solve problems and bring ideas
              to life.
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
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li className="text-gray-300">
                  <strong>Entrepreneurship</strong> - CSUSB (2014- 2016)
                </li>
                <li className="text-gray-300">
                  <strong>MBA Finance</strong> - ULV (2018- 2020)
                </li>
              </ul>
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
                    Led data initiatives that improved data integrity, automated
                    workflows, streamlined ETL operations, and supported a
                    successful CRM migration.
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
                    Developed data models, dashboards, and reporting tools that
                    enhanced data accuracy, cross-team visibility, and
                    stakeholder decision making.
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
                    Implemented efficient reporting systems and rebuilt client
                    facing dashboards, enhancing team productivity, client
                    satisfaction, and data driven decision making while
                    mentoring new hires on SQL and Tableau best practices.
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
