window.addEventListener("mousemove", function (val) {
    const pupils = document.querySelectorAll("#innerpart");

    pupils.forEach((pupil) => {

        const rect = pupil.parentElement.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;


        const angle = Math.atan2(val.clientY - eyeCenterY, val.clientX - eyeCenterX);


        const maxDistance = 30;

        const moveX = Math.cos(angle) * maxDistance;
        const moveY = Math.sin(angle) * maxDistance;

        gsap.to(pupil, {
            x: moveX,
            y: moveY,
            duration: 0.2,
            ease: "power2.out"
        });
    });
});