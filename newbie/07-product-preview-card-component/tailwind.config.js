/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/*.html'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: 'Montserrat',
				fraunces: 'Fraunces',
			},
			colors: {
				clCyan: 'hsl(158, 36%, 37%)',
				clCream: 'hsl(30, 38%, 92%)',
				clDarkBlue: 'hsl(212, 21%, 14%)',
				clDarkGrey: 'hsl(228, 12%, 48%)',
			},
		},
	},
	plugins: [],
};
