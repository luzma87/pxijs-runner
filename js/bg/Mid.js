Mid.DELTA_X = 0.032;
Mid.TEXTURE_PATH = "resources/bg/layer-2-mountain.png";

function Mid() {
    let texture = PIXI.Texture.fromImage(Mid.TEXTURE_PATH);

    let sprite = PIXI.extras.TilingSprite.call(this, texture, Main.WIDTH, Main.HEIGHT);
    sprite.tileScale.x = 0.35;
    sprite.tileScale.y = 0.35;

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Mid.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Mid.prototype.setViewportX = function (newViewportX) {
    let distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Mid.DELTA_X);
};
