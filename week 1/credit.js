const prompt = require("prompt-sync")();

var n = prompt("Number: ");

while (isNaN(n) || n.trim() === "") {
  n = prompt("Number: ");
}

n = n.split(""); // create an array of the inputted digits
var arr = n.filter((e,i) => i%2 === 0); // get every other digit
arr = arr.map(e => e *= 2); // multiply them by 2
var sum = eval(arr.join("").split("").join("+")); // make the sum of all those digits
var result = sum + eval(n.filter((e,i) => i%2 !== 0).join("+")); // add that sum to the sum of the digits that weren't multiplied by 2
if (result.toString().charAt(result.toString().length-1) === "0") { // check if last character of result is "0"
  console.log("VISA");
} else {
  console.log("INVALID")
}
