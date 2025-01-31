// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '100rem',  
      },
      screens: {
        '3xl': '1920px',
      },
      colors: {
        primary: {"50":"#fef2f2","100":"#fee2e2","200":"#fecaca","300":"#fca5a5","400":"#f87171","500":"#b0003a","600":"#b0003a","700":"#b0003a","800":"#991b1b","900":"#7f1d1d"},
        dark: '#0f172a',
        light: '#f8fafc'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        handwriting: ['"Dancing Script"', 'cursive']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'rotate-slow': 'rotate 40s linear infinite',
        "marquee": 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
    container: {
      center: true,     // Permet de centrer automatiquement
      padding: '1rem',  // Ajoute du padding horizontal
      screens: {
        // Tu ajustes ces largeurs de breakpoint pour le container
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1836px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
