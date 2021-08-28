const planeHero = document.querySelector('.plane-hero');
const topNav = document.querySelector('.top-nav');
const heroContent = document.querySelector('.hero-content');
const shkAviation = document.querySelector('.SHK-aviation');

window.addEventListener('scroll', () => {
	let currentScroll = window.scrollY;
	if (currentScroll >= 382) {
		topNav.style.backgroundColor = 'White';
	} else if (currentScroll <= 382) {
		topNav.style.backgroundColor = '#EDBD15';
	} else if (currentScroll >= 1136) {
		topNav.style.backgroundColor = '#EDBD15';
	}
	console.log(currentScroll);
	const animation = async (element, value, delay, call, callback) => {
		setTimeout(() => {
			element.style.transform = value;
			callback && callback();
		}, delay);
	};

	const movePlane = (element, property, value, delay, callback) => {
		setTimeout(() => {
			if (property === 'left') {
				element.style.left = value;
				callback && callback();
			} else if (property === 'right') {
				element.style.right = value;
				callback && callback();
			} else if (property === 'top') {
				element.style.top = value;
				callback && callback();
			} else if (property === 'position') {
				element.style.position = value;
				callback && callback();
			}
		}, delay);
	};

	if (currentScroll >= 100) {
		animation(planeHero, 'rotate(90deg)', 0, () => {
			movePlane(planeHero, 'left', '65rem', 400, () => {
				movePlane(heroContent, 'left', '48rem', 0, () => {
					animation(planeHero, 'rotate(180deg)', 400, () => {
						movePlane(planeHero, 'top', '7rem', 400, () => {
							movePlane(planeHero, 'position', 'fixed', 0, () => {
								shkAviation.classList.add('grid');
							});
						});
					});
				});
			});
		});
	}
});
