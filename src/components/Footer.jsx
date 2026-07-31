import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p>© {new Date().getFullYear()} Arihant Jain</p>
        <p>Senior Backend Engineer · New Delhi, India</p>
        <a href="#top" aria-label="Back to top">
          <FiArrowUp aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
