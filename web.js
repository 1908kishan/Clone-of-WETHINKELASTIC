let menu = document.querySelector("#menu i");
let closer = document.querySelector("#full i");

let tl = gsap.timeline();

tl.to("#full", {
    right: "0%",
})

tl.from("#full h1", {
    x: 100,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
})

tl.from("#full i", {
    x: 100,
    opacity: 0,
    duration: 0.4,
    stagger: 0.3,
})

tl.pause();

menu.addEventListener("click", () => {
    tl.play();
})

closer.addEventListener("click", () => {
    tl.reverse();
})

