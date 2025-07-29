/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Le decimos que busque clases en todos estos archivos dentro de src
  ],
  theme: {
    extend: {
      colors: {
        // Podemos definir colores personalizados para usar en el proyecto
        cyan: {
          100: '#E0FFFF',
          200: '#B3FDFF',
          300: '#85F8FF',
          400: '#57F3FF',
          500: '#00faff', // Nuestro cian principal
          600: '#00c8d1',
          700: '#009699',
          800: '#006466',
          900: '#003233',
          950: '#0A0F1A', // Un azul muy oscuro para fondos
        }
      },
      fontFamily: {
        // Si quieres usar una fuente específica, la defines aquí
        sans: ['Inter', 'sans-serif'], // Ejemplo con la fuente Inter
      }
    },
  },
  plugins: [],
}