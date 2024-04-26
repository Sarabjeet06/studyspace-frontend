/** @type {import('postcss-load-config').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Junge', 'sans-serif'],
      },
    },
  },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
