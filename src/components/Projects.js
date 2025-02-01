import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa'; // Importing link icon from react-icons

const workExperience = [
	{
		title: 'Senior Software Engineer',
		date: 'April 2024 - Present',
		company: 'Perfios, Delhi',
		companyLink: 'https://www.perfios.com/',
		description:
			'Leading the development of scalable and distributed APIs, mentoring engineers, and driving innovation in API optimization and security.',
		highlights: [
			'Architect distributed APIs to handle millions of daily requests with minimal latency.',
			'Develop microservices to optimize performance and reduce operational costs.',
			'Focus on improving security practices and compliance, addressing vulnerabilities and boosting metrics.',
			'Containerize APIs to improve deployment speed, minimize downtime, and enhance cold start performance.',
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
			'Worked on the Total-KYC product, optimizing APIs and automating processes to improve performance and user experience.',
		highlights: [
			'Developed APIs integrating data from hundreds of websites, optimizing response time and boosting usage.',
			'Automated internal processes like stats management and billing to enhance accuracy and reduce processing time.',
			'Streamlined payment transactions through a custom integration, automating daily payments and updates.',
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
			'Led the transition of a legacy application to a modern, scalable website while ensuring high performance and secure operations.',
		highlights: [
			'Successfully replaced a legacy .NET application with a highly flexible, scalable website.',
			'Led a team to develop and deploy a 9-module system, focusing on user satisfaction and operational flexibility.',
			'Improved deployment efficiency and security by introducing CI/CD pipelines and two-factor authentication.',
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
	},
	// Add more projects here if needed
];

const WorkExperience = () => (
	<motion.section
		initial={{ opacity: 0, y: -50 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 1, ease: 'easeOut' }}
		className='min-h-screen flex flex-col items-center justify-start text-center bg-gray-900 text-white px-4 sm:px-6 lg:px-10 pb-20 pt-10 overflow-auto'
	>
		{/* Work Experience Section (unchanged) */}
		<motion.h1
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='text-4xl sm:text-5xl font-semibold text-white mb-10'
		>
			Work Experience
		</motion.h1>
		<div className='w-full max-w-6xl'>
			{workExperience.map((job, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: index * 0.2, ease: 'easeOut' }}
					className={`p-6 mb-10 text-left rounded-lg shadow-md transition-all transform hover:scale-105 relative bg-gray-800 ${
						job.current ? 'border-l-4 border-blue-600' : ''
					}`}
				>
					{/* Work Experience Content (unchanged) */}
					<div className='relative'>
						<a
							href={job.companyLink}
							target='_blank'
							rel='noopener noreferrer'
							className='text-xl font-semibold text-blue-400 flex items-center space-x-2'
						>
							<span>{job.company}</span>
							<FaLink className='text-blue-400' />
						</a>
						<h3 className={`text-2xl font-medium text-white mt-4`}>
							{job.title}
						</h3>
						<p className='text-sm text-gray-400 mt-2'>{job.date}</p>
						<div className='mt-4 text-lg text-gray-300 lg:overflow-x-visible overflow-x-auto scrollbar-hide'>
							<p className='lg:whitespace-normal whitespace-nowrap'>
								{job.description}
							</p>
						</div>
						<ul className='mt-4 space-y-2 text-gray-300 list-none pl-0 lg:overflow-x-visible overflow-x-auto scrollbar-hide'>
							{job.highlights.map((highlight, index) => (
								<motion.li
									key={index}
									className='text-lg lg:whitespace-normal whitespace-nowrap'
								>
									<span className={`mr-2 text-white`}>•</span>
									<span className={`text-white`}>{highlight}</span>
								</motion.li>
							))}
						</ul>
					</div>
				</motion.div>
			))}
		</div>

		{/* Updated Projects Section */}
		<motion.h2
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='text-3xl sm:text-4xl text-white mt-20 mb-10'
		>
			Projects
		</motion.h2>
		<div className='w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
			{projects.map((project, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 1,
						delay: 0.3 + index * 0.2,
						ease: 'easeOut',
					}}
					className='p-6 bg-gray-800 text-center rounded-lg shadow-xl transition-all transform hover:scale-105'
				>
					{/* Project Name as a Link */}
					<a
						href={project.liveLink}
						target='_blank'
						rel='noopener noreferrer'
						className='text-2xl font-medium text-white hover:text-blue-400 transition-colors flex items-center justify-center gap-2'
					>
						<span>{project.name}</span>
						<FaLink className='text-blue-400' />
					</a>
					<p className='text-lg text-gray-300 mt-4 whitespace-normal'>
						{project.description}
					</p>
				</motion.div>
			))}
		</div>
	</motion.section>
);

export default WorkExperience;
