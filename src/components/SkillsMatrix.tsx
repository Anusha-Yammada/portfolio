import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Brain, Terminal, Server, Database, Shield } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoriesList = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories =
    selectedCategory === 'All'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain size={20} color="#818cf8" />;
      case 'Terminal':
        return <Terminal size={20} color="#06b6d4" />;
      case 'Server':
        return <Server size={20} color="#a855f7" />;
      case 'Database':
        return <Database size={20} color="#34d399" />;
      case 'Shield':
        return <Shield size={20} color="#f43f5e" />;
      default:
        return <Code size={20} color="#818cf8" />;
    }
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-title-wrapper">
        <div className="section-badge">
          <Code size={14} />
          <span>TECHNICAL EXPERTISE</span>
        </div>
        <h2 className="section-title">
          Skills & <span className="gradient-text">Competencies</span>
        </h2>
        <p className="section-subtitle">
          Comprehensive breakdown of skills spanning Generative AI, Python backend, multi-cloud platforms, and healthcare security standards.
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.6rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
        }}
      >
        {categoriesList.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '999px',
                border: isSelected ? '1px solid #6366f1' : '1px solid var(--border-light)',
                background: isSelected
                  ? 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)'
                  : 'rgba(15, 23, 42, 0.6)',
                color: isSelected ? '#fff' : 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '1.8rem',
        }}
      >
        {filteredCategories.map((cat, idx) => (
          <div key={idx} className="glass-panel" style={{ padding: '1.8rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {getIcon(cat.iconName)}
              </div>
              <div>
                <h3 className="font-heading" style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                  {cat.category}
                </h3>
              </div>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginBottom: '1.4rem' }}>
              {cat.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.88rem',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{skill.name}</span>
                    {skill.tag && (
                      <span className="tech-tag" style={{ fontSize: '0.7rem' }}>
                        {skill.tag}
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      height: '6px',
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '999px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)',
                        borderRadius: '999px',
                        transition: 'width 1s ease-in-out',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
