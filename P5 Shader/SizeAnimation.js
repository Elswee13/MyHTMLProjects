var count = 0; //initialize a counter variable
function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
}

function draw() {
    background(1, 186, 240);

    //declaration of variable
    var x = width / 2;
    var y = height / 2;
    var size = 200 + count; // control the size of the shapes

    //circulo
    fill(237, 34, 93);
    noStroke();
    ellipse(x, y, size, size);

    //rectangulo
    fill(255);
    rect(x, y, size * 0.75, size * 0.15);

    //increment counter variable
    count = count + 1;
}