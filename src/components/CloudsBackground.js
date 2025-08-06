import React from 'react';

// Simple SVG clouds background, theme-aware
export default function CloudsBackground() {
	// Use 100dvh for full viewport height, fallback to 100vh for compatibility
	// Use much lower opacity in dark mode, and stretch SVG vertically for long pages
	return (
		<svg
			aria-hidden='true'
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				minHeight: '100dvh',
				height: '100%',
				zIndex: 0,
				pointerEvents: 'none',
				opacity: 0.11,
				transition: 'opacity 0.4s',
			}}
			viewBox='0 0 1440 1800'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='select-none dark:opacity-40'
		>
			<g>
				<ellipse cx='300' cy='120' rx='160' ry='60' fill='#c7d2fe' />
				<ellipse cx='500' cy='180' rx='120' ry='50' fill='#e0e7ff' />
				<ellipse cx='900' cy='100' rx='180' ry='70' fill='#c7d2fe' />
				<ellipse cx='1200' cy='160' rx='140' ry='60' fill='#e0e7ff' />
				<ellipse cx='700' cy='220' rx='200' ry='80' fill='#c7d2fe' />
				{/* Lower clouds for long pages */}
				<ellipse cx='400' cy='800' rx='180' ry='70' fill='#c7d2fe' />
				<ellipse cx='1100' cy='900' rx='160' ry='60' fill='#e0e7ff' />
				<ellipse cx='800' cy='1200' rx='220' ry='90' fill='#c7d2fe' />
				<ellipse cx='300' cy='1500' rx='160' ry='60' fill='#e0e7ff' />
				<ellipse cx='1000' cy='1600' rx='200' ry='80' fill='#c7d2fe' />
			</g>
			<g className='dark:opacity-30'>
				<ellipse cx='400' cy='400' rx='180' ry='70' fill='#818cf8' />
				<ellipse cx='1100' cy='350' rx='160' ry='60' fill='#6366f1' />
				<ellipse cx='800' cy='500' rx='220' ry='90' fill='#818cf8' />
				{/* Lower clouds for long pages, darker in dark mode */}
				<ellipse cx='400' cy='1000' rx='180' ry='70' fill='#6366f1' />
				<ellipse cx='1100' cy='1300' rx='160' ry='60' fill='#818cf8' />
				<ellipse cx='800' cy='1700' rx='220' ry='90' fill='#6366f1' />
			</g>
		</svg>
	);
}
