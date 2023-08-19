//Declaracion variables globales
var canvasWidth = 800;
var canvasHeight = 300;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);
}

function draw() {
    background(1, 186, 240);

    //declaracion de variables
    var x = canvasWidth / 2;
    var y = canvasHeight / 2;

    //circulo
    fill(237, 34, 93);
    noStroke();
    ellipse(x, y, 200, 200);

    //rectangulo
    fill(255);
    rect(x, y, 150, 30);
}