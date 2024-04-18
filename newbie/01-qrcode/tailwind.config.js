/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/*.html'],
	theme: {
		extend: {
			fontFamily: {
				outfit: ['Outfit'],
			},
			colors: {
				cllightGray: '#d6e2f0',
				clGray: '#7b879d',
				clBlue: '#1f3251',
			},
		},
	},
	plugins: [],
};
