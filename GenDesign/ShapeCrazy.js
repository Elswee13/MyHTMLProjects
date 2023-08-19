var tileCount = 20;

function draw() {


    circleCount = mouseX / 30 + 1;
    endSize = map(mouseX, 0, max(width, mouseX),
        tileWidth / 2, 0);
    endOffset = map(mouseY, 0, max(height, mouseY),
        0, (tileWidth - endSize) / 2);
    for (var gridY = 0; gridY <= tileCountY; gridY++) {
        for (var gridX = 0; gridX <= tileCountX; gridX++) {

            push();
            translate(tileWidth * gridX, tileHeight * gridY);
            scale(1, tileHeight / tileWidth);

            var toggle = int(random(0, 4));
            if (toggle == 0) rotate(-HALF_PI);
            if (toggle == 1) rotate(0);
            if (toggle == 2) rotate(HALF_PI);
            if (toggle == 3) rotate(PI);
            // draw module

            for (var i = 0; i < circleCount; i++) {

                var diameter = map(i, 0, circleCount, tileWidth, endSize);
                var offset = map(i, 0, circleCount, 0, endOffset);
                ellipse(offset, 0, diameter, diameter);
            }

            pop();
        }
    }
}