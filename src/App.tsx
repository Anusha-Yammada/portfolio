import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AgentShowcase } from './components/AgentShowcase';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsSection } from './components/ProjectsSection';
import { ForkReposSection } from './components/ForkReposSection';
import { AiPlayground } from './components/AiPlayground';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-main)' }}>
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <AgentShowcase />
      <SkillsMatrix />
      <ProjectsSection />
      <ForkReposSection />
      <AiPlayground />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
