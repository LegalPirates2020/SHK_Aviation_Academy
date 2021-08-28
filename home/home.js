const planeHero = document.querySelector('.plane-hero');
const topNav = document.querySelector('.top-nav');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
	let currentScroll = window.scrollY;
	let lastScroll = 0;
	if (currentScroll >= 382) {
		topNav.style.backgroundColor = 'White';
	} else if (currentScroll <= 382) {
		topNav.style.backgroundColor = '#EDBD15';
	} else if (currentScroll >= 1136) {
		topNav.style.backgroundColor = '#EDBD15';
	}
	console.log(currentScroll);
	const animation = async (element, value, delay, callback) => {
		setTimeout(() => {
			element.style.transform = value;
			callback && callback();
		}, delay);
	};

	const movePlane = (element, value, delay, callback) => {
		setTimeout(() => {
			element.style.left = value;
			callback && callback();
		}, delay);
	};

	if (currentScroll >= 100) {
		animation(planeHero, 'rotate(90deg)', 0, () => {
			movePlane(planeHero, '60rem', 500, () => {
				movePlane(heroContent, '48rem', 0, () => {
					animation(planeHero, 'rotate(180deg)', 500);
				});
			});
		});
        lastScroll=currentScroll
	}
});
