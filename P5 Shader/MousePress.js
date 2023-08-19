var toggle = true;

function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
}

function draw() {
    //para mostrar diferentes colores
    value
    if (toggle === true) {
        background(1, 186, 240);
    } else {
        background(250, 150, 50);
    }
    //declaracion de variables
    var x = width / 2;
    var y = height / 2;
    var size = 200;
    if (frameCount < 60) {
        size = size + frameCount;
    } else {
        size = size + 60;
    }

    //circulo
    fill(237, 34, 93);
    noStroke();
    ellipse(x, y, size, size);
    //rectangulo
    fill(255);
    rect(x, y, size * 0.75, size * 0.15);


    function mousePressed() {
        toggle = !toggle;
    }
}