import React, { useState } from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, BookOpen } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeExpId, setActiveExpId] = useState<string>(EXPERIENCES[0].id);

  const activeExperience = EXPERIENCES.find((e) => e.id === activeExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-badge">
          <Briefcase size={14} />
          <span>CAREER TIMELINE</span>
        </div>
        <h2 className="section-title">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle">
          Engineering high-performance Python platforms, multi-agent AI solutions, and cloud architectures across enterprise and healthcare domains.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr',
          gap: '2rem',
          alignItems: 'start',
        }}
        className="experience-layout"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {EXPERIENCES.map((exp) => {
            const isActive = exp.id === activeExpId;
            return (
              <button
                key={exp.id}
                onClick={() => setActiveExpId(exp.id)}
                style={{
                  padding: '1.2rem',
                  borderRadius: '12px',
                  border: isActive ? '1px solid #6366f1' : '1px solid var(--border-light)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(15, 23, 42, 0.8) 100%)'
                    : 'var(--bg-card)',
                  color: '#fff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 8px 25px -5px rgba(99, 102, 241, 0.25)' : 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                  <span
                    className="font-heading"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: isActive ? '#fff' : 'var(--text-main)',
                    }}
                  >
                    {exp.company}
                  </span>
                  {exp.isCurrent && (
                    <span
                      style={{
                        fontSize: '0.7rem',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '999px',
                        background: 'rgba(16, 185, 129, 0.2)',
                        color: '#34d399',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        fontWeight: 600,
                      }}
                    >
                      PRESENT
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#818cf8', fontWeight: 500, marginBottom: '0.4rem' }}>
                  {exp.role}
                </div>
                <div
                  className="font-mono"
                  style={{ fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}
                >
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </button>
            );
          })}

          <div
            className="glass-panel"
            style={{
              padding: '1.2rem',
              marginTop: '1rem',
              background: 'rgba(15, 23, 42, 0.5)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <BookOpen size={20} color="#06b6d4" />
              <span className="font-heading" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fff' }}>
                EDUCATION
              </span>
            </div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
              {PERSONAL_INFO.education.degree}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.year}
            </div>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '2.2rem' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderBottom: '1px solid var(--border-light)',
              paddingBottom: '1.2rem',
              marginBottom: '1.5rem',
              gap: '1rem',
            }}
          >
            <div>
              <h3 className="font-heading" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff' }}>
                {activeExperience.role}
              </h3>
              <div
                style={{
                  fontSize: '1.1rem',
                  color: '#818cf8',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.2rem',
                }}
              >
                <span>{activeExperience.company}</span>
                <span style={{ color: 'var(--text-dim)' }}>•</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={14} />
                  {activeExperience.location}
                </span>
              </div>
            </div>

            <div
              className="font-mono"
              style={{
                fontSize: '0.85rem',
                padding: '0.4rem 0.8rem',
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '8px',
                color: '#a5b4fc',
              }}
            >
              {activeExperience.period}
            </div>
          </div>

          <h4
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              marginBottom: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Key Contributions & Technical Impact
          </h4>

          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              marginBottom: '2rem',
            }}
          >
            {activeExperience.highlights.map((highlight, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  fontSize: '0.95rem',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                }}
              >
                <div style={{ marginTop: '0.2rem', flexShrink: 0 }}>
                  <CheckCircle2 size={16} color="#06b6d4" />
                </div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.2rem' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '0.6rem', fontWeight: 600 }}>
              TECHNOLOGY STACK USED:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {activeExperience.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .experience-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
