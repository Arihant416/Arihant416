import { useState, useRef } from 'react';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const IS_MAINTENANCE_MODE = true; // Set to false to activate input fields

  const handleSubmit = (e) => {
    e.preventDefault();
    if (IS_MAINTENANCE_MODE) return;
    setStatus({ state: 'loading', message: 'Syncing message matrix...' });
    // Core Form Submit logic here
  };

  return (
    <section className="w-full bg-[var(--bg)] py-16 sm:py-24 border-b border-[var(--border)]" id="contact">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

        {/* Left Anchor Layout Box */ }
        <div className="col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] font-medium block">
            04 // Communications
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif italic font-normal tracking-tight text-[var(--text)] mt-1">
            Initiate <span className="font-sans not-italic font-light text-[var(--text-dim)]">Connection</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-muted mt-4 max-w-sm leading-relaxed">
            Have an open system architecture design request or an infrastructure engineering requirement? Let's talk.
          </p>

          {/* Social Infrastructure Pipes */ }
          <div className="flex flex-col gap-3 mt-6 sm:mt-8 font-mono text-[11px] sm:text-xs tracking-wider w-full items-center lg:items-start">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-[var(--accent)] transition-colors py-1 group">
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">//</span> LINKEDIN <span className="text-[9px] text-[var(--accent)]">↗</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-[var(--accent)] transition-colors py-1 group">
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">//</span> GITHUB <span className="text-[9px] text-[var(--accent)]">↗</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-[var(--accent)] transition-colors py-1 group">
              <span className="opacity-40 group-hover:opacity-100 transition-opacity">//</span> TWITTER <span className="text-[9px] text-[var(--accent)]">↗</span>
            </a>
          </div>
        </div>

        {/* Right Input Matrix Box */ }
        <div className="col-span-1 lg:col-span-2 w-full">
          <form onSubmit={ handleSubmit } ref={ formRef } className="flex flex-col gap-6 w-full relative">

            { IS_MAINTENANCE_MODE ? (
              /* CLEAN REFACTORED MAINTENANCE BANNER (No Duplications) */
              <div className="w-full border border-orange-500/10 bg-orange-500/[0.02] p-5 sm:p-6 rounded-sm flex items-start gap-3.5 text-left">
                <span className="text-orange-500 text-sm sm:text-base mt-0.5">⚡</span>
                <div>
                  <h4 className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-orange-400 uppercase">
                    Direct Messaging Pipeline Interrupted
                  </h4>
                  <p className="font-sans text-xs text-muted mt-1.5 leading-relaxed">
                    The integrated contact form mechanism is temporarily offline. Please establish communication using the direct social links on the left.
                  </p>
                </div>
              </div>
            ) : (
              /* ACTIVE WORKFLOW PIPELINE */
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[9px] tracking-widest text-muted uppercase">Identification</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-sm p-3 font-sans text-xs text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-muted/40"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="font-mono text-[9px] tracking-widest text-muted uppercase">Routing Endpoint</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your email address"
                      className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-sm p-3 font-sans text-xs text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-muted/40"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="font-mono text-[9px] tracking-widest text-muted uppercase">Message Payload</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    placeholder="Describe your architectural project goals or inquiry specifics..."
                    className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-sm p-3 font-sans text-xs text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none placeholder:text-muted/40"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-fit px-8 py-3 bg-[var(--text)] hover:bg-[var(--accent)] text-[var(--bg)] font-mono text-[11px] uppercase tracking-widest font-semibold transition-colors rounded-sm self-start"
                >
                  Transmit Packet
                </button>
              </>
            ) }

          </form>
        </div>

      </div>
    </section>
  );
}