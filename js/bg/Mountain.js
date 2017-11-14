Mountain.DELTA_X = 0.032;
Mountain.TEXTURE_PATH = "resources/bg/layer-2-mountain.png";

function Mountain() {
    let texture = PIXI.Texture.fromImage(Mountain.TEXTURE_PATH);

    let sprite = PIXI.extras.TilingSprite.call(this, texture, Main.WIDTH, Main.HEIGHT);
    sprite.tileScale.x = 0.35;
    sprite.tileScale.y = 0.35;

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Mountain.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Mountain.prototype.setViewportX = function (newViewportX) {
    let distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Mountain.DELTA_X);
};
