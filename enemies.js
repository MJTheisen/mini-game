class Ghost{
    constructor(game , x, y){
        Object.assign(this,{game, x, y});
        this.x=1500;
        this.y=500;
        this.velocity = { x: 0, y:0};
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/ghost.png");
        this.speed = 200;
        this.state = "FLOAT";
        this.animationList = [];  
        this.dead = false;     
        this.updateBB();
                                                  //spritesheet,xStart, yStart, width, height, frameCount, frameDuration, scale, spriteBorderWidth)
        this.animationList["FLOAT"] = new Animator(ASSET_MANAGER.getAsset("./Sprites/ghost.png"), 10, 0, 57.5, 65, 18, 0.07, 1.5, 2);
    }

    
    updateBB(){
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 10, this.y + 20, 50, 75)
    }

    update(){  
        this.state = "FLOAT";
        this.x -= (this.speed * this.game.clockTick);    
        this.updateBB();

    }


    draw(ctx){
        if(this.dead === false) {
            //ctx.drawImage(this.spritesheet, 
            this.animationList[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y);
            this.BB.draw(ctx);
        } 
    }
}