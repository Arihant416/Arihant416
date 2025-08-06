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
				{ name: 'Selenium', icon: SiSelenium, color: 'text-green-600' },
				{ name: 'Celery', icon: SiCelery, color: 'text-green-700' },
				{ name: 'Fast API', icon: SiFastapi, color: 'text-teal-500' },
				{ name: 'Gunicorn', icon: SiGunicorn, color: 'text-gray-700' },
				{ name: 'Java', icon: FaJava, color: 'text-orange-700' },
				{ name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
				{ name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
				{
					name: 'Go',
					icon: (props) => (
						<svg
							viewBox='0 0 48 48'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className={props.className}
							style={props.style}
						>
							<circle cx='24' cy='24' r='24' fill='#00ADD8' />
							<path
								d='M33.5 32c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5zm-19 0c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5zM24 12c-6.6 0-12 5.4-12 12 0 2.2.6 4.2 1.7 6h20.6c1.1-1.8 1.7-3.8 1.7-6 0-6.6-5.4-12-12-12zm0 2c5.5 0 10 4.5 10 10 0 1.7-.4 3.3-1.2 4.7-.2.3-.5.3-.7.1-.3-.2-.3-.5-.1-.7.7-1.2 1-2.6 1-4.1 0-5.5-4.5-10-10-10s-10 4.5-10 10c0 1.5.3 2.9 1 4.1.2.3.2.6-.1.7-.3.2-.6.2-.7-.1C14.4 27.3 14 25.7 14 24c0-5.5 4.5-10 10-10z'
								fill='#fff'
							/>
						</svg>
					),
					color: 'text-cyan-500',
				},
			],
			current: true,
			color: 'border-primary-light dark:border-primary-dark',
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
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
			className='min-h-screen w-full flex flex-col items-center px-2 sm:px-6 lg:px-16 py-12 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-500'
		>
			<motion.h1
				initial={{ opacity: 0, scale: 0.92 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className='text-5xl sm:text-6xl font-extrabold text-center mb-10 bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent drop-shadow-lg'
			>
				Work Experience
			</motion.h1>

			<div className='w-full max-w-6xl flex flex-col gap-8'>
				{workExperience.map((job, index) => (
					<div
						key={index}
						className={`rounded-xl border border-muted-light dark:border-muted-dark p-5 sm:p-7 bg-white/80 dark:bg-background-dark/80 ${
							job.current
								? 'border-primary-light dark:border-primary-dark shadow-2xl'
								: ''
						}`}
					>
						<a
							href={job.companyLink}
							target='_blank'
							rel='noopener noreferrer'
							className='text-lg sm:text-xl font-bold text-primary-light dark:text-primary-dark hover:underline flex items-center gap-2 mb-1'
						>
							{job.company}
							<FaLink className='text-indigo-300' />
						</a>
						<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 mb-1 gap-1'>
							<h3 className='text-lg sm:text-xl font-extrabold tracking-tight text-gray-900 dark:text-pink-300 transition-colors duration-300'>
								{job.title}
							</h3>
							<p className='text-sm sm:text-base font-bold text-indigo-600 dark:text-yellow-300 sm:mb-0 sm:ml-4 sm:text-right transition-colors duration-300'>
								{job.date}
							</p>
						</div>
						<p className='mt-1 text-base sm:text-lg font-bold text-text-light dark:text-text-dark leading-relaxed sm:leading-normal transition-colors duration-300'>
							{job.description}
						</p>
						<ul className='mt-3 space-y-1 text-left'>
							{job.highlights.map((highlight, i) => (
								<li
									key={i}
									className='flex items-start gap-2 text-sm sm:text-base font-semibold text-text-light dark:text-text-dark transition-colors duration-300'
								>
									<span className='text-primary-light dark:text-primary-dark mt-1'>
										•
									</span>
									<span>{highlight}</span>
								</li>
							))}
						</ul>
						<div className='mt-4 flex flex-wrap gap-2'>
							{job.techStack.map((tech, idx) => {
								const Icon = tech.icon;
								return (
									<div
										key={idx}
										className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-gray-200 dark:border-gray-700 ${tech.color} bg-white/80 dark:bg-background-dark/80 hover:shadow-lg transition-all duration-200`}
										style={{ boxShadow: '0 2px 8px 0 rgba(80,80,180,0.10)' }}
									>
										<Icon className={`text-lg ${tech.color}`} />
										<span className='hidden sm:inline'>{tech.name}</span>
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>

			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className='text-4xl font-extrabold mt-24 mb-10 text-center bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent drop-shadow-lg'
			>
				Projects
			</motion.h2>

			<div className='w-full max-w-6xl flex flex-col gap-6 mt-10'>
				{projects.map((project, index) => (
					<div
						key={index}
						className='rounded-xl border border-muted-light dark:border-muted-dark p-4 sm:p-5 bg-white/90 dark:bg-background-dark/90 shadow-sm'
					>
						<a
							href={project.liveLink}
							target='_blank'
							rel='noopener noreferrer'
							className='text-lg sm:text-2xl font-bold text-orange-500 dark:text-orange-300 hover:underline flex items-center gap-2 mb-1'
						>
							{project.name}
							<FaLink className='text-emerald-400' />
						</a>
						<p className='text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-3'>
							{project.description}
						</p>
						<div className='flex gap-2 mt-2 overflow-x-auto whitespace-nowrap no-scrollbar'>
							{project.techStack.map((tech, idx) => {
								const Icon = tech.icon;
								return (
									<div
										key={idx}
										className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold shadow-md border border-gray-200 dark:border-gray-700 ${tech.color} bg-white/80 dark:bg-background-dark/80 hover:shadow-lg transition-all duration-200`}
										style={{ boxShadow: '0 2px 8px 0 rgba(80,80,180,0.10)' }}
									>
										<Icon className='text-lg' />
										<span className='hidden sm:inline'>{tech.name}</span>
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</motion.section>
	);
};

export default WorkExperience;
