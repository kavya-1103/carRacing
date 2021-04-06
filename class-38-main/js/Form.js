class Form {
  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.Rbutton = createButton('reset');
  }
  hide(){

this.greeting.hide()
this.input.hide()
this.button.hide()

  }
  display(){
   
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-80, 0);
    
    this.input.position(displayWidth/2-70, displayHeight/2-80);
    this.button.position(displayWidth/2-10,displayHeight/2);
    this.Rbutton.position(displayWidth-100,70);


    this.Rbutton.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
      
    })

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update(player.name)
      player.updateCount(playerCount);
    
     this.greeting.html("Hello " + player.name )
     this. greeting.position(displayWidth/2-30,displayHeight/3)
    });

  }
}
