// Initialize Lenis
const lenis = new Lenis({
	autoRaf: true,
});

const { animate, scroll } = Motion;

const scrollWrapper = document.querySelector(".js-hero-scroll");
const text = document.querySelector(".js-hero-scroll h1");
const earbud1 = document.querySelector(".js-earbud-1");
const earbud2 = document.querySelector(".js-earbud-2");

scroll(animate(earbud1, { y: -125 }), {
	target: scrollWrapper,
	offset: ["start start", "50% start"]
})
scroll(animate(earbud2, { y: -250 }), {
	target: scrollWrapper,
	offset: ["start start", "50% start"]
})