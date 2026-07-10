import { FiExternalLink, FiMail } from 'react-icons/fi';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416' },
  { label: 'GitHub', href: 'https://github.com/Arihant416' },
  { label: 'Twitter', href: 'https://x.com/Arihant2302' },
];

export default function Contact() {
  return (
    <section className="w-full border-b border-border bg-bg px-4 py-20 sm:px-6 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-10">
        <div className="console-panel rounded-[1.7rem] p-6 sm:p-8">
          <span className="section-kicker">05 Communications</span>
          <h2 className="mt-4 text-3xl font-light leading-tight text-text">
            Start <span className="font-serif italic text-accent">Conversation</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Working on backend systems, API reliability, source orchestration, or cost-aware platform decisions? Let's talk.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-12 items-center justify-between rounded-2xl border border-border bg-bg/70 px-4 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                <span>{label}</span>
                <FiExternalLink className="text-accent" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="console-panel flex min-h-[360px] flex-col justify-between rounded-[1.7rem] p-6 sm:p-8 lg:p-10">
          <div>
            <span className="console-tag">
              <FiMail aria-hidden="true" />
              Direct Email
            </span>

            <h3 className="mt-8 max-w-2xl text-4xl font-light leading-tight text-text md:text-5xl">
              Let's discuss something{' '}
              <span className="font-serif italic text-accent">reliable.</span>
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">
              Send a note with the system, scale, or reliability problem you are thinking through.<br />
              I usually respond within 24-48 hours.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="mailto:arihantjain416@gmail.com?subject=Backend%20Engineering%20Opportunity"
              className="btn btn-primary"
            >
              Send an Email
              <span aria-hidden="true">-&gt;</span>
            </a>

            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
              <span className="flex items-center gap-2">
                <span className="status-dot" />
                Open to collaborate
              </span>
              <span className="hidden h-px w-6 bg-border sm:inline-block" />
              <span>Remotely</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
