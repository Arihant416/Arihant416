import { motion } from 'framer-motion';
import { FaNode, FaAws, FaReact, FaAngular, FaJava } from 'react-icons/fa';
import {
	SiMongodb,
	SiServerless,
	SiRedis,
	SiCplusplus,
	SiSelenium,
	SiPandas,
	SiFastapi,
	SiMysql,
	SiRabbitmq,
	SiLinux,
	SiPython,
	SiJavascript,
	SiAmazonsqs,
	SiScrapy,
	SiCelery,
	SiJira,
} from 'react-icons/si';

// Brand color map for all skills

const colorMap = {
	'C++': 'text-[#00599C]',
	Python: 'text-[#3776AB]',
	JavaScript: 'text-[#F7DF1E]',
	'Java (Basics)': 'text-[#E76F00]',
	Golang: 'text-[#00ADD8]',
	Angular: 'text-[#DD0031]',
	'React.js': 'text-[#61DAFB]',
	'Node.js': 'text-[#339933]',
	Serverless: 'text-[#FD5750]',
	Pandas: 'text-[#7B3FE4]',
	Numpy: 'text-[#4B8BBE]',
	FastAPI: 'text-[#009688]',
	Selenium: 'text-[#43B02A]',
	AWS: 'text-[#FF9900]',
	MongoDB: 'text-[#47A248]',
	Redis: 'text-[#DC382D]',
	MySQL: 'text-[#00758F]',
	'Amazon SQS': 'text-[#F29111]',
	RabbitMQ: 'text-[#FF6600]',
	Linux: 'text-[#FCC624]',
	Celery: 'text-[#37814A]',
	Agile: 'text-[#0052CC]',
	'Web-Scraping': 'text-[#E74C3C]',
	OOPs: 'text-[#6366f1]',
	'System Design': 'text-[#9333ea]',
	'Data Structures': 'text-[#22d3ee]',
	Algorithms: 'text-[#06b6d4]',
};

