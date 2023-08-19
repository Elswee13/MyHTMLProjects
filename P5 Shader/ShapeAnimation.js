var count = 0; //initialize a counter variable
function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
}

function draw() {
    background(1, 186, 240);

    //declaration of variable
    var x = width / 2 + count;
    var y = height / 2 + count;

    //circulo
    fill(237, 34, 93);
    noStroke();
    ellipse(x, y, 200, 200);

    //rectangulo
    fill(255);
    rect(x, y, 150, 30);

    //increment counter variable
    count = count + 1;
}