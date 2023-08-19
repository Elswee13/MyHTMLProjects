//*This practice exercise consist in retrieve the number or character and character length*//

var exercise = prompt("Compose my exercise xD:");
var exerciseCount = exercise.length;
alert("You have written:" + exerciseCount + " characters, you have" + (140 - exerciseCount) + "characters remaining.");

//*Slicing practice*//

var name = "Elswee";
name.slice(0, 1);


// Method to change lowercase into uppercase (viceversa)

var name = "Elswee";
name.toUpperCase();
name.toLowerCase();
alert("what is your name?" + name);

// incremente and decrement methods
var x = 5;
var y = x++;
x++; //6
x--; //4
y += 1; //4

function lifeInWeek(age) {
    var yearsremaining = 90 - age;
    var days = yearsramining - 365;
    var months = yearsremaining - 12;
    var weeks = yearsremaining - 52;

    console.log(yearsremaining + days + months + weeks);
}
lifeInWeek(13);