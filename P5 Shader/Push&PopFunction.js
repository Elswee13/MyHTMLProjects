function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
    noStroke();
    angleMode(DEGREES);
}

function draw() {
    background(270);
    push();
    translate(width / 2, height / 2);
    rotate(45);

    fill(237, 34, 93);
    rect(0, 0, 150, 150);
    pop();

    fill(255, 255, 255);
    rect(0, 0, 75, 75);
}