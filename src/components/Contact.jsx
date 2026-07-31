import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416', Icon: FiLinkedin },
  { label: 'GitHub', href: 'https://github.com/Arihant416', Icon: FiGithub },
  { label: 'X', href: 'https://x.com/Arihant2302', Icon: FiTwitter },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div>
          <p className="section-kicker">06 · Contact</p>
          <h2>Discuss a backend or platform <em>problem.</em></h2>
          <p>
            I’m interested in senior engineering work involving production APIs, distributed
            execution, reliability, modernization, and cost-aware architecture.
          </p>
        </div>

        <div className="contact-actions">
          <a
            href="mailto:arihantjain416@gmail.com?subject=Backend%20or%20Platform%20Engineering"
            className="email-link"
          >
            <span><FiMail aria-hidden="true" />Email</span>
            <strong>arihantjain416@gmail.com</strong>
            <FiArrowUpRight aria-hidden="true" />
          </a>

          <nav aria-label="Professional profiles">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                <Icon aria-hidden="true" />
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
