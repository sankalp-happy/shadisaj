/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-main': '#f5f5dc',
        'background-card': '#ffffff',
        'text-primary': '#5c4033',
        'text-secondary': '#000000',
        'text-light': '#ffffff',
        'text-beige': '#f5f5dc',
        'brand-interactive': '#d4af37',
        'brand-primary': '#d31023',
        'brand-secondary': '#d4af37',
        'brand-logo': '#83242d',
        'utility-border': '#8b8000',
        'alternative-interactiveDark': '#b08d57',
        'alternative-interativeDark': '#b08d57',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        logo: ['Cinzel', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

