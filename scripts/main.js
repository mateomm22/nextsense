// Initialize Lenis
const lenis = new Lenis({
	autoRaf: true,
});

const { animate, scroll, stagger } = Motion;

const scrollWrapper = document.querySelector(".js-hero-scroll");
const text = document.querySelector(".js-hero-scroll h1");
const hand = document.querySelector(".js-hand");
const earbud1 = document.querySelector(".js-earbud-1");
const earbud2 = document.querySelector(".js-earbud-2");

scroll(animate(text, {
	y: -25
}), {
	target: scrollWrapper,
	offset: ["start start", "100% start"]
})
scroll(animate(hand, { y: 50 }), {
	target: scrollWrapper,
	offset: ["start start", "100% start"]
})
scroll(animate(earbud1, { y: -125 }), {
	target: scrollWrapper,
	offset: ["start start", "50% start"]
})
scroll(animate(earbud2, { y: 50 }), {
	target: scrollWrapper,
	offset: ["start start", "50% start"]
})

/**
 * Problem / Solution section
 */
const homeProblemWrapper = document.querySelector('.js-home-problem-solution');
const homeProblemWrapperSection1 = homeProblemWrapper.querySelector('.section--1');
const homeProblemWrapperSection2 = homeProblemWrapper.querySelector('.section--2');
const homeProblemLeftEarbud = homeProblemWrapperSection2.querySelector('.earbud--l')
const homeProblemRightEarbud = homeProblemWrapperSection2.querySelector('.earbud--r')
const homeProblemWrapperSection3 = homeProblemWrapper.querySelector('.section--carousel');


const problemTl = [
	[homeProblemWrapperSection1, {
		y: -50
	}, {
			delay: 1.5
		}],
	[homeProblemWrapperSection1, {
		"filter": ["blur(0)", "blur(10px)"],
		"opacity": [1, 0],
	}, {
			at: "-0.5"
		}],
	[homeProblemWrapper, {
		"--text": "var(--black)",
	}, { at: "<", duration: 0.5 }],
	[homeProblemWrapperSection2, {
		"filter": ["blur(10px)", "blur(0)"],
		"opacity": [0, 1],
	}, {
			duration: 0.5
		}],
	[homeProblemWrapperSection3, {
		"opacity": [0, 1]
	}, {
			at: "+0.2"
		}]
];

const problemEarbudsTl = [
	[homeProblemLeftEarbud, {
		"opacity": [0, 1],
	}],
	[homeProblemRightEarbud, {
		"opacity": [0, 1],
	}, {
			at: "-0.2"
		}],
	[homeProblemLeftEarbud, {
		"y": -20,
	}, {
			at: "<"
		}],
	[homeProblemRightEarbud, {
		"y": -120,
	}, {
			at: "<"
		}],
];

scroll(animate(homeProblemWrapper, {
	"--bg-1": ["#171C2F", "#AAA8FF"],
	"--bg-2": ["#AAA8FF", "#030203"],
	"--bg-1-pos": ["-40%", "45%"],
	"--bg-2-pos": ["100%", "90%"],
}), {
	target: homeProblemWrapper,
	offset: ["start start", "end end"]
})

scroll(animate(problemTl), {
	target: homeProblemWrapper,
	offset: ["start start", "90% end"]
})

scroll(animate(problemEarbudsTl), {
	target: homeProblemWrapperSection2,
	offset: ["10% start", "75% start"]
})


/**
 * Swiper home cards
 */
const { createApp, ref, onMounted } = Vue

createApp({
	setup() {
		const activeCard = ref(null)
		const swiperHome = ref(null)

		function toggleCard(id) {
			if (activeCard.value !== null && activeCard.value === id) {
				activeCard.value = null;
				return;
			}

			activeCard.value = id;

			// swiperHome.value.slideTo(id - 1);
			// setTimeout(() => {
			// }, 500);
		}

		onMounted(() => {
			swiperHome.value = new Swiper('.js-home-swiper', {
				// Optional parameters
				loop: true,
				slidesPerView: 'auto',
				spaceBetween: 16,
				centerInsufficientSlides: true,
				// Navigation arrows
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			});

		});

		return {
			activeCard,
			toggleCard
		}
	}
}).mount('.js-carousel-app')


