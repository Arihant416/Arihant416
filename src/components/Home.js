import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Testimonials from './Testimonials';

const Home = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.section
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 sm:px-10 py-16'
			>
				<div className='max-w-4xl w-full'>
					<m.h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500'>
						Hey, I’m Arihant.
					</m.h1>

					<m.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.2 }}
						className='text-lg sm:text-xl text-gray-300 mb-5 leading-relaxed'
					>
						Senior Software Engineer building high-scale systems & cloud-native
						apps.
					</m.p>

					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.4 }}
						className='text-base sm:text-lg md:text-xl bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent font-medium mb-6'
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
						className='text-sm text-gray-400'
					>
						Currently focused on backend architecture & scale.
					</m.p>

					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.8 }}
						className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'
					>
						<Link
							to='/projects'
							className='bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-indigo-500 transition-all duration-300 px-6 py-3 rounded-2xl text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-indigo-500/30'
						>
							View Projects
						</Link>
						<Link
							to='/contact'
							className='border border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 px-6 py-3 rounded-2xl text-white text-sm sm:text-base font-semibold shadow hover:shadow-indigo-400/30'
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
