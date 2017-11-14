Mountains.DELTA_X = Sky.DELTA_X * 2;
Mountains.TEXTURE_PATH = "resources/bg/mountains.png";

function Mountains() {
    let texture = PIXI.Texture.fromImage(Mountains.TEXTURE_PATH);

    let sprite = PIXI.extras.TilingSprite.call(this, texture, Main.WIDTH, Main.HEIGHT);
    sprite.tileScale.x = 0.35;
    sprite.tileScale.y = 0.35;

    this.position.x = 0;
    this.position.y = 0;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Mountains.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Mountains.prototype.setViewportX = function (newViewportX) {
    let distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Mountains.DELTA_X);
};
