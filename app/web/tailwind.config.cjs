const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			scale: {
				102: '1.02'
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6419E6',
					secondary: '#D926A9',
					accent: '#1FB2A6',
					neutral: '#191D24',
					'base-100': '#dbeafe',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};

module.exports = config;
