import { motion } from 'framer-motion';

export default function Footer() {
	return (
		<footer className='bg-background-light dark:bg-[#050505]/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 text-text-light dark:text-text-dark'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='flex flex-col md:flex-row justify-between items-center gap-8'>
					{/* Left Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='text-center md:text-left'
					>
						<h3 className='text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-2'>
							Arihant Jain
						</h3>
						<p className='text-muted-light dark:text-muted-dark text-sm sm:text-base max-w-xs md:max-w-md mx-auto md:mx-0'>
							<i>Full Stack Developer & Tech Enthusiast</i>
						</p>
					</motion.div>

					{/* Social Links */}
					<div className='flex flex-col items-center gap-8 md:gap-6 md:flex-row'>
						<div className='flex space-x-6'>
							{/* LinkedIn Icon */}
							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								href='https://linkedin.com/in/arihant416'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='LinkedIn'
								className='text-gray-400 hover:text-blue-300 transition-colors'
							>
								<span className='sr-only'>LinkedIn</span>
								<svg className='w-7 h-7' viewBox='0 0 24 24' aria-hidden='true'>
									<defs>
										<linearGradient
											id='linkedin-gradient'
											x1='0%'
											y1='0%'
											x2='100%'
											y2='100%'
										>
											<stop offset='0%' stopColor='#0A66C2' />
											<stop offset='100%' stopColor='#0A66C2' />
										</linearGradient>
									</defs>
									<path
										fill='url(#linkedin-gradient)'
										d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
									/>
								</svg>
							</motion.a>

							{/* GitHub Icon */}
							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								href='https://github.com/Arihant416'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='GitHub'
								className='text-gray-400 hover:text-purple-300 transition-colors'
							>
								<span className='sr-only'>GitHub</span>
								<svg className='w-7 h-7' viewBox='0 0 24 24' aria-hidden='true'>
									<defs>
										<linearGradient
											id='github-gradient'
											x1='0%'
											y1='0%'
											x2='100%'
											y2='100%'
										>
											<stop offset='0%' stopColor='#6e5494' />
											<stop offset='100%' stopColor='#c9510c' />
										</linearGradient>
									</defs>
									<path
										fill='url(#github-gradient)'
										fillRule='evenodd'
										d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
										clipRule='evenodd'
									/>
								</svg>
							</motion.a>

							{/* Twitter Icon */}
							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								href='https://x.com/Arihant2302'
								target='_blank'
								aria-label='Twitter'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-blue-300 transition-colors'
							>
								<span className='sr-only'>Twitter</span>
								<svg className='w-7 h-7' viewBox='0 0 24 24' aria-hidden='true'>
									<defs>
										<linearGradient
											id='twitter-gradient'
											x1='0%'
											y1='0%'
											x2='100%'
											y2='100%'
										>
											<stop offset='0%' stopColor='#1DA1F2' />
											<stop offset='100%' stopColor='#1DA1F2' />
										</linearGradient>
									</defs>
									<path
										fill='url(#twitter-gradient)'
										d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
									/>
								</svg>
							</motion.a>

							{/* Instagram Icon */}
							<motion.a
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								href='https://instagram.com/arihannnt'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
								className='text-gray-400 hover:text-pink-300 transition-colors'
							>
								<span className='sr-only'>Instagram</span>
								<svg className='w-7 h-7' viewBox='0 0 24 24' aria-hidden='true'>
									<defs>
										<linearGradient
											id='instagram-gradient'
											x1='0%'
											y1='0%'
											x2='100%'
											y2='100%'
										>
											<stop offset='0%' stopColor='#fdf497' />
											<stop offset='5%' stopColor='#fdf497' />
											<stop offset='45%' stopColor='#fd5949' />
											<stop offset='60%' stopColor='#d6249f' />
											<stop offset='90%' stopColor='#285AEB' />
										</linearGradient>
									</defs>
									<path
										fill='url(#instagram-gradient)'
										d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.688.072 4.947.072 3.26 0 3.667-.014 4.948-.072 4.358-.2 6.78-2.618 6.98-6.98.059-1.281.072-1.689.072-4.948 0-3.26-.014-3.667-.072-4.948-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 7.62c-2.317 0-4.199 1.883-4.199 4.199 0 2.316 1.883 4.199 4.199 4.199 2.316 0 4.199-1.883 4.199-4.199 0-2.316-1.883-4.199-4.199-4.199zm0 6.798c-1.493 0-2.699-1.205-2.699-2.699 0-1.493 1.205-2.699 2.699-2.699 1.493 0 2.699 1.205 2.699 2.699 0 1.494-1.205 2.699-2.699 2.699zm6.646-7.703c-.402 0-.73-.328-.73-.73 0-.402.328-.73.73-.73.402 0 .73.328.73.73 0 .402-.328.73-.73.73z'
									/>
								</svg>
							</motion.a>
						</div>
					</div>

					{/* Right Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='text-center mt-8 md:mt-0'
					>
						<p className='text-gray-400 text-sm'>
							&copy; {new Date().getFullYear()} Arihant Jain. All rights
							reserved.
						</p>
						<a
							href='https://arihant416.github.io/resume/index.pdf'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-block px-6 py-2 mt-4 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 rounded-full hover:bg-gradient-to-l hover:from-indigo-600 hover:via-purple-600 hover:to-indigo-700 transition-all duration-100 shadow-lg'
							style={{ fontFamily: "'Poppins', sans-serif", color: 'white' }}
						>
							View My Resume
						</a>
					</motion.div>
				</div>
			</div>
		</footer>
	);
}
