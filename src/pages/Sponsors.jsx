import React from 'react';

const Sponsors = () => {
  return (
    <div className="container section animate-fade-in">
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '3rem' }}>Our <span className="gold-text">Sponsors</span></h1>
        <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
          RISE 3 is made possible by the generous support of our industry and academic partners.
        </p>
      </div>

      <div style={{ textAlign: 'center', padding: '4rem 0' }}>
        
        {/* Tier 1 */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--color-purdue-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.2rem', marginBottom: '2rem' }}>Platinum Level</h2>
          <div className="flex justify-center flex-wrap gap-6">
            <div className="glass-panel" style={{ width: '300px', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>
              Primary Sponsor
            </div>
          </div>
        </div>

        {/* Tier 2 */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ color: '#ccc', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.2rem', marginBottom: '2rem' }}>Gold Level</h2>
          <div className="flex justify-center flex-wrap gap-6">
            <div className="glass-panel" style={{ width: '250px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
              Sponsor Logo
            </div>
            <div className="glass-panel" style={{ width: '250px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
              Sponsor Logo
            </div>
          </div>
        </div>

        {/* Tier 3 */}
        <div>
          <h2 style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.2rem', marginBottom: '2rem' }}>Silver Level</h2>
          <div className="flex justify-center flex-wrap gap-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="glass-panel" style={{ width: '180px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: '0.9rem' }}>
                Sponsor Logo
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="text-center mt-8">
        <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>Interested in partnering with RISE 3?</p>
        <a href="/contact" className="btn btn-accent">Become a Sponsor</a>
      </div>
    </div>
  );
};

export default Sponsors;
