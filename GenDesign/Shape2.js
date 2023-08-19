var tileCount = 20;

function draw() {

    strokeCap(actStrokeCap);

    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            var toggle = int(random(0, 2));

            if (toggle == 0) {

                strokeWeight(mouseX / 20);
                line(posX, posY, posX + width / tileCount,
                    posY + height / tileCount);
            }

            if (toggle == 1) {
                strokeWeight(mouseY / 20);
                line(posX, posY + width / tileCount,
                    posX + height / tileCount, posY);
            }
        }
    }
}

function keyReleased() {


    if (key == '1') actStrokeCap = ROUND;

    if (key == '2') actStrokeCap = SQUARE;

    if (key == '3') actStrokeCap = PROJECT;
}