class GameOverMenu{
    constructor(game) {
        Object.assign(this, {game});
        this.game = game;
    };
  
    update(){
        if(this.game.click && this.game.click.y > 450 && this.game.click.y < 550){
            this.game.click.y = 0;
            this.game.camera.clearEntities();
            this.game.background.halt = false;
            this.game.addEntity(new SceneManager(this.game)); 
        }
    };
    
    draw(ctx){ 
        ctx.fillStyle = "WHITE";
        ctx.fillText("Gameover retry?",500,500)
    };
}