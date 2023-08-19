function draw() {
    var speed = int(map(mouseX, 0, width, 0, 20));
    for (var i = 0; i <= speed; i++) {
        strokeWeight(1);
        stroke(180, 0, 0);

        point(posX, posY);

        posX += cos(radians(angle)) * stepSize;
        posY += sin(radians(angle)) * stepSize;
        reachedBorder = false;

        if (posY <= 5) {
            direction = SOUTH;
            reachedBorder = true;
        } else if (posX >= width - 5) {
            direction = WEST;
            reachedBorder = true;
        }

        loadPixels();

        var currentPixel = get(floor(posX), floor(posY));
        if ((currentPixel[0] != 255 && currentPixel[1] != 255 &&
                currentPixel[2] != 255) || reachedBorder) {
            angle = getRandomAngle(direction);

            var distance = dist(posX, posY,
                posXcross, posYcross);
            if (distance >= minLength) {
                strokeWeight(3);
                stroke(0, 0, 0);
                line(posX, posY, posXcross, posYcross);
            }

            posXcross = posX;
            posYcross = posY;
        }
    }
}

function getRandomAngle(currentDirection) {
    var a = (floor(random(-angleCount, angleCount)) +
        0.5) * 90 / angleCount;
    if (currentDirection == NORTH) return a - 90;
    if (currentDirection == EAST) return a;
    if (currentDirection == SOUTH) return a + 90;
    if (currentDirection == WEST) return a + 180;
    return 0;
}