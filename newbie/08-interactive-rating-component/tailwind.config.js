/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/*.html'],
	theme: {
		extend: {
			fontFamily: {
				overpass: 'Overpass',
			},
			colors: {
				clOrange: 'hsl(25, 97%, 53%)',
				clMediumGrey: 'hsl(216, 12%, 54%)',
				clLightGrey: 'hsl(217, 12%, 63%)',
				clBlue: 'hsl(213, 19%, 18%)',
				clDark: 'hsl(216, 12%, 8%)',
			},
		},
	},
	plugins: [],
};
