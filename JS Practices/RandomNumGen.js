var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

var name1 = "Jack Sparrow";
var name2 = "Camille";
var result = "";


if (loveScore > 50 && loveScore <= 100) {
    result = "you are match";
}
if (loveScore < 50) {
    result = " you are not match";
} else {
    result = " you are not match";
}

console.log("Your name is: " + name1 + "your love score is: " + loveScore + " Your match is: " + name2 +
    " with her love score: " + loveScore + " " + result);