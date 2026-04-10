import React from 'react';
import { Box, Network, MonitorPlay } from 'lucide-react';

const Expo = () => {
  return (
    <div className="container section animate-fade-in">
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '3rem' }}>The <span className="gold-text">Expo</span></h1>
        <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
          The core of RISE 3. Explore booths, connect with research teams, and discover the latest in robotics technology.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-panel">
          <Box size={40} className="gold-text mb-2" />
          <h3>Booths & Displays</h3>
          <p style={{ color: '#aaa' }}>
            Organizations are provided table space and poster displays to showcase their research, student projects, and commercial products directly to attendees.
          </p>
        </div>
        <div className="glass-panel">
          <MonitorPlay size={40} className="cyan-text mb-2" />
          <h3>Interactive Demos</h3>
          <p style={{ color: '#aaa' }}>
            Optional, dedicated demonstration space is available by request for live robotics hardware and software showcases.
          </p>
        </div>
        <div className="glass-panel">
          <Network size={40} className="gold-text mb-2" />
          <h3>Presentations & Networking</h3>
          <p style={{ color: '#aaa' }}>
            Companies and research groups can host dedicated networking sessions and specialized presentations both during RISE day and throughout RISE week.
          </p>
        </div>
      </div>

      <div className="glass-panel" style={{ background: 'rgba(206, 184, 136, 0.05)', border: '1px solid var(--color-purdue-gold)' }}>
        <h2 style={{ color: 'var(--color-purdue-gold)', marginBottom: '1rem' }}>Interested in showcasing?</h2>
        <p style={{ color: '#ccc', marginBottom: '2rem' }}>
          Join the ranks of top organizations presenting at RISE. Securing a booth grants direct access to our 500+ attendees, consisting of highly motivated engineering students and researchers.
        </p>
        <a href="/contact" className="btn btn-primary">Request Booth Information</a>
      </div>
    </div>
  );
};

export default Expo;
