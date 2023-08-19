var num;

function setup() {
    num = 1;
    createCanvas(800, 300);
    textAlign(CENTER, CENTER);

}

function draw() {
    background(220);
    fill(237, 34, 93);
    textSize(48);

    if (num === 1) {
        //esto se ejecuta si el num es 1
        text('TRUE', width / 2, height / 2);
    }
}