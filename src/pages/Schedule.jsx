import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const Schedule = () => {
  const scheduleItems = [
    { time: '08:00 AM', title: 'Check-in & Breakfast',  location: 'PMU South Ballroom', type: 'general' },
    { time: '09:00 AM', title: 'Opening Remarks & Keynote', location: 'PMU Main Stage', type: 'presentation' },
    { time: '10:00 AM', title: 'Expo & Booths Open', location: 'PMU North Ballroom', type: 'general' },
    { time: '10:30 AM', title: 'Technical Challenge 1: Autonomous Navigation', location: 'Challenge Area A', type: 'challenge' },
    { time: '11:30 AM', title: 'Professor Talk: The Future of Perception AI', location: 'Room 204', type: 'presentation' },
    { time: '12:30 PM', title: 'Networking Lunch', location: 'PMU South Ballroom', type: 'general' },
    { time: '01:30 PM', title: 'Company Presentations (Tech deep-dives)', location: 'PMU Main Stage', type: 'presentation' },
    { time: '02:30 PM', title: 'Hardware Debugging Challenge', location: 'Challenge Area B', type: 'challenge' },
    { time: '03:30 PM', title: 'Workshop: Intro to ROS2', location: 'Room 206', type: 'workshop' },
    { time: '05:00 PM', title: 'Closing Ceremony & Awards', location: 'PMU Main Stage', type: 'general' },
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'presentation': return 'var(--color-cyan)';
      case 'challenge': return 'var(--color-purdue-gold)';
      case 'workshop': return '#9d4edd';
      default: return '#aaa';
    }
  };

  return (
    <div className="container section animate-fade-in">
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '3rem' }}>Event <span className="gold-text">Schedule</span></h1>
        <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
          Plan your day at RISE 3. Explore a mix of keynotes, interactive challenges, and industry networking.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {scheduleItems.map((item, index) => (
          <div key={index} className="glass-panel" style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', padding: '1.5rem', alignItems: 'center' }}>
            <div style={{ minWidth: '120px', fontWeight: 600, color: getTypeColor(item.type), display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} /> {item.time}
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ margin: '0 0 0.25rem 0', fontSize: '1.2rem' }}>{item.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#888', fontSize: '0.9rem' }}>
                <MapPin size={14} /> {item.location}
              </div>
            </div>
            <div className="md-hide" style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '20px',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              border: `1px solid ${getTypeColor(item.type)}`,
              color: getTypeColor(item.type)
            }}>
              {item.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
