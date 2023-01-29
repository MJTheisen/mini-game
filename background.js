class Background{
    constructor(game){
        this.game = game;
        this.x = 0;
        this.y = 0;
    }

    update(){
      
    }

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites/bridge.png"), this.x, this.y, 1920, 768,);
    }
}