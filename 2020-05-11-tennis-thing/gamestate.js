class Gamestate {
  constructor(){
    this.state = "GAMEPLAY";
    
    this.gameplay = new Gameplay();
    this.menu = new Menu();
  }
  update() {
    switch (this.state) {
      case "GAMEPLAY":
        this.gameplay.update();
        break;
      case "MENU":
        this.menu.update();
        break;
      default:
        // pass
    }
  }
  changeState(state) {
    
  }
  control(keyCode){

  }    
}