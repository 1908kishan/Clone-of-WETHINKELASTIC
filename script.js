const tm = gsap.timeline();

tm.to("#p2", {
    clipPath: "inset(0% 0 0 0)",
    duration: "1.5",
    ease: "power4.inOut",
})
tm.from("nav #logo", {
    y: 100,
    stagger: 0.1,
    opacity: 0,
}, "-=0.6")
tm.from("#opt a", {
    y: 100,
    stagger: 0.1,
    opacity: 0,
})
tm.from("#hello h1", {
    y: 50,
    stagger: 0.2,
    opacity: 0,
    overflow: "hidden",
})
tm.from(".para p", {
    y: 20,
    stagger: 0.2,
    opacity: 0,
    overflow: "hidden",
})
tm.from("#b1", {
    y: 20,
    stagger: 0.1,
    opacity: 0,
    overflow: "hidden",
}, "-=0.2")
tm.from("#b2", {
    y: 20,
    stagger: 0.5,
    opacity: 0,
    overflow: "hidden",
}, "-=0.2")
tm.from("#b3", {
    y: 20,
    stagger: 0.5,
    opacity: 0,
    overflow: "hidden",
}, "-=0.2")
