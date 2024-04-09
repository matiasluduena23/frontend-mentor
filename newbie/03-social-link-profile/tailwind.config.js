/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./build/*.html'],
    theme: {
        extend: {
            fontFamily: {
                inter: 'Inter',
            },
            colors: {
                clGreen: '#c5f82a',
                clGrey: '#333333',
                clDarkGrey: '#1f1f1f',
                clBlack: '#141414',
            },
        },
    },
    plugins: [],
};
