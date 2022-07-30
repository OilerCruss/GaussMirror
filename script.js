let espelho, objeto, reflexo;
let initialSize = 50;

function setup() {
    createCanvas(windowWidth, windowHeight);
    espelho = new Mirror(createVector(width / 2, height / 2), 200);
    objeto = new Objeto(width, initialSize, '#0B6A88');
    reflexo = new Objeto(espelho.calcReflectionX(objeto), initialSize, '#F16164');
}
function draw() {
    background(220);

    line(0, height / 2, width, height / 2); // eixo principal

    espelho.show();
    espelho.checkType();
    objeto.update();
    objeto.show();
    reflexo.x = espelho.calcReflectionX(objeto) + espelho.pos.x - espelho.r;
    reflexo.size = espelho.calcReflectionY(objeto);
    reflexo.show();
}

