function Scroller(stage) {
    this.sky = new Sky();
    stage.addChild(this.sky);

    this.mountain = new Mountain();
    stage.addChild(this.mountain);

    this.viewportX = 0;
}

Scroller.prototype.setViewportX = function (viewportX) {
    this.viewportX = viewportX;
    this.sky.setViewportX(viewportX);
    this.mountain.setViewportX(viewportX);
};

Scroller.prototype.moveViewportXBy = function (units) {
    let newViewportX = this.viewportX + units;
    this.setViewportX(newViewportX);
};
