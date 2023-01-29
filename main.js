const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

[
	"./Sprites/bridge.png",
	"./Sprites/deathscythewalk.png",
].forEach(asset => ASSET_MANAGER.queueDownload(asset));

// ASSET_MANAGER.queueDownload("./Sprites/deathscythewalk.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	
	gameEngine.addEntity(new Deathscythewalk(gameEngine));
	gameEngine.addEntity(new Background(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