const Skills = () => {
	const skills = {
		programmingLanguages: [
			{ name: 'C++', icon: <SiCplusplus />, color: 'text-[#00599C]' },
			{ name: 'Python', icon: <SiPython />, color: 'text-[#3776AB]' },
			{ name: 'JavaScript', icon: <SiJavascript />, color: 'text-[#F7DF1E]' },
			{ name: 'Java (Basics)', icon: <FaJava />, color: 'text-[#E76F00]' },
			{
				name: 'Golang',
				icon: (
					<img
						src={
							require('../assets/gologo.svg').default ||
							require('../assets/gologo.svg')
						}
						alt='Go Logo'
						className='w-8 h-8 sm:w-10 sm:h-10 object-contain'
					/>
				),
				color: 'text-[#00ADD8]',
			},
		],
		frameworksAndLibraries: [
			{ name: 'Angular', icon: <FaAngular /> },
			{ name: 'React.js', icon: <FaReact /> },
			{ name: 'Node.js', icon: <FaNode /> },
			{ name: 'Serverless', icon: <SiServerless /> },
			{ name: 'Pandas', icon: <SiPandas /> },
			{ name: 'Numpy', icon: <SiPandas /> },
			{ name: 'FastAPI', icon: <SiFastapi /> },
			{ name: 'Selenium', icon: <SiSelenium /> },
		],
		cloudAndDatabases: [
			{ name: 'AWS', icon: <FaAws /> },
			{ name: 'MongoDB', icon: <SiMongodb /> },
			{ name: 'Redis', icon: <SiRedis /> },
			{ name: 'MySQL', icon: <SiMysql /> },
		],
		messageQueues: [
			{ name: 'Amazon SQS', icon: <SiAmazonsqs /> },
			{ name: 'RabbitMQ', icon: <SiRabbitmq /> },
		],
		others: [
			{ name: 'Linux', icon: <SiLinux /> },
			{ name: 'Celery', icon: <SiCelery /> },
			{ name: 'Agile', icon: <SiJira /> },
			{ name: 'Web-Scraping', icon: <SiScrapy /> },
		],
		csFundamentals: [
			{ name: 'OOPs', icon: null },
			{ name: 'System Design', icon: null },
			{ name: 'Data Structures', icon: null },
			{ name: 'Algorithms', icon: null },
		],
	};

	return (
		<motion.section
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='relative flex flex-col items-center justify-center text-center bg-white dark:bg-black text-black dark:text-white px-2 sm:px-6 lg:px-10 py-12 min-h-screen transition-colors duration-500'
		>
			<motion.h1
				initial={{ opacity: 0, scale: 0.92 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg'
			>
				My Skills
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
				className='text-lg sm:text-xl text-black dark:text-white mb-12 max-w-2xl mx-auto'
			>
				A showcase of my technical toolkit, frameworks, and engineering
				strengths.
			</motion.p>

			{/* Programming Languages */}
			<div className='w-full max-w-6xl'>
				<h2 className='text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent'>
					Programming Languages
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6'>
					{skills.programmingLanguages.map((skill, index) => {
						// Extract the hex color from colorMap for gradient
						const colorHex = (colorMap[skill.name] || '').match(
							/#([0-9a-fA-F]{6})/
						);
						const brandColor = colorHex ? `#${colorHex[1]}` : '#a78bfa';
						return (
							<motion.div
								key={index}
								whileHover={{
									scale: 1.018,
									y: -1,
									boxShadow: `0 2px 8px 0 ${brandColor}22`,
								}}
								transition={{
									type: 'tween',
									ease: 'easeInOut',
									duration: 0.22,
								}}
								className='flex flex-col items-center justify-center rounded-2xl border border-muted-light dark:border-muted-dark p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-black cursor-pointer relative group'
								style={{ overflow: 'visible' }}
							>
								<span
									className='pointer-events-none absolute inset-0 rounded-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
									style={{
										background: `linear-gradient(120deg, ${brandColor} 0%, #fff0 100%)`,
										WebkitMask:
											'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
										WebkitMaskComposite: 'xor',
										maskComposite: 'exclude',
									}}
								></span>
								{skill.icon && (
									<div
										className={`text-4xl sm:text-5xl mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-105 ${
											colorMap[skill.name]
										}`}
									>
										{skill.icon}
									</div>
								)}
								<div
									className={`text-base sm:text-lg font-semibold ${
										colorMap[skill.name]
									}`}
								>
									{skill.name}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>

			{/* CS Fundamentals */}
			<div className='w-full max-w-6xl mt-12'>
				<h2 className='text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent'>
					CS Fundamentals
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6'>
					{skills.csFundamentals.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.08, y: -6 }}
							className='group p-4 sm:p-6 flex flex-col items-center justify-center rounded-2xl shadow-xl transition-all duration-300 border border-muted-light dark:border-muted-dark hover:shadow-2xl hover:-translate-y-1 bg-white dark:bg-black'
						>
							<div
								className={`text-base sm:text-lg font-semibold tracking-wide ${
									colorMap[skill.name]
								}`}
							>
								{skill.name}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Frameworks and Libraries */}
			<div className='w-full max-w-6xl mt-12'>
				<h2 className='text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent'>
					Frameworks & Libraries
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6'>
					{skills.frameworksAndLibraries.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.08, y: -6 }}
							className='group p-4 sm:p-6 flex flex-col items-center justify-center rounded-2xl shadow-xl transition-all duration-300 border border-muted-light dark:border-muted-dark hover:shadow-2xl hover:-translate-y-1 bg-white dark:bg-black'
						>
							<div
								className={`text-4xl sm:text-5xl mb-2 sm:mb-3 drop-shadow-lg transition-transform duration-300 group-hover:scale-110 ${
									colorMap[skill.name]
								}`}
							>
								{skill.icon}
							</div>
							<div
								className={`text-base sm:text-lg font-semibold tracking-wide ${
									colorMap[skill.name]
								}`}
							>
								{skill.name}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Cloud and Databases */}
			<div className='w-full max-w-6xl mt-12'>
				<h2 className='text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent'>
					Cloud & Databases
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6'>
					{skills.cloudAndDatabases.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.08, y: -6 }}
							className='group p-4 sm:p-6 flex flex-col items-center justify-center rounded-2xl shadow-xl transition-all duration-300 border border-muted-light dark:border-muted-dark hover:shadow-2xl hover:-translate-y-1 bg-white dark:bg-black'
						>
							<div
								className={`text-4xl sm:text-5xl mb-2 sm:mb-3 drop-shadow-lg transition-transform duration-300 group-hover:scale-110 ${
									colorMap[skill.name]
								}`}
							>
								{skill.icon}
							</div>
							<div
								className={`text-base sm:text-lg font-semibold tracking-wide ${
									colorMap[skill.name]
								}`}
							>
								{skill.name}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Message Queues */}
			<div className='w-full max-w-6xl mt-12'>
				<h2 className='text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent'>
					Message Queues
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6'>
					{skills.messageQueues.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.08, y: -6 }}
							className='group p-4 sm:p-6 flex flex-col items-center justify-center rounded-2xl shadow-xl transition-all duration-300 border border-muted-light dark:border-muted-dark hover:shadow-2xl hover:-translate-y-1 bg-white dark:bg-black'
						>
							<div
								className={`text-4xl sm:text-5xl mb-2 sm:mb-3 drop-shadow-lg transition-transform duration-300 group-hover:scale-110 ${
									colorMap[skill.name]
								}`}
							>
								{skill.icon}
							</div>
							<div
								className={`text-base sm:text-lg font-semibold tracking-wide ${
									colorMap[skill.name]
								}`}
							>
								{skill.name}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Others */}
			<div className='w-full max-w-6xl mt-12'>
				<h2 className='text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent'>
					Others
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6'>
					{skills.others.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.08, y: -6 }}
							className='group p-4 sm:p-6 flex flex-col items-center justify-center rounded-2xl shadow-xl transition-all duration-300 border border-muted-light dark:border-muted-dark hover:shadow-2xl hover:-translate-y-1 bg-white dark:bg-black'
						>
							<div
								className={`text-4xl sm:text-5xl mb-2 sm:mb-3 drop-shadow-lg transition-transform duration-300 group-hover:scale-110 ${
									colorMap[skill.name]
								}`}
							>
								{skill.icon}
							</div>
							<div
								className={`text-base sm:text-lg font-semibold tracking-wide ${
									colorMap[skill.name]
								}`}
							>
								{skill.name}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default Skills;
