import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='min-h-screen flex-1 flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 sm:px-10 py-12'
		>
			{/* Main Content */}
			<div className='max-w-4xl mx-auto w-full'>
				{/* Name */}
				<motion.h6
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className='text-2xl xs:text-4xl font-extrabold text-white mb-6 text-center md:text-3xl'
				>
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
						Hello!!
					</span>
					<motion.span
						className='ml-4 wave-animation'
						animate={{ rotate: [0, 15, 0] }}
						transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
					>
						👋
					</motion.span>
				</motion.h6>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
					className='text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed text-center md:text-lg'
				>
					<span className='font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
						I'm Arihant,{' '}
					</span>
					<span className='font-medium text-blue-300'>a Software Engineer</span>{' '}
					specializing in{' '}
					<span className='font-medium text-purple-300'>APIs</span> and{' '}
					<span className='font-medium text-blue-300'>
						high-performance web solutions
					</span>
					.
				</motion.p>
				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
					className='mt-8 flex flex-col sm:flex-row gap-4 justify-center'
				>
					<Link
						to='/projects'
						className='w-auto sm:max-w-xs px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-lg font-semibold hover:scale-105 hover:translate-y-[-2px]'
					>
						View My Work
					</Link>
					<Link
						to='/contact'
						className='w-auto sm:max-w-xs px-6 py-2 border-2 border-blue-400/50 text-white rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-sm sm:text-lg font-semibold hover:scale-105 hover:border-blue-400 hover:bg-blue-500/10 hover:translate-y-[-2px]'
					>
						Get in Touch
					</Link>
				</motion.div>
			</div>

			{/* Scroll Indicator (Optional) */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
				className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2'
			>
				<span className='text-gray-400 text-sm'>Scroll down</span>
				<div className='w-6 h-10 border-2 border-blue-400/50 rounded-full relative'>
					<motion.div
						animate={{ y: [0, 12], opacity: [1, 0] }}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className='w-1 h-2 bg-blue-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2'
					/>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Home;
