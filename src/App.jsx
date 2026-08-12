import React from 'react';
import { ThemeProvider } from './context/ThemeContext';

import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="recommendations"><Testimonials /></section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
