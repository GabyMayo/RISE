import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Expo', path: '/expo' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="navbar-container" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      transition: 'background 0.3s ease',
      background: scrolled ? 'rgba(11, 12, 16, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(102, 252, 241, 0.1)' : 'none'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 'var(--nav-height)' }}>
          
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Cpu size={32} color="var(--color-cyan)" />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '1px' }}>
              R<span className="gold-text">I</span>SE <span style={{fontSize: '1rem', opacity: 0.8}}>3</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="md-flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: location.pathname === link.path ? 'var(--color-cyan)' : 'var(--color-off-white)',
                  margin: '0 0.5rem'
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/registration" className="btn btn-primary" style={{ marginLeft: '1rem' }}>
              Register
            </Link>
          </nav>

          {/* Mobile Menu Icon */}
          <button 
            className="md-hide" 
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'transparent', border: 'none', color: 'var(--color-white)', cursor: 'pointer' }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div style={{ backgroundColor: 'var(--color-midnight)', padding: '1rem', borderBottom: '1px solid var(--color-dark-gray)' }}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              style={{ display: 'block', padding: '0.75rem 1rem', color: 'var(--color-white)' }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/registration" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '1rem', marginTop: '0.5rem', textAlign: 'center', background: 'var(--color-purdue-gold)', color: '#000', borderRadius: '4px', fontWeight: 'bold' }}>
            Register Now
          </Link>
        </div>
      )}

      {/* Adding a quick inline style component for the md-flex / md-hide classes for Navbar */}
      <style>{`
        @media (min-width: 900px) {
          .md-flex { display: flex !important; }
          .md-hide { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
