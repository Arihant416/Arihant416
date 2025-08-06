// theme.js
// Utility for toggling dark/light mode and getting current theme

export const getInitialTheme = () => {
	if (typeof window !== 'undefined' && window.localStorage) {
		const stored = window.localStorage.getItem('theme');
		if (stored === 'dark' || stored === 'light') return stored;
		// System preference
		if (window.matchMedia('(prefers-color-scheme: dark)').matches)
			return 'dark';
	}
	return 'light';
};

export const setTheme = (theme) => {
	if (theme === 'dark') {
		document.documentElement.classList.add('dark');
		window.localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.classList.remove('dark');
		window.localStorage.setItem('theme', 'light');
	}
};
