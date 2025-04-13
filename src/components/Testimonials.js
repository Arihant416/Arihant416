import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const testimonials = [
	{
		name: 'Nikhil Vaswani',
		testimonial:
			'Me and Arihant worked in one organisation for over an year. Arihant has very great knowledge of almost every aspect of Software Development. He is very well versed with front end platforms like React and Angular & same for BE stuff using Python. He is not only a friend of mine but also mentored me & helped a lot during my job search. He is the one I used to discuss a lot of Software things.',
		linkedin: 'https://www.linkedin.com/in/nikhilvaswani1',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=NikhilVaswani',
	},
	{
		name: 'Punit Agarwal',
		testimonial:
			"I had the pleasure of working closely with Arihant at IntimeTec. He consistently demonstrated professionalism, expertise, and leadership. Arihant excels at managing complex projects, delivering outstanding results, and fostering a collaborative work environment.\n His deep technical knowledge and mentoring skills ensure team success. Arihant's strategic thinking and innovative approach have been crucial to our achievements.",
		linkedin: 'https://www.linkedin.com/in/punitagarwal001',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=PunitAgarwal',
	},
	{
		name: 'Sanket Kamta',
		testimonial:
			'I highly recommend Arihant Jain as an exceptional Python Developer with advanced expertise in AWS. His technical skills are top-notch, consistently delivering efficient and innovative solutions. Arihant is a fantastic team player, always communicating effectively and contributing positively to group dynamics. His eagerness to learn and explore new technologies further amplifies his value, driving both personal and team success. Arihant’s dedication and enthusiasm make him an invaluable asset to any project.',
		linkedin: 'https://www.linkedin.com/in/sanketkamta',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=SanketKamta',
	},
	{
		name: 'Shantanu Sharma',
		testimonial:
			"Arihant is a hard-working individual, always keen to take on challenges and never shies away from experimental learning. His energy reflects on the team, and he literally lives up to the phrase 'Work hard, Play hard!'. It has always been great working with him, and I am sure he is going to be an asset to whichever team he joins.",
		linkedin: 'https://www.linkedin.com/in/shantanusharma95',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=ShantanuSharma',
	},
	{
		name: 'Ashish Maheshwari',
		testimonial:
			'I highly recommend Arihant for their exceptional teamwork, solid work ethics, and collaborative spirit. Their dedication to being a team player has significantly contributed to the success of our project. Additionally, Arihant possesses excellent proficiency in the project, showcasing their technical expertise. His will to learn new things is always something which we admire. His positive attitude and commitment make him a valuable asset to any team.',
		linkedin: 'https://www.linkedin.com/in/ashish-maheshwari0145',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=AshishMaheshwari',
	},
	{
		name: 'Ashish Layek',
		testimonial:
			'I worked with Arihant for more than 2 years. His dedication towards work is commendable. I admire his problem solving ability and finding elegant solutions for complex issues.',
		linkedin: 'https://www.linkedin.com/in/ashish-layek-a8372a169',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=AshishLayek',
	},
	{
		name: 'Yash Chauhan',
		testimonial:
			'Arihant is an excellent resource, and a master at Javascript technology (MEAN), he has been a real gem to our clients and contacts. He took a project single-handedly and from ideation to deployment he makes sure all the deadlines meet and that also with the highest standards. He is a hardworking and dedicated person who will complete your project in a given time frame. I would recommend and endorse Arihant.',
		linkedin: 'https://www.linkedin.com/in/yash1199',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=YashChauhan',
	},
	{
		name: 'Abhijeet Sharma',
		testimonial:
			'Arihant is one of the best technical persons i have met, has great problem solving skills along with the knowledge in different frameworks and different languages. I reached out to Arihant, when I want to discuss technical debts. I recommend Arihant as a Full stack developer and would love to work together again',
		linkedin: 'https://www.linkedin.com/in/abhijeet-sharma-b51bb1167',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=AbhijeetSharma',
	},
	{
		name: 'Vaibhav Jaiswal',
		testimonial:
			'Arihant and I got to work closely with each other. He is a very fine engineer who thinks out of the box and brings enthusiasm to the team. He is visionary and always works on self improvement. He has great problem solving skills. I find him the most dependable person when I need to discuss something.',
		linkedin: 'https://www.linkedin.com/in/vaibhav-jaiswal-2388a2157',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=VaibhavJaiswal',
	},
];

const TestimonialCard = ({
	testimonial,
	isExpanded,
	toggleExpand,
	observeRef,
}) => {
	return (
		<div
			ref={observeRef}
			// Glassmorphism / Neumorphism styling: translucent bg, blur, rounded corners and subtle shadow
			className='max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white transition-all duration-300 ease-in-out'
		>
			<div className='flex items-center mb-4 space-x-4'>
				<img
					src={testimonial.avatarUrl}
					alt={testimonial.name}
					className='w-12 h-12 rounded-full border border-gray-600 hover:scale-110 transition-transform duration-300 ease-in-out'
				/>
				<p className='text-base sm:text-lg font-bold'>{testimonial.name}</p>
			</div>
			{/* Testimonial text animates its height */}
			<p
				className={`text-sm sm:text-base md:text-sm lg:text-base leading-relaxed transition-all duration-300 ease-in-out ${
					isExpanded ? 'max-h-full' : 'max-h-24 overflow-hidden'
				}`}
			>
				{isExpanded
					? testimonial.testimonial
					: `${testimonial.testimonial.substring(0, 200)}...`}
			</p>
			{/* "View More" link */}
			{!isExpanded && (
				<a
					href='#'
					onClick={(e) => {
						e.preventDefault();
						toggleExpand();
					}}
					className='text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base mt-2 inline-block'
				>
					View More
				</a>
			)}
			<a
				href={testimonial.linkedin}
				target='_blank'
				rel='noopener noreferrer'
				className='text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base flex justify-center items-center mt-2'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='currentColor'
					viewBox='0 0 24 24'
					className='w-5 h-5 mr-1'
				>
					<path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.155 1.459-2.155 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.039 0 3.6 2.001 3.6 4.604v5.588z' />
				</svg>
			</a>
		</div>
	);
};

const Testimonials = () => {
	const [expandedIndex, setExpandedIndex] = useState(null);
	const refs = useRef([]);

	// Use IntersectionObserver to detect when the testimonial card is completely out of view.
	const observeVisibility = useCallback(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = parseInt(entry.target.dataset.index, 10);
					if (
						index === expandedIndex &&
						!entry.isIntersecting &&
						entry.intersectionRatio === 0
					) {
						setExpandedIndex(null);
					}
				});
			},
			{ root: null, rootMargin: '0px', threshold: 0 }
		);

		refs.current.forEach((el) => el && observer.observe(el));

		return () => observer.disconnect();
	}, [expandedIndex]);

	useEffect(() => {
		const disconnect = observeVisibility();
		return () => disconnect();
	}, [observeVisibility]);

	const toggleExpand = (index) => {
		setExpandedIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section className='py-16 overflow-hidden'>
			<div className='max-w-3xl mx-auto text-center'>
				<h2 className='text-xl sm:text-2xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 font-mono'>
					Recommendations
				</h2>
				<Swiper
					loop
					spaceBetween={20}
					slidesPerView={1}
					centeredSlides
					modules={[Navigation]}
					className='testimonial-swiper'
				>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<TestimonialCard
								testimonial={testimonial}
								isExpanded={expandedIndex === index}
								toggleExpand={() => toggleExpand(index)}
								observeRef={(el) => {
									refs.current[index] = el;
									if (el) el.dataset.index = index;
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
