console.log("Groundcontrol to Major Tom: Check Ignition and may god's love be with you");
var drumpad = [
    new Audio("A.mp3"),
    new Audio("C.mp3"),
    new Audio("./Sounds/F.mp3"),
    new Audio("./Sounds/G.mp3"),
    new Audio("./Sounds/hihat.mp3"),
    new Audio("./Sounds/kick.mp3"),
    new Audio("./Sounds/laugh-1.mp3"),
    new Audio("./Sounds/laugh-2.mp3"),
    new Audio("./Sounds/snare.mp3")
];
// tslint:disable-next-line: typedef
function playBeat(soundName) {
    soundName.play();
}
document.querySelector("#A").addEventListener("click", function () {
    playBeat(drumpad[0]);
});
document.querySelector("#C").addEventListener("click", function () {
    playBeat(drumpad[1]);
});
document.querySelector("#F").addEventListener("click", function () {
    playBeat(drumpad[2]);
});
document.querySelector("#G").addEventListener("click", function () {
    playBeat(drumpad[3]);
});
document.querySelector("#hihat").addEventListener("click", function () {
    playBeat(drumpad[4]);
});
document.querySelector("#kick").addEventListener("click", function () {
    playBeat(drumpad[5]);
});
document.querySelector("#laugh1").addEventListener("click", function () {
    playBeat(drumpad[6]);
});
document.querySelector("#laugh2").addEventListener("click", function () {
    playBeat(drumpad[7]);
});
document.querySelector("#snare").addEventListener("click", function () {
    playBeat(drumpad[8]);
});
var sequence = [0, 1, 0, 2, 0, 3, 0, 5, 4, 8, 5, 4, 8, 6];
var IndexOfSequence = 0;
function Melody() {
    setInterval(function () {
        playBeat(drumpad[sequence[IndexOfSequence]]);
        IndexOfSequence = IndexOfSequence + 1;
    }, 1000);
}
document.querySelector('#playbutt').addEventListener('click', function () {
    Melody();
});
console.log("background: © unsplash/Alessandro Viaro");
//# sourceMappingURL=a07.js.map