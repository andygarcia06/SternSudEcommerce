
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#051d40',
          50: '#e6eaf0',
          100: '#ccd5e1',
          200: '#99abc3',
          300: '#6681a5',
          400: '#335787',
          500: '#051d40',
          600: '#041733',
          700: '#031126',
          800: '#020c1a',
          900: '#01060d',
        },
        accent: {
          DEFAULT: '#bf934b',
          50: '#faf6ef',
          100: '#f5eddf',
          200: '#ebdbbf',
          300: '#e1c99f',
          400: '#d7b77f',
          500: '#bf934b',
          600: '#a67a3c',
          700: '#8c612d',
          800: '#73481e',
          900: '#59300f',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
