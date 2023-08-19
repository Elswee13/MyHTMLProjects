var num;

function setup() {
    num = 2;
    createCanvas(800, 300);
    textAlign(CENTER, CENTER);

}

function draw() {
    background(220);
    fill(237, 34, 93);
    textSize(48);

    if (num === 1) {
        //esto se ejecuta si el num es 1
        value = 'TRUE';

    } else {
        //esto se ejecuta si el no es num es 1
        value = 'FALSE';

    }
    text(value, width / 2, height / 2);
}