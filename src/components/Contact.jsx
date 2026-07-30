import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416', Icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/Arihant416', Icon: FiGithub },
  { label: 'X', href: 'https://x.com/Arihant2302', Icon: FiTwitter },
];

export default function Contact() {
  return (
    <section className="contact-band border-b border-border px-4 py-[var(--section-padding)] sm:px-6 lg:px-8" id="contact">
      <div className="contact-shell mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[1.28fr_0.72fr] lg:gap-16">
          <div>
            <span className="section-kicker">Start a conversation</span>
            <h2 className="display-type mt-6 max-w-4xl text-[var(--fs-h2)] leading-[var(--lh-heading)] text-text">
              Bring me the system that needs
              <em className="block text-accent2">clearer engineering judgment.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-text-dim sm:text-[15px]">
              I&apos;m interested in backend and platform work where reliability, scale, delivery,
              and cost all matter. That can be a full-time engineering role, a focused architecture
              problem, or a product that needs dependable technical ownership.
            </p>

            <a
              href="mailto:arihantjain416@gmail.com?subject=Backend%20or%20Platform%20Engineering"
              className="contact-email group mt-9"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-muted">
                <FiMail aria-hidden="true" />
                Email Arihant
              </span>
              <span className="mt-2 flex items-center gap-3 text-lg font-semibold text-text sm:text-2xl">
                arihantjain416@gmail.com
                <FiArrowUpRight className="shrink-0 text-accent transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          </div>

          <div className="flex flex-col justify-between gap-10 border-l border-border pl-6 sm:pl-8">
            <div>
              <p className="font-mono text-[10px] text-muted">A useful first note includes</p>
              <ul className="mt-5 space-y-4">
                {[
                  'The product or system context',
                  'The scale or reliability constraint',
                  'The kind of ownership you need',
                ].map((item, index) => (
                  <li key={item} className="grid grid-cols-[1.5rem_1fr] gap-3 text-sm text-text-dim">
                    <span className="font-mono text-[9px] text-accent">0{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <nav className="flex flex-wrap gap-2" aria-label="Professional profiles">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-card2 px-3 text-xs font-semibold text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <Icon aria-hidden="true" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
