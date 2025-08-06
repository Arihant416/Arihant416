/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // Enable dark mode via class
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	safelist: [
		// Safelist all custom icon color classes for light and dark mode
		'text-skill-docker-light',
		'text-skill-docker-dark',
		'text-skill-aws-light',
		'text-skill-aws-dark',
		'text-skill-mongo-light',
		'text-skill-mongo-dark',
		'text-skill-redis-light',
		'text-skill-redis-dark',
		'text-skill-python-light',
		'text-skill-python-dark',
		'text-skill-serverless-light',
		'text-skill-serverless-dark',
		'text-skill-selenium-light',
		'text-skill-selenium-dark',
		'text-skill-celery-light',
		'text-skill-celery-dark',
		'text-skill-fastapi-light',
		'text-skill-fastapi-dark',
		'text-skill-gunicorn-light',
		'text-skill-gunicorn-dark',
		'text-skill-java-light',
		'text-skill-java-dark',
		'text-skill-git-light',
		'text-skill-git-dark',
		'text-skill-k8s-light',
		'text-skill-k8s-dark',
	],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Poppins', 'Montserrat', 'sans-serif'],
				body: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: {
					light: '#6366f1', // Indigo
					dark: '#6366f1',
				},
				secondary: {
					light: '#9333ea', // Purple
					dark: '#a78bfa',
				},
				accent: {
					light: '#22d3ee', // Cyan
					dark: '#06b6d4',
				},
				background: {
					light: '#f9fafb',
					dark: '#050505',
				},
				surface: {
					light: '#fff',
					dark: '#111111',
				},
				text: {
					light: '#181818', // much darker for light mode
					dark: '#fff', // pure white for dark mode
				},
				muted: {
					light: '#4b4b4b', // darker muted for light mode
					dark: '#e0e0e0', // lighter muted for dark mode
				},
				// Brand colors for tech badges
				tech: {
					cpp: '#00599C', // C++ blue
					python: '#3776AB',
					js: '#F7DF1E',
					java: '#E76F00',
					html: '#E34F26',
					css: '#1572B6',
					angular: '#DD0031',
					react: '#61DAFB',
					node: '#339933',
					serverless: '#FD5750',
					pandas: '#150458',
					numpy: '#4B8BBE',
					fastapi: '#009688',
					selenium: '#43B02A',
					aws: '#FF9900',
					mongo: '#47A248',
					redis: '#DC382D',
					mysql: '#00758F',
					sqs: '#F29111',
					rabbitmq: '#FF6600',
					linux: '#FCC624',
					celery: '#37814A',
					agile: '#0052CC',
					scrapy: '#E74C3C',
				},
			},
		},
	},
	plugins: [],
};
