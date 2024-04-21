/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./build/*.html'],
	theme: {
		extend: {
			fontFamily: {
				hanken: 'Hanken Grotesk',
			},
			colors: {
				clRed: '#ff5757',
				clOrange: '#ffb01f',
				clGreen: '#00bd91',
				clBlue: '#1125d4',
				clGradientBlue: '#7857ff',
				clGradientBlueDark: '#2e2be9',
				clGradientViolet: 'hsla(256, 72%, 46%, 1)',
				clGradientVioletDark: 'hsla(241, 72%, 46%, 0)',
				clPaleBlue: 'hsl(221, 100%, 96%)',
				cllavender: 'hsl(241, 100%, 89%)',
				clGrayBlue: 'hsl(224, 30%, 27%)',
			},
		},
	},
	plugins: [],
};
