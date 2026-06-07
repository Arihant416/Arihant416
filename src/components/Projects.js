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
import GoLogo from './GoLogo';

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
					icon: GoLogo,
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
			className='work-section'
		>
			<motion.h1 initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} className='section-title'>
				Work Experience
			</motion.h1>

			<div className='w-full max-w-6xl flex flex-col gap-8'>
				{workExperience.map((job, index) => (
					<div key={index} className={`card ${job.current ? 'current' : ''}`}>
						<a href={job.companyLink} target='_blank' rel='noopener noreferrer' className='job-company'>
							{job.company} <FaLink className='mono' />
						</a>
						<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 mb-1 gap-1'>
							<h3 className='job-title'>{job.title}</h3>
							<p className='job-meta'>{job.date}</p>
						</div>
						<p className='mt-1 job-desc'>{job.description}</p>
						<ul className='mt-3 space-y-1 text-left'>
							{job.highlights.map((highlight, i) => (
								<li key={i} className='flex items-start gap-2 text-sm sm:text-base'>
									<span className='mono'>•</span>
									<span>{highlight}</span>
								</li>
							))}
						</ul>
						<div className='mt-4 flex flex-wrap gap-2'>
							{job.techStack.map((tech, idx) => {
								const Icon = tech.icon;
								return (
									<div key={idx} className='chip'>
										{tech.name === 'Go' ? (
											<Icon className={`w-6 h-6`} />
										) : (
											<>
												<Icon className={`text-lg`} />
												<span className='mono'>{tech.name}</span>
											</>
										)}
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>

			<motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='section-title' style={{marginTop:'3rem'}}>
				Projects
			</motion.h2>

			<div className='w-full max-w-6xl flex flex-col gap-6 mt-10'>
				{projects.map((project, index) => (
					<div key={index} className='project-card'>
						<a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='job-title'>
							{project.name} <FaLink />
						</a>
						<p className='job-desc'>{project.description}</p>
						<div className='flex gap-2 mt-2 overflow-x-auto whitespace-nowrap no-scrollbar'>
							{project.techStack.map((tech, idx) => {
								const Icon = tech.icon;
								return (
									<div key={idx} className='chip'>
										<Icon className='text-lg' />
										<span className='mono' style={{marginLeft:6}}>{tech.name}</span>
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
