function draw() {
    background(255);

    var newR = random(1, 7);
    var newX = random(newR, width - newR);
    var newY = random(newR, height - newR);
    var closestDist = Number.MAX_VALUE;
    var closestIndex = 0;

    for (var i = 0; i < currentCount; i++) {
        var newDist = dist(newX, newY, x[i], y[i]);
        if (newDist < closestDist) {
            closestDist = newDist;
            closestIndex = i;
        }
    }

    // fill(230);
    //ellipse(newX, newY, newR * 2, newR * 2);
    //line(newX, newY, x[closestIndex], y[closestIndex]);

    var angle = atan2(newY - y[closestIndex],
        newX - x[closestIndex]);
    x[currentCount] = x[closestIndex] + cos(angle) *
        (r[closestIndex] + newR);
    y[currentCount] = y[closestIndex] + sin(angle) *
        (r[closestIndex] + newR);
    r[currentCount] = newR;
    currentCount++;
    for (var i = 0; i < currentCount; i++) {
        fill(50);

        ellipse(x[i], y[i], r[i] * 2, r[i] * 2);
    }

    if (currentCount >= maxCount) noLoop();
}