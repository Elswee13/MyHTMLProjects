function setup() {
    createCanvas(800, 400);
    rectMode(CENTER);
}

function draw() {
    background(1, 186, 240);
    //circulo
    fill(237, 34, 93);
    noStroke();
    ellipse(400, 150, 200, 200);

    //rectangulo
    fill(255);
    rect(400, 150, 150, 30);
}