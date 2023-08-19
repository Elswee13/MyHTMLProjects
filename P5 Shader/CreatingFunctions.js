function functionName() {
    // function body
}
// function circle
function circle(x, y, diameter) {
    ellipse(x, y, diameter, diameter);
}

// function Variable visibility (scope)
function setup() {
    createCanvas(800, 300);
    sayHello();
}

function draw() {
    background(220);
}

function sayHello() {
    var message = 'Hello World!';
    console.log(message);
}
console.log(message); // this line will throw an error,
// because the variable message is only visible from inside the function