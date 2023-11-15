import React, { useState } from 'react';
import { FORKABLE_REPOS } from '../data/portfolioData';
import { GitFork, ExternalLink, Terminal, Check, Star } from 'lucide-react';

export const ForkReposSection: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState(false);

  const forkCommand = `gh repo fork langchain-ai/langgraph --clone=false
gh repo fork crewAIInc/crewAI --clone=false
gh repo fork fastapi/fastapi --clone=false
gh repo fork GoogleCloudPlatform/generative-ai --clone=false
gh repo fork run-llama/llama_index --clone=false`;

  const handleCopy = () => {
    navigator.clipboard.writeText(forkCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2500);
  };

  return (
    <section id="fork-repos" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-badge">
          <GitFork size={14} />
          <span>OPEN SOURCE HUB</span>
        </div>
        <h2 className="section-title">
          Fork Recommended <span className="gradient-text">Repositories</span>
        </h2>
        <p className="section-subtitle">
          Curated open-source AI and Python repositories aligned with Anusha Y's expertise ready to fork directly to your GitHub profile.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}
      >
        {FORKABLE_REPOS.map((repo, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                <span className="font-mono" style={{ fontSize: '0.85rem', color: '#818cf8', fontWeight: 600 }}>
                  {repo.language}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <Star size={13} fill="#f59e0b" />
                  {repo.stars}
                </span>
              </div>

              <h3 className="font-heading" style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700, marginBottom: '0.4rem' }}>
                {repo.name}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.2rem' }}>
                {repo.description}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <a
                href={`${repo.url}/fork`}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-btn"
                style={{ flex: 1, justifyContent: 'center', fontSize: '0.82rem', padding: '0.5rem 0.8rem' }}
              >
                <GitFork size={14} />
                <span>Fork to GitHub</span>
              </a>

              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="outline-btn"
                style={{ padding: '0.5rem', borderRadius: '8px' }}
                title="View Repo"
              >
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        className="glass-panel"
        style={{
          padding: '2rem',
          background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(7, 9, 14, 0.95) 100%)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Terminal size={20} color="#06b6d4" />
            <h3 className="font-heading" style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 700 }}>
              Batch Fork Command via GitHub CLI (`gh`)
            </h3>
          </div>

          <button onClick={handleCopy} className="outline-btn" style={{ fontSize: '0.82rem', padding: '0.4rem 0.9rem' }}>
            {copiedCmd ? <Check size={14} color="#34d399" /> : <Terminal size={14} />}
            <span>{copiedCmd ? 'Commands Copied!' : 'Copy Batch Commands'}</span>
          </button>
        </div>

        <pre
          className="font-mono"
          style={{
            background: '#07090e',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            padding: '1.2rem',
            fontSize: '0.85rem',
            color: '#a5b4fc',
            overflowX: 'auto',
            lineHeight: 1.6,
          }}
        >
          {forkCommand}
        </pre>
      </div>
    </section>
  );
};
