import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "Who can attend the RISE Expo?",
      a: "RISE is fully open to all Purdue students, faculty, and invited industry professionals. There is no specific major requirement—anyone interested in robotics, AI, or autonomous systems is welcome."
    },
    {
      q: "Is there an entry fee?",
      a: "No, general admission and participation in all student-facing events (including workshops and challenges) are completely free, courtesy of our sponsors and Purdue ICON."
    },
    {
      q: "Do I need to register in advance?",
      a: "While walk-ins are permitted for the main expo floor, advanced registration is highly recommended to secure spots in workshops and to participate in the technical challenges."
    },
    {
      q: "I am a company representative. How can we get a booth?",
      a: "Please fill out the contact form on our website or email purduerise@gmail.com directly. We offer various sponsorship and participation tiers."
    },
    {
      q: "What should I bring?",
      a: "Students should bring digital/physical copies of their resumes for networking, and a laptop if they plan to participate in the software challenges."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container section animate-fade-in" style={{ maxWidth: '800px' }}>
      <div className="text-center mb-8">
        <h1 style={{ fontSize: '3rem' }}>Frequently Asked <span className="gold-text">Questions</span></h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="glass-panel" 
            style={{ 
              padding: '1.5rem', 
              cursor: 'pointer',
              border: openIndex === index ? '1px solid var(--color-cyan)' : '1px solid rgba(255,255,255,0.1)'
            }}
            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: openIndex === index ? 'var(--color-cyan)' : 'var(--color-white)' }}>
                {faq.q}
              </h3>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            
            {openIndex === index && (
              <div style={{ marginTop: '1rem', color: '#ccc', lineHeight: '1.6' }} className="animate-fade-in">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p style={{ color: '#aaa' }}>Still have questions?</p>
        <a href="/contact" className="gold-text" style={{ textDecoration: 'underline' }}>Contact Us</a>
      </div>
    </div>
  );
};

export default FAQ;
