/** @type {import('postcss-load-config').Config} */
const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
  },
  plugins: {
    tailwindcss: {},
  },
};

export default config;
