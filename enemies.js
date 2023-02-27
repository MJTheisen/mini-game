class Ghost{
    constructor(game , x, y){
        Object.assign(this,{game, x, y});
        this.x=700;
        this.y=500;
        this.velocity = { x: 0, y:0};
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/ghost.png");
        this.speed = 100;
        this.state = "FLOAT";
        this.animationList = [];  
        this.dead = false;     
                                                  //spritesheet,xStart, yStart, width, height, frameCount, frameDuration, scale)
        this.animationList["FLOAT"] = new Animator(ASSET_MANAGER.getAsset("./Sprites/ghost.png"), 10, 0, 57.5, 65, 18, 0.07, 2, 2);
    }

    
    update(){  
        this.state = "FLOAT";
        this.x -= (this.speed * this.game.clockTick);    
    }
    
    draw(ctx){
        if(this.dead === false) {
            //ctx.drawImage(this.spritesheet, 
            this.animationList[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        } 

   
    }
    
}