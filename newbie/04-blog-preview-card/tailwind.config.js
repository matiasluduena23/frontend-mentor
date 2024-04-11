/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./build/*.html'],
    theme: {
        extend: {
            fontFamily: {
                figtree: 'Figtree',
            },
            colors: {
                clYellow: '#f4d04e',
                clBlack: '#121212',
                clGrey: '#808080',
            },
            boxShadow: {
                '2xl': '8px 8px 0px 1px #121212',
            },
        },
    },
    plugins: [],
};
