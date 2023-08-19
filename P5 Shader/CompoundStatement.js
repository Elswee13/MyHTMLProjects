var size;

function setup() {
    createCanvas(800, 300);
    rectMode();
    size = 200;
}

function draw() {
    background(1, 186, 240);

    var x = width / 2;
    var y = height / 2;
    var size = 200;

    //if (frameCount < 30 || frameCount > 120) {        size = size + frameCount; }
    //if (20 < frameCount && frameCount < 30) {        size = size + frameCount; }
    if (frameCount < 20) {
        size = size + frameCount;
    } else {
        size = size + 30;
    }
    //practice
    fill(0);
    rect(x, y, size * 0.75, size * 0.15);

    fill(220);
    rect(x, y, size * 0.25, size * 0.10);

    fill(255);
    rect(x, y, size * 0.35, size * 0.05);

    fill(250);
    rect(x, y, size * 0.10, size * 0.15);
}