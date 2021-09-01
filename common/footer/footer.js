gsap.to('.upper', {
	scrollTrigger: {
		trigger: '.footer',
		start: 'top bottom',
		scrub: true
	},
	duration: 0.5,
	y: -200
});
