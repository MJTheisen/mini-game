class SceneManager{
    constructor(game){
        this.game = game;
        this.game.camera = this;
        this.x = 0;
        this.player = new CharacterController(this.game,50,600);
        this.loadLevel(50,600);
    };

    loadLevel(x,y){
        this.game.entities = [];
        this.x = 0;
        this.player.x = x;
        this.player.y = y;
        this.player.velocity = { x: 0, y: 0 };
        this.game.addEntity(this.player);    
       
    };
    update() {
        this.game.addEntity(new Ghost(this.game,500,500))
    };

    draw(ctx){

    };

};