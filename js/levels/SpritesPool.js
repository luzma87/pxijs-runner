function SpritesPool() {
    this.createFullFloor();
    this.createFullFloorFrontEdges();
    this.createFullFloorBackEdges();
}

SpritesPool.prototype.createFullFloor = function () {
    this.fullFloor = [];

    this.addSprites(this.fullFloor, 20, "full_grass-top");
};

SpritesPool.prototype.createFullFloorFrontEdges = function () {
    this.fullFloorFrontEdges = [];

    this.addSprites(this.fullFloorFrontEdges, 5, "full_grass-top-edge");
    this.addSprites(this.fullFloorFrontEdges, 5, "full_grass-top-corner");

    this.fullFloorFrontEdges = shuffle(this.fullFloorFrontEdges);
};

SpritesPool.prototype.createFullFloorBackEdges = function () {
    this.fullFloorBackEdges = [];

    this.addSprites(this.fullFloorBackEdges, 5, "full_grass-top-edge", true);
    this.addSprites(this.fullFloorBackEdges, 5, "full_grass-top-corner", true);

    this.fullFloorBackEdges = shuffle(this.fullFloorBackEdges);
};

SpritesPool.prototype.borrowFullFloor = function () {
    return this.fullFloor.shift();
};

SpritesPool.prototype.returnFullFloor = function (sprite) {
    this.fullFloor.push(sprite);
};

SpritesPool.prototype.borrowFullFloorFrontEdge = function () {
    return this.fullFloorFrontEdges.shift();
};

SpritesPool.prototype.returnFullFloorFrontEdge = function (sprite) {
    this.fullFloorFrontEdges.push(sprite);
};

SpritesPool.prototype.borrowFullFloorBackEdge = function () {
    return this.fullFloorBackEdges.shift();
};

SpritesPool.prototype.returnFullFloorBackEdge = function (sprite) {
    this.fullFloorBackEdges.push(sprite);
};

SpritesPool.prototype.addSprites = function (array, amount, texturePath, isFlipped) {
    isFlipped = isFlipped || false;
    for (let i = 0; i < amount; i++) {
        let sprite = PIXI.Sprite.fromFrame(texturePath);
        if (isFlipped) {
            sprite.scale.x = -1;
        }
        array.push(sprite);
    }
};

