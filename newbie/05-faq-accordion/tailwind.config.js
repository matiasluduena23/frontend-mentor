/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./build/*.html'],
    theme: {
        extend: {
            fontFamily: {
                work: 'Work Sans',
            },
            colors: {
                clPink: '#f9f0ff',
                clpurple: '#8c6991',
                clDarkPurple: '#2f1533',
            },
            backgroundImage: {
                bgMobileImage: "url('../assets/background-pattern-mobile.svg')",
                bgDesktopImage:
                    "url('../assets/background-pattern-desktop.svg')",
            },
        },
    },
    plugins: [],
};
