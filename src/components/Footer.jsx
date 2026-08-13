import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416', Icon: FaLinkedinIn, color: '#0A66C2' },
  { label: 'GitHub', href: 'https://github.com/Arihant416', Icon: FaGithub, color: '#181717' },
  { label: 'Instagram', href: 'https://instagram.com/arihannnt', Icon: FaInstagram, color: '#E4405F' },
  { label: 'X', href: 'https://x.com/Arihant2302', Icon: FaXTwitter, color: '#000000' },
];

export default function Footer() {
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

          <a
            href="mailto:arihantjain416@gmail.com?subject=Hello%20Arihant"
            className="site-footer-email"
          >
            <FiMail aria-hidden="true" />
            <span>Send a note</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>

          <div className="site-footer-connect">
            <p className="site-footer-location">
              <FiMapPin aria-hidden="true" />
              New Delhi, India
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
