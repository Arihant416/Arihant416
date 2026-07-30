import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="w-full bg-bg px-4 py-7 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Arihant Jain · Senior Software Engineer
        </p>

        <div className="flex items-center gap-5">
          <p className="font-mono text-[9px] text-muted">New Delhi · Working across regions</p>
          <a
            href="#top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-muted transition-colors duration-200 hover:border-accent hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Back to top"
          >
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
