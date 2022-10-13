/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		fontSize: {
			xs: '14px',
			sm: '16px',
			md: '18px',
			lg: '20px',
			xl: '24px',
			xxl: '32px',
		},
		colors: {
			transparent: 'transparent',
			
			black: '#000000',
			white: '#ffffff',

			gray: {
				900: '#121214',
				800: '#202024',
				400: '#7c7c8a',
				200: '#c4c4c6',
				100: '#e1e1e6',
			},

			cyan: {
				500: '#81d8f7',
				300: '#98e1f8',
			},
		},
		extend: {
			fontFamily: {
				sans: 'Inter, sans-serif',
			},
		},
	},
	plugins: [],
};
