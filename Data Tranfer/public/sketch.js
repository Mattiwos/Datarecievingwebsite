var socket;
var distancead = [];
function setup(){
createCanvas(windowWidth * 0.68, windowHeight);
socket = io.connect('https://homesecuritybymb.herokuapp.com')
socket.on('sendingdistance', distance)

}
function distance(data){
  distancead = data
}

function draw(){
background(0);
fill(255,0,0)
textSize(10)
//Arduino1
text("Arduino 1 results:",0,height/2)
text(distancead[0],0,height/2+20)
//Arduino2
text("Arduino 2 results:",20,height/2)
text(distancead[1],20,height/2+20)
//Arduino3
text("Arduino 3 results:",40,height/2)
text(distancead[2],40,height/2+20)
//Arduino4
text("Arduino 4 results:",60,height/2)
text(distancead[3],60,height/2+20)
//Arduino5
text("Arduino 5 results:",80,height/2)
text(distancead[4],80,height/2+20)

}
