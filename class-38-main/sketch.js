var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;
var car1,car2,car3,car4,cars;

function preload(){
  car1ing=loadImage("images/car1.png")
  car2ing=loadImage("images/car2.png")
  car3ing=loadImage("images/car3.png")
  car4ing=loadImage("images/car4.png")
  ground=loadImage("images/ground.png")
  track=loadImage("images/track.jpg")
  

}


function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-95);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

if(playerCount===4){
  game.update(1)
}
if (gameState===1){
clear()
game.play();

}
if( gameState===2){
  game.end();
}
}
