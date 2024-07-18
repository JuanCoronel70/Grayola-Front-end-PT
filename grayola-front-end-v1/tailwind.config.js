/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	darkMode: false,
  theme: {
		extend: {
      width: {
        '7/10': '55%',
        '3/10': '45%',
      },
    },
	},
  variants: {
    extend: {},
  },
	plugins: [],
};