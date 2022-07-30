class Mirror {
    constructor(pos, r, type) {
        this.pos = pos;
        this.r = r;
        this.type = type;
        this.f = this.r / 2;
    }

    show() {
        push();
        noFill();
        strokeWeight(2);
        ellipseMode(RADIUS);
        arc(this.pos.x, this.pos.y, this.r, this.r, HALF_PI, 3 * HALF_PI);
        ellipseMode(RADIUS);
        fill(0);
        circle(this.pos.x, this.pos.y, 1);
        circle(this.pos.x - (this.r / 2), this.pos.y, 1);
        pop();
    }

    checkType() {
        if (mouseX < width / 2 - this.r) {
            this.type = "convexo";
            this.f = -this.r / 2;
        } else {
            this.type = "concavo";
            this.f = this.r / 2;
        }
    }

    calcReflectionX(objeto) {
        let d = dist(objeto.x, 0, this.pos.x - this.r, 0);
        let di = (this.f * d) / (d - this.f);

        if (this.f < 0) { return -di; } else { return di; }
    }

    calcReflectionY(objeto) {
        let d = dist(objeto.x, 0, this.pos.x - this.r, 0);
        let A = this.f / (this.f - d);

        return A * objeto.size;
    }
}