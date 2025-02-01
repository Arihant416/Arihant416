import { motion } from 'framer-motion';
import { FaNode, FaAws, FaReact, FaAngular, FaJava } from 'react-icons/fa';
import {
	SiMongodb,
	SiServerless,
	SiRedis,
	SiCss3,
	SiCplusplus,
	SiSelenium,
	SiPandas,
	SiFastapi,
	SiMysql,
	SiRabbitmq,
	SiLinux,
	SiPython,
	SiJavascript,
	SiHtml5,
	SiAmazonsqs,
	SiScrapy,
	SiCelery,
	SiJira,
} from 'react-icons/si';

const Skills = () => {
	const skills = {
		programmingLanguages: [
			{ name: 'C++', icon: <SiCplusplus />, color: 'bg-blue-500' },
			{ name: 'Python', icon: <SiPython />, color: 'bg-blue-600' },
			{ name: 'JavaScript', icon: <SiJavascript />, color: 'bg-yellow-600' },
			{ name: 'Java (Basics)', icon: <FaJava />, color: 'bg-red-600' },
			{ name: 'HTML', icon: <SiHtml5 />, color: 'bg-orange-600' },
			{ name: 'CSS', icon: <SiCss3 />, color: 'bg-indigo-500' },
		],
		frameworksAndLibraries: [
			{ name: 'Angular', icon: <FaAngular />, color: 'bg-red-600' },
			{ name: 'React.js', icon: <FaReact />, color: 'bg-cyan-400' },
			{ name: 'Node.js', icon: <FaNode />, color: 'bg-green-600' },
			{ name: 'Serverless', icon: <SiServerless />, color: 'bg-blue-400' },
			{ name: 'Pandas', icon: <SiPandas />, color: 'bg-green-600' },
			{ name: 'Numpy', icon: <SiPandas />, color: 'bg-green-700' },
			{ name: 'FastAPI', icon: <SiFastapi />, color: 'bg-red-600' },
			{ name: 'Selenium', icon: <SiSelenium />, color: 'bg-yellow-600' },
		],
		cloudAndDatabases: [
			{
				name: 'AWS',
				icon: <FaAws />,
				color: 'bg-orange-500',
			},
			{ name: 'MongoDB', icon: <SiMongodb />, color: 'bg-green-600' },
			{ name: 'Redis', icon: <SiRedis />, color: 'bg-red-600' },
			{ name: 'MySQL', icon: <SiMysql />, color: 'bg-blue-500' },
		],
		messageQueues: [
			{ name: 'Amazon SQS', icon: <SiAmazonsqs />, color: 'bg-purple-500' },
			{ name: 'RabbitMQ', icon: <SiRabbitmq />, color: 'bg-gray-600' },
		],
		others: [
			{ name: 'Linux', icon: <SiLinux />, color: 'bg-green-500' },
			{ name: 'Celery', icon: <SiCelery />, color: 'bg-purple-600' },
			{ name: 'Agile', icon: <SiJira />, color: 'bg-yellow-500' },
			{ name: 'Web-Scraping', icon: <SiScrapy />, color: 'bg-red-700' },
		],
		csFundamentals: [
			{ name: 'OOPs', color: 'bg-gradient-to-r from-teal-400 to-teal-600' },
			{
				name: 'System Design',
				color: 'bg-gradient-to-r from-purple-400 to-purple-600',
			},
			{
				name: 'Data Structures',
				color: 'bg-gradient-to-r from-green-400 to-green-600',
			},
			{
				name: 'Algorithms',
				color: 'bg-gradient-to-r from-pink-400 to-pink-600',
			},
		],
	};

	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-10 pb-20 pt-10'
		>
			<motion.h1
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='text-4xl sm:text-5xl font-semibold text-white mb-6'
			>
				My Skills
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
				className='text-lg sm:text-xl text-gray-300 mb-10'
			>
				Here’s a list of the technologies I’ve worked with:
			</motion.p>

			{/* Programming Languages */}
			<div className='w-full max-w-6xl'>
				<h2 className='text-2xl sm:text-3xl text-white font-medium mb-6'>
					Programming Languages
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
					{skills.programmingLanguages.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							className={`p-4 sm:p-6 text-center rounded-lg shadow-xl transition-all transform hover:shadow-2xl ${skill.color}`}
						>
							<div className='text-3xl sm:text-4xl mb-3 sm:mb-4 text-white'>
								{skill.icon}
							</div>
							<div className='text-sm sm:text-lg font-medium'>{skill.name}</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* CS Fundamentals */}
			<div className='w-full max-w-6xl mt-10'>
				<h2 className='text-2xl sm:text-3xl text-white font-medium mb-6'>
					CS Fundamentals
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
					{skills.csFundamentals.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							className={`p-4 sm:p-6 text-center rounded-lg shadow-xl transition-all transform hover:shadow-2xl ${skill.color}`}
						>
							<div className='text-sm sm:text-lg font-medium text-white'>
								{skill.name}
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Frameworks and Libraries */}
			<div className='w-full max-w-6xl mt-10'>
				<h2 className='text-2xl sm:text-3xl text-white font-medium mb-6'>
					Frameworks and Libraries
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
					{skills.frameworksAndLibraries.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							className={`p-4 sm:p-6 text-center rounded-lg shadow-xl transition-all transform hover:shadow-2xl ${skill.color}`}
						>
							<div className='text-3xl sm:text-4xl mb-3 sm:mb-4 text-white'>
								{skill.icon}
							</div>
							<div className='text-sm sm:text-lg font-medium'>{skill.name}</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Cloud and Databases */}
			<div className='w-full max-w-6xl mt-10'>
				<h2 className='text-2xl sm:text-3xl text-white font-medium mb-6'>
					Cloud and Databases
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
					{skills.cloudAndDatabases.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							className={`p-4 sm:p-6 text-center rounded-lg shadow-xl transition-all transform hover:shadow-2xl ${skill.color}`}
						>
							<div className='text-3xl sm:text-4xl mb-3 sm:mb-4 text-white'>
								{skill.icon}
							</div>
							<div className='text-sm sm:text-lg font-medium'>{skill.name}</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Message Queues */}
			<div className='w-full max-w-6xl mt-10'>
				<h2 className='text-2xl sm:text-3xl text-white font-medium mb-6'>
					Message Queues
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
					{skills.messageQueues.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							className={`p-4 sm:p-6 text-center rounded-lg shadow-xl transition-all transform hover:shadow-2xl ${skill.color}`}
						>
							<div className='text-3xl sm:text-4xl mb-3 sm:mb-4 text-white'>
								{skill.icon}
							</div>
							<div className='text-sm sm:text-lg font-medium'>{skill.name}</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Others */}
			<div className='w-full max-w-6xl mt-10'>
				<h2 className='text-2xl sm:text-3xl text-white font-medium mb-6'>
					Others
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
					{skills.others.map((skill, index) => (
						<motion.div
							key={index}
							whileHover={{ scale: 1.05 }}
							className={`p-4 sm:p-6 text-center rounded-lg shadow-xl transition-all transform hover:shadow-2xl ${skill.color}`}
						>
							<div className='text-3xl sm:text-4xl mb-3 sm:mb-4 text-white'>
								{skill.icon}
							</div>
							<div className='text-sm sm:text-lg font-medium'>{skill.name}</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default Skills;
