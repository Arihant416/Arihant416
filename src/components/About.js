import { motion } from 'framer-motion';

const About = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen flex flex-col items-center justify-center text-white py-24 px-6'
		>
			<div className='w-full max-w-6xl mx-auto'>
				<motion.h1
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className='text-5xl sm:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-md tracking-tight'
				>
					About Me
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
					className='text-lg sm:text-xl text-gray-300 mt-6 max-w-4xl mx-auto text-center leading-relaxed'
				>
					Hey there! I'm{' '}
					<span className='bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent font-semibold'>
						Arihant
					</span>
					, a software engineer passionate about building scalable,
					high-performance back-end systems.
				</motion.p>

				{/* Divider */}
				<div className='mt-16 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full blur-sm opacity-30'></div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
					className='mt-14 max-w-5xl mx-auto w-full text-left px-2'
				>
					<h3 className='text-2xl sm:text-3xl font-bold text-white mb-4'>
						What I Do
					</h3>
					<p className='text-gray-400 mb-6 leading-relaxed'>
						I specialize in architecting robust systems that handle large-scale
						data and traffic. My expertise includes:
					</p>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300'>
						{[
							'Building scalable distributed back-end systems (APIs)',
							'Cloud computing with AWS and containerization (Docker)',
							'Optimizing databases and caching (MongoDB, MySQL, Redis)',
							'Web Development (React, Angular, Node)',
							'Web scraping and automation (Selenium, Scrapy, BeautifulSoup)',
						].map((text, index) => (
							<div key={index} className='flex items-start'>
								<span className='text-xl font-bold text-indigo-400 mr-3 hover:scale-110 transition-transform duration-300'>
									⚡
								</span>
								<p className='leading-relaxed'>{text}</p>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
					className='mt-20 text-center px-2'
				>
					<h3 className='text-2xl font-semibold text-white'>Let’s Connect!</h3>
					<p className='text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed'>
						I’m always excited to chat about software engineering, career
						growth, or just geek out over tech. Reach out via{' '}
						<a
							href='https://linkedin.com/in/arihant416'
							target='_blank'
							rel='noopener noreferrer'
							className='text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition'
						>
							LinkedIn
						</a>
						,{' '}
						<a
							href='https://github.com/Arihant416'
							target='_blank'
							rel='noopener noreferrer'
							className='text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition'
						>
							GitHub
						</a>
						, or email. <br className='hidden sm:block' />
						<span className='mt-2 inline-block text-sm text-gray-500 italic'>
							Let’s build something amazing together 🚀
						</span>
					</p>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default About;
