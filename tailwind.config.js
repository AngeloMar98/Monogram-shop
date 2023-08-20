/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["*.{html,js,ts}"],
  important: false,
  theme: {
    extend: {
      backgroundImage: {},
      content: {},
    },
    fontWeight: {
      thin: 300,
      thinner: 400,
      bold: 500,
      bolder: 600,
    },
    spacing: {
      sm: `1.2rem`,
      m: `2.8rem`,
      x: `3.8rem`,
    },
    fontFamily: {
      prompt: "Prompt",
    },
    screens: {
      mobile: `380px`,
      laptop: `770px`,
      desktop: `990px`,
      wide_desktop: `1200px`,
    },
    colors: {
      /* primary */
      lightPink: `#efc2b3`,
      pink: `#ff8b68`,
      darkGray: `#c4c4c4`,
      gray: `#f0efed`,
      blue: `#1a2456`,
      darkBlue: `#080b1b`,
      /*light theme */
      lightM: {},
    },

    extend: {
      spacing: {},
      borderRadius: {},
    },
  },
};
