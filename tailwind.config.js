/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	content: [
		'./src/**/*.{js,jsx,ts,tsx}', // Include all JS/JSX/TS/TSX files in the src folder
		'./public/index.html', // Include your HTML file
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
