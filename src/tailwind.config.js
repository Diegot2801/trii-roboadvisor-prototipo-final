/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trii-dark-green': '#00190c', // Verde #1
        'trii-accent-green': '#02fb7e', // Verde #4
        'trii-medium-green': '#024c25', // Verde #3
        'trii-light-gray': '#f2f2f2', // Gris claro
        // Puedes agregar más colores de la paleta de Trii aquí
      },
      fontFamily: {
        'Formula_Condensed': ['"Formula Condensed"', 'sans-serif'], // Nombre de fuente personalizado
        'DM_Sans': ['"DM Sans"', 'sans-serif'], // Nombre de fuente personalizado
      },
    },
  },
  plugins: [],
}