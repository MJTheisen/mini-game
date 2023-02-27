class CharacterController {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game.player = this
        this.game = game;   
        this.x = 10;
        this.y = 500;
        this.speed = 0;
        this.velocity = { x: 0, y: 0 };
        this.gravity = 300;
        this.state = "WALK";
        this.dead = false;

        this.animationList = [];
        this.animationList["WALK"] = new Animator(ASSET_MANAGER.getAsset("./Sprites/shadow_dog.png"), 0, 1573, 573, 532, 9, 0.09);
        this.animationList["JUMP"] = new Animator(ASSET_MANAGER.getAsset("./Sprites/shadow_dog.png"), 0, 533, 573, 532, 9, 0.09);
    };

    update() {
        if(this.y > 500) {
            if(this.state=="JUMP"){
                this.state="WALK";
            }
            this.y = 500;
            this.velocity.y = 0;
            this.animationList["JUMP"] = new Animator(ASSET_MANAGER.getAsset("./Sprites/shadow_dog.png"), 0, 533, 573, 532, 14, 0.18);
            this.elapsedTime = 0
            this.state = "WALK";
        };

        if (this.game.keys["w"] && this.state != "JUMP") {
            this.state = "JUMP";
            console.log("Shadow dog is jumping!");
            this.velocity.x += 0;
            this.velocity.y -= 350;
        }
        this.velocity.y += this.gravity*this.game.clockTick;
        this.x += this.velocity.x*this.game.clockTick;
        this.y += this.velocity.y*this.game.clockTick;

    };

    draw(ctx) {
        if(this.dead === false) {
            this.animationList[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        } 
    };
}
