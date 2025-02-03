import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Contact = () => {
	const formRef = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [message, setMessage] = useState('');
	const [error, setError] = useState(false);

	// Handle browser/tab closure attempts during submission
	useEffect(() => {
		const handleBeforeUnload = (e) => {
			if (isSubmitting) {
				e.preventDefault();
				e.returnValue =
					'Your message is being sent. Are you sure you want to leave?';
			}
		};

		window.addEventListener('beforeunload', handleBeforeUnload);
		return () => window.removeEventListener('beforeunload', handleBeforeUnload);
	}, [isSubmitting]);

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
			const timeoutId = setTimeout(() => controller.abort(), 5000);

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

	return (
		<motion.section
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1, ease: 'easeOut' }}
			className='flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 sm:px-10 py-12'
		>
			<div className='max-w-2xl w-full mx-auto relative'>
				<motion.h1
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: 'easeOut' }}
					className='text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6'
				>
					Let's Connect
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
					className='text-lg sm:text-xl text-gray-300 mb-8'
				>
					Have a question or want to work together? Drop me a message below!
				</motion.p>

				<form ref={formRef} onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label
							htmlFor='name'
							className='block text-sm font-medium text-gray-300'
						>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='from_name'
							required
							disabled={isSubmitting}
							className='mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors'
							placeholder='Your name'
						/>
					</div>

					<div>
						<label
							htmlFor='email'
							className='block text-sm font-medium text-gray-300'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='from_email'
							required
							disabled={isSubmitting}
							className='mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors'
							placeholder='Your email'
						/>
					</div>

					<div>
						<label
							htmlFor='message'
							className='block text-sm font-medium text-gray-300'
						>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							rows='5'
							required
							disabled={isSubmitting}
							className='mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed transition-colors'
							placeholder='Your message'
						/>
					</div>

					<div className='space-y-4'>
						<button
							type='submit'
							disabled={isSubmitting}
							className='w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-lg font-semibold hover:scale-105 flex justify-center items-center disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed'
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
								className={`p-4 rounded-lg border ${
									error
										? 'bg-red-900/30 border-red-400'
										: 'bg-green-900/30 border-green-400'
								}`}
							>
								<p
									className={`text-center ${
										error ? 'text-red-300' : 'text-green-300'
									}`}
								>
									{message}
								</p>
								{error && (
									<div className='mt-3 flex justify-center'>
										<button
											onClick={handleSubmit}
											className='text-sm px-4 py-2 rounded-md bg-red-800/30 text-red-300 hover:bg-red-800/40 transition-colors'
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
