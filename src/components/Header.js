import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import me from '../assets/me.jpg'; // Importing the locally stored image

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

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<Disclosure
			as='nav'
			className={`${
				isScrolled
					? 'bg-gray-900 shadow-lg'
					: 'bg-gradient-to-r from-gray-800 via-gray-900 to-black'
			} sticky top-0 z-50 transition-colors duration-300`}
		>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							{/* Mobile Menu Button */}
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								<DisclosureButton
									aria-expanded={open}
									aria-label='Toggle navigation menu'
									className='p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-all'
								>
									<motion.div
										animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
										transition={{ duration: 0.5, ease: 'easeInOut' }}
										className='w-6 h-0.5 bg-gray-300'
									/>
									<motion.div
										animate={open ? { opacity: 0 } : { opacity: 1 }}
										className='w-6 h-0.5 bg-gray-300 my-1'
									/>
									<motion.div
										animate={
											open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
										}
										transition={{ duration: 0.5, ease: 'easeInOut' }}
										className='w-6 h-0.5 bg-gray-300'
									/>
								</DisclosureButton>
							</div>

							{/* Logo */}
							<div className='flex flex-1 items-center justify-center sm:justify-start'>
								<img
									src={me}
									alt='Arihant'
									className='h-12 w-12 rounded-full hover:scale-105 transition-transform duration-300'
								/>
							</div>

							{/* Desktop Navigation */}
							<div className='hidden sm:block'>
								<div className='flex space-x-6'>
									{navigation.map((item) => (
										<Link
											key={item.name}
											to={item.href}
											className={`px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out transform relative group ${
												location.pathname === item.href
													? 'scale-105 text-purple-500'
													: 'text-gray-300'
											}`}
										>
											{item.name.split('').map((letter, index) => (
												<span
													key={index}
													className='inline-block transition-colors duration-300 group-hover:text-purple-400'
												>
													{letter}
												</span>
											))}
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Mobile Menu */}
					<DisclosurePanel className='sm:hidden'>
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.3 }}
							className='px-2 pb-3 space-y-2'
						>
							{navigation.map((item) => (
								<DisclosureButton
									aria-expanded={open}
									aria-label='Toggle Navigation Menu'
									key={item.name}
									as={Link}
									to={item.href}
									className={`block px-3 py-2 rounded-md text-lg font-medium transition-all duration-300 ease-in-out transform ${
										location.pathname === item.href
											? 'scale-105 text-purple-500'
											: 'text-gray-300 hover:text-purple-400'
									}`}
								>
									{item.name}
								</DisclosureButton>
							))}
						</motion.div>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
}
