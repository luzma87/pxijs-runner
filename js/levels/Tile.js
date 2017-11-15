Tile.WIDTH = 72;
Tile.HEIGHT = 72;
Tile.TEXTURE_PATH = "resources/world/tiles.json";

function Tile(type, y) {
    this.type = type;
    this.y = y;
    this.sprite = null;
}
