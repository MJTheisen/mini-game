class Background{
    constructor(game){
        this.game = game;
        this.x = 0;
        this.y = 0;

        this.speed = 3
    }

    update(){
        this.x -= this.speed;
        if (this.x < 0 - 1520) {this.x = 0};
      
    }

    draw(ctx){
        ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites/night_time.png"),this.x ,this.y, 1520, 768,);
        ctx.drawImage(ASSET_MANAGER.getAsset("./Sprites/night_time.png"),this.x+1520, this.y, 1520, 768,);



    }
}