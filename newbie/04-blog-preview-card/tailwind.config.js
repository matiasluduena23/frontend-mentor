/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./build/*.html'],
    theme: {
        extend: {
            fontFamily: {
                young: 'Young Serif',
                outfit: 'Outfit',
            },
            colors: {
                clRoseWhite: '#fff5fa',
                clEggshell: '#f3e6d8',
                clLightGrey: '#e4ded8',
                clWenge: '#5f574e',
                clDark: '#302d2c',
                clNutmag: '#854632',
                clRasberry: '#7b284f',
            },
        },
    },
    plugins: [],
};
