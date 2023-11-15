import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { Rocket, CheckCircle2, ExternalLink, X } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-badge">
          <Rocket size={14} />
          <span>FEATURED IMPLEMENTATIONS</span>
        </div>
        <h2 className="section-title">
          Enterprise AI <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">
          Selected production deployments showcasing agentic orchestration, RAG retrieval, FHIR healthcare integrations, and AI governance.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem',
        }}
      >
        {[
          { key: 'all', label: 'All Projects' },
          { key: 'genai', label: 'Gen AI & RAG' },
          { key: 'healthcare', label: 'Healthcare & HIPAA' },
          { key: 'cloud', label: 'Cloud & Governance' },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={filter === f.key ? 'glow-btn' : 'outline-btn'}
            style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
        }}
      >
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="glass-panel"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {proj.featured && (
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '0.7rem',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '999px',
                  background: 'rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                  color: '#818cf8',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <Rocket size={12} />
                FEATURED
              </div>
            )}

            <div>
              <h3 className="font-heading" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem', paddingRight: proj.featured ? '5rem' : '0' }}>
                {proj.title}
              </h3>
              <p
                className="font-mono"
                style={{ fontSize: '0.82rem', color: '#06b6d4', marginBottom: '1rem' }}
              >
                {proj.tagline}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {proj.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {proj.metrics.map((metric, mIdx) => (
                  <span
                    key={mIdx}
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '6px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#34d399',
                      fontWeight: 600,
                    }}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                {proj.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(proj)}
                className="outline-btn"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
              >
                <span>View Architecture & Details</span>
                <ExternalLink size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(7, 9, 14, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '650px',
              width: '100%',
              padding: '2.2rem',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              background: '#0f172a',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.2rem',
                right: '1.2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#fff',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <h3 className="font-heading" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.3rem' }}>
              {selectedProject.title}
            </h3>
            <p className="font-mono" style={{ fontSize: '0.85rem', color: '#06b6d4', marginBottom: '1.2rem' }}>
              {selectedProject.tagline}
            </p>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedProject.description}
            </p>

            <h4 className="font-heading" style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.75rem' }}>
              System Architecture Highlights
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.5rem' }}>
              {selectedProject.architecture.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={16} color="#818cf8" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="font-heading" style={{ fontSize: '1.1rem', color: '#fff', marginBottom: '0.75rem' }}>
              Key Performance Metrics
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
              {selectedProject.metrics.map((metric, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.35rem 0.8rem',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#34d399',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  {metric}
                </span>
              ))}
            </div>

            <div style={{ textAlign: 'right' }}>
              <button onClick={() => setSelectedProject(null)} className="glow-btn" style={{ fontSize: '0.85rem' }}>
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
