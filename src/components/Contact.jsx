import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

// SVG icons keep bundle clean — no extra icon library needed for contact
const Icons = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Resume: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>
    </svg>
  ),
};

const LINKS = [
  { label: 'LinkedIn', value: 'arihant416',   href: 'https://linkedin.com/in/arihant416'            },
  { label: 'GitHub',   value: 'Arihant416',   href: 'https://github.com/Arihant416'                 },
  { label: 'Twitter',  value: '@Arihant2302', href: 'https://x.com/Arihant2302'                     },
  { label: 'Resume',   value: 'Download PDF', href: 'https://arihant416.github.io/resume/index.pdf' },
];

export default function Contact() {
  const formRef               = useRef();
  const [sending, setSending] = useState(false);
  const [msg, setMsg]         = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true); setMsg(''); setIsError(false);
    const body = {
      from_name:  formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      message:    formRef.current.message.value,
    };
    try {
      const ctrl = new AbortController();
      const t    = setTimeout(() => ctrl.abort(), 8500);
      const res  = await fetch('https://email-worker.arihantjain416.workers.dev', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body), signal: ctrl.signal,
      });
      clearTimeout(t);
      let data;
      try { data = await res.json(); } catch { data = { message: await res.text() }; }
      if (res.ok) { setMsg(data.message || 'Message sent!'); formRef.current.reset(); }
      else        { setMsg(data.error || 'Failed to send. Try again.'); setIsError(true); }
    } catch (err) {
      setMsg(err.name === 'AbortError' ? 'Request timed out.' : 'Something went wrong.');
      setIsError(true);
    }
    setSending(false);
  };

  return (
    <div className="section section-border">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.p>

      {/* Icon + username grid — compact on mobile, full on desktop */}
      <motion.div
        className="contact-links"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {LINKS.map(({ label, value, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <span className="contact-link-icon">{Icons[label]}</span>
            <span className="contact-link-label">{label}</span>
            <span className="contact-link-value">{value}</span>
          </a>
        ))}
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="form-hint">Or send a message directly</p>
        <form ref={formRef} onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
          <div className="form-row">
            <label className="form-label">Name</label>
            <input name="from_name" type="text" required disabled={sending} placeholder="Your name" className="form-input" />
          </div>
          <div className="form-row">
            <label className="form-label">Email</label>
            <input name="from_email" type="email" required disabled={sending} placeholder="your@email.com" className="form-input" />
          </div>
          <div className="form-row">
            <label className="form-label">Message</label>
            <textarea name="message" required disabled={sending} placeholder="What's on your mind?" className="form-input" />
          </div>
          <button type="submit" disabled={sending} className="btn btn-primary" style={{ opacity: sending ? .6 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}>
            {sending ? 'Sending…' : 'Send Message'}
          </button>
          {msg && (
            <motion.p className={`form-msg${isError ? ' error' : ' success'}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {msg}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
}