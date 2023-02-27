class SceneManager{
    constructor(game){
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.dead = false;
        this.player = new CharacterController(this.game,50,600);


        //this.elapsedGhostTime = 0;
        //this.ghostSpawn = [0.5,1,3,5];
        //this.randomGhostSpawn =0;
        //this.GhostSpawn();
        
        this.loadLevel(50,600);
    };

    loadLevel(x,y){
        this.game.entities = [];
        this.x = 0;
        this.player.x = x;
        this.player.y = y;
        this.player.velocity = { x: 0, y: 0 };
        this.game.addEntity(this.player); 
        this.game.addEntity(new Ghost(this.game,400,500));
        this.game.addEntity(new Ghost(this.game,500,500));
        this.game.addEntity(new Ghost(this.game,600,500));
        this.game.addEntity(new Ghost(this.game,700,500));
          
       
    };

    // GhostSpawn(){
    //     this.beforeGhostSpawn = this.randomGhostSpawn;
    //     while(this.beforeGhostSpawn === this.randomGhostSpawn){
    //         this.randomGhostSpawn = Math.floor(Math.random() *
    //             this.ghostSpawn.length);
    //     };
    // }

    // clearEntities() {
    //     this.game.entities.forEach(function (entity) {
    //         entity.removeFromWorld = true;
    //     });
    // };

    update() {
        this.game.addEntity(new Ghost(this.game,500,500));

        //this.GhostSpawn();
        //this.game.addEntity(new Ghost(this.game,500,500))
        // if(this.elapsedGhostTime > this.ghostSpawns[this.randomGhostSpawn]&& this.player.dead==false){
        //     this.elapsedGhostTime=0;
        //     this.GhostSpawn();
        //     console.log("make Ghost")
        //     this.game.addEntity(new Ghost(this.game,500,500))
        // }
    };

    draw(ctx){
        if(this.dead === false) {
            this.animationList[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y);
        } 
        

    };

};