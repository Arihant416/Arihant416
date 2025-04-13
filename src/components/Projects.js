import { motion } from 'framer-motion';
import {
	FaLink,
	FaNode,
	FaReact,
	FaAws,
	FaDocker,
	FaPython,
	FaJava,
	FaGitAlt,
	FaJs,
	FaMicrosoft,
} from 'react-icons/fa';
import {
	SiMongodb,
	SiRedis,
	SiKubernetes,
	SiC,
	SiCplusplus,
	SiSelenium,
	SiCelery,
	SiFastapi,
	SiGunicorn,
	SiServerless,
	SiSqlite,
	SiDotnet,
	SiHtml5,
	SiCss3,
	SiNetlify,
} from 'react-icons/si';

const WorkExperience = () => {
	const workExperience = [
		{
			title: 'Senior Software Engineer',
			date: 'April 2024 - Present',
			company: 'Perfios, Delhi',
			companyLink: 'https://www.perfios.com/',
			description:
				'Driving innovation in distributed systems, microservices, and team collaboration.',
			highlights: [
				'Architected APIs handling 1M+ daily requests with 99.9% uptime and low latency.',
				'Optimized microservices to cut vendor costs by INR 4L/month.',
				'Enhanced security with OWASP-compliant controls and improved deployment efficiency.',
				'Mentored engineers and streamlined workflows to boost team productivity.',
			],
			techStack: [
				{ name: 'Docker', icon: FaDocker, color: 'text-blue-400' },
				{ name: 'AWS', icon: FaAws, color: 'text-orange-500' },
				{ name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
				{ name: 'Redis', icon: SiRedis, color: 'text-red-600' },
				{ name: 'Python', icon: FaPython, color: 'text-blue-400' },
				{ name: 'Serverless', icon: SiServerless, color: 'text-orange-500' },
				{ name: 'Selenium', icon: SiSelenium, color: 'text-green-500' },
				{ name: 'Celery', icon: SiCelery, color: 'text-green-500' },
				{ name: 'Fast API', icon: SiFastapi, color: 'text-blue-400' },
				{ name: 'Gunicorn', icon: SiGunicorn, color: 'text-green-500' },
				{ name: 'Java', icon: FaJava, color: 'text-red-500' },
				{ name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
				{ name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
			],
			current: true,
			color: 'border-blue-600', // Highlight current role with a border
		},
		{
			title: 'Software Engineer 1',
			date: 'October 2022 - April 2024',
			company: 'Karza, Remote',
			companyLink: 'https://www.perfios.com/',
			description:
				'Enhanced API performance, automated processes, and delivered robust payment systems.',
			highlights: [
				'Developed 30+ APIs for Total-KYC, integrating 300+ sources and reducing latency by 30%.',
				'Automated API logistics with cron jobs, improving billing accuracy and batch processing.',
				'Delivered a webhook-based payment system with DLQ failovers, achieving 95% success rate.',
				'Optimized database indexing to enhance query performance and reduce throttling.',
			],
			techStack: [
				{ name: 'Python', icon: FaPython, color: 'text-blue-400' },
				{ name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
				{ name: 'AWS', icon: FaAws, color: 'text-orange-500' },
				{ name: 'Redis', icon: SiRedis, color: 'text-red-600' },
				{ name: 'Serverless', icon: FaAws, color: 'text-orange-500' },
				{ name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
				{ name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
			],
			current: false,
			color: '', // No color for non-current roles
		},
		{
			title: 'Software Engineer',
			date: 'March 2021 - September 2022',
			company: 'InTimeTec, Jaipur',
			companyLink: 'https://www.intimeTec.com/',
			description:
				'Modernized legacy systems, led cross-functional teams, and enhanced user satisfaction.',
			highlights: [
				'Transformed a legacy .NET app into a modern Angular-based platform, improving load time by 40%.',
				'Led a team of 5 engineers across 9 modules, acting as the primary client point-of-contact.',
				'Implemented secure CI/CD pipelines with Azure Repos, reducing release cycles by 30%.',
				'Redesigned frontend workflows, doubling user satisfaction scores.',
			],
			techStack: [
				{ name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
				{ name: 'React', icon: FaReact, color: 'text-blue-300' },
				{ name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
				{ name: 'Angular', icon: FaJs, color: 'text-red-500' },
				{ name: 'Node.js', icon: FaNode, color: 'text-green-500' },
				{ name: 'Python', icon: FaPython, color: 'text-blue-400' },
				{ name: 'C', icon: SiC, color: 'text-blue-600' },
				{ name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
				{ name: 'Azure', icon: FaMicrosoft, color: 'text-blue-400' },
				{ name: 'SQLite', icon: SiSqlite, color: 'text-yellow-200' },
				{ name: 'C#', icon: SiDotnet, color: 'text-indigo-800' },
			],
			current: false,
			color: '', // No color for non-current roles
		},
	];
	const projects = [
		{
			name: 'GitDev Finder',
			description:
				'A platform for developers to explore and connect with open-source projects based on their skills.',
			liveLink: 'https://gitdevfinder416.netlify.app/',
			techStack: [
				{ name: 'React', icon: FaReact, color: 'text-blue-400' },
				{ name: 'Node.js', icon: FaNode, color: 'text-green-500' },
				{ name: 'MongoDB', icon: SiMongodb, color: 'text-green-300' },
				{ name: 'Netlify', icon: SiNetlify, color: 'text-pink-300' },
			],
		},
		{
			name: 'FXFlow',
			description:
				'FXFlow is a lightweight currency calculator that lets you quickly convert currencies across countries with real-time exchange rates.',
			liveLink: 'https://wild-iris-sing.glitch.me/',
			techStack: [
				{ name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
				{ name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
				{ name: 'CSS3', icon: SiCss3, color: 'text-green-300' },
			],
		},
		// Add more projects here if needed
	]; // keep your existing array here

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='min-h-screen w-full flex flex-col items-center px-4 sm:px-6 lg:px-16 py-16 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white'
		>
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='text-5xl sm:text-6xl font-bold text-center mb-14 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent'
			>
				Work Experience
			</motion.h1>

			<div className='w-full max-w-6xl flex flex-col gap-12'>
				{workExperience.map((job, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: index * 0.2 }}
						className={`rounded-2xl p-6 shadow-xl border transition-all bg-gray-800 hover:scale-[1.015] ${
							job.current ? 'border-blue-500' : 'border-gray-700'
						}`}
					>
						<a
							href={job.companyLink}
							target='_blank'
							rel='noopener noreferrer'
							className='text-xl font-semibold text-blue-400 hover:underline flex items-center gap-2'
						>
							{job.company}
							<FaLink className='text-blue-300' />
						</a>
						<h3 className='text-2xl font-bold bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent mt-2'>
							{job.title}
						</h3>
						<p className='text-sm text-gray-400 mt-1'>{job.date}</p>
						<p className='mt-4 text-gray-300'>{job.description}</p>

						<div className='mt-4 space-y-2'>
							{job.highlights.map((highlight, i) => (
								<div
									key={i}
									className='overflow-x-auto scrollbar-hide flex-shrink-0 text-sm text-gray-300 whitespace-nowrap'
								>
									<span className='text-blue-400 mr-2'>•</span>
									{highlight}
								</div>
							))}
						</div>

						<div className='mt-6 overflow-x-auto flex gap-3 scrollbar-hide'>
							{job.techStack.map((tech, idx) => {
								const Icon = tech.icon;
								return (
									<div
										key={idx}
										className='flex items-center gap-2 px-2 py-1 text-sm text-gray-300 whitespace-nowrap'
									>
										<Icon className={`${tech.color} text-lg`} />
										<span>{tech.name}</span>
									</div>
								);
							})}
						</div>
					</motion.div>
				))}
			</div>

			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className='text-4xl font-bold mt-24 mb-12 text-center bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent'
			>
				Projects
			</motion.h2>

			<div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
				{projects.map((project, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: index * 0.2 }}
						className='bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition-all'
					>
						<a
							href={project.liveLink}
							target='_blank'
							rel='noopener noreferrer'
							className='text-2xl font-semibold text-purple-300 hover:text-blue-400 flex items-center gap-2 mb-2'
						>
							{project.name}
							<FaLink className='text-emerald-400' />
						</a>
						<p className='text-base text-gray-300'>{project.description}</p>
						<div className='mt-4 flex flex-wrap gap-3'>
							{project.techStack.map((tech, idx) => {
								const Icon = tech.icon;
								return (
									<div
										key={idx}
										className='flex items-center gap-2 bg-gray-700 px-2 py-1 rounded-full text-sm'
									>
										<Icon className={`${tech.color} text-lg`} />
										<span className='text-gray-300'>{tech.name}</span>
									</div>
								);
							})}
						</div>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
};

export default WorkExperience;
