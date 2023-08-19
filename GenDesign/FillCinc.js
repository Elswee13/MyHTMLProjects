function draw() {
    background(255);

    var newX = random(maxRadius, width - maxRadius);
    var newY = random(maxRadius, height - maxRadius);
    if (mouseIsPressed && mouseButton == LEFT) {

        newX = random(mouseX - mouseRect, mouseX + mouseRect);
        newY = random(mouseY - mouseRect, mouseY + mouseRect);
    }
    var intersection = false;

    for (var newR = maxRadius; newR >= minRadius; newR--) {
        for (var i = 0; i < circles.length; i++) {
            var d = dist(newX, newY, circles[i].x, circles[i].y);

            intersection = d < circles[i].r + newR;
            if (intersection) {
                break;
            }
        }

        if (!intersection) {
            circles.push(new Circle(newX, newY, newR));
            break;
        }
    }
    for (var i = 0; i < circles.length; i++) {

        if (showLine) {
            var closestCircle;
            for (var j = 0; j < circles.length; j++) {
                var d = dist(circles[i].x, circles[i].y,
                    circles[j].x, circles[j].y);
                if (d <= circles[i].r + circles[j].r + 1) {
                    closestCircle = circles[j];
                    break;
                }
            }
            if (closestCircle) {
                stroke(100, 230, 100);
                strokeWeight(0.75);
                line(circles[i].x, circles[i].y,
                    closestCircle.x, closestCircle.y);
            }
        }

        if (showCircle) circles[i].draw();
    }

}