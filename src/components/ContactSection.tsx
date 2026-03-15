import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-badge">
          <Mail size={14} />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="section-title">
          Contact <span className="gradient-text">Anusha Y</span>
        </h2>
        <p className="section-subtitle">
          Interested in discussing Gen AI architectures, RAG solutions, or potential collaborations? Let's connect!
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '2.5rem',
        }}
        className="contact-grid"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <h3 className="font-heading" style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1.2rem' }}>
              Direct Contact Channels
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Mail size={20} color="#818cf8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>EMAIL ADDRESS</div>
                  <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={20} color="#a855f7" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>LOCATION</div>
                  <div style={{ fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <GithubIcon size={20} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>GITHUB PROFILE</div>
                  <div className="font-mono" style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 500 }}>
                    github.com/Anusha-Yammada
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2.2rem' }}>
          <h3 className="font-heading" style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1.2rem' }}>
            Send a Quick Message
          </h3>

          {submitted ? (
            <div
              style={{
                padding: '2rem',
                textAlign: 'center',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                borderRadius: '12px',
                color: '#34d399',
              }}
            >
              <CheckCircle2 size={40} style={{ margin: '0 auto 0.8rem' }} />
              <h4 className="font-heading" style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.4rem' }}>
                Message Sent Successfully!
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Thank you for reaching out. Anusha will respond to your email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  style={{
                    width: '100%',
                    background: '#07090e',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="e.g. sarah@company.com"
                  style={{
                    width: '100%',
                    background: '#07090e',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell Anusha about your project or opportunity..."
                  style={{
                    width: '100%',
                    background: '#07090e',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '0.9rem',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="glow-btn" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
