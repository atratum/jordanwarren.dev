import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Source Serif Pro",
      styles: ["600"],
    },
    {
      name: "Source Sans Pro",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Source Serif Pro", "sans-serif"],
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  headerColor: "hsla(0,0%,10%,1)",
  bodyColor: "hsla(0,0%,10%,1)",
  headerWeight: 600,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: () => ({
    a: {
      color: "hsla(168,62%,36%,1)",
      textDecoration: "none",
      transition: "all ease-in-out 250ms",
    },
    "a:hover,a:active": {
      color: "hsla(168,49%,23%,1)",
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
