import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const LINKS = [
  { label: 'LinkedIn', value: 'arihant416',   href: 'https://linkedin.com/in/arihant416'              },
  { label: 'GitHub',   value: 'Arihant416',   href: 'https://github.com/Arihant416'                   },
  { label: 'Twitter',  value: '@Arihant2302', href: 'https://x.com/Arihant2302'                       },
  { label: 'Resume',   value: 'PDF ↓',        href: 'https://arihant416.github.io/resume/index.pdf'   },
];

export default function Contact() {
  const formRef                 = useRef();
  const [sending, setSending]   = useState(false);
  const [msg,     setMsg]       = useState('');
  const [isError, setIsError]   = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setMsg('');
    setIsError(false);

    const body = {
      from_name:  formRef.current.from_name.value,
      from_email: formRef.current.from_email.value,
      message:    formRef.current.message.value,
    };

    try {
      const ctrl    = new AbortController();
      const timeout = setTimeout(() => ctrl.abort(), 8500);

      const res = await fetch('https://email-worker.arihantjain416.workers.dev', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(body),
        signal:  ctrl.signal,
      });

      clearTimeout(timeout);

      let data;
      try   { data = await res.json(); }
      catch { data = { message: await res.text() }; }

      if (res.ok) {
        setMsg(data.message || 'Message sent!');
        formRef.current.reset();
      } else {
        setMsg(data.error || 'Failed to send. Try again.');
        setIsError(true);
      }
    } catch (err) {
      setMsg(err.name === 'AbortError' ? 'Request timed out.' : 'Something went wrong.');
      setIsError(true);
    }

    setSending(false);
  };

  return (
    <div className="section">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.p>

      {/* Quick links */}
      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        {LINKS.map(({ label, value, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-item">
            <span className="contact-arrow">↗</span>
            <div>
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </div>
          </a>
        ))}
      </motion.div>

      {/* Message form */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1.25rem' }}>
          Or send a message directly
        </p>

        <form ref={formRef} onSubmit={handleSubmit}>
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

          <button
            type="submit"
            disabled={sending}
            className="btn btn-primary"
            style={{ opacity: sending ? .6 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}
          >
            {sending ? 'Sending…' : 'Send Message'}
          </button>

          {msg && (
            <motion.p
              className={`form-msg${isError ? ' error' : ' success'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {msg}
            </motion.p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
