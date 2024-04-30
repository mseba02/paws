/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#020202',
                    input: '#767676',
                    select: '#f5f5f5'
                },
                secondary: {
                    DEFAULT: '#cccccc',
                    100: '#dddddd'
                },
            }
        },
        fontFamily: {
            primary: ['Roboto', 'sans-serif'],
        }
    },
    plugins: [],
};
