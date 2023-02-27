class Ghost{
    constructor(game , x, y){
        Object.assign(this,{game, x, y});
        this.x=500;
        this.y=500;
        this.velocity = { x: 0, y:0};
        this.spritesheet = ASSET_MANAGER.getAsset("./Sprites/ghost.png");
        this.speed = 100;
        this.state = "FLOAT";
        this.animationList = [];  
        this.dead = false;     
                                                  //spritesheet,xStart, yStart, width, height, frameCount, frameDuration)
        this.animationList["FLOAT"] = new Animator(ASSET_MANAGER.getAsset("./Sprites/ghost.png"), 0, 0, 65, 65, 18, 0.09);
    }

    
    update(){  
        this.state = "FLOAT";
        this.x -= (this.speed * this.game.clockTick);    
    }
    
    draw(ctx){
        if(this.dead === false) {
            //ctx.drawImage(this.spritesheet, 
            //(this.xStart + this.width * frame), (this.yStart), this.width, this.height, x, y, this.width /3, this.height/3);
            this.animationList[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        } 

   
    }
    
}