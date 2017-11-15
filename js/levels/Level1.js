function Level1(tiles) {
    this.tiles = tiles;
    this.createMap();
}

Level1.prototype.createMap = function () {
    const spanCount = 100;
    const y = Main.HEIGHT - Tile.HEIGHT;

    for (let i = 0; i < spanCount; i++) {
        const length = getRandomInt(3, 10);
        // const gapLength = getRandomInt(1);
        const gapLength = 1;

        this.createSpan(length, y);
        this.createGap(gapLength);
    }
};

Level1.prototype.createSpan = function (spanLength, y) {
    this.tiles.addTile(TileType.FULL_FLOOR_FRONT_EDGE, y);
    for (let i = 0; i < spanLength - 2; i++) {
        this.tiles.addTile(TileType.FULL_FLOOR, y);
    }
    this.tiles.addTile(TileType.FULL_FLOOR_BACK_EDGE, y);
};

Level1.prototype.createGap = function (spanLength) {
    for (let i = 0; i < spanLength; i++) {
        this.tiles.addTile(TileType.GAP);
    }
};
