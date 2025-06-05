/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trii-dark-green': '#00190c', // Verde #1 del brandbook
        'trii-text-color': '#f2f2f2', // Gris claro/Blanco del brandbook
        'trii-accent-green': '#02fb7e', // Verde #4 brillante del brandbook
        'trii-medium-green': '#024c25', // Verde #3 intermedio del brandbook
        'trii-secondary-orange': '#fb5900', // Naranja de indicadores
        'trii-secondary-blue': '#6099f9', // Azul de Lives+Eventos
        'trii-secondary-purple': '#663cfb', // Morado de Educativo

        // Grises para la app, según la paleta de grises
        'trii-gray-900': '#000000',
        'trii-gray-800': '#191919',
        'trii-gray-700': '#262626',
        'trii-gray-600': '#333333',
        'trii-gray-500': '#4c4c4c',
        'trii-gray-400': '#666666',
        'trii-gray-300': '#818080',
        'trii-gray-200': '#979797',
        'trii-gray-100': '#b0b0b0',
      },
      fontFamily: {
        'Formula_Condensed': ['"Formula Condensed"', 'sans-serif'],
        'DM_Sans': ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}