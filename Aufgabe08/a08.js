// Wassertropfen Array
var button = [];
button[0] = new Audio("./Sounds/Wassertropfen_1.mp3");
button[1] = new Audio("./Sounds/Wassertropfen_2.mp3");
button[2] = new Audio("./Sounds/Wassertropfen_3.mp3");
button[3] = new Audio("./Sounds/Wassertropfen_4.mp3");
button[4] = new Audio("./Sounds/Wassertropfen_5.mp3");
button[5] = new Audio("./Sounds/Wassertropfen_6.mp3");
button[6] = new Audio("./Sounds/Wassertropfen_7.mp3");
button[7] = new Audio("./Sounds/Wassertropfen_8.mp3");
button[8] = new Audio("./Sounds/Wassertropfen_9.mp3");
// Doppelfunktion für Event-Listener: Abspielen Sound + Aufzeichnen bei "rec - active"
document.querySelector("#drop1").addEventListener("click", function () {
    playSample(button[0]);
    recordBeat(button[0]);
});
document.querySelector("#drop2").addEventListener("click", function () {
    playSample(button[1]);
    recordBeat(button[1]);
});
document.querySelector("#drop3").addEventListener("click", function () {
    playSample(button[2]);
    recordBeat(button[2]);
});
document.querySelector("#drop4").addEventListener("click", function () {
    playSample(button[3]);
    recordBeat(button[3]);
});
document.querySelector("#drop5").addEventListener("click", function () {
    playSample(button[4]);
    recordBeat(button[4]);
});
document.querySelector("#drop6").addEventListener("click", function () {
    playSample(button[5]);
    recordBeat(button[5]);
});
document.querySelector("#drop7").addEventListener("click", function () {
    playSample(button[6]);
    recordBeat(button[6]);
});
document.querySelector("#drop8").addEventListener("click", function () {
    playSample(button[7]);
    recordBeat(button[7]);
});
document.querySelector("#drop9").addEventListener("click", function () {
    playSample(button[8]);
    recordBeat(button[8]);
});
// funtion für abspielen und aufnehmen
function playSample(x) {
    x.play();
    recordBeat(x);
}
// controlpanel
var play = document.querySelector(".playButton");
var stoppen = document.querySelector(".stopButton");
var aufnehmen = document.querySelector(".recordButton");
var löschen = document.querySelector(".deleteButton");
// function Aufzeichnung eigener Samples
var sample = [];
sample[0] = new Audio("./Sounds/Wassertropfen_1.mp3");
sample[1] = new Audio("./Sounds/Wassertropfen_2.mp3");
sample[2] = new Audio("./Sounds/Wassertropfen_3.mp3");
var recordactive;
var intervall = 0;
var x;
var a;
var index;
// rec
aufnehmen.addEventListener("click", function () {
    if (aufnehmen.classList.contains("active")) {
        aufnehmen.classList.remove("active");
        recordactive = false;
    }
    else {
        aufnehmen.classList.add("active");
        recordactive = true;
    }
    console.log(recordactive);
    console.log(sample.length);
});
// rec bei recordactive
function recordBeat(x) {
    console.log(recordactive);
    if (recordactive == true) {
        sample.push(x);
        console.log(sample.length);
    }
}
// deleteButton
löschen.addEventListener("click", function () {
    deleteBeat();
});
// delete durch splice
function deleteBeat() {
    sample.splice(0, sample.length);
    console.log(sample.length);
}
// play/pause Playknopf verschwindet, Stopknopf erscheint
play.addEventListener("click", function () {
    PlayBeat(true);
    play.classList.add("inactive");
    stoppen.classList.remove("inactive");
});
stoppen.addEventListener("click", function () {
    PlayBeat(false);
    stoppen.classList.add("inactive");
    play.classList.remove("inactive");
});
//Play: Sound spielt ab / Stop: Sound stoppt
function PlayBeat(a) {
    if (a == true) {
        intervall = setInterval(function () {
            if (index < sample.length) {
                playSample(sample[index]);
                index++;
            }
            else {
                index = 0;
            }
        }, 400);
    }
    else {
        clearInterval(intervall);
    }
}
//# sourceMappingURL=a08.js.map