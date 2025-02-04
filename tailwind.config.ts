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
                black: {
                    DEFAULT: "#464646",
                },
                purple: {
                    DEFAULT: "#7351f5",
                    dark: "#4020c3",
                    light: "#b39fff",
                },
                gray: {
                    DEFAULT: "#ebebeb",
                    dark: "#333",
                    light: "#f2f2f2",
                },
                red: {
                    DEFAULT: "#ff4d4d",
                    dark: "#cc0000",
                    light: "#ff6666",
                },
                green: {
                    DEFAULT: "#00cc66",
                    dark: "#009933",
                    light: "#00ff99",
                },
                blue: {
                    DEFAULT: "#4da6ff",
                    dark: "#007acc",
                    light: "#66b3ff",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
