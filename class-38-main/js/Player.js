class Player {
  constructor(){
    this.index = null;
    this.distance=0;
    this.name = null
    this.rank=null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,distance:this.distance
    });
  }

static getPlayerInfo(){
  var playerRef = database.ref('players');
  playerRef.on("value",(data)=>{
  allPlayers = data.val(); })
}
getCars(){
  var finishPlayerRef=database.ref('CarsAtEnd')
  finishPlayerRef.on("value",(data)=>{
    this.rank=data.val();
  })}
static updateCarsAtEnd(rank){
database.ref('/').update({
  CarsAtEnd:rank
})

}




}


