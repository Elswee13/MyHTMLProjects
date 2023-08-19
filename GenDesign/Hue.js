var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {
    createCanvas(800, 300);
    background(220, 220, 220);
    noStroke();
}

function draw() {

    var index = counter % currentTileCountX;
    fill(hueValues[index],
        saturationValues[index],
        brightnessValues[index]);
    rect(posX, posY, tileWidth, tileHeight);
    counter++;

}
if (key == '1') {
    for (var i = 0; i < tileCountX; i++) {
        hueValues[i] = int(random(0, 360));
        saturationValues[i] = int(random(0, 100));
        brightnessValues[i] = int(random(0, 100));
    }
}
if (key == '2') {
    for (var i = 0; i < tileCountX; i++) {
        hueValues[i] = int(random(0, 360));
        saturationValues[i] = int(random(0, 100));
        brightnessValues[i] = 100;
    }
}
if (key == '3') {
    for (var i = 0; i < tileCountX; i++) {
        hueValues[i] = int(random(0, 360));
        saturationValues[i] = 100;
        brightnessValues[i] = int(random(0, 100));
    }
}
if (key == '7') {
    for (var i = 0; i < tileCountX; i++) {
        hueValues[i] = int(random(0, 180));
        saturationValues[i] = int(random(80, 100));
        brightnessValues[i] = int(random(50, 90));
    }
}
if (key == '9') {
    for (var i = 0; i < tileCountX; i++) {
        if (i % 2 == 0) {
            hueValues[i] = int(random(0, 360));
            saturationValues[i] = 100;
            brightnessValues[i] = int(random(0, 100));
            8
        } else {
            hueValues[i] = 195;
            saturationValues[i] = int(random(0, 100));
            brightnessValues[i] = 100;
        }
    }
}