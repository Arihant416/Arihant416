import React, { useRef, useEffect } from 'react';

// Configurable particle settings
const PARTICLE_COUNT = 80;
const PARTICLE_COLOR = 'rgba(180,200,255,0.7)';
const PARTICLE_SIZE = 2.2;
const PARTICLE_SPEED = 0.4;

function randomBetween(a, b) {
	return a + Math.random() * (b - a);
}

function createParticle(width, height) {
	return {
		x: randomBetween(0, width),
		y: randomBetween(0, height),
		vx: randomBetween(-PARTICLE_SPEED, PARTICLE_SPEED),
		vy: randomBetween(-PARTICLE_SPEED, PARTICLE_SPEED),
		size: PARTICLE_SIZE + Math.random() * 1.5,
	};
}

export default function ParticlesBackground() {
	const canvasRef = useRef(null);
	const animationRef = useRef();
	const particlesRef = useRef([]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		let width = window.innerWidth;
		let height = window.innerHeight;
		canvas.width = width;
		canvas.height = height;

		// Create initial particles
		particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
			createParticle(width, height)
		);

		function draw() {
			ctx.clearRect(0, 0, width, height);
			for (const p of particlesRef.current) {
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
				ctx.fillStyle = PARTICLE_COLOR;
				ctx.shadowColor = PARTICLE_COLOR;
				ctx.shadowBlur = 8;
				ctx.fill();
				ctx.shadowBlur = 0;
			}
		}

		function update() {
			for (const p of particlesRef.current) {
				p.x += p.vx;
				p.y += p.vy;
				// Bounce off edges
				if (p.x < 0 || p.x > width) p.vx *= -1;
				if (p.y < 0 || p.y > height) p.vy *= -1;
			}
		}

		function animate() {
			update();
			draw();
			animationRef.current = requestAnimationFrame(animate);
		}
		animate();

		function handleResize() {
			width = window.innerWidth;
			height = window.innerHeight;
			canvas.width = width;
			canvas.height = height;
			// Recreate particles to fill new space
			particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () =>
				createParticle(width, height)
			);
		}
		window.addEventListener('resize', handleResize);

		return () => {
			cancelAnimationFrame(animationRef.current);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100vw',
				height: '100vh',
				zIndex: 0,
				pointerEvents: 'none',
				background: 'transparent',
			}}
			aria-hidden='true'
		/>
	);
}
