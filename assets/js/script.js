//Resize background
window.onload = function () {
    //Checking inner width
    var intFrameWidth = window.innerWidth;
    console.log(intFrameWidth);

    //Selecting CSS classes
    var bkgd2 = document.querySelectorAll(".bkgd2");
    var lowerGraphics = document.querySelectorAll(".lower-graphics");

    //Resize statement
    if (intFrameWidth > 678) {
        bkgd2[0].style.width = "677px";
        lowerGraphics[0].style.width = "677px";
    } else if (intFrameWidth < 678) {
        bkgd2[0].style.width = "100%";
        lowerGraphics[0].style.width = "90%";
    }
};

//Text for creating audio elements
var elementText1 = '<audio id="audio';
var elementText2 = '" src="assets/audio/ok';
var elementText3 = '.mp3"></audio>';

//Audio div selector
var audioDiv = document.querySelectorAll("#audio-div");

//Loop creating 20 audio elements
for (var i = 1; i < 21; i++) {
    var newAudioEl = elementText1 + i + elementText2 + i + elementText3;
    audioDiv[0].insertAdjacentHTML("afterbegin", newAudioEl);
}

//var audio = new Audio('./assets/audio/ok01.mp3');
//var a = audio;

//Function for audio onclick
function playAudio(val) {
    //Storing ID in a variable
    var a = document.getElementById("audio" + val);
    a.currentTime = 0;
    a.play();
};