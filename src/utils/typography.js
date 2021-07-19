import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Exo 2",
      styles: ["400", "600"],
    },
    {
      name: "Karla",
      styles: ["400", "600"],
    },
  ],
  headerFontFamily: ["Exo 2", "sans-serif"],
  bodyFontFamily: ["Karla", "sans-serif"],
  headerColor: "#FBF5F3",
  bodyColor: "#FBF5F3",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 600,
  overrideStyles: () => ({
    a: {
      color: "#E63462",
      textDecoration: "none",
      transition: "all ease-in-out 250ms",
    },
    "a:hover,a:active": {
      color: "#E63462",
      textDecoration: "underline",
    },
  }),
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
