import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { LazyMotion, domAnimation, m } from 'framer-motion';

import Testimonials from './Testimonials';
import CloudsBackground from './CloudsBackground';

const Home = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.section
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='relative min-h-screen flex flex-col items-center justify-center text-center bg-background-light dark:bg-gradient-to-b dark:from-[#050505] dark:via-[#111111] dark:to-[#0a0a0a] text-text-light dark:text-text-dark px-3 xs:px-4 sm:px-6 md:px-10 py-10 sm:py-16 overflow-hidden'
			>
				<CloudsBackground />

				<div className='max-w-2xl xs:max-w-3xl sm:max-w-4xl w-full'>
					<m.h1 className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 sm:mb-8 drop-shadow-xl bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
						Hey, I’m{' '}
						<span className='inline-block animate-pulse text-indigo-600 dark:text-pink-400 bg-none bg-clip-border text-clip-auto'>
							Arihant
						</span>
						.
					</m.h1>

					<m.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						className='text-lg xs:text-xl sm:text-2xl text-muted-light dark:text-muted-dark mb-4 sm:mb-5 leading-relaxed font-semibold'
					>
						Senior Software Engineer building high-scale systems & cloud-native
						apps.
					</m.p>

					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.4 }}
						className='text-base xs:text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent font-medium mb-5 sm:mb-6'
					>
						<ReactTyped
							strings={[
								'Scaling distributed APIs @Perfios',
								'Diving into Java, ML, and MLOps',
								'Mentoring devs & strengthening infra',
								'Passionate about system design',
							]}
							typeSpeed={50}
							backSpeed={30}
							loop
						/>
					</m.div>

					<m.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6 }}
						className='text-xs xs:text-sm text-muted-light dark:text-muted-dark'
					>
						Currently focused on backend architecture & scale.
					</m.p>

					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.8 }}
						className='mt-8 sm:mt-10 flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center items-center w-full max-w-xs xs:max-w-md mx-auto'
					>
						<Link
							to='/projects'
							className='bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-indigo-500 transition-all duration-300 px-4 py-2 rounded-2xl text-white text-xs xs:text-sm sm:text-base font-semibold shadow-md hover:shadow-indigo-500/30 min-w-[110px] text-center'
						>
							View Projects
						</Link>
						<Link
							to='/contact'
							className='border border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 px-4 py-2 rounded-2xl text-indigo-700 dark:text-white text-xs xs:text-sm sm:text-base font-semibold shadow hover:shadow-indigo-400/30 min-w-[110px] text-center'
						>
							Contact
						</Link>
					</m.div>

					{/* Move Testimonials Section Here */}
					<Testimonials />

					<div className='mt-16 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full blur-sm opacity-40'></div>
				</div>
			</m.section>
		</LazyMotion>
	);
};

export default Home;
