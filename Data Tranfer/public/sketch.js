var socket;
var distancead = [];
var username,password,tag,submitbutton;
function setup(){
createCanvas(windowWidth, windowHeight);
socket = io.connect('https://homesecuritybymb.herokuapp.com')
socket.on('sendingdistance', distance)
    username = createInput('');
    username.position(width/2,10)
    password = createInput('');
    password.position(width/2,30)
    submitbutton = createButton('login');
    submitbutton.position(width/2, 60);
    submitbutton.mousePressed(attemptedlogin);
    tag = createElement('b2', 'Log in');
    tag.position(width/2, 0);
}
function distance(data){
  distancead = data
}
function attemptedlogin(){


}
function draw(){
background(0);
fill(255,0,0)
textSize(10)
//Arduino1
text("Arduino 1 results:",0,height/2)
text(distancead[0],0,height/2+50)
//Arduino2
text("Arduino 2 results:",100,height/2)
text(distancead[1],100,height/2+50)
//Arduino3
text("Arduino 3 results:",200,height/2)
text(distancead[2],200,height/2+50)
//Arduino4
text("Arduino 4 results:",300,height/2)
text(distancead[3],300,height/2+50)
//Arduino5
text("Arduino 5 results:",400,height/2)
text(distancead[4],400,height/2+50)

}
