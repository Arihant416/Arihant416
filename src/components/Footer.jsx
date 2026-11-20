import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiMapPin } from 'react-icons/fi';
import HeroIllustration from './HeroIllustration';

const EMAIL = 'arihantjain416@gmail.com';

const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416' },
  { label: 'GitHub', href: 'https://github.com/Arihant416' },
  { label: 'Resume', href: 'https://arihant416.github.io/resume/index.pdf' },
  { label: 'X', href: 'https://x.com/Arihant2302' },
  { label: 'Instagram', href: 'https://instagram.com/arihannnt' },
];

const delhiTime = () => new Intl.DateTimeFormat('en-IN', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Asia/Kolkata',
}).format(new Date());

function useDelhiTime() {
  const [time, setTime] = useState(delhiTime);
  useEffect(() => {
    const id = window.setInterval(() => setTime(delhiTime()), 30_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

export default function Footer() {
  const time = useDelhiTime();
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef();

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer className="site-footer room room--ink" id="contact">
      <div className="page-shell contact">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2 className="display-1 contact-title">What are you working&nbsp;on?</h2>
          <p className="contact-text">
            I'd love to hear what you are building, improving, or trying to understand.
          </p>

          <a href={`mailto:${EMAIL}?subject=Hello%20Arihant`} className="contact-email">
            {EMAIL}
          </a>

          <div className="contact-meta">
            <button
              type="button"
              onClick={copyEmail}
              className={`button contact-copy-button ${copied ? 'is-copied' : ''}`}
              aria-label={copied ? 'Email address copied' : 'Copy email address'}
            >
              {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
            <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>

            <p className="contact-location">
              <FiMapPin aria-hidden="true" />
              New Delhi, India
              <span className="contact-time">
                <i aria-hidden="true" />
                {time} IST
              </span>
            </p>
          </div>
        </div>

        <div className="contact-art">
          <HeroIllustration />
        </div>
      </div>

      <div className="page-shell">
        <nav className="footer-links" aria-label="Elsewhere">
          {LINKS.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              {label}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="footer-bar">
          <p>&copy; {new Date().getFullYear()} Arihant Jain</p>
          <a href="#top" className="footer-top">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </footer>
  );
}
