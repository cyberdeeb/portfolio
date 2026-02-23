import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const techStack = [
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Express', color: '#888888' },
  { name: 'RabbitMQ', color: '#FF6600' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Docker Compose', color: '#2496ED' },
  { name: 'Resend', color: '#000000' },
  { name: 'Textbelt', color: '#444444' },
  { name: 'GitHub Actions', color: '#2088FF' },
];

const services = [
  {
    name: 'Webhook Service',
    description:
      'Public-facing entry point. Validates incoming POST requests and publishes normalized events to the raw-events queue.',
    icon: '⚡',
  },
  {
    name: 'Router Service',
    description:
      'Consumes raw-events and routes each message to the correct downstream queue based on event type.',
    icon: '🔀',
  },
  {
    name: 'Email Worker',
    description:
      'Subscribes to email-notifications, looks up the user in Postgres, and sends a formatted email via Resend.',
    icon: '📧',
  },
  {
    name: 'SMS Worker',
    description:
      'Subscribes to sms-notifications, looks up the user in Postgres, and sends an SMS via Textbelt.',
    icon: '📱',
  },
  {
    name: 'Dead Letter Service',
    description:
      'Catches failed messages automatically routed by RabbitMQ. Logs death headers including origin queue, failure reason, and timestamp.',
    icon: '🔒',
  },
];

const decisions = [
  {
    title: 'Why event-driven over direct service calls?',
    body: 'Direct HTTP calls between services create tight coupling, if the email service is down, the whole request fails. With RabbitMQ as the message broker, services are fully decoupled. The webhook service publishes and moves on. Workers consume independently. A worker can go down and come back up without losing a single message.',
  },
  {
    title: 'Why add a dead letter queue?',
    body: 'Without a DLQ, a failed message, an unknown userId, gets nacked and silently dropped. The DLQ catches those failures instead of discarding them, giving you a place to inspect what went wrong and replay messages once the issue is fixed. It shifts the system from "fail and forget" to "fail and recover."',
  },
  {
    title: 'Why separate containers per service?',
    body: 'Each service has its own Dockerfile and runs in an isolated container. This means an email worker crash has zero impact on the SMS worker or the router. Services can be scaled, updated, and deployed independently without touching anything else in the platform.',
  },
];

export function NotificationPlatform() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 transition-all duration-300 delay-75 hover:text-red-400 text-sm cursor-pointer"
          >
            ← Back to Portfolio
          </button>
          <a
            href="https://github.com/cyberdeeb/notification-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm border-red-500 text-ivory border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:bg-red-600/20 active:scale-95 cursor-pointer px-4 py-2 rounded transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source Code
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
              Backend · Distributed Systems
            </span>
            <img
              src="https://github.com/cyberdeeb/notification-platform/actions/workflows/ci.yml/badge.svg"
              alt="CI"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Notification Platform
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            An event-driven notification platform built with a microservices
            architecture. Services communicate exclusively through RabbitMQ
            queues, enabling independent scaling and failure isolation. Features
            a dead letter queue to capture and inspect failed messages rather
            than silently dropping them.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                style={{ borderColor: tech.color, color: tech.color }}
                className="text-xs px-3 py-1 rounded-full border border-gray-800 text-gray-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Architecture</h2>
          <div className="border border-gray-800 rounded-lg p-8 bg-gray-950 font-mono text-sm text-gray-400 overflow-x-auto">
            <pre>{`External Service
      │
      ▼
┌─────────────────┐
│ Webhook Service │  ← Validates & publishes to raw-events
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    RabbitMQ     │  ← Message broker
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Router Service  │  ← Routes to correct downstream queue
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌───────┐ ┌───────┐
│ Email │ │  SMS  │  ← Look up user in Postgres, send notification
│Worker │ │Worker │
└───────┘ └───────┘
    │         │
    ▼         ▼
 Resend   Textbelt    On failure (nack)
                             │
                             ▼
                  ┌─────────────────────┐
                  │ Dead Letter Service  │  ← Logs failed messages
                  └─────────────────────┘`}</pre>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="border border-gray-800 rounded-lg p-6 space-y-2 hover:shadow-[0_0_0.5rem_0_rgba(255,0,0,0.5)] transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{service.icon}</span>
                  <h3 className="font-semibold">{service.name}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Decisions */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Technical Decisions</h2>
          <div className="space-y-4">
            {decisions.map((decision) => (
              <details
                key={decision.title}
                className="border border-gray-800 rounded-lg group"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-200 hover:text-white transition-colors list-none flex items-center justify-between">
                  {decision.title}
                  <span className="text-gray-600 group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                  {decision.body}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* How to Run */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Running Locally</h2>
          <p className="text-gray-400 text-sm">
            The entire platform runs with a single command. Requires Docker
            Desktop.
          </p>
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 font-mono text-sm space-y-2">
            <p className="text-gray-500"># Clone the repo</p>
            <p className="text-gray-200">
              git clone https://github.com/cyberdeeb/notification-platform.git
            </p>
            <p className="text-gray-500 mt-4">
              # Copy and fill in environment variables
            </p>
            <p className="text-gray-200">cp .env.example .env</p>
            <p className="text-gray-500 mt-4"># Start all seven containers</p>
            <p className="text-gray-200">docker compose up --build</p>
          </div>
          <p className="text-sm text-gray-500">
            Full setup instructions and test curl commands are in the{' '}
            <a
              href="https://github.com/cyberdeeb/notification-platform#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline underline-offset-4"
            >
              README
            </a>
            .
          </p>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-gray-800 pt-12 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 transition-all duration-300 delay-75 hover:text-red-400 text-sm cursor-pointer"
          >
            ← Back to Portfolio
          </button>
          <a
            href="https://github.com/cyberdeeb/notification-platform"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-red-700 text-ivory px-6 py-2 rounded transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:bg-red-700 active:scale-95 cursor-pointer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
