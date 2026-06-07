import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

import './index.css';

function App() {
	useEffect(() => {
		// single dark theme via globals.css
	}, []);

  return (
	<div className="relative min-h-screen transition-colors duration-500">
	  <Header />
	  <main>
		<motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.45}}>
		  <Home />
		</motion.div>

		<section id="about"><About /></section>
		<section id="experience"><Projects /></section>
		<section id="skills"><Skills /></section>
		<section id="testimonials"><Testimonials /></section>
		<section id="contact"><Contact /></section>
	  </main>

	<Footer />
	</div>
  );
}

export default App;
