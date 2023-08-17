/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            backgroundImage: {
                'background': 'url(./src/assets/mdjrqy.jpg)'
            }
        },
    },
    plugins: [],
}

