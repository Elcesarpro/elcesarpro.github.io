import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

import { Routes, Route } from 'react-router-dom';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const savedScrollY = location.state?.scrollY;
    const hash = location.hash || location.state?.hash || '';

    if (hash) {
      const elementId = hash.replace('#', '');
      const targetElement = document.getElementById(elementId);

      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
        });
        return;
      }
    }

    if (typeof savedScrollY === 'number') {
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedScrollY, behavior: 'auto' });
      });
    }
  }, [location.pathname, location.hash, location.state]);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <Portfolio />
                <About />
                <Contact />
              </>
            } />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
