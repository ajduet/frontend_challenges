/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontSize: {
				"4xl": ["2.5rem", "3.5rem"],
			},
			backgroundImage: {
				blgr_hero_desktop:
					"url('blogr-landing-page/images/bg-pattern-intro-desktop.svg'),linear-gradient(to right,hsl(13, 100%, 72%),hsl(353, 100%, 62%))",
				blgr_hero_mobile:
					"url('blogr-landing-page/images/bg-pattern-intro-mobile.svg'),linear-gradient(to right,hsl(13, 100%, 72%),hsl(353, 100%, 62%))",
				blgr_body_gradient:
					"url('blogr-landing-page/images/bg-pattern-circles.svg'),linear-gradient(to bottom, hsl(237,17%,21%), hsl(237,23%,32%))",
			},
			fontFamily: {
				fraunces: ["Fraunces", "serif"],
				montserrat: ["Montserrat", "sans-serif"],
				overpass: ["Overpass", "sans-serif"],
				"space-grotesk": ["Space Grotesk", "sans-serif"],
				karla: ["Karla", "sans-serif"],
				ubuntu: ["Ubuntu", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				orange: "hsl(25, 97%, 53%)",
				white: "hsl(0, 0%, 100%)",
				"light-grey": "hsl(217, 12%, 63%)",
				"medium-grey": "hsl(216, 12%, 54%)",
				"dark-blue": "hsl(213, 19%, 18%)",
				"very-dark-blue": "hsl(216, 12%, 8%)",
				"light-purple": "hsl(249, 99%, 64%)",
				"medium-purple": "hsl(278, 94%, 30%)",
				"light-grayish-violet": "hsl(270, 3%, 87%)",
				"dark-grayish-violet": "hsl(279, 6%, 55%)",
				"very-dark-violet": "hsl(278, 68%, 11%)",
				"error-red": "hsl(0, 100%, 66%)",
				"spg-cyan": "hsl(179, 62%, 43%)",
				"spg-light-cyan": "hsl(167, 68%, 47%)",
				"spg-bright-yellow": "hsl(71, 73%, 54%)",
				"spg-light-grey": "hsl(0, 0%, 98%)",
				"spg-grayish-blue": "hsl(218, 22%, 67%)",
				"blgr-light-red": "hsl(356, 100%, 55%)",
				"blgr-very-light-red": "hsl(355, 100%, 74%)",
				"blgr-very-dark-blue": "hsl(208, 49%, 24%)",
				"blgr-grayish-blue": "hsl(240, 2%, 79%)",
				"blgr-very-dark-grayish-blue": "hsl(207, 13%, 34%)",
				"blgr-very-dark-black-blue": "hsl(240, 10%, 16%)",
				"blgr-gr-very-light-red": "hsl(13, 100%, 72%)",
				"blgr-gr-light-red": "hsl(353, 100%, 62%)",
				"blgr-gr-dark-gray-blue": "hsl(237, 17%, 21%)",
				"blgr-gr-very-dark-desat-blue": "hsl(237, 23%, 32%)",
				"news-soft-orange": "hsl(35, 77%, 62%)",
				"news-soft-red": "hsl(5, 85%, 63%)",
				"news-off-white": "hsl(36, 100%, 99%)",
				"news-grayish-blue": "hsl(233, 8%, 79%)",
				"news-dark-grayish-blue": "hsl(236, 13%, 42%)",
				"news-very-dark-blue": "hsl(240, 100%, 5%)",
			},
		},
	},
	plugins: [],
};
