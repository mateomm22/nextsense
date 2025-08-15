// Initialize Lenis
const lenis = new Lenis({
	autoRaf: true,
});

const { animate, scroll } = Motion;

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
	// [homeProblemWrapperSection2, {
	// 	y: [-50, 0]
	// }],
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
	offset: ["start 50%", "start -10%"]
})
