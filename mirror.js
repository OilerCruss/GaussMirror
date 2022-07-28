class Mirror {
    constructor(pos, r, type) {
        this.pos = pos;
        this.r = r;
        this.type = type;
    }

    show() {
        push();
        noFill();
        strokeWeight(2);
        ellipseMode(RADIUS);
        arc(this.pos.x, this.pos.y, this.r, this.r, HALF_PI, 3 * HALF_PI);
        pop();
    }

}