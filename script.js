const tm = gsap.timeline({
    onStart: () => {
        document.body.style.overflow = "hidden";
    },
    onComplete: () => {
        gsap.set("#page2", { position: "absolute" });
        document.body.style.overflow = "auto";
        gsap.set("#page3", { display: "block" });
    }
});

tm.to("#page2", {
    clipPath: "inset(0% 0 0 0)",
    duration: 1.5,
    ease: "power4.inOut",
})

const header = document.querySelector("header");

ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {

        if (self.direction === 1) {
            header.style.transform = "translateY(-100%)"; 
        } else {
            header.style.transform = "translateY(0)"; 
        }
    }
});

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
tm.to(".footer", {
    opacity: 1,
    duration: 0.3
}, "-=0.2")
tm.from(".footer p", {
    y: 30,
    overflow: "hidden",
})
tm.from(["#b1,#b2,#b3"], {
    y: 20,
    stagger: 0.1,
    opacity: 0,
    overflow: "hidden",
}, "-=0.2")
