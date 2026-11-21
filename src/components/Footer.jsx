import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiCheck, FiCopy } from 'react-icons/fi';

const EMAIL = 'arihantjain416@gmail.com';

const RESUME = 'https://arihant416.github.io/resume/index.pdf';

// Glass icon buttons. `brand` colours the ring at rest; `fill` is the liquid that rises on
// hover, focus and press (GitHub and X are white-on-dark brands, so their fill is light
// and the icon flips to ink); `ink` is the icon colour once filled.
const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416', Icon: FaLinkedinIn, brand: '#0A66C2', fill: '#0A66C2', ink: '#ffffff' },
  { label: 'GitHub', href: 'https://github.com/Arihant416', Icon: FaGithub, brand: '#f2f1ec', fill: '#f2f1ec', ink: '#111215' },
  { label: 'X', href: 'https://x.com/Arihant2302', Icon: FaXTwitter, brand: '#f2f1ec', fill: '#f2f1ec', ink: '#111215' },
  {
    label: 'Instagram',
    href: 'https://instagram.com/arihantsings',
    Icon: FaInstagram,
    brand: '#E4405F',
    fill: 'linear-gradient(45deg, #F58529, #DD2A7B 45%, #8134AF 75%, #515BD4)',
    ink: '#ffffff',
  },
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

// The one remaining colour slab: a dark contact footer in both themes.
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
    <footer className="site-footer" id="contact">
      <div className="page-shell">
        <div className="foot-grid">
          <div>
            <p className="kicker">Contact</p>
            <h2 className="section-title foot-title">
              Shoot a Hi
              <span className="foot-arrow" aria-hidden="true">
                <FiArrowRight className="foot-arrow--right" />
                <FiArrowDown className="foot-arrow--down" />
              </span>
            </h2>
            <p className="section-dek">I'd love to hear what you've been cooking, or an idea you want to bounce around.</p>
          </div>

          <div>
            <a className="foot-email" href={`mailto:${EMAIL}?subject=Hello%20Arihant`}>{EMAIL}</a>
            <div className="foot-row">
              <button
                type="button"
                onClick={copyEmail}
                className={`btn btn-sm btn-ghost ${copied ? 'is-copied' : ''}`}
                aria-label={copied ? 'Email address copied' : 'Copy email address'}
              >
                {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                {copied ? 'Copied' : 'Copy email'}
              </button>
              <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
              <span className="foot-where">New Delhi, India · {time} IST</span>
            </div>
          </div>
        </div>

        <nav className="foot-links" aria-label="Elsewhere">
          <ul className="socials">
            {SOCIALS.map(({ label, href, Icon, brand, fill, ink }, index) => (
              <li key={label} style={{ '--float-delay': `${-index * 0.7}s` }}>
                <a
                  className="social"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  style={{ '--brand': brand, '--fill': fill, '--ink': ink }}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a className="foot-resume" href={RESUME} target="_blank" rel="noopener noreferrer">
            Resume
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <div className="foot-legal">
          <p>&copy; {new Date().getFullYear()} Arihant Jain</p>
          <a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </footer>
  );
}
