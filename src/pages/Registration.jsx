import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Registration = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container section animate-fade-in" style={{ maxWidth: '800px' }}>
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '3rem' }}>Event <span className="cyan-text">Registration</span></h1>
        <p style={{ color: '#ccc' }}>
          Secure your spot for RISE 3. Registration is free and open to students, faculty, and industry professionals.
        </p>
      </div>

      <div className="glass-panel">
        {submitted ? (
          <div className="text-center" style={{ padding: '4rem 2rem' }}>
            <h2 className="gold-text mb-2">Registration Received!</h2>
            <p style={{ color: '#ccc' }}>Thank you for signing up for RISE 3. You will receive a confirmation email shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Full Name *</label>
                <input required type="text" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: 'rgba(0,0,0,0.5)', color: 'white' }} placeholder="John Doe" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Email Address *</label>
                <input required type="email" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: 'rgba(0,0,0,0.5)', color: 'white' }} placeholder="jdoe@example.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Affiliation *</label>
                <select required style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: 'rgba(0,0,0,0.5)', color: 'white' }}>
                  <option value="">Select Affiliation...</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty / Academia</option>
                  <option value="company">Company / Industry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: '#ccc' }}>Primary Area of Interest</label>
                <select style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: 'rgba(0,0,0,0.5)', color: 'white' }}>
                  <option value="">Select Interest...</option>
                  <option value="hardware">Hardware & Mechanical</option>
                  <option value="software">Software & AI Control</option>
                  <option value="electrical">Electrical & Systems</option>
                  <option value="networking">Networking & Careers</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.9rem', color: '#ccc', marginBottom: '0.5rem', display: 'block' }}>Optional Interests (Select any that apply)</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: 'var(--color-cyan)' }} /> 
                  <span style={{ color: '#aaa', fontSize: '0.95rem' }}>I plan to attend Hands-on Technical Workshops</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ accentColor: 'var(--color-purdue-gold)' }} /> 
                  <span style={{ color: '#aaa', fontSize: '0.95rem' }}>I want to compete in Technical Challenges (Students only)</span>
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-4" style={{ width: '100%' }}>
              Submit Registration <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Registration;
