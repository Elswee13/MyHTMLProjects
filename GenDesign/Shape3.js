var tileCount = 20;

function draw() {

    translate(width / tileCount / 2, height / tileCount / 2);

    strokeWeight(mouseY / 60);
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {
            var posX = width / tileCount * gridX;
            var posY = height / tileCount * gridY;

            var shiftX = random(-mouseX, mouseX) / 20;
            var shiftY = random(-mouseX, mouseX) / 20;

            ellipse(posX + shiftX, posY + shiftY,
                mouseY / 15, mouseY / 15);
        }
    }
}