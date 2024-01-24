const tween1 = KUTE.fromTo(
    "#top-visual-1",
    { path: "#top-visual-1" },
    { path: "#top-visual-2" },
    { repeat: 999, duration: 3000, yoyo: true }
)

const tween2 = KUTE.fromTo(
    "#bottom-visual-1",
    { path: "#bottom-visual-1" },
    { path: "#bottom-visual-2" },
    { repeat: 999, duration: 3000, yoyo: true }
)

tween1.start();
tween2.start();


const nav = document.getElementById("nav");

