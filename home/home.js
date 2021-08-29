const swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

gsap.from('.hero-content', {
	duration: 1,
	height: 0,
	ease: 'Power3.easeInOut'
});

const t1 = gsap.timeline({
	scrollTrigger: { trigger: '.bottom-nav', start: 'bottom top' }
});

t1.from('.SHK-title', {
	x: 250,
	opacity: 0,
	duration: 1
});
