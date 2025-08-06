import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import me from '../assets/me.jpg';
import { getInitialTheme, setTheme } from '../theme';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Skills', href: '/skills' },
	{ name: 'Contact', href: '/contact' },
];

export default function Header() {
	const location = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [theme, setThemeState] = useState(getInitialTheme());

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => setMenuOpen(false), [location.pathname]);

	// Theme toggle handler
	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		setThemeState(newTheme);
	};

	return (
		<nav
			className={`sticky top-0 z-50 transition-all duration-700 ease-out
			   ${
						isScrolled
							? 'bg-background-light/90 dark:bg-background-dark/90'
							: 'bg-background-light/70 dark:bg-background-dark/70'
					}
			   backdrop-blur-md shadow-xl border-0`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='relative flex h-16 md:h-20 items-center justify-between'>
					{/* Mobile Toggle */}
					<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							aria-label='Toggle navigation menu'
							className={`p-2 rounded-md bg-transparent focus:outline-none transition-opacity duration-300 flex flex-col justify-center items-center h-10 w-10 ${
								menuOpen
									? 'text-gray-700 dark:text-gray-100'
									: 'text-gray-400 dark:text-gray-200'
							}`}
						>
							<motion.span
								animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
								transition={{ type: 'spring', stiffness: 400, damping: 30 }}
								className='block w-7 h-0.5 bg-gray-400'
							/>
							<motion.span
								animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
								transition={{ duration: 0.3 }}
								className='block w-7 h-0.5 bg-gray-400 my-1'
							/>
							<motion.span
								animate={
									menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
								}
								transition={{ type: 'spring', stiffness: 400, damping: 30 }}
								className='block w-7 h-0.5 bg-gray-400'
							/>
						</button>
					</div>

					{/* Logo */}
					<div className='flex flex-1 items-center justify-center sm:justify-start'>
						<motion.div
							initial={{ opacity: 0, scale: 0.92 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
							className='rounded-full p-1 bg-white dark:bg-background-dark/80 border border-muted-light dark:border-muted-dark'
						>
							<img
								src={me}
								alt='Arihant'
								className='h-10 w-10 md:h-14 md:w-14 rounded-full object-center shadow-md'
							/>
						</motion.div>
					</div>

					{/* Desktop Nav + Theme Toggle */}
					<div className='hidden sm:flex items-center space-x-8'>
						{navigation.map((item, idx) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: -8 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.1 + idx * 0.06,
									duration: 0.6,
									ease: [0.77, 0, 0.175, 1],
								}}
							>
								<Link
									to={item.href}
									className={`px-5 py-2 rounded-md text-lg font-semibold tracking-wide transition duration-500 
								${
									location.pathname === item.href
										? 'text-primary-light dark:text-primary-dark'
										: 'text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark'
								}
							`}
								>
									{item.name}
									<motion.div
										className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400/60 rounded transform scale-x-0 ${
											location.pathname === item.href ? 'scale-x-100' : ''
										}`}
										transition={{ duration: 0.4 }}
									/>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Mobile Nav */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4 }}
						className='sm:hidden px-2 pt-2 pb-3 space-y-1 rounded-b-xl bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700'
					>
						{navigation.map((item, idx) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, x: -12 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									delay: 0.1 + idx * 0.05,
									duration: 0.4,
									ease: [0.77, 0, 0.175, 1],
								}}
							>
								<Link
									to={item.href}
									className={`block px-5 py-3 rounded-md text-lg font-semibold tracking-wide transition-all ${
										location.pathname === item.href
											? 'text-primary-light dark:text-primary-dark'
											: 'text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark'
									}`}
								>
									{item.name}
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
