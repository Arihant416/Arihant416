import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getInitialTheme, setTheme } from '../theme';

export default function ThemeToggleFab() {
	const [theme, setThemeState] = useState(getInitialTheme());

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		setThemeState(newTheme);
	};

	return (
		<motion.button
			onClick={toggleTheme}
			aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
			initial={{ x: 40, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ type: 'spring', stiffness: 200, damping: 18 }}
			className={`fixed bottom-8 right-0 z-50 pr-6 pl-3 py-2 flex items-center border border-gray-700 shadow-lg bg-gray-100/90 dark:bg-gray-900/90 transition-colors duration-300 text-xl backdrop-blur-md cursor-pointer rounded-l-full rounded-r-2xl`}
			style={{
				borderTopRightRadius: '1rem',
				borderBottomRightRadius: '1rem',
				borderTopLeftRadius: '9999px',
				borderBottomLeftRadius: '9999px',
			}}
		>
			<span className='sr-only'>Toggle theme</span>
			<div className='flex items-center justify-center w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-md'>
				{theme === 'dark' ? (
					<motion.svg
						key='sun'
						xmlns='http://www.w3.org/2000/svg'
						className='w-7 h-7 text-yellow-400'
						fill='currentColor'
						viewBox='0 0 24 24'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<circle cx='12' cy='12' r='5' fill='#fbbf24' />
						<g stroke='#fbbf24' strokeWidth='2'>
							<line x1='12' y1='1' x2='12' y2='3' />
							<line x1='12' y1='21' x2='12' y2='23' />
							<line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
							<line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
							<line x1='1' y1='12' x2='3' y2='12' />
							<line x1='21' y1='12' x2='23' y2='12' />
							<line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
							<line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
						</g>
					</motion.svg>
				) : (
					<motion.svg
						key='moon'
						xmlns='http://www.w3.org/2000/svg'
						className='w-7 h-7 text-gray-200'
						fill='currentColor'
						viewBox='0 0 24 24'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<path
							d='M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z'
							fill='#22223b'
						/>
					</motion.svg>
				)}
			</div>
		</motion.button>
	);
}
