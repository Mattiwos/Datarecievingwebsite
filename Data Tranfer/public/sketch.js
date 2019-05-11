var socket;
var distt = 0;
function setup(){
createCanvas(windowWidth * 0.68, windowHeight);
socket = io.connect('https://homesecuritybymb.herokuapp.com')
socket.on('sendingdistance', distance)

}
function distance(data){
  distt = data
}

function draw(){
background(0);
fill(255,0,0)
textSize(20)
text(distt,width/2,height/2)
text("Home Security 1",width/2,height/2 +30)

}
