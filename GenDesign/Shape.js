function draw() {
    background(255);

    translate(width / 2, height / 2);

    var circleResolution = map(mouseY, 0, height, 2, 80);

    var radius = mouseX - width / 2 + 0.5;

    var angle = TWO_PI / circleResolution;
    strokeWeight(mouseY / 20);
    beginShape();
    for (var i = 0; i <= circleResolution; i++) {
        var x = cos(angle * i) * radius;
        var y = sin(angle * i) * radius;
        line(0, 0, x, y);

        // vertex(x, y);
    }
    endShape(CLOSE);
}