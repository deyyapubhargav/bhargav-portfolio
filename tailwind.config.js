/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#38bdf8",
                secondary: "#34d399",
                surface: "#0f172a",
            },
        },
    },
    plugins: [],
};
