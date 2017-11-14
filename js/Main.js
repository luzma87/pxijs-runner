Main.WIDTH = 1024;
Main.HEIGHT = 500;

Main.MIN_SCROLL_SPEED = 5;

function Main() {
    this.stage = new PIXI.Container();
    this.level1 = new PIXI.Container();

    this.stage.addChild(this.level1);

    this.renderer = PIXI.autoDetectRenderer(
        Main.WIDTH,
        Main.HEIGHT
    );
    this.renderer.view.style.border = "1px dashed purple";

    document.body.appendChild(this.renderer.view);

    this.scrollSpeed = Main.MIN_SCROLL_SPEED;

    this.loadSpriteSheet();
}

Main.prototype.update = function () {
    this.scroller.moveViewportXBy(this.scrollSpeed);

    this.renderer.render(this.stage);
    requestAnimationFrame(this.update.bind(this));
};

Main.prototype.loadSpriteSheet = function () {
    let loader = PIXI.loader;
    loader.add([
        Sky.TEXTURE_PATH,
        Mountains.TEXTURE_PATH,
        "resources/world/tiles.json"
    ]);
    loader.once("complete", this.spriteSheetLoaded.bind(this));
    loader.load();
};

Main.prototype.spriteSheetLoaded = function () {
    this.scroller = new Scroller(this.level1);
    requestAnimationFrame(this.update.bind(this));
};
