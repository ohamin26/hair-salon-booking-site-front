/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['Pretendard'],
      },
      colors: {
        purple: {
          '100': '#9664ff',
          '200': '#7c3dff',
          '300': '#66638b6',
        },
        pink: {
          default: '#f3b7d2',
        },
        red: {
          default: '#ea6062',
        },
        orange: {
          default: '#ed724e',
        },
        yellow: {
          default: '#ffd960',
        },
        brown: {
          default: '#4e1909',
        },
        blue: {
          '100': '89baf9',
          '200': '5a62e5',
        },
        green: {
          '100': '#5eccae',
          '200': '#a0ead5',
        },
        white: {
          default: '#f8f4ff',
        },
        black: {
          '100': '#555',
          default: '#111',
        },
        gray: {
          '100': '#ddd',
          '200': '#ccc',
          '300': '#aaa',
          '400': '#888',
        },
      },
    },
  },
  plugins: [],
};
