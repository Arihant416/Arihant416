import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const ICONS = {
  LinkedIn: FiLinkedin,
  GitHub: FiGithub,
  Twitter: FiTwitter,
};

const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416' },
  { label: 'GitHub', href: 'https://github.com/Arihant416' },
  { label: 'Twitter', href: 'https://x.com/Arihant2302' },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-bg px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-5 rounded-[1.35rem] border border-border bg-card/70 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-muted sm:text-left">
          &copy; {new Date().getFullYear()} Arihant Jain
          <span className="mx-3 text-border">/</span>
          New Delhi, India
        </p>

        <nav className="flex items-center justify-center gap-2" aria-label="Footer social links">
          {LINKS.map(({ label, href }) => {
            const Icon = ICONS[label];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg text-muted transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                aria-label={label}
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
