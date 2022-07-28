let mirror, objeto;
function setup() {
    createCanvas(800, 800);
    mirror = new Mirror(createVector(width / 2, height / 2), 150, "concavo");
    objeto = new Objeto(width, 20);
    //vetor = createVector
}

function draw() {
    background(200);

    line(0, height / 2, width, height / 2);
    mirror.show();
    objeto.update();
    objeto.show();
}

