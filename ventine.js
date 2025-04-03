var myvoice = document.getElementById('myvoice');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
if(count == 0){
    count = 1;
    myvoice.play();
    playPauseBTN.innerHTML = "Pause &#9208;";
}else{
    count = 0;
    myvoice.pause();
    playPauseBTN.innerHTML = "play &#9658;";
}

}

function stop(){
    playPause()
    myvoice.pause();
    myvoice.currentTime = 0;
    playPauseBTN.innerHTML = "play &#9658;";
}