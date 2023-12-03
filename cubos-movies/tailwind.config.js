/** @type {import('tailwindcss').Config} */
// import {background} from './src/assets/public-background.png'
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px)
      'md': '820px',
      // => @media (min-width: 768px)
      'lg': '1024px',
      // => @media (min-width: 1024px)
      'xl': '1280px',
      // => @media (min-width: 1280px)
      '2xl': '1536px',
      // => @media (min-width: 1536px)
    },
    colors: {
      purple: {
        purple1: "#fefcfe",
        purple2: "#fbf7fe",
        purple3: "#f7edfe",
        purple4: "#f2e2fc",
        purple5: "#ead5f9",
        purple6: "#e0c4f4",
        purple7: "#d1afec",
        purple8: "#be93e4",
        purple9: "#8e4ec6",
        purple10: "#8347b9",
        purple11: "#8145b5",
        purple12: "#402060",
      },
      purpleA: {
        purpleA1: "#aa00aa",
        purpleA2: "#8000e0",
        purpleA3: "#8e00f1",
        purpleA4: "#8d00e5",
        purpleA5: "#8000db",
        purpleA6: "#7a01d0",
        purpleA7: "#6d00c3",
        purpleA8: "#6600c0",
        purpleA9: "#5c00ad",
        purpleA10: "#53009e",
        purpleA11: "#52009a",
        purpleA12: "#250049",
      },
      purpleDark: {
        purple1: "#18111b",
        purple2: "#1e1523",
        purple3: "#301c3b",
        purple4: "#3d224e",
        purple5: "#48295c",
        purple6: "#54346b",
        purple7: "#664282",
        purple8: "#8457aa",
        purple9: "#8e4ec6",
        purple10: "#9a5cd0",
        purple11: "#d19dff",
        purple12: "#ecd9fa",
      },
      purpleDarkA: {
        purpleA1: "#b412f9",
        purpleA2: "#b744f7",
        purpleA3: "#c150ff",
        purpleA4: "#bb53fd",
        purpleA5: "#be5cfd",
        purpleA6: "#c16dfd",
        purpleA7: "#c378fd",
        purpleA8: "#c47eff",
        purpleA9: "#b661ff",
        purpleA10: "#bc6fff",
        purpleA11: "#d19dff",
        purpleA12: "#f1ddff",
      },
      mauveDark: {
        mauve1: "#121113",
        mauve2: "#1a191b",
        mauve3: "#232225",
        mauve4: "#2b292d",
        mauve5: "#323035",
        mauve6: "#3c393f",
        mauve7: "#49474e",
        mauve8: "#625f69",
        mauve9: "#6f6d78",
        mauve10: "#7c7a85",
        mauve11: "#b5b2bc",
        mauve12: "#eeeef0",
      },
      mauveDarkA: {
        mauveA1: "#000000",
        mauveA2: "#f5f4f6",
        mauveA3: "#ebeaf8",
        mauveA4: "#eee5f8",
        mauveA5: "#efe6fe",
        mauveA6: "#f1e6fd",
        mauveA7: "#eee9ff",
        mauveA8: "#eee7ff",
        mauveA9: "#eae6fd",
        mauveA10: "#ece9fd",
        mauveA11: "#f5f1ff",
        mauveA12: "#fdfdff",
      }
    },
    fonts: ["Roboto", "sans-serif"],
    fontSizes: {
      xsmall: "0.8rem",
      small: "1.0rem",
      medium: "1.5rem",
      large: "3rem",
      xlarge: "4.5rem",
    },
    fontWeights: {
      light: 100,
      normal: 300,
      bold: 500,
      xbold: 700
    }
  ,
    extend: {
      // backgroundImage: {'background' :"url('./src/assets/public-background.png')"}
    },
  },
  plugins: [],
}
