import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

const Home = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='min-h-screen flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 sm:px-10 py-12'
		>
			<div className='max-w-4xl mx-auto w-full'>
				{/* Minimal Header */}
				<motion.h1 className='text-3xl sm:text-5xl font-extrabold text-white text-center mb-4 drop-shadow-[0_0_4px_rgba(139,92,246,0.5)] drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]'>
					Hey, I’m Arihant.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
					className='text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-center mb-6 leading-relaxed'
				>
					Senior Software Engineer working on high-scale systems and
					cloud-native architecture.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
					className='text-md sm:text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 animate-pulse max-w-2xl mx-auto text-center font-semibold mb-6 tracking-wide'
				>
					<ReactTyped
						strings={[
							'Building highly scaled distributed APIs @Perfios',
							'Exploring Java, Machine Learning and MLOps',
							'Mentoring developers & scaling backend infra..',
							'Enthusiastic about system design...',
						]}
						typeSpeed={30}
						backSpeed={30}
						loop
					/>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.6 }}
					className='text-sm text-gray-400 text-center'
				>
					Focused on backend architecture & scale.
				</motion.p>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
					className='mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-transform duration-300 ease-in-out'
				>
					<Link
						to='/projects'
						aria-label='View Projects'
						role='button'
						className='bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 hover:scale-105 hover:brightness-110 px-6 py-3 rounded-xl text-white font-semibold text-sm sm:text-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300'
					>
						View Projects
					</Link>

					<Link
						to='/contact'
						aria-label='Contact Me'
						role='button'
						className='bg-transparent border border-indigo-400 hover:bg-indigo-600/10 hover:scale-105 hover:brightness-110 px-6 py-3 rounded-xl text-white font-semibold text-sm sm:text-lg shadow hover:shadow-indigo-500/20 transition-all duration-300'
					>
						Contact
					</Link>
				</motion.div>

				{/* Optional Visual Divider */}
				<div className='mt-16 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full blur-sm opacity-40'></div>
			</div>
		</motion.section>
	);
};

export default Home;
