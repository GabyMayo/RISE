import React from 'react';
import { CalendarClock } from 'lucide-react';

const Speakers = () => {
  return (
    <div className="container section animate-fade-in">
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '3rem' }}>Speakers & <span className="cyan-text">Companies</span></h1>
        <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
          More details will be announced soon.
        </p>
      </div>

      <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: 'rgba(0, 201, 255, 0.12)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CalendarClock size={44} className="cyan-text" />
        </div>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>TBD</h2>
        <p style={{ color: '#ccc', maxWidth: '460px', margin: '0 auto' }}>
          Speakers and participating companies are coming soon.
        </p>
      </div>
    </div>
  );
};

export default Speakers;
