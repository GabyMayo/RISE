import React from 'react';
import { Mail, Camera, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container section animate-fade-in" style={{ maxWidth: '900px' }}>
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '3rem' }}>Get in <span className="cyan-text">Touch</span></h1>
        <p style={{ color: '#ccc' }}>
          Have questions about the event, speaking, or sponsorship? Reach out to the RISE organizing team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(206, 184, 136, 0.1)', borderRadius: '50%' }}>
              <Mail className="gold-text" size={32} />
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>Email Us</h3>
              <a href="mailto:purduerise@gmail.com" style={{ color: '#ccc' }}>purduerise@gmail.com</a>
            </div>
          </div>
          
          <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ padding: '1rem', background: 'rgba(102, 252, 241, 0.1)', borderRadius: '50%' }}>
              <Camera className="cyan-text" size={32} />
            </div>
            <div>
              <h3 style={{ margin: '0 0 0.25rem 0' }}>Follow Us</h3>
              <a href="https://instagram.com/purdue.rise" target="_blank" rel="noreferrer" style={{ color: '#ccc' }}>@purdue.rise</a>
            </div>
          </div>
          
          <div className="glass-panel" style={{ padding: '2rem', background: 'rgba(31, 40, 51, 0.3)' }}>
            <h3 style={{ marginBottom: '1rem' }}>Event Location</h3>
            <p style={{ color: '#ccc', margin: 0 }}>
              Purdue Memorial Union (PMU)<br/>
              101 N Grant St,<br/>
              West Lafayette, IN 47906
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MessageSquare size={24} className="gold-text" /> Send a Message
          </h2>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Name</label>
              <input required type="text" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Email</label>
              <input required type="email" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: 'rgba(0,0,0,0.5)', color: 'white' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Message</label>
              <textarea required rows="4" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: 'rgba(0,0,0,0.5)', color: 'white', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="btn btn-accent mt-2">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
