import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Terminal, ChevronRight, Brain } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './GithubIcon';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [roleTextIndex, setRoleTextIndex] = useState(0);

  const roles = [
    "Senior Gen AI & Python Engineer",
    "Agentic AI Architect (LangGraph & CrewAI)",
    "Enterprise RAG & Vector Search Engineer",
    "Cloud & MLOps Specialist (GCP / AWS / Azure)"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.25 * (1 - dist / 140)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#818cf8';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        overflow: 'hidden',
      }}
      className="grid-bg"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          width: '100%',
          padding: '2rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '999px',
              color: '#34d399',
              fontSize: '0.85rem',
              fontWeight: 500,
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 10px #10b981',
              }}
            />
            Senior AI/ML & Python Specialist • Open for Innovation
          </div>

          <h1
            className="font-heading"
            style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
            }}
          >
            Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </h1>

          <div
            style={{
              height: '40px',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p
              className="font-mono gradient-text-purple"
              style={{
                fontSize: '1.35rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <Terminal size={22} color="#06b6d4" />
              <span>{roles[roleTextIndex]}</span>
            </p>
          </div>

          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '620px',
            }}
          >
            {PERSONAL_INFO.summary}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            <a href="#experience" className="glow-btn">
              <span>View Experience</span>
              <ChevronRight size={18} />
            </a>

            <a href="#fork-repos" className="outline-btn">
              <GithubIcon size={18} />
              <span>Fork Public Repos</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-btn"
            >
              <Sparkles size={18} color="#818cf8" />
              <span>GitHub Profile</span>
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              fontSize: '0.9rem',
              color: 'var(--text-dim)',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '1.2rem',
            }}
          >
            <div>
              <strong style={{ color: 'var(--text-muted)' }}>Location:</strong> {PERSONAL_INFO.location}
            </div>
            <div>
              <strong style={{ color: 'var(--text-muted)' }}>Email:</strong> {PERSONAL_INFO.email}
            </div>
            <div>
              <strong style={{ color: 'var(--text-muted)' }}>Phone:</strong> {PERSONAL_INFO.phone}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Brain size={28} color="#818cf8" />
              </div>
              <div>
                <h3 className="font-heading" style={{ fontSize: '1.2rem', color: '#fff' }}>
                  Anusha Yammada
                </h3>
                <span className="font-mono" style={{ fontSize: '0.8rem', color: '#06b6d4' }}>
                  github.com/Anusha-Yammada
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                margin: '1rem 0',
              }}
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '10px',
                    padding: '0.85rem',
                  }}
                >
                  <div
                    className="font-heading gradient-text"
                    style={{ fontSize: '1.4rem', fontWeight: 700 }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                background: '#07090e',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '0.75rem',
                marginTop: '1rem',
              }}
            >
              <div
                className="font-mono"
                style={{ fontSize: '0.75rem', color: '#34d399', marginBottom: '0.2rem' }}
              >
                $ cat expertise.json
              </div>
              <div className="font-mono" style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                {`{ "developer": "Anusha Yammada", "stack": ["Python", "FastAPI", "LangGraph", "GCP"] }`}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 3rem !important;
          }
          h1 { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
};
