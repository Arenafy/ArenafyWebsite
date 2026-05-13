import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Methodology } from './components/Methodology';
import { PublicSector } from './components/PublicSector';
import { Leadership } from './components/Leadership';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  }, []);

  return (
    <div className="dark min-h-screen bg-black text-white antialiased overflow-x-hidden">
      <Navigation />
      <Hero />
      <Capabilities />
      <Methodology />
      <PublicSector />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}