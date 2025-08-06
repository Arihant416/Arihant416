import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Contact = () => {
	// Handles form submission
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setMessage('');
		setError(false);

		const formData = {
			from_name: formRef.current.from_name.value,
			from_email: formRef.current.from_email.value,
			message: formRef.current.message.value,
		};

		try {
			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), 8500);

			const response = await fetch(
				'https://email-worker.arihantjain416.workers.dev',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData),
					signal: controller.signal,
				}
			);

			clearTimeout(timeoutId);

			// Handle both JSON and plain text responses
			let data;
			try {
				data = await response.json(); // Try parsing as JSON
			} catch (jsonError) {
				const text = await response.text(); // Fallback to plain text
				data = { message: text }; // Wrap plain text in an object
			}

			if (response.ok) {
				setMessage(data.message || 'Message sent successfully! 🎉');
				formRef.current.reset();
			} else {
				setMessage(
					data.error || 'Failed to send message. Please try again. 😢'
				);
				setError(true);
			}
		} catch (error) {
			if (error.name === 'AbortError') {
				setMessage('Request timed out. Please try again. ⏳');
			} else {
				setMessage('An error occurred. Please try again later.');
			}
			setError(true);
		}

		setIsSubmitting(false);
	};
	const formRef = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);
	// ...existing code...

	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark px-6 sm:px-10 py-16 transition-colors duration-500'
		>
			<div className='max-w-2xl w-full mx-auto relative'>
				<motion.h1
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className='text-5xl sm:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-primary-dark mb-6'
				>
					Let’s Connect
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
					className='text-lg sm:text-xl text-muted-light dark:text-muted-dark mb-8'
				>
					Have a question or want to work together? Drop me a message below!
				</motion.p>

				<form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-text-light dark:text-text-dark'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='from_name'
							required
							disabled={isSubmitting}
							className='mt-1 block w-full px-4 py-3 bg-background-light/80 dark:bg-background-dark/80 border border-muted-light dark:border-muted-dark rounded-lg text-text-light dark:text-text-dark placeholder-muted-light dark:placeholder-muted-dark focus:outline-none focus:ring-2 focus:ring-primary-light/50 dark:focus:ring-primary-dark/50 disabled:opacity-70 disabled:cursor-not-allowed transition-colors'
							placeholder='Your name'
						/>
					</div>

					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-text-light dark:text-text-dark'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='from_email'
							required
							disabled={isSubmitting}
							className='mt-1 block w-full px-4 py-3 bg-background-light/80 dark:bg-background-dark/80 border border-muted-light dark:border-muted-dark rounded-lg text-text-light dark:text-text-dark placeholder-muted-light dark:placeholder-muted-dark focus:outline-none focus:ring-2 focus:ring-primary-light/50 dark:focus:ring-primary-dark/50 disabled:opacity-70 disabled:cursor-not-allowed transition-colors'
							placeholder='Your email'
						/>
					</div>

					<div>
						<label
							htmlFor='message'
							className='block text-sm font-medium text-text-light dark:text-text-dark'
						>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							rows='5'
							required
							disabled={isSubmitting}
							className='mt-1 block w-full px-4 py-3 bg-background-light/80 dark:bg-background-dark/80 border border-muted-light dark:border-muted-dark rounded-lg text-text-light dark:text-text-dark placeholder-muted-light dark:placeholder-muted-dark focus:outline-none focus:ring-2 focus:ring-primary-light/50 dark:focus:ring-primary-dark/50 disabled:opacity-70 disabled:cursor-not-allowed transition-colors'
							placeholder='Your message'
						/>
					</div>

					<div className='space-y-4'>
						<button
							type='submit'
							disabled={isSubmitting}
							className='w-full px-6 py-3 bg-gradient-to-r from-primary-light to-primary-dark text-white rounded-lg shadow-lg hover:shadow-primary-light/30 dark:hover:shadow-primary-dark/30 transition-all duration-300 text-lg font-semibold hover:scale-105 flex justify-center items-center disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed'
						>
							{isSubmitting ? (
								<svg
									className='animate-spin h-5 w-5 text-white'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
								>
									<circle
										className='opacity-25'
										cx='12'
										cy='12'
										r='10'
										stroke='currentColor'
										strokeWidth='4'
									></circle>
									<path
										className='opacity-75'
										fill='currentColor'
										d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8H4z'
									></path>
								</svg>
							) : (
								'Send Message'
							)}
						</button>

						{message && (
							<motion.div
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className={`p-4 rounded-lg border shadow-md ${
									error
										? 'bg-red-100 dark:bg-red-900/60 border-red-400'
										: 'bg-green-100 dark:bg-green-900/60 border-green-400'
								}`}
							>
								<p
									className={`text-center font-semibold ${
										error
											? 'text-red-700 dark:text-red-200'
											: 'text-green-700 dark:text-green-200'
									}`}
								>
									{message}
								</p>
								{error && (
									<div className='mt-3 flex justify-center'>
										<button
											onClick={handleSubmit}
											className='text-sm px-4 py-2 rounded-md bg-red-200 dark:bg-red-800/40 text-red-800 dark:text-red-200 hover:bg-red-300 dark:hover:bg-red-800/60 transition-colors font-semibold'
										>
											Retry Send
										</button>
									</div>
								)}
							</motion.div>
						)}
					</div>
				</form>
			</div>
		</motion.section>
	);
};

export default Contact;
