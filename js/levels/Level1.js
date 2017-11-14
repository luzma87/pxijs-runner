function Level1(tiles) {
    this.tiles = tiles;
    this.createMap();
}

Level1.prototype.createMap = function () {

    this.tiles.addTile(TileType.FULL_FLOOR, 100);
    this.tiles.addTile(TileType.GAP);
    this.tiles.addTile(TileType.FULL_FLOOR, 100);

    // let spanCount = 100;
    //
    // let y = 100;
    // for (let i = 0; i < spanCount; i++) {
    //     const length = getRandomInt(3, 10);
    //     const gapLength = getRandomInt(1, 3);
    //
    //     this.createSpan(length, y);
    //     this.createGap(gapLength);
    // }
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
