export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p className="footer-copy">
          © {new Date().getFullYear()} Arihant Jain <span className="footer-dot">·</span> New Delhi, India
        </p>
        <nav className="footer-links">
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com/in/arihant416' },
            { label: 'GitHub',   href: 'https://github.com/Arihant416'     },
            { label: 'Twitter',  href: 'https://x.com/Arihant2302'         },
          ].map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer-link">
              {label}<span className="footer-arrow">↗</span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}