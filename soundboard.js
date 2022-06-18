var oceanButton = document.getElementById("button1") //shows where the button is in HTML

var ocean = new Audio('ocean.wav'); //adress to the audio file

oceanButton.addEventListener('click',function() {

    ocean.play()
}); //plays audio file when the corresponding button is pressed


var babyButton = document.getElementById("button2")
var baby = new Audio("baby.wav");

babyButton.addEventListener('click', function(){
    baby.play()
});

var stormButton = document.getElementById("button3")
var storm = new Audio("storm.wav");

stormButton.addEventListener('click', function(){
    storm.play()
});












//var ocean = new Audio('ocean.wav');


//document.onclick=function() {
//    ocean.play()
//}