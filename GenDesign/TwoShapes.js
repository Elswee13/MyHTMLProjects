function setup() {
    noCanvas();

    for (var y = 0; y < rows; y++) {
        for (var x = 0; x < cols; x++) {

            var box = createCheckbox();
            box.style('display', 'inline');
            box.parent('container');
            boxes.push(box);
        }

        var linebreak = createSpan('<br/>');
        linebreak.parent('mirror');
    }

    slider = createSlider(0, 255, 0);
}
createCheckbox(style(), parent());

function draw() {
    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.height; x++) {

            var c = color(img.get(x, y));
            var bright = (red(c) + green(c) + blue(c)) / 3;

            var threshold = slider.value();

            var checkIndex = x + y * cols;

            if (bright > threshold) {
                boxes[checkIndex].checked(false);
            } else {
                boxes[checkIndex].checked(true);
            }
        }
    }
}