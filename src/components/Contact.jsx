import { FiExternalLink, FiMail } from 'react-icons/fi';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416' },
  { label: 'GitHub', href: 'https://github.com/Arihant416' },
  { label: 'Twitter', href: 'https://x.com/Arihant2302' },
];

export default function Contact() {
  return (
    <section className="w-full border-b border-border bg-bg px-3 py-16 sm:px-6 sm:py-20 lg:px-8" id="contact">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 min-[960px]:grid-cols-[0.9fr_1.4fr] min-[960px]:gap-8 lg:gap-10">
        <div className="console-panel rounded-[1.35rem] p-5 sm:rounded-[1.7rem] sm:p-8">
          <span className="section-kicker">05 Communications</span>
          <h2 className="mt-4 text-2xl font-light leading-tight text-text sm:text-3xl">
            Start <span className="font-serif italic text-accent">Conversation</span>
          </h2>
          <p className="mt-5 max-w-md text-[13px] leading-relaxed text-muted sm:text-sm">
            Working on backend systems, API reliability, source orchestration, or cost-aware platform decisions? Let's talk.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            {SOCIALS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-11 items-center justify-between rounded-xl border border-border bg-bg/70 px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent sm:min-h-12 sm:rounded-2xl sm:text-[11px]"
              >
                <span>{label}</span>
                <FiExternalLink className="text-accent" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="console-panel flex min-h-0 flex-col justify-between rounded-[1.35rem] p-5 sm:min-h-[360px] sm:rounded-[1.7rem] sm:p-8 lg:p-10">
          <div>
            <span className="console-tag">
              <FiMail aria-hidden="true" />
              Direct Email
            </span>

            <h3 className="mt-7 max-w-2xl text-[2rem] font-light leading-tight text-text sm:mt-8 sm:text-4xl md:text-5xl">
              Let's discuss something{' '}
              <span className="font-serif italic text-accent">reliable.</span>
            </h3>

            <p className="mt-5 max-w-lg text-[13px] leading-relaxed text-muted sm:mt-6 sm:text-sm">
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
