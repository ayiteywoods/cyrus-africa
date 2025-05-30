import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Fallback added
      },
      colors: {
        primary: '#4db848',
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Optional: if using forms
  ],
};

export default config;