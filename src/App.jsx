import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Speakers from './pages/Speakers';
import Expo from './pages/Expo';
import Workshops from './pages/Workshops';
import Sponsors from './pages/Sponsors';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/expo" element={<Expo />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
