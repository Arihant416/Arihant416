import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import me from '../assets/me.jpg';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Skills', href: '/skills' },
	{ name: 'Contact', href: '/contact' },
];

export default function Navbar() {
	const location = useLocation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => setOpen(false), [location.pathname]);

	return (
		<nav
			className={`sticky top-0 z-50 transition-all duration-700 ease-out ${
				isScrolled
					? 'bg-gradient-to-b from-[#141019]/90 to-[#23203a]/80'
					: 'bg-transparent'
			} backdrop-blur-md shadow-xl border-0`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='relative flex h-16 md:h-20 items-center justify-between'>
					{/* Mobile Toggle */}
					<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
						<button
							onClick={() => setOpen(!open)}
							aria-label='Toggle navigation menu'
							className='p-2 rounded-md text-gray-300 bg-transparent hover:bg-gray-700/10 focus:outline-none transition-opacity duration-300'
						>
							<motion.div
								animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
								transition={{ duration: 0.7 }}
								className='w-7 h-0.5 bg-gray-400'
							/>
							<motion.div
								animate={open ? { opacity: 0 } : { opacity: 1 }}
								transition={{ duration: 0.5 }}
								className='w-7 h-0.5 bg-gray-400 my-1'
							/>
							<motion.div
								animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
								transition={{ duration: 0.7 }}
								className='w-7 h-0.5 bg-gray-400'
							/>
						</button>
					</div>

					{/* Logo */}
					<div className='flex flex-1 items-center justify-center sm:justify-start'>
						<motion.div
							initial={{ opacity: 0, scale: 0.92 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
							className='rounded-full bg-gradient-to-br from-[#23203a]/70 to-[#18132a]/90 p-1 border border-[#23203a]/30'
						>
							<img
								src={me}
								alt='Arihant'
								className='h-10 w-10 md:h-14 md:w-14 rounded-full object-center'
							/>
						</motion.div>
					</div>

					{/* Desktop Nav */}
					<div className='hidden sm:flex items-center space-x-6'>
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
									className={`px-4 py-2 rounded-md text-sm font-medium transition duration-500 ${
										location.pathname === item.href
											? 'text-cyan-200'
											: 'text-gray-300 hover:text-cyan-100'
									}`}
								>
									{item.name}
									<motion.div
										className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400/60 rounded transform scale-x-0 ${
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
				{open && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.4 }}
						className='sm:hidden px-2 pt-2 pb-3 space-y-1 rounded-b-xl bg-[#18132a]/95 backdrop-blur-md shadow-none'
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
									className={`block px-4 py-2 rounded-md text-base font-medium transition-all ${
										location.pathname === item.href
											? 'text-cyan-200 bg-cyan-900/10'
											: 'text-gray-300 hover:text-cyan-100 hover:bg-cyan-900/5'
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
