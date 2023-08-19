function draw() {

    strokeWeight(3);
    overlay();

    var x = map(mouseX, 0, width, -50, 50);
    var a = map(mouseX, 0, width, -0.5, 0.5);
    var s = map(mouseY, 0, height, -0.7, 1);

    if (drawMode == 2) translate(x, 0);
    if (drawMode == 1) rotate(a);
    scale(s);

    strokeWeight(2);
    overlay();
}

function overlay() {
    var w = width - 100;
    var h = height - 100;

    if (drawMode == 1) {
        for (var i = -w / 2; i < w / 2; i += 5) {
            line(i, -h / 2, i, h / 2);
        }
    }

    if (drawMode == 2) {
        for (var i = 0; i < w; i += 10) {
            ellipse(0, 0, i);
        }
    }
}