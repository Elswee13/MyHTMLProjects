function draw() {
    background(0, 0, 100);

    angle += speed;
    if (angle <= maxAngle + speed) {

        var pos = center.copy();
        for (var i = 0; i < joints; i++) {

            var a = angle * pow(speedRelation, i);
            if (i % 2 == 1) a = -a;

            var nextPos = p5.Vector.fromAngle(radians(a));
            nextPos.setMag((joints - i) / joints * lineLength);
            nextPos.add(pos);

            if (showPendulum) {
                noStroke();
                fill(0, 10);
                ellipse(pos.x, pos.y, 4, 4);
                noFill();
                stroke(0, 10);
                line(pos.x, pos.y, nextPos.x, nextPos.y);
            }

            pendulumPath[i].push(nextPos);
            pos = nextPos;
        }
    }
    if (showPendulumPath) {
        strokeWeight(1.6);
        for (var i = 0; i < pendulumPath.length; i++) {
            var path = pendulumPath[i];
            beginShape();

            var hue = map(i, 0, joints, 120, 360);
            stroke(hue, 80, 60, 50);
            for (var j = 0; j < path.length; j++) {
                vertex(path[j].x, path[j].y);
            }
            endShape();
        }
    }
}