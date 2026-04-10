import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Camera, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      background: 'var(--color-dark-gray)', 
      borderTop: '1px solid rgba(206, 184, 136, 0.2)',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="gold-text">RISE 3</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem', maxWidth: '300px' }}>
              Robotics and Intelligent Systems Expo.<br/>
              Connecting students, researchers, and industry leaders at Purdue University.
            </p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/expo">Expo & Booths</Link></li>
              <li><Link to="/sponsors">Sponsors</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Connect</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="mailto:purduerise@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#aaa' }}>
                <Mail size={18} /> purduerise@gmail.com
              </a>
              <a href="https://instagram.com/purdue.rise" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#aaa' }}>
                <Camera size={18} /> @purdue.rise
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#aaa' }}>
                <MapPin size={18} /> Purdue Memorial Union
              </span>
            </div>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', fontSize: '0.85rem', color: '#666' }}>
          <p>Organized by Purdue Autonomous Robotics Club & Purdue ICON.</p>
          <p>&copy; 2026 Robotics and Intelligent Systems Expo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
