import React, { useState } from 'react';
import '../css/Contact.css';

export default function Contact() {
  // Env variables for WhatsApp
  const phone = import.meta.env.VITE_WHATSAPP_NUMBER || '233508748443';
  const messageText = import.meta.env.VITE_WHATSAPP_MESSAGE || 'Hello Arkyn! I would like to talk about a project.';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;

  // Form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus(null);
  };

  // Submit contact form to backend
  const handleSubmit = async e => {
    e.preventDefault();

    if (!form.name.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'contact-form' }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  // WhatsApp click: log then open link
  const handleWhatsAppClick = async () => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'WhatsApp Visitor',
          message: messageText,
          source: 'whatsapp-link',
        }),
      });
    } catch (err) {
      console.warn('Could not log WhatsApp click:', err);
    }
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-grid">
        <div className="contact-card">
          <h2>Let’s build something together</h2>
          <p>Prefer WhatsApp? Tap the button to start a conversation. We generally respond within one business day.</p>

          <button
            className="btn whatsapp"
            onClick={handleWhatsAppClick}
            disabled={loading}
            type="button"
          >
            Chat on WhatsApp
          </button>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Name<span style={{ color: 'red' }}>*</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
              />
            </label>

            <label>
              Message<span style={{ color: 'red' }}>*</span>
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </label>

            <button className="btn primary" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status === 'success' && <p className="success-msg">Thanks! We’ll get back to you soon.</p>}
          {status === 'error' && <p className="error-msg">Please fill in the required fields correctly.</p>}

          <div className="contact-info" style={{ marginTop: 24 }}>
            <div><strong>Email:</strong> <span>arkyne.tech1@gmail.com</span></div>
            <div><strong>Location:</strong> <span>Kumasi, Ghana</span></div>
          </div>
        </div>

        <div className="contact-side">
          <h3>Quick brief</h3>
          <p>Share a few lines about your product idea, timeline and budget. Or simply message us on WhatsApp and we'll take it from there.</p>
        </div>
      </div>
    </section>
  );
}
