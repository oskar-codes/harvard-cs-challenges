const prompt = require("prompt-sync")();

var n = prompt("Height: ");

while (isNaN(n) || n.trim() === "" || parseInt(n) < 1 || parseInt(n) > 8) {
  n = prompt("Height: ");
}

n = parseInt(n);

for (var i=1; i<=n; i++) {
  console.log("#".repeat(i).padStart(n," "));
}
