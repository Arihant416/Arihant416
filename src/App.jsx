import { lazy, Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const BeyondWork = lazy(() => import('./components/BeyondWork'));

const getPathname = () => window.location.pathname.replace(/\/$/, '') || '/';

export default function App() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const updatePathname = () => setPathname(getPathname());
    window.addEventListener('popstate', updatePathname);
    window.addEventListener('app:navigate', updatePathname);
    return () => {
      window.removeEventListener('popstate', updatePathname);
      window.removeEventListener('app:navigate', updatePathname);
    };
  }, []);

  return (
    <ThemeProvider>
      {pathname === '/beyond-work' ? (
        <Suspense fallback={<div className="bw-route-loading" aria-label="Loading beyond work" />}>
          <BeyondWork />
        </Suspense>
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <section id="experience"><Experience /></section>
            <section id="skills"><Skills /></section>
            <section id="recommendations"><Testimonials /></section>
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}
