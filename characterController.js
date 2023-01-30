class CharacterController {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game.player = this
        this.game = game;   
        this.x = 10;
        this.y = 500;
        this.speed = 0;

        this.animationList = [];
        this.getAnimations;
        //this.game.addEntity(newBackground(this.game));

        this.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/shadow_dog.png"), 0, 1573, 575, 532, 9, 0.09);
        //this.animationList["WALK"] = new Animator(ASSET_MANAGER.getAsset("./Sprites/shadow_dog.png"), 0, 1573, 573, 532, 9, 0.09);
        
       


    };

    update() {
        this.x += this.speed * this.game.clockTick
        if(this.x > 1024) this.x = 0;

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        //ctx.drawImage(ASSET_MANAGER.getAsset("./deathscythewalk.png"),0,0);
    };
}
