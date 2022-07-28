class Objeto {
    constructor(x, size) {
        this.size = size;
        this.x = x;
    }

    show() {
        line(this.x, height / 2 - this.size, this.x, height / 2);
    }

    update() {
        this.x = mouseX;
    }
}