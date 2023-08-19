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