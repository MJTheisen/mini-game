const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

[
	"./Sprites/night_time.png",
	"./Sprites/shadow_dog.png",
	"./Sprites/ghost.png"
].forEach(asset => ASSET_MANAGER.queueDownload(asset));

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Ghost(gameEngine));
	gameEngine.addEntity(new CharacterController(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
