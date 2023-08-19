function setup() {
    createCanvas(800, 300);
    background(1, 75, 100);
}

function draw() {
    // declaration of variables
    var x = mouseX;
    var y = mouseY;
    var size = 25;

    fill(237, 34, 93, 100);
    rect(x, y, size * 0.75, size * 0.15);

    if (mouseIsPressed === true) {
        fill(255);
        rect(x, y, size * 0.75, size * 0.15);

    }

}