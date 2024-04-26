import { colors } from "tailwindcss/colors";
/** @type {import('tailwindcss').Config} */

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  maxWidth: {
    "10rem": "10rem",
    "16rem": "16rem",
    128: "36rem",
    168: "42rem",
    178: "52rem",
    "76rem": "76rem",
    "86rem": "86rem",
  },
  minWidth: {
    80: "20rem",
  },
  minHeight: {
    "20rem": "20rem",
  },
  fontSize: {
    "super-tiny": ".6rem",
    tiny: ".8rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.3rem",
    "2xl": "1.5rem",
    "3xl": "2rem",
    "4xl": "2.5rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "7xl": "4.6rem",
    "8xl": "6rem",
    "9xl": "8rem",
    sxxl: "12rem",
    fulid: "7vw",
  },

  extend: {
    animation: {
      tilt: "tilt 6s infinite linear",
      tiltBtn: "tiltBtn 6s infinite linear",
    },
    keyframes: {
      tilt: {
        "0%, 50%, 100%": {
          transform: "rotate(0deg)",
          filter: "blur(60px) hue-rotate(0deg)",
        },
        "25%": {
          transform: "rotate(3.5deg)",
          filter: "blur(60px) hue-rotate(180deg)",
        },
        "75%": {
          transform: "rotate(-3.5deg)",
          filter: "blur(60px) hue-rotate(360deg)",
        },
      },
      tiltBtn: {
        "0%, 50%, 100%": {
          transform: "rotate(0deg)",
          filter: "blur(8px) hue-rotate(0deg)",
        },
        "25%": {
          transform: "rotate(0.6deg)",
          filter: "blur(8px) hue-rotate(180deg)",
        },
        "75%": {
          transform: "rotate(-0.6deg)",
          filter: "blur(8px) hue-rotate(360deg)",
        },
      },
    },

    transitionDelay: {
      350: "350ms",
      800: "800ms",
    },

    zIndex: {
      "nv-1": "-1",
      99999999: "99999999",
    },

    transitionTimingFunction: {
      bounce: "cubic-bezier(.8, .5, .2, 1.4)",
    },
    boxShadow: {
      activeShadow: "0 0 0 3px rgba(255,255,255, 0.3)",
    },
    opacity: {
      "op-primary-60": ".60",
      "op-secondary-30": ".30",
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      hero: "url('/backGround.png')",
    },
    fontFamily: {
      exo: ["Exo 2", "sans-serif"],
      space: ["Space Grotesk", "sans-serif"],
      clash: ["Anta", "sans-serif"],
      platiPy: ["Platypi", "serif"],
    },
  },
};
export const plugins = [];
