import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    scale: {
      '-100': '-1',
    },
  },
  fontFamily: {
    mont: ["Montserrat", "sans-serif",],
    petrona:[ 'Petrona', 'serif']
  },
};
export const darkMode = "class";
export const plugins = [nextui()];
