import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Header        from './components/Header';
import Hero          from './components/Hero';
import Experience    from './components/Experience';
import Skills        from './components/Skills';
import Testimonials  from './components/Testimonials';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import ThemeToggleFab from './components/ThemeToggleFab';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="recommendations"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <ThemeToggleFab />
    </ThemeProvider>
  );
}