/**
 * Slideshow features
 */
const homeSlideshowWrapper = document.querySelector('.js-home-features-slideshow');
const slideshowHeadline = document.querySelector('.js-home-features-slideshow__headline');
const slideshowBg = document.querySelector('.home-slideshows__bg');


// Pin background and headline
scroll(progress => {
	if (progress > 0 && progress < 1) {
		slideshowBg.style.position = 'fixed';
	} else if (progress === 0) {
		slideshowBg.style.position = 'absolute';
	}
}, {
	target: homeSlideshowWrapper,
	offset: ['start start', 'end end']
})

// Change background
const allBgs = [...document.querySelectorAll('.js-home-feature__bg')];
const backgroundsTl = allBgs.map(bg => ([
	bg, {
		opacity: 1
	}, {
		duration: 0.25
	}
], [
		bg, {
			opacity: 1
		}, {
			delay: 1,
		}
	]));

scroll(animate(backgroundsTl), {
	target: homeSlideshowWrapper,
	offset: ['start start', 'end end']
})

// "Hide" section after passing by scrolling
// scroll(progress => {
// 	if (progress >= 0 && progress < 0.01) {
// 		// slideshowHeadline.style.position = 'fixed';
// 		slideshowBg.style.position = 'fixed';
// 	} else {
// 		// slideshowHeadline.style.position = 'absolute';
// 		slideshowBg.style.position = 'absolute';
// 	}
// }, {
// 	target: homeSlideshowWrapper,
// 	offset: ['end 5px', 'end -5px']
// })

// Animate each section entry and leave
const allSlideshowFeatures = document.querySelectorAll('.js-single-home-feature');

allSlideshowFeatures.forEach((slide, idx) => {
	const backgroundTl = [
		[
			document.querySelector(`.js-home-feature__bg[data-index="${idx}"]`), {
				opacity: 1
			}
		]
	];

	const slideGraphic = slide.querySelector('.single-feature__graphic');
	const slideContent = slide.querySelectorAll('.single-feature__content *');

	const enterSlideTl = [
		[
			slideContent, {
				opacity: [0, 1],
				y: [35, 0]
			}, {
				delay: stagger(0.1)
			}
		],
		[
			slideGraphic, {
				opacity: [0, 1],
				y: [-50, 0]
			}
		]
	];

	scroll(animate(backgroundTl), {
		target: slide,
		offset: ['start 80%', 'start 10%']
	})

	if (idx === 0) {
		scroll(animate(enterSlideTl), {
			target: slide,
			offset: ['10% start', '30% start']
		})
	} else {
		scroll(animate(enterSlideTl), {
			target: slide,
			offset: ['start start', '20% start']
		})
	}
});


/**
 * Homepage carousel
 */
const homeCarousel = new Swiper('.js-home-carousel', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: '.swiper-pagination'
	},
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});


/**
 * Homepage carousel
 */
const carouselImages = new Swiper('.js-carousel-images', {
	// Optional parameters
	loop: true,
	spaceBetween: 1,
	centerInsufficientSlides: true,
	slidesPerView: 2,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 450px
		450: {
			slidesPerView: 3,
		},
		// when window width is >= 768px
		768: {
			slidesPerView: 4,
		},
		// when window width is >= 992px
		992: {
			slidesPerView: 5,
		}
	}
});


/**
 * FAQs accordions
 */
createApp({
	setup() {
		const activeFaq = ref(null)

		function toggleFaq(id) {
			if (activeFaq.value !== null && activeFaq.value === id) {
				activeFaq.value = null;
				return;
			}

			activeFaq.value = id;
		}

		return {
			activeFaq,
			toggleFaq
		}
	}
}).mount('.js-faqs-content')