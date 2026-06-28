function lineAnimation() {
    window.addEventListener("wheel", function (val) {
        if (val.deltaY > 0) {
            gsap.to("#marque", {
                transform: "translateX(-200%)",
                repeat: -1,
                duration: 2,
                ease: "none"
            })
            gsap.to("#marque #second", {
                rotate: 180
            })
        }
        else if (val.deltaY < 0) {
            gsap.to("#marque", {
                transform: "translateX(0%)",
                repeat: -1,
                duration: 2,
                ease: "none"
            })
            gsap.to("#marque #second", {
                rotate: 0
            })

        }
    })
}

lineAnimation();