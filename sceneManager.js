class SceneManager{
    constructor(game){
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.score = 0;

        this.player = new CharacterController(this.game,50,550);

        this.elapsedGhostTime = 0;
        this.scoreTime = 0;

        this.ghostSpawns = [0.5,1,3,5];
        this.randomGhostSpawn = 0;
        this.GhostSpawn();
        this.loadLevel(50,550);

    };

    loadLevel(x,y){
        this.game.entities = [];
        this.x =0;
        this.player.x = x;
        this.player.y = y;
        this.player.velocity = { x: 0, y: 0 };
        this.game.addEntity(this.player);    
       
    };

    addPoints(p) {
        this.scoreTime += p;
        this.draw(this.game.ctx)
    };

    GhostSpawn(){
        this.prevGhostSpawn = this.randomGhostSpawn;
        
        while(this.prevGhostSpawn === this.randomGhostSpawn){
            this.randomGhostSpawn = Math.floor(Math.random() * this.ghostSpawns.length);
        }
    };

    
    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    update() {
        this.elapsedGhostTime += this.game.clockTick;

        if(this.elapsedGhostTime > this.ghostSpawns[this.randomGhostSpawn]&& this.player.dead==false){
            this.elapsedGhostTime=0;
            this.GhostSpawn();
            console.log("Spawn Ghost")
            this.game.addEntity(new Ghost(this.game,1920,700))
        }
    
    };

    draw(ctx){


        if(this.player.dead==true){

        }else{
            this.scoreTime += this.game.clockTick;
            ctx.font =  '60px "a"'
            ctx.fillStyle = "RED";
            this.score = Math.floor(this.scoreTime);
            ctx.fillText("SCORE:"+this.score+" ", 1000 ,100);


        }

    };

};