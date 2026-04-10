import React from 'react';
import { User, Building2 } from 'lucide-react';

const Speakers = () => {
  const speakers = [
    { name: 'Dr. Jane Doe', title: 'Director of AI Research', affiliation: 'Tech Innovations Inc.', bio: 'Leading advancements in robotic perception and autonomous navigation in unstructured environments.' },
    { name: 'Prof. John Smith', title: 'Professor of Mechanical Engineering', affiliation: 'Purdue ICON', bio: 'Expert in multi-agent control systems and swarm robotics.' },
    { name: 'Alex Johnson', title: 'Senior Hardware Engineer', affiliation: 'AutoDrive Systems', bio: 'Specializes in integrating high-fidelity sensors and sensor-fusion algorithms.' },
  ];

  const companies = [
    'Placeholder Robotics',
    'Autonomous Solutions LLC',
    'FutureTech Engineering',
    'Purdue Research Group A',
    'Global Manufacturing Co.',
    'More to be announced soon...'
  ];

  return (
    <div className="container section animate-fade-in">
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '3rem' }}>Speakers & <span className="cyan-text">Companies</span></h1>
        <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
          Hear from industry leaders and engage with top robotics organizations pushing the boundaries of autonomous systems.
        </p>
      </div>

      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <User className="gold-text" size={32} /> Featured Speakers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((s, i) => (
            <div key={i} className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(206, 184, 136, 0.2)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={40} className="gold-text" />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{s.name}</h3>
              <div style={{ color: 'var(--color-cyan)', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: 600 }}>{s.title}</div>
              <div style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1rem' }}>{s.affiliation}</div>
              <p style={{ color: '#ccc', fontSize: '0.95rem', margin: 0, flexGrow: 1 }}>{s.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
          <Building2 className="cyan-text" size={32} /> Participating Companies
        </h2>
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
          <div className="flex flex-wrap justify-center gap-4">
            {companies.map((c, i) => (
              <div key={i} style={{ 
                padding: '1rem 2rem', 
                background: i === companies.length - 1 ? 'transparent' : 'rgba(255,255,255,0.05)', 
                border: i === companies.length - 1 ? '1px dashed #666' : '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: i === companies.length - 1 ? '#888' : 'var(--color-white)',
                fontWeight: 500
              }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
