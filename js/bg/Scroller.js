function Scroller(stage) {
    this.far = new Far();
    stage.addChild(this.far);

    this.mid = new Mid();
    stage.addChild(this.mid);

    this.viewportX = 0;
}

Scroller.prototype.setViewportX = function (viewportX) {
    this.viewportX = viewportX;
    this.far.setViewportX(viewportX);
    this.mid.setViewportX(viewportX);
};

Scroller.prototype.moveViewportXBy = function (units) {
    let newViewportX = this.viewportX + units;
    this.setViewportX(newViewportX);
};
