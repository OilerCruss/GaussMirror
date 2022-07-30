class Objeto {
    constructor(x, size, color) {
        this.size = size;
        this.x = x;
        this.color = color;
    }

    show() {
        push();
        rectMode(CENTER);
        noStroke();
        fill(this.color);
        rect(this.x, height / 2 - this.size / 2, 5, this.size);
        pop();
    }

    update() {
        this.x = mouseX;
    }
}