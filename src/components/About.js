import { motion } from 'framer-motion';

const About = () => {
	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex flex-col items-center justify-center text-center text-white px-6 sm:px-10 pt-10 pb-10'
		>
			<motion.h1
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg'
			>
				About Me
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
				className='text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl mx-auto'
			>
				Hey there! I'm Arihant, a software engineer passionate about building
				scalable, high-performance back-end systems. Whether it's designing
				efficient APIs, optimizing databases, or deploying cloud-based
				solutions, I love solving challenges that push technology forward.
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
				className='mt-12 max-w-4xl mx-auto text-left'
			>
				<h3 className='text-3xl font-semibold text-white'>What I Do:</h3>
				<p className='text-gray-300 mt-2'>
					I specialize in architecting robust systems that handle large-scale
					data and traffic. My expertise includes:
				</p>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 text-gray-300'>
					<div className='flex items-center'>
						<span className='text-xl font-medium mr-3'>⚡</span>
						<p>Building scalable distributed back-end systems (APIs)</p>
					</div>
					<div className='flex items-center'>
						<span className='text-xl font-medium mr-3'>⚡</span>
						<p>Cloud computing with AWS and containerization (Docker)</p>
					</div>
					<div className='flex items-center'>
						<span className='text-xl font-medium mr-3'>⚡</span>
						<p>Optimizing databases and caching (MongoDB, MySQL, Redis)</p>
					</div>
					<div className='flex items-center'>
						<span className='text-xl font-medium mr-3'>⚡</span>
						<p>Web Development (React, Angular, Node)</p>
					</div>
					<div className='flex items-center'>
						<span className='text-xl font-medium mr-3'>⚡</span>
						<p>Web scraping and automation (Selenium, Scrapy, BeautifulSoup)</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
				className='mt-12 text-center'
			>
				<h3 className='text-2xl font-semibold text-white'>Let's Connect!</h3>
				<p className='text-gray-300 mt-4 max-w-2xl mx-auto'>
					I’m always excited to chat about software engineering, career growth,
					or just geek out over tech. Feel free to reach out via{' '}
					<a
						href='https://linkedin.com/in/arihant416'
						className='text-blue-400 hover:underline transition duration-200'
					>
						LinkedIn
					</a>
					,{' '}
					<a
						href='https://github.com/Arihant416'
						className='text-blue-400 hover:underline transition duration-200'
					>
						GitHub
					</a>
					, or email. Let's build something amazing together!
				</p>
			</motion.div>
		</motion.section>
	);
};

export default About;
