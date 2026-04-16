import React from 'react';
import { Calendar, MapPin, ChevronRight, Activity, Users, Settings, Target, Briefcase } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section 
        className="hero-section"
        style={{ 
          minHeight: '90vh', 
          display: 'flex', 
          alignItems: 'center',
          position: 'relative',
          backgroundImage: `linear-gradient(rgba(11, 12, 16, 0.7), rgba(11, 12, 16, 0.95)), url('/hero-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          marginTop: 'calc(var(--nav-height) * -1)',
          paddingTop: 'var(--nav-height)'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="animate-fade-in text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              border: '1px solid var(--color-cyan)', 
              borderRadius: '30px',
              color: 'var(--color-cyan)',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '2rem',
              backgroundColor: 'rgba(102, 252, 241, 0.1)'
            }}>
              Purdue's Premier Robotics Event
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '1rem', lineHeight: '1.1' }}>
              Robotics and Intelligent Systems Expo <span className="gradient-text">3</span>
            </h1>
            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', color: '#ccc', marginBottom: '2.5rem', fontWeight: 300 }}>
              Engineering the Future of Autonomy, AI, and Intelligent Machines.
            </p>
            
            <div className="flex flex-col md-flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2" style={{ color: 'var(--color-off-white)' }}>
                <Calendar className="gold-text" size={24} />
                <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>December 2026</span>
              </div>
              <div className="md-hide" style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-dark-gray)' }}></div>
              <div className="flex items-center gap-2" style={{ color: 'var(--color-off-white)' }}>
                <MapPin className="cyan-text" size={24} />
                <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>Purdue University</span>
              </div>
            </div>

            <div className="flex flex-col md-flex-row justify-center gap-4">
              <a href="#about" className="btn btn-accent" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT RISE SECTION */}
      <section id="about" className="section relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="animate-fade-in delay-200">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About <span className="gold-text">RISE</span></h2>
              <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '1.5rem' }}>
                RISE is a large-scale robotics and intelligent systems expo designed to connect students, researchers, and industry leaders. The event highlights advancements in robotics, autonomy, and AI through interactive exhibits, technical programming, and professional networking.
              </p>
              <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-cyan)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={20} /> Explosive Growth
                </h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#bbb' }}>
                  From its inception with 200+ attendees to over 500+ participants in Spring 2024, RISE is established as one of the largest student-run robotics events in the U.S. Following the success of our Fall 2025 mini-expo, RISE 3 represents our continued commitment to scale and innovation.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 animate-fade-in delay-300">
              {/* Purdue ICON Callout */}
              <div className="glass-panel" style={{ borderLeft: '4px solid var(--color-purdue-gold)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Purdue ARC</h3>
                <p style={{ color: '#ccc', margin: 0 }}>
                  Hosted by the Autonomous Robotics Club of Purdue (ARC), providing students with hands-on experience in building the autonomous systems of tomorrow.
                </p>
              </div>
              <div className="glass-panel" style={{ borderLeft: '4px solid var(--color-cyan)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Purdue ICON</h3>
                <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>
                  The Institute for Control, Optimization and Networks (ICON) at Purdue University brings together researchers across disciplines to address fundamental challenges in autonomous systems. RISE is proudly organized in partnership with Purdue ICON.
                </p>
                <a href="https://engineering.purdue.edu/ICON" target="_blank" rel="noreferrer" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--color-white)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  Visit Purdue ICON <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS / FEATURES SECTION */}
      <section className="section bg-grid" style={{ backgroundColor: 'rgba(31, 40, 51, 0.3)' }}>
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ fontSize: '2.5rem' }}>Event Highlights</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--color-cyan)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HighlightCard 
              icon={<Settings size={32} color="var(--color-purdue-gold)" />}
              title="Research & Innovation"
              desc="Interactive exhibits featuring cutting-edge academic research and student engineering projects."
            />
            <HighlightCard 
              icon={<Briefcase size={32} color="var(--color-cyan)" />}
              title="Industry Networking"
              desc="Direct access to top sponsors and robotics companies for career opportunities and professional growth."
            />
            <HighlightCard 
              icon={<Users size={32} color="var(--color-purdue-gold)" />}
              title="Workshops & Skills"
              desc="Hands-on technical workshops led by industry professionals and specialized robotics clubs."
            />
            <HighlightCard 
              icon={<Target size={32} color="var(--color-cyan)" />}
              title="Technical Challenges"
              desc="Short, competitive hardware and software challenges with prizes for top student performers."
            />
            <HighlightCard 
              icon={<Activity size={32} color="var(--color-purdue-gold)" />}
              title="Company Engagement"
              desc="Exclusive presentations and deep-dives from companies leading the tech horizon."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const HighlightCard = ({ icon, title, desc }) => (
  <div className="glass-panel" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(11, 12, 16, 0.5)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.5rem' }}>
      {icon}
    </div>
    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{title}</h3>
    <p style={{ color: '#aaa', margin: 0, fontSize: '0.95rem' }}>{desc}</p>
  </div>
);

export default Home;
