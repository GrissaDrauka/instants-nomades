/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,ts}"
    ],
    theme: {
        extend: {
            colors: {
                sable: "#E9DCC7",
                terracotta: "#D4A276",
                beige: "#C6B09D",
                "brun-leger": "#A68C6D",
                "vert-sauge": "#6E7B58",
                blanc: "#ffffff",
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'serif'],
                display: ['Playfair Display', 'serif'],
                sans: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
// This Tailwind CSS configuration file extends the default theme with custom colors and font families.