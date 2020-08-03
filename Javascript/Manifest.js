window.addEventListener("load", () => {

    const sounds = document.querySelectorAll(".sound");

    const pads = document.querySelectorAll(".pads div");

    // grabbing the visual div
    const visual = document.querySelector(".visual");

    // grabbing colors of pad from style-css
    const colors = [
        "#60d394",
        "#d36060",
        "magenta",
        "peru",
        "orange",
        "turquoise"
    ];

    // sound here
    // index is the number for each sound ,being acessed with "sounds"

    pads.forEach((pad, index) => {

        pad.addEventListener("click", function () {

            // reset the current click sounds
            sounds[index].currentTime = 0;

            sounds[index].play();

            createBubbles(index);
        });
    });


    // function that makes bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];

        bubble.style.animation = "jump is ease";
    };
});
