function setup() {
    createCanvas(800, 300);

}

function draw() {
    background(1, 75, 100);
    //circulo
    fill(237, 34, 93);
    noStroke();
    var diameter = 50;
    for (var i = 0; i < width / diameter; i = i + 1) {
        for (var j = 0; j < height / diameter; j = j + 1) {
            rect(diameter / 2 + i * diameter,
                diameter / 2 + j * diameter,
                diameter * noise(frameCount / 100 + j * 10000 + i * 10000),
                // applying a different animation to each rectangle
                diameter * noise(frameCount / 100 + j * 10000 + i * 10000)
            );
        }
    }
}