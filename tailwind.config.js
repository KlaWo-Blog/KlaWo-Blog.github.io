const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require('tailwindcss/colors')

module.exports = {
    purge: ["./_includes/**/*.html", "./_layouts/**/*.html", "./blog/*.html", "./_posts/*.html", "./*.html"],
    darkMode: false,
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            orange: '#e9a881',
            amber: colors.amber
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            green: colors.emerald
        }
    },
    variants: {
        extend: {
            grayscale: ["hover", "focus"],
            margin: ["last"],
        },
        container: [],
    },
    plugins: [require("@tailwindcss/typography")],
};
