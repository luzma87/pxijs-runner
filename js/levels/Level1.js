function Level1(tiles) {
    this.tiles = tiles;
    this.createMap();
}

Level1.prototype.createMap = function () {
    let tileCount = 10;

    let y = 100;
    for (let i = 0; i < tileCount; i++) {
        this.tiles.addTile(TileType.FULL_FLOOR, y);
    }
};
