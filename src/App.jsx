import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import WhoAmI from './components/WhoAmI';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  /* ── Scroll-reveal: IntersectionObserver ───────────────── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <HeroBanner />
      <WhoAmI />
      <Skills />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
}
