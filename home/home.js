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

const carouselButton = document.querySelector('.swiper-button-next');
setTimeout(() => {
	setInterval(() => {
		carouselButton.click();
	}, 5000);
}, 2000);

const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.submit');
const form = document.querySelector('form');
const nextSubmit = document.querySelector('.next-submit');
const textArea = document.querySelector('.text-area');

inputs.forEach((input) => {
	input.addEventListener('input', (e) => {
		if (inputs[2].value == e.data) {
			if (inputs[0].value.length && inputs[1].value.length) {
				nextSubmit.style.left = '64rem';
			} else {
				nextSubmit.style.left = '0';
			}
		} else {
			nextSubmit.style.left = '0';
			button.style.left = '0';
		}
	});
});

nextSubmit.addEventListener('click', () => {
	inputs.forEach((input) => {
		input.style.left = '-100%';
		input.style.left = '-100%';
		nextSubmit.style.left = '0';
	});
	textArea.style.left = '50rem';
});

textArea.addEventListener('keydown', (e) => {
	if (textArea.value.length >= 30) {
		button.style.left = '60rem';
		button.removeAttribute('disabled');
	}
});

const li3 = document.getElementById('li-3');
if (window.innerWidth <= 1250 && window.innerWidth >= 800) {
	li3.parentElement.removeChild(li3);
}

gsap.from('.hero-content', {
	duration: 1,
	height: 0,
	ease: 'Power3.easeInOut'
});

gsap
	.timeline({
		scrollTrigger: { trigger: '.bottom-nav', start: 'bottom top' }
	})
	.from('.SHK-title', {
		x: 250,
		opacity: 0,
		duration: 1
	})
	.from(
		'.SHK-para',
		{
			duration: 1,
			opacity: 0,
			x: -250
		},
		'-=1	'
	);

gsap
	.timeline({
		scrollTrigger: {
			trigger: '.swiper',
			start: 'top 40%'
		}
	})
	.from('.swiper', {
		duration: 1,
		width: '100%',
		height: '100%',
		borderRadius: '0'
	})
	.from('.slide-h1', { duration: 1, height: 0 }, '-=.5');

gsap
	.timeline({
		scrollTrigger: {
			trigger: '.vision-and-mission',
			start: 'top 40%'
		}
	})
	.from('.vision-h1', {
		duration: 0.5,
		height: 0
	})
	.from(
		'.vision-p',
		{
			duration: 0.5,
			x: -100,
			opacity: 0
		},
		'-=.5'
	)
	.from(
		'.mission-h1',
		{
			duration: 0.5,
			height: 0
		},
		'-=.5'
	)
	.from(
		'.mission-ul',
		{
			duration: 0.5,
			x: 100,
			opacity: 0
		},
		'-=.5'
	);

gsap
	.timeline({
		scrollTrigger: {
			trigger: '.SHK-heads',
			start: 'top 40%'
		}
	})
	.from('.heads', { duration: 0.5, x: "-150%" })
	.from(
		'.head-content-title',
		{
			duration: 0.5,
			height: 0
		},
		'-=.5'
	)
	.from(
		'.head-content-para',
		{
			duration: 0.5,
			x: 200,
			opacity: 0
		},
		'-=.5'
	);

gsap.from('.input', {
	scrollTrigger: { trigger: '.contact-sec', start: 'top 40%' },
	duration: 0.05,
	x: -700,
	stagger: 0.2
});

// const controller =z new ScrollMagic.Controller()

// const scene = new ScrollMagic.scene({triggerElement:''})

// gsap
// 	.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top' } })
// 	.to('.plane-hero', { duration: 1, rotate: 90 })
// 	.to('.plane-hero', { duration: 1, x: 800 }, '>1')
// 	.set('.plane-hero', { duration: 1, rotate: 180 }, '>1');
