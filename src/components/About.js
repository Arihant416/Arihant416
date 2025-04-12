import { motion } from 'framer-motion';

const About = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen flex flex-col items-center justify-center text-white px-6 sm:px-10 pt-16 pb-20'
		>
			<motion.h1
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='text-5xl sm:text-6xl font-extrabold drop-shadow-lg text-center'
			>
				About Me
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
				className='text-lg sm:text-xl text-gray-300 mt-6 max-w-3xl text-center'
			>
				Hey there! I'm{' '}
				<span className='text-indigo-400 font-semibold'>Arihant</span>, a
				software engineer passionate about building scalable, high-performance
				back-end systems. Whether it's designing efficient APIs, optimizing
				databases, or deploying cloud-based solutions — I love solving
				challenges that push technology forward.
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
				className='mt-14 max-w-4xl w-full text-left'
			>
				<h3 className='text-3xl font-semibold text-white mb-3'>What I Do</h3>
				<p className='text-gray-300 mb-6'>
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
							<span className='text-xl font-bold text-indigo-400 mr-3'>⚡</span>
							<p>{text}</p>
						</div>
					))}
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
				className='mt-16 text-center'
			>
				<h3 className='text-2xl font-semibold text-white'>Let’s Connect!</h3>
				<p className='text-gray-300 mt-4 max-w-2xl mx-auto'>
					I’m always excited to chat about software engineering, career growth,
					or just geek out over tech. Reach out via{' '}
					<a
						href='https://linkedin.com/in/arihant416'
						target='_blank'
						rel='noopener noreferrer'
						className='text-indigo-400 hover:text-indigo-300 hover:underline transition'
					>
						LinkedIn
					</a>
					,{' '}
					<a
						href='https://github.com/Arihant416'
						target='_blank'
						rel='noopener noreferrer'
						className='text-indigo-400 hover:text-indigo-300 hover:underline transition'
					>
						GitHub
					</a>
					, or email. Let’s build something amazing together!
				</p>
			</motion.div>
		</motion.section>
	);
};

export default About;
