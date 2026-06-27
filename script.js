function textCutting() {
    let h1 = document.querySelector("h1");

    let h1Text = h1.textContent;

    let splittedText = h1Text.split("");

    let halfTxt = Math.floor(splittedText.length / 2);

    let clutter = "";

    splittedText.forEach(function (val, idx) {
        if (idx < halfTxt) {
            clutter += `<span class="l">${val}</span>`;
        }
        else {
            clutter += `<span class="r">${val}</span>`;
        }
    })

    h1.innerHTML = clutter;
}

textCutting();


gsap.from("h1 .l", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    stagger: 0.5
})

gsap.from("h1 .r", {
    y: 100,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    stagger: -0.5
})