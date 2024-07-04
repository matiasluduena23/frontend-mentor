/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/*.html'],
	theme: {
		extend: {
			fontFamily: {
				outfit: 'Outfit',
			},
			colors: {
				clSoftBlue: 'hsl(215, 51%, 70%)',
				clCyan: 'hsl(178, 100%, 50%)',
				clDarkBlue: 'hsl(217, 54%, 11%)',
				clVeryDarkBlue: 'hsl(216, 50%, 16%)',
				clLime: 'hsl(215, 32%, 27%)',
				clDark: '#302d2c',
			},
		},
	},
	plugins: [],
};
