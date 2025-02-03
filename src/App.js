import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import './index.css'; // or './App.css'

function App() {
	return (
		<div className='bg-gray-900/80 backdrop-blur-md border-b border-gray-700 min-h-screen text-white'>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<Home />
						</motion.div>
					}
				/>
				<Route
					path='/about'
					element={
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<About />
						</motion.div>
					}
				/>
				<Route
					path='/projects'
					element={
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<Projects />
						</motion.div>
					}
				/>
				<Route
					path='/skills'
					element={
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<Skills />
						</motion.div>
					}
				/>
				<Route
					path='/contact'
					element={
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.5 }}
						>
							<Contact />
						</motion.div>
					}
				/>
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
