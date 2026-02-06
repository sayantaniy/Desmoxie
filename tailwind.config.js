/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ["Comic Relief", "cursive"],
        corben: ["Corben", "serif"],
        crimson: ["Crimson Text", "serif"],
        dmserif: ["DM Serif Text", "serif"],
        forum: ["Forum", "serif"],
        geist: ["Geist", "sans-serif"],
        googlesans: ["Google Sans", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        instrumentsans: ["Instrument Sans", "sans-serif"],
        instrumentserif: ["Instrument Serif", "serif"],
        inter: ["Inter", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        lexend: ["Lexend", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
        patrick: ["Patrick Hand SC", "cursive"],
        playwrite: ["Playwrite US Trad Guides", "serif"],
        poppins: ["Poppins", "sans-serif"],
        radley: ["Radley", "serif"],
        rubik: ["Rubik", "sans-serif"],
        spacemono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
