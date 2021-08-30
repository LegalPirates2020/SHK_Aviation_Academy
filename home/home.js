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
}).from(
	'.SHK-para',
	{
		duration: 1,
		opacity: 0,
		x: -250
	},
	'-=1	'
);

const t2 = gsap.timeline({
	scrollTrigger: {
		trigger: '.swiper',
		start: 'top 40%'
	}
});

t2.from('.swiper', { duration: 1, width: '100%', height: '100%' }).from(
	'.slide-h1',
	{ duration: 1, height: 0 }
);

const t3 = gsap.timeline({
	scrollTrigger: {
		trigger: '.vision-and-mission',
		start: 'top 40%'
	}
});

t3.from('.vision-h1', {
	duration: 0.5,
	height: 0
})
	.from('.mission-h1', {
		duration: 0.5,
		height: 0
	})
	.from('.vision-p', {
		duration: 0.5,
		left: 300,
		opacity: 0
	});

// const t2 = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: '.hero',
// 		start: 'bottom top'
// 	}
// });

// t2.to('.plane-hero', { duration: 1, rotate: 90, ease: 'power1' })
// t2.to('.plane-hero', {
// duration: 0.7,
// x: 800,
// delay: 0.5,
// 	ease: 'none'
// });
// .to(
// 	'.plane-hero',
// 	{
// 		duration: 0.5,
// 		rotate: 180,
// 		delay: 0.5,
// 		ease: 'power1'
// 	},
// 	'-=.15'
// )
// .to('.hero-content', { duration: 1, x: -225, ease: 'power1' }, '-=2');
