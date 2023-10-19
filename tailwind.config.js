/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themePrimary: "#3f3a64",
        themeSecondary: "#20ad96",
        themeGray: "#385777",
        themeDarker: "#495057",
        themeLight: "#e8e8e8",
      },
    },
  },
  plugins: [],
};
