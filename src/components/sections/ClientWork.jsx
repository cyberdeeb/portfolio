import { RevealOnScroll } from "../RevealOnScroll";

// Cards with a falsy `url` render as a plain <div> instead of a link.
const clientWork = [
  {
    name: "Mama's Catering Kitchen",
    logo: "/logos/mamas.png",
    status: "Live site",
    description:
      "A growing catering business had outgrown its Wix site, so I rebuilt it from scratch as a custom platform. It pairs online ordering wired to Stripe with separate parent, teacher, and admin portals, plus built-in reporting.",
    outcome: "Custom build with Stripe ordering, live and in use",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Clerk Auth",
      "Stripe",
    ],
    url: "https://www.mamascateringkitchen.com/",
  },
  {
    name: "MHP Brokerage",
    logo: "/logos/mhp.png",
    status: "Live site",
    description:
      "A brokerage that needed a site as polished as the deals it handles. I designed and built a professional marketing site plus a brokerage portal for managing listings and internal tools.",
    outcome: "Listings and internal tools managed in one place",
    stack: ["Next.js", "TypeScript", "Tailwind", "Postgres", "Supabase"],
    url: "https://www.mhpbrokerage.com/",
  },
  {
    name: "Campground Brokers of America",
    logo: "/logos/cba.png",
    status: "Automation engagement",
    description:
      "Took a manual, time-heavy underwriting process and automated it, building workflows that speed up underwriting and strip repetitive busywork out of the deal pipeline.",
    outcome: "Faster underwriting, far less manual work",
    stack: ["Python", "Django REST", "Postgres", "Tailwind", "API Integration"],
    url: null,
  },
];

const StatusBadge = ({ status }) => {
  const isLive = status === "Live site";

  return (
    <span
      className={`shrink-0 text-xs font-mono px-3 py-1 rounded-full border transition-colors ${
        isLive
          ? "border-red-500/40 text-red-400"
          : "border-gray-800 text-gray-500"
      }`}
    >
      {status}
    </span>
  );
};

// These five children map 1:1 onto the five subgrid rows declared on the card,
// so every block starts at the same y position across all three cards.
const ClientCard = ({ project }) => (
  <>
    {/* 1. Header — logo centered above the title, badge pinned top-right */}
    <div className="flex flex-col items-center text-center gap-3 pt-14">
      <div className="absolute top-6 right-6">
        <StatusBadge status={project.status} />
      </div>
      {/* Logo / wordmark area */}
      <div className="w-36 h-36 shrink-0 rounded-lg border border-white/10 flex items-center justify-center p-4 overflow-hidden group-hover:border-red-500/40 transition-colors">
        <img
          src={project.logo}
          alt={`${project.name} logo`}
          loading="lazy"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-bold leading-snug">{project.name}</h3>
    </div>

    {/* 2. Description */}
    <p className="text-gray-300 text-sm leading-relaxed">
      {project.description}
    </p>

    {/* 3. Outcome callout */}
    <p className="border-l-2 border-red-500 bg-red-600/10 rounded-r py-2 pl-4 pr-3 text-sm text-red-400 self-start w-full">
      {project.outcome}
    </p>

    {/* 4. Stack pills */}
    <div className="flex flex-wrap gap-2 content-start">
      {project.stack.map((tech) => (
        <span
          key={tech}
          className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm hover:bg-red-600/30 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all self-start"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* 5. Link slot — rendered blank when there is no URL so the row still
           occupies its track and the stack above it stays aligned */}
    <span
      aria-hidden={!project.url}
      className={`text-sm self-start transition-colors ${
        project.url
          ? "text-red-400 group-hover:text-red-300"
          : "invisible select-none"
      }`}
    >
      {project.url ? "Visit site →" : " "}
    </span>
  </>
);

export const ClientWork = () => {
  const cardClasses =
    "group relative rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all grid grid-rows-subgrid row-span-5 gap-4";

  return (
    <section
      id="client-work"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center text-red-500">
            Client Work
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Client work shipped to production, from full-stack web apps to
            back-office automation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-rows-[repeat(5,auto)]">
            {clientWork.map((project) =>
              project.url ? (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClasses}
                >
                  <ClientCard project={project} />
                </a>
              ) : (
                <div key={project.name} className={cardClasses}>
                  <ClientCard project={project} />
                </div>
              ),
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
