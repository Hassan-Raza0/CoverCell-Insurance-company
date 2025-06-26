/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FBF5F0',
          100: '#F6E6D3',
          200: '#EDD5B7',
          300: '#E4C499',
          400: '#DEB37C',
          500: '#D69E2E', // Main gold
          600: '#B7791F',
          700: '#975A16',
          800: '#744312',
          900: '#553010',
        },
        dark: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568', // Main dark grey
          700: '#2D3748', // Darker grey
          800: '#1A202C',
          900: '#171923',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};