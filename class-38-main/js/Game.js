class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerRef=await database.ref('playerCount').once("value");
      if(playerRef.exists()){
        playerCount=playerRef.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars=[car1,car2,car3,car4]
     car1.addImage(car1ing)
     car2.addImage(car2ing)
     car3.addImage(car3ing)
     car4.addImage(car4ing)
  }

  play(){
form.hide();


Player.getPlayerInfo();
player.getCars();
if(allPlayers!==undefined){
 background(ground)
 
  image(track,0,-4*displayHeight,displayWidth,5*displayHeight)
  var y
  var x=175
var index=0

  for(var i in allPlayers){
  index=index+1
 x=x+200
y=displayHeight-allPlayers[i].distance
cars[index-1].x=x
 cars[index-1].y=y

 if(index===player.index){
   cars[index-1].shapeColor="red"
   camera.position.x=displayWidth/2
   camera.position.y=cars[index-1].y
 }


  }
}
if(keyIsDown(UP_ARROW) && player.index!==null){
player.distance+=50
player.update();


}  drawSprites()

if(player.distance>3650){
  gameState=2

  player.rank+=1
  Player.updateCarsAtEnd(player.rank);

  textSize(50);
  fill("white")
  text("RANK "+player.rank,displayWidth/2-65,-3000)
}


  }
  end(){
    console.log("Game Over")

    
  }
  }
