/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto_mono: ["var(--font-[family-name:var(--font-roboto-mono)])"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)",
        line: "linear-gradient(180deg, rgba(252,255,128,1) 0%, rgba(252, 255, 128, 0) 100%)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
