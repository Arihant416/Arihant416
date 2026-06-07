import { LazyMotion, domAnimation, m } from 'framer-motion';

import Testimonials from './Testimonials';

const Home = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.section
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: 'easeOut' }}
				className='hero fade-in'
			>
				<div>
					<p className='hero-eyebrow'>Arihant Jain · New Delhi, India</p>
					<h1>
						Senior Software
						<br />
						<em>Engineer.</em>
					</h1>
					<p className='hero-sub'>Backend-focused engineer building distributed APIs, microservices, and cloud-native systems that scale to millions of requests a day.</p>
					<div className='hero-cta'>
						<a href='#experience' className='btn btn-primary'>View Work</a>
						<a href='#contact' className='btn btn-ghost'>Get in Touch</a>
					</div>
					{/* Testimonials */}
					<Testimonials />
				</div>
			</m.section>
		</LazyMotion>
	);
};

export default Home;
