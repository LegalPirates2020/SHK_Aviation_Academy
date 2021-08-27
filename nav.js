const bottomNav = document.querySelector('.bottom-nav');

lastScroll = 0;
window.addEventListener('scroll', () => {
	let currentScroll = window.scrollY;
	if (currentScroll > lastScroll) {
		bottomNav.style.transform = `translateY(${-100}%)`;
	} else {
		bottomNav.style.transform = `translateY(${0}%)`;
	}
	lastScroll = currentScroll;
});
