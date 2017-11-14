Ground.DELTA_X = Mountains.DELTA_X * 2;
Ground.TEXTURE_PATH = "resources/bg/ground.png";

function Ground() {
    let texture = PIXI.Texture.fromImage(Ground.TEXTURE_PATH);

    let sprite = PIXI.extras.TilingSprite.call(this, texture, Main.WIDTH, Main.HEIGHT);
    sprite.tileScale.x = 0.35;
    sprite.tileScale.y = 0.35;

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Ground.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Ground.prototype.setViewportX = function (newViewportX) {
    let distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Ground.DELTA_X);
};
