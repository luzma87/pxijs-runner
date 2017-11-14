function SpritesPool() {
    this.createFullFloorTile();
}

SpritesPool.prototype.createFullFloorTile = function () {
    this.fullFloor = [];

    for (let i = 0; i < 12; i++) {
        let sprite = PIXI.Sprite.fromFrame("full_grass-top");
        this.fullFloor.push(sprite);
    }
};

SpritesPool.prototype.borrowFullFloor = function () {
    return this.fullFloor.shift();
};

SpritesPool.prototype.returnFullFloor = function (sprite) {
    this.fullFloor.push(sprite);
};
