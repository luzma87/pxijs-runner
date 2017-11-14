Fence.DELTA_X = Ground.DELTA_X;
Fence.TEXTURE_PATH = "resources/bg/fence.png";

function Fence() {
    let texture = PIXI.Texture.fromImage(Fence.TEXTURE_PATH);

    let sprite = PIXI.extras.TilingSprite.call(this, texture, Main.WIDTH, Main.HEIGHT/2);
    sprite.tileScale.x = 0.15;
    sprite.tileScale.y = 0.15;

    this.position.x = 0;
    this.position.y = 265;
    this.tilePosition.x = 0;
    this.tilePosition.y = 0;

    this.viewportX = 0;
}

Fence.prototype = Object.create(PIXI.extras.TilingSprite.prototype);

Fence.prototype.setViewportX = function (newViewportX) {
    let distanceTravelled = newViewportX - this.viewportX;
    this.viewportX = newViewportX;
    this.tilePosition.x -= (distanceTravelled * Fence.DELTA_X);
};
