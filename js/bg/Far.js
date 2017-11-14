Far.DELTA_X = 0.064;
Far.TEXTURE_PATH = "resources/bg/layer-1-sky.png";

function Far() {
    let texture = PIXI.Texture.fromImage(Far.TEXTURE_PATH);

    let sprite = PIXI.extras.TilingSprite.call(this, texture, Main.WIDTH, Main.HEIGHT);
    sprite.tileScale.x = 0.35;
    sprite.tileScale.y = 0.35;

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Far.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Far.prototype.setViewportX = function (newViewportX) {
    let distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Far.DELTA_X);
};
