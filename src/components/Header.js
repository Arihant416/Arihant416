import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { motion } from 'framer-motion';
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
					? 'bg-[#0f0c29]/80 backdrop-blur-sm shadow-md'
					: 'bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'
			} sticky top-0 z-50 transition-all duration-300`}
		>
			{({ open }) => (
				<>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							{/* Mobile Toggle */}
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								<DisclosureButton
									aria-expanded={open}
									aria-label='Toggle navigation menu'
									className='p-2 rounded-md text-white hover:text-purple-400 hover:bg-indigo-950/30 transition-all'
								>
									<motion.div
										animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
										transition={{ duration: 0.5 }}
										className='w-6 h-0.5 bg-white'
									/>
									<motion.div
										animate={open ? { opacity: 0 } : { opacity: 1 }}
										className='w-6 h-0.5 bg-white my-1'
									/>
									<motion.div
										animate={
											open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
										}
										transition={{ duration: 0.5 }}
										className='w-6 h-0.5 bg-white'
									/>
								</DisclosureButton>
							</div>

							{/* Logo */}
							<div className='flex flex-1 items-center justify-center sm:justify-start'>
								<img
									src={me}
									alt='Arihant'
									className='h-10 w-10 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg'
								/>
							</div>

							{/* Desktop Nav */}
							<div className='hidden sm:block'>
								<div className='flex space-x-6'>
									{navigation.map((item) => (
										<Link
											key={item.name}
											to={item.href}
											className={`px-4 py-2 rounded-md text-sm sm:text-base font-medium transition duration-300 relative group ${
												location.pathname === item.href
													? 'text-violet-300'
													: 'text-gray-300'
											}`}
										>
											<span className='relative z-10 group-hover:text-indigo-400'>
												{item.name}
											</span>
											<span
												className={`absolute left-0 bottom-0 w-full h-0.5 rounded bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
													location.pathname === item.href ? 'scale-x-100' : ''
												}`}
											/>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Mobile Nav */}
					<DisclosurePanel className='sm:hidden'>
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
							className='px-2 pt-2 pb-3 space-y-1'
						>
							{navigation.map((item) => (
								<DisclosureButton
									key={item.name}
									as={Link}
									to={item.href}
									className={`block px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
										location.pathname === item.href
											? 'text-violet-300 bg-indigo-800/40'
											: 'text-gray-300 hover:text-indigo-400 hover:bg-indigo-800/20'
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
