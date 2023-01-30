class Ghost{
    constructor(game , x, y){
        Object.assign(this,{game, x, y});
        this.x=x;
        this.y=y;
        this.velocity = { x: 0, y:0};
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/ghost.png");
        this.speed = -5;
        this.state = "WALK";
        this.animationList = [];       

        this.animationList["WALK"] = new Animator(ASSET_MANAGER.getAsset("./Sprites/ghost.png"), 0, 0, 65, 65, 18, 0.09);
    }

    
    update(){  
        this.x += this.speed;
    }
    
    draw(ctx){
        this.animationList[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y);
   
    }
    
}