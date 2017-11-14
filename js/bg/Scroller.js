function Scroller(stage) {
    this.sky = new Sky();
    stage.addChild(this.sky);

    this.mountains = new Mountains();
    stage.addChild(this.mountains);

    this.ground = new Ground();
    stage.addChild(this.ground);

    this.fence = new Fence();
    stage.addChild(this.fence);

    this.tiles = new Tiles();
    stage.addChild(this.tiles);

    new Level1(this.tiles);

    this.viewportX = 0;
}

Scroller.prototype.setViewportX = function (viewportX) {
    this.viewportX = viewportX;
    this.sky.setViewportX(viewportX);
    this.mountains.setViewportX(viewportX);
    this.ground.setViewportX(viewportX);
    this.fence.setViewportX(viewportX);

    this.tiles.setViewportX(viewportX);
};

Scroller.prototype.moveViewportXBy = function (units) {
    let newViewportX = this.viewportX + units;
    this.setViewportX(newViewportX);
};
