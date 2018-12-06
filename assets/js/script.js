// var audio = new Audio('audio_file.mp3');
// audio.play();

//Function for audio onclick
function playAudio(val) {
    //Storing ID in a variable
    var a = document.getElementById("audio" + val);
    a.currentTime = 0;
    a.play();
}