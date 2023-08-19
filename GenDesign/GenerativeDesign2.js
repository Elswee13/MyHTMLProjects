var stepX;
var stepY;

function setup() {

    createCanvas(800, 400);
    noStroke();

    colorMode(HSB, width, height, 100);
}

function draw() {

    stepX = mouseX + 2;
    stepY = mouseY + 2;

    tileCountX = int(map(mouseX, 0, width, 2, 100));
    tileCountY = int(map(mouseY, 0, height, 2, 10));
    var tileWidth = width / tileCountX;
    var tileHeight = height / tileCountY;
    var interCol;

    for (var gridY = 0; gridY < tileCountY; gridY++) {

        var col1 = colorsLeft[gridY];
        var col2 = colorsRight[gridY];
        for (var gridX = 0; gridX < tileCountX; gridX++) {
            var amount = map(gridX, 0, tileCountX - 1, 0, 1);

            interCol = lerpColor(col1, col2, amount);

            fill(interCol);
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;
            rect(posX, posY, tileWidth, tileHeight);

        }
    }
}

function keyPressed() {

    switch (key) {
        case '1':
            segmentCount = 360;
            break;
        case '2':
            segmentCount = 45;
            break;
        case '3':
            segmentCount = 24;
            break;
        case '4':
            segmentCount = 12;
            break;
        case '5':
            segmentCount = 6;
            break;
    }
}