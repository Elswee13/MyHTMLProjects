var circle_1;
var circle_2;
var circle_3;

function setup() {
    createCanvas(800, 300);
    // mis circulitos xD
    circle_1 = new Circle();
    circle_2 = new Circle();
    circle_3 = new Circle();
}

function draw() {
    background(220);
    // las propiedades de mis circulitos xD
    fill(255, 345, 55)
    noStroke();
    circle_1.draw();
    circle_1.grow();

    fill(1, 234, 93);
    circle_2.x = 150;
    circle_2.draw();
    circle_2.grow();

    fill(237, 34, 93);
    circle_3.x = 650;
    circle_3.draw();
    circle_3.grow();
}
var Circle = function() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 50;
    this.draw = function() {
        ellipse(this.x, this.y, this.size, this.size);
    };
    this.grow = function() {
        if (this.size < 200) {
            this.size += 1;
        }
    };
};