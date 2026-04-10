import React from 'react';
import { PenTool, Cpu, Code, Zap, Trophy, Timer } from 'lucide-react';

const Workshops = () => {
  return (
    <div className="container section animate-fade-in">
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '3rem' }}>Workshops & <span className="cyan-text">Challenges</span></h1>
        <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
          Engage in hands-on learning and test your skills in time-limited engineering challenges.
        </p>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
          Technical Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-purdue-gold)' }}>
              <PenTool size={24} /> Hands-on Learning
            </h3>
            <p style={{ color: '#ccc' }}>
              Participate in guided, technical workshops focusing on the software stacks and hardware methodologies used in modern robotics. 
              Organized in collaboration with top Purdue technical clubs.
            </p>
          </div>
          <div className="glass-panel">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-cyan)' }}>
              <Cpu size={24} /> Company Hosted
            </h3>
            <p style={{ color: '#ccc' }}>
              Companies have the unique opportunity to sponsor and host their own workshops, introducing students directly to their proprietary tech architectures and workflows.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          RISE Technical Challenges <Trophy className="gold-text" size={28} />
        </h2>
        <p style={{ color: '#ccc', marginBottom: '2rem', fontSize: '1.1rem' }}>
          Short, interview-style engineering tasks designed to simulate real-world problem solving.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <Cpu size={40} className="gold-text mb-2" style={{ margin: '0 auto' }} />
            <h3>Hardware</h3>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Mechanical design problems and CAD rapid-prototyping scenarios.</p>
          </div>
          <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <Zap size={40} className="cyan-text mb-2" style={{ margin: '0 auto' }} />
            <h3>Electrical</h3>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Circuit debugging, schematics analysis, and active component testing.</p>
          </div>
          <div className="glass-panel" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <Code size={40} className="gold-text mb-2" style={{ margin: '0 auto' }} />
            <h3>Software</h3>
            <p style={{ fontSize: '0.9rem', color: '#aaa' }}>Algorithmic optimization, ROS debugging tasks, and control logic design.</p>
          </div>
        </div>

        <div className="glass-panel" style={{ background: 'rgba(102, 252, 241, 0.05)', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
          <Timer className="cyan-text" size={32} />
          <div>
            <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Time-Limited Format</h4>
            <p style={{ margin: 0, color: '#aaa', fontSize: '0.95rem' }}>Top performers in each challenge bracket will be awarded prizes during the closing ceremony.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
