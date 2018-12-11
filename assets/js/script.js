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

// var audio = new Audio('audio_file.mp3');
// audio.play();

//Function for audio onclick
function playAudio(val) {
    //Storing ID in a variable
    var a = document.getElementById("audio" + val);
    a.currentTime = 0;
    a.play();
};