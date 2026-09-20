import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiFileText, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const EMAIL = 'arihantjain416@gmail.com';

const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416', Icon: FaLinkedinIn, color: '#0A66C2' },
  { label: 'GitHub', href: 'https://github.com/Arihant416', Icon: FaGithub, color: '#181717' },
  { label: 'Instagram', href: 'https://instagram.com/arihannnt', Icon: FaInstagram, color: '#E4405F' },
  { label: 'X', href: 'https://x.com/Arihant2302', Icon: FaXTwitter, color: '#000000' },
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
    <footer className="site-footer" id="contact">
      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-invite">
            <span className="section-kicker">Let's catch up</span>
            <h2>What are you working on?</h2>
            <p>
              I'd love to hear what you are building, improving, or trying to understand.
            </p>
          </div>

          <div className="site-footer-reach">
            <a
              href={`mailto:${EMAIL}?subject=Hello%20Arihant`}
              className="site-footer-email"
            >
              <FiMail aria-hidden="true" />
              <span>Send a note</span>
              <FiArrowUpRight aria-hidden="true" />
            </a>

            <div className="site-footer-address">
              <span>{EMAIL}</span>
              <button
                type="button"
                onClick={copyEmail}
                className={`site-footer-copy ${copied ? 'is-copied' : ''}`}
                aria-label={copied ? 'Email address copied' : 'Copy email address'}
              >
                {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                <span aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
            </div>
          </div>

          <div className="site-footer-connect">
            <p className="site-footer-location">
              <FiMapPin aria-hidden="true" />
              New Delhi, India
              <span className="site-footer-time">
                <i aria-hidden="true" />
                {time} IST
              </span>
            </p>

            <nav className="site-footer-socials" aria-label="Social links">
              {LINKS.map(({ label, href, Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer-social-link"
                  aria-label={label}
                >
                  <Icon aria-hidden="true" style={{ color }} />
                </a>
              ))}
              <a
                href="https://arihant416.github.io/resume/index.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer-resume"
              >
                <FiFileText aria-hidden="true" />
                Resume
              </a>
            </nav>
          </div>
        </div>

        <div className="site-footer-bottom">
          <p>&copy; {new Date().getFullYear()} Arihant Jain</p>
          <a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </div>
    </footer>
  );
}
