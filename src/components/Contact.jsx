const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416' },
  { label: 'GitHub', href: 'https://github.com/Arihant416' },
  { label: 'Twitter', href: 'https://x.com/Arihant2302' },
];

export default function Contact() {
  return (
    <section className="w-full bg-[var(--bg)] py-16 sm:py-24 border-b border-[var(--border)]" id="contact">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

        {/* Left Anchor Layout Box */ }
        <div className="col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] font-medium block">
            05 // Communications
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif italic font-normal tracking-tight text-[var(--text)] mt-1">
            Start <span className="font-sans not-italic font-light text-[var(--text-dim)]">Conversation</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-muted mt-4 max-w-sm leading-relaxed">
            Need backend architecture, API scaling, or reliability work? Let's talk.
          </p>

          {/* Social Infrastructure Pipes */ }
          <div className="flex flex-col gap-3 mt-6 sm:mt-8 font-mono text-[11px] sm:text-xs tracking-wider w-full items-center lg:items-start">
            { SOCIALS.map(({ label, href }) => (
              <a
                key={ label }
                href={ href }
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-2 text-muted hover:text-[var(--accent)] transition-colors py-1 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm"
              >
                <span className="opacity-40 group-hover:opacity-100 transition-opacity">{ '//' }</span>
                { label.toUpperCase() }
                <span className="text-[9px] text-[var(--accent)]">↗</span>
              </a>
            )) }
          </div>
        </div>

        {/* Right Panel: Primary CTA */ }
        <div className="col-span-1 lg:col-span-2 w-full flex flex-col items-center lg:items-start text-center lg:text-left gap-8">

          <div className="w-full border border-[var(--border)] bg-[var(--bg-card)] p-8 sm:p-12 rounded-sm flex flex-col items-center lg:items-start gap-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Direct Email
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif italic font-normal text-[var(--text)] leading-snug">
              Let's discuss something <span className="font-sans not-italic font-light text-[var(--accent)]">reliable.</span>
            </h3>

            <p className="font-sans text-sm text-muted leading-relaxed max-w-md">
              Send a note directly to my inbox.<br></br>
              I usually respond within 24–48 hours.
            </p>

            <a
              href="mailto:arihantjain416@gmail.com?subject=Backend%20Engineering%20Opportunity"
              className="inline-flex min-h-11 items-center gap-3 px-8 py-3.5 bg-[var(--text)] hover:bg-[var(--accent)] text-[var(--bg)] font-mono text-[11px] uppercase tracking-widest font-semibold transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
            >
              Send an Email ↗
            </a>
          </div>

          {/* Quick reach row */ }
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-widest text-muted">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to collaborate
            </span>
            <span className="text-border hidden sm:inline">{ '//' }</span>
            <span>Remotely</span>
          </div>

        </div>

      </div>
    </section>
  );
}
