/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'medium-loose': '1.8'
      },
      cursor: {},
      fontFamily: {
        // 'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
        bebas: ["Bebas Neue", "cursive"],
        nato: ["Noto Sans JP", "sans-serif"],
        "ProtoMono-Light": [
          "ProtoMono-Light",
          "Helvetica",
          "Arial",
          "Sans-Serif",
        ],
        "ProtoMono-LightShadow": [
          "ProtoMono-LightShadow",
          "Helvetica",
          "Arial",
          "Sans-Serif",
        ],
        "ProtoMono-SemiBold": [
          "ProtoMono-SemiBold",
          "Helvetica",
          "Arial",
          "Sans-Serif",
        ],
        "ProtoMono-SemiBoldShadow": [
          "ProtoMono-SemiBoldShadow",
          "Helvetica",
          "Arial",
          "Sans-Serif",
        ],
        "Do-Hyeon": ["Do-Hyeon", "Helvetica", "Arial", "Sans-Serif"],
      },
      keyframes: {},
    },

    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      xl2: "1.563rem",
      xl3: "1.953rem",
      xl4: "2.441rem",
      xl5: "3.052rem",
    },
    // fontSize: {
    //   // sm: ["14px", "20px"],
    //   // base: ["16px", "24px"],
    //   // lg: ["20px", "28px"],
    //   // xl: ["24px", "32px"],
    // },
  },
  plugins: [],
};
