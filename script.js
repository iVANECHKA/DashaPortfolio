gsap.registerPlugin(ScrollTrigger);

gsap.to(".case1_main-pic", {
    rotation: 360,
    x: 400,
    scrollTrigger: {
        trigger: ".case1",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true
    }
});