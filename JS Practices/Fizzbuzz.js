var output = [];
var count = 1;

function FizzBuzz() {

    //* for (var count = 1; count > 101; count++) {}*//
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;

    console.log(output);
}