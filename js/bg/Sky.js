Sky.DELTA_X = 0.032;
Sky.TEXTURE_PATH = "resources/bg/sky.png";

function Sky() {
    let texture = PIXI.Texture.fromImage(Sky.TEXTURE_PATH);

    let sprite = PIXI.extras.TilingSprite.call(this, texture, Main.WIDTH, Main.HEIGHT);
    sprite.tileScale.x = 0.35;
    sprite.tileScale.y = 0.35;

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Sky.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Sky.prototype.setViewportX = function (newViewportX) {
    let distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Sky.DELTA_X);
};
