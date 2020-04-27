const prompt = require("prompt-sync")();

var n = prompt("Number: ");

while (isNaN(n) || n.trim() === "") {
  n = prompt("Number: ");
}

n = n.split(""); // create an array of the inputted digits
var arr = n.filter((e,i) => i%2 === 0).reverse(); // get every other digit
arr = arr.map(e => e *= 2); // multiply them by 2
var sum = eval(arr.join("").split("").join("+")); // make the sum of all those digits
var result = sum + eval(n.filter((e,i) => i%2 !== 0).reverse().join("").split("").join("+")); // add that sum to the sum of the digits that weren't multiplied by 2
if (n.length === 15 && n[0] === "3" && (n[1] === "4" || n[1] === "7")) { // check if last character of result is "0"
  console.log("AMEX")
} else if (n.length === 16 && n[0] === "5" && (n[1] === "1" || n[1] === "2" || n[1] === "3" || n[1] === "4" || n[1] === "5")) {
  console.log("MASTERCARD")
} else if ((n.length === 13 || n.length === 16) && n[0] === "4" && result%10 === 0) {
  console.log("VISA");
} else {
  console.log("INVALID")
}
