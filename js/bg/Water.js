Water.DELTA_X = Mountains.DELTA_X * 2;
Water.TEXTURE_PATH = "full_water-waves";

function Water() {
    let texture = PIXI.Texture.fromFrame(Water.TEXTURE_PATH);

    let sprite = PIXI.extras.TilingSprite.call(this, texture, Main.WIDTH, Tile.HEIGHT / 2);
    sprite.tileScale.x = 0.35;
    sprite.tileScale.y = 0.35;

    this.position.x = 0;
    this.position.y = Main.HEIGHT - Tile.HEIGHT/2;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Water.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Water.prototype.setViewportX = function (newViewportX) {
    let distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Water.DELTA_X);
};
