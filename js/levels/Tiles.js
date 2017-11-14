Tiles.VIEWPORT_NUM_TILES = Math.ceil(1024 / Tile.WIDTH);

function Tiles() {
    PIXI.Container.call(this);

    this.pool = new SpritesPool();
    this.createLookupTables();

    this.tiles = [];

    this.viewportX = 0;
    this.viewportTileX = 0;
}

Tiles.prototype = Object.create(PIXI.Container.prototype);

Tiles.prototype.setViewportX = function (viewportX) {
    this.viewportX = this.checkViewportXBounds(viewportX);

    let prevViewportTileX = this.viewportTileX;
    this.viewportTileX = Math.floor(this.viewportX / Tile.WIDTH);

    this.removeOldTiles(prevViewportTileX);
    this.addNewTiles();
};

Tiles.prototype.addTile = function (tileType, y) {
    let tile = new Tile(tileType, y);
    this.tiles.push(tile);
};

Tiles.prototype.checkViewportXBounds = function (viewportX) {
    let maxViewportX = (this.tiles.length - Tiles.VIEWPORT_NUM_TILES) * Tile.WIDTH;
    if (viewportX < 0) {
        viewportX = 0;
    }
    else if (viewportX > maxViewportX) {
        viewportX = maxViewportX;
    }

    return viewportX;
};

Tiles.prototype.removeOldTiles = function (prevViewPortTileX) {
    let numOldTiles = this.viewportTileX - prevViewPortTileX;
    // console.group();
    // console.log("this viewPortTileX", this.viewportTileX);
    // console.log("prevViewPortTileX", prevViewPortTileX);
    // console.log("numOldTiles", numOldTiles);
    // console.groupEnd();
    if (numOldTiles > Tiles.VIEWPORT_NUM_TILES) {
        numOldTiles = Tiles.VIEWPORT_NUM_TILES;
    }
    for (let i = prevViewPortTileX; i < prevViewPortTileX + numOldTiles; i++) {
        let tile = this.tiles[i];
        if (tile.sprite !== null) {
            this.returnTileSprite(tile.type, tile.sprite);
            this.removeChild(tile.sprite);
            tile.sprite = null;
        }
    }
};

Tiles.prototype.addNewTiles = function () {
    let firstX = -(this.viewportX % Tile.WIDTH);
    let tileIndex = 0;
    for (let i = 0; i < this.viewportTileX + Tiles.VIEWPORT_NUM_TILES; i++) {
        let tile = this.tiles[i];
        if (tile.type !== TileType.GAP && (tile.sprite === null || tile.sprite === undefined)) {
            tile.sprite = this.borrowTileSprite(tile.type);

            // console.group();
            // console.log(this.pool);
            // console.log(tile);
            // console.log(tile.sprite);
            // console.groupEnd();

            tile.sprite.position.x = firstX + (tileIndex + Tile.WIDTH);
            tile.sprite.position.y = tile.y;

            tile.sprite.height = getProportionalHeight(Tile.WIDTH, tile.sprite.width, tile.sprite.height);
            tile.sprite.width = Tile.WIDTH;

            this.addChild(tile.sprite);
        } else if (tile.sprite !== null) {
            tile.sprite.position.x = firstX + (tileIndex * Tile.WIDTH);
        }

        tileIndex += 1;
    }
};

Tiles.prototype.createLookupTables = function () {
    this.borrowTileSpriteLookup = [];
    this.borrowTileSpriteLookup[TileType.FULL_FLOOR] = this.pool.borrowFullFloor;
    this.borrowTileSpriteLookup[TileType.FULL_FLOOR_FRONT_EDGE] = this.pool.borrowFullFloorFrontEdge;
    this.borrowTileSpriteLookup[TileType.FULL_FLOOR_BACK_EDGE] = this.pool.borrowFullFloorBackEdge;

    this.returnTileSpriteLookup = [];
    this.returnTileSpriteLookup[TileType.FULL_FLOOR] = this.pool.returnFullFloor;
    this.returnTileSpriteLookup[TileType.FULL_FLOOR_FRONT_EDGE] = this.pool.returnFullFloorFrontEdge;
    this.returnTileSpriteLookup[TileType.FULL_FLOOR_BACK_EDGE] = this.pool.returnFullFloorBackEdge;
};

Tiles.prototype.borrowTileSprite = function (tileType) {
    return this.borrowTileSpriteLookup[tileType].call(this.pool);
};

Tiles.prototype.returnTileSprite = function (tileType, tileSprite) {
    return this.returnTileSpriteLookup[tileType].call(this.pool, tileSprite);
};
