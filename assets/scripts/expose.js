// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var imag = document.querySelector("img");
  var hornz = document.getElementById("horn-select");
  const jsConfetti = new JSConfetti();
  var audSrc = document.getElementsByClassName("hidden")[0];

  hornz.addEventListener("change", function(){
  if (document.getElementById("horn-select").value == 'air-horn' ){
      imag.src = 'assets/images/air-horn.svg';
      audSrc.src= "assets/audio/air-horn.mp3";
  }
  else if (document.getElementById("horn-select").value == 'car-horn'){
      imag.src = 'assets/images/car-horn.svg';
      audSrc.src = "assets/audio/car-horn.mp3";
  }
  else if (document.getElementById("horn-select").value == 'party-horn'){
      imag.src = 'assets/images/party-horn.svg';
      audSrc.src = "assets/audio/party-horn.mp3";
      jsConfetti.addConfetti();
    }

  }
)

var volumeImage = document.querySelectorAll("img")[1];
var cheekValue = document.getElementById("volume");
var audio = document.getElementsByClassName("hidden")[0];
cheekValue.addEventListener("change", function(){
  if (cheekValue.value == 0 ){
    volumeImage.src = 'assets/icons/volume-level-0.svg';
    audio.volume = cheekValue.value / 100 ;
}
else if (cheekValue.value < 33 && cheekValue.value >= 1 ){
  volumeImage.src = 'assets/icons/volume-level-1.svg';
  audio.volume = cheekValue.value / 100 ;
}
else if (cheekValue.value < 67){
  volumeImage.src = 'assets/icons/volume-level-2.svg';
  audio.volume = cheekValue.value / 100 ;
}
else {
  volumeImage.src = 'assets/icons/volume-level-3.svg';
  audio.volume = cheekValue.value / 100 ;
  }
}
)

var buttin = document.querySelector("button");
buttin.addEventListener('click', function(){
  audio.play();

});

}
 
  // TODO
/*
grab id value
maybe grab image source?? change it each time the source thing in repo
imag.addeventlistener wont work fors ome reason
do i need to change the actual horn select
 <option value="select" disabled selected>Select Horn:</option>
        <option value="air-horn">Air Horn</option>
        <option value="car-horn">Car Horn</option>
        <option value="party-horn">Party Horn</option>
horn-select
*/