import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const testimonials = [
	{
		name: 'Nikhil Vaswani',
		testimonial:
			'Me and Arihant worked in one organisation for over an year. Arihant has very great knowledge of almost every aspect of Software Development. He is very well versed with front end platforms like react and Angular & same for BE stuff using python. He is not only a friend of mine but also mentored me & helped a lot during my job search. He is the one I used to discuss a lot of Software things.',
		linkedin: 'https://www.linkedin.com/in/nikhilvaswani1',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=John%20Doe',
	},
	{
		name: 'Punit Agarwal',
		testimonial:
			"I had the pleasure of working closely with Arihant at IntimeTec. He consistently demonstrated professionalism, expertise, and leadership. Arihant excels at managing complex projects, delivering outstanding results, and fostering a collaborative work environment.\n His deep technical knowledge and mentoring skills ensure team success. Arihant's strategic thinking and innovative approach have been crucial to our achievements.",
		linkedin: 'https://www.linkedin.com/in/punitagarwal001',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Jane%20Smith',
	},
	{
		name: 'Sanket Kamta',
		testimonial:
			'I highly recommend Arihant Jain as an exceptional Python Developer with advanced expertise in AWS. His technical skills are top-notch, consistently delivering efficient and innovative solutions. Arihant is a fantastic team player, always communicating effectively and contributing positively to group dynamics. His eagerness to learn and explore new technologies further amplifies his value, driving both personal and team success. Arihant’s dedication and enthusiasm make him an invaluable asset to any project.',
		linkedin: 'https://www.linkedin.com/in/sanketkamta',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Michael%20Brown',
	},
	{
		name: 'Shantanu Sharma',
		testimonial:
			"Arihant is a hard-working individual, always keen to take on challenges and never shies away from experimental learning. His energy reflects on the team, and he literally lives up to the phrase 'Work hard, Play hard!'. It has always been great working with him, and I am sure he is going to be an asset to whichever team he joins.",
		linkedin: 'https://www.linkedin.com/in/shantanusharma95',
		avatarUrl: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Emily%20Davis',
	},
];

const Testimonials = () => {
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
					className='testimonial-swiper'
				>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<div className='max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg text-white md:max-w-2xl lg:max-w-4xl'>
								<div className='flex items-center mb-4 space-x-4'>
									<img
										src={testimonial.avatarUrl}
										alt={testimonial.name}
										className='w-12 h-12 rounded-full border border-gray-600'
									/>
									<p className='text-base sm:text-lg font-bold'>
										{testimonial.name}
									</p>
								</div>
								<p className='text-sm sm:text-base md:text-sm lg:text-base'>
									{testimonial.testimonial}
								</p>
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
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
