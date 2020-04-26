const prompt = require("prompt-sync")();

var n = prompt("Change owed: ");

while (isNaN(n) || n.trim() === "" || parseFloat(n) * 100 <= 0) {
  n = prompt("Change owed: ");
}

n = Math.round(parseFloat(n)*100);

const r = [25,10,5,1];
const biggestAvailable = (n) => {
  for (var i=0; i<r.length; i++) {
    if (r[i] <= n) return r[i];
  };
};

var counter = 0;
while (n > 0) {
  n -= biggestAvailable(n);
  counter++;
}

console.log(counter);
