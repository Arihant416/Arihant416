import { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';

const PortfolioSections = lazy(() => import('./components/PortfolioSections'));

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="sections-loading" aria-label="Loading portfolio evidence" />}>
          <PortfolioSections />
        </Suspense>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
