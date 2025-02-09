import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                yellow: {
                    DEFAULT: "#ffd500",
                    dark: "#ccaa00",
                    light: "#ffe066",
                },
                purple: {
                    DEFAULT: "#8c55fe",
                    dark: "#6e3dc7",
                    light: "#a97fff",
                },
                gray: {
                    DEFAULT: "#bdbdbd",
                    superdark: "#242A4D",
                    dark: "#7a7a7a",
                    light: "#e0e0e0",
                },
                red: {
                    DEFAULT: "#ff0000",
                    dark: "#ff4d4d",
                    light: "#cc0000",
                },
                blue: {
                    DEFAULT: "#161a2e",
                    dark: "#131627",
                    light: "#5584FE",
                },
                blackOpacity: {
                    DEFAULT: "#00000026",
                    light: "#0000001a",
                    dark: "#0000004d",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
