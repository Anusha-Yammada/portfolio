import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-light)',
        background: 'rgba(7, 9, 14, 0.95)',
        padding: '2.5rem 1.5rem',
        marginTop: '4rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Terminal size={16} color="#fff" />
          </div>
          <span className="font-heading" style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff' }}>
            ANUSHA YAMMADA
          </span>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textAlign: 'center' }}>
          © {new Date().getFullYear()} Anusha Yammada. All rights reserved.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
            }}
          >
            <GithubIcon size={16} />
            <span>Anusha-Yammada</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
