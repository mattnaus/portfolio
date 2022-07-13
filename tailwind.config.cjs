/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		},
		extend: {
			boxShadow: {
				'3xl': '0 35px 60px -15px rgba(15, 23, 42, 0.4)'
			}
		}
	},
	plugins: []
};
