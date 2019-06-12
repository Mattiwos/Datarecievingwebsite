var socket;
var distancead = [];
var username,password,tag,submitbutton;
var name,pass;
var realnameandpass =[];
var realname,realpass;
var checker = false;
var cxc;
function setup(){
createCanvas(windowWidth, windowHeight);
socket = io.connect('https://homesecuritybymb.herokuapp.com')
socket.on('sendingdistance', distance)
socket.on('realnameandpass', vr)
    username = createInput('username');
    username.position(width -160,20)
    password = createInput('password');
    password.position(width -160,40)
    submitbutton = createButton('login');
    submitbutton.position(width -160, 60);
    submitbutton.mousePressed(attemptedlogin);

    tag = createElement('b2', 'Log in');
    tag.position(width -160, 0);
}
function vr(data){
realnameandpass = data
    
realname = String(realnameandpass[0])
realpass = String(realnameandpass[1])

}
function distance(data){
  distancead = data
}
function attemptedlogin(){
name = username.value()
pass = password.value()
   
if (name == realname && pass == realpass){
removeElements()
checker = true
}  
}
function draw(){
if (checker == true){
background(0);
fill(255)
textSize(10)
//Arduino1
text("Arduino 1 results:",0,height/2)
text(int(distancead[0]),0,height/2+50)
//Arduino2
text("Arduino 2 results:",100,height/2)
text(String(distancead[1]),100,height/2+50)
//Arduino3
text("Arduino 3 results:",200,height/2)
text(String(distancead[2]),200,height/2+50)
    if (String(distancead[2]) == "True"){
    cxc = String(distancead[0])
    };
//Arduino4
text("Arduino 4 results:",300,height/2)
text(String(distancead[3]),300,height/2+50)
//Arduino5
text("Arduino 5 results:",400,height/2)
text(String(distancead[4]),400,height/2+50)
}
}
