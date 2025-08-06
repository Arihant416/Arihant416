import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggleFab from './components/ThemeToggleFab';
import { getInitialTheme, setTheme } from './theme';
import './index.css';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Home = lazy(() => import('./components/Home'));

function App() {
	useEffect(() => {
		// Preload all components after the app loads
		import('./components/About');
		import('./components/Projects');
		import('./components/Skills');
		import('./components/Contact');
		import('./components/Home');
		// Set initial theme
		setTheme(getInitialTheme());
	}, []);

	return (
		<div className='relative min-h-screen font-body bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-500'>
			{/* <ParticlesBackground /> Only show on Home page */}
			<Header />
			<Suspense
				fallback={
					<div className='flex items-center justify-center min-h-screen'>
						<div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-500'></div>
					</div>
				}
			>
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
			</Suspense>
			<Footer />
			<ThemeToggleFab />
		</div>
	);
}

export default App;
