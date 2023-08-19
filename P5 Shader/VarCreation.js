function setup() {
    createCanvas(800, 400);
    rectMode(CENTER);
}

function draw() {
    background(1, 186, 240);

    var x = 400;
    var y = 150;

    //circulo
    fill(237, 34, 93);
    noStroke();
    ellipse(x, y, 200, 200);

    //rectangulo
    fill(255);
    rect(x, y, 150, 30);
}