const prompt = require('prompt-sync')();

var key = prompt("Key: ").toUpperCase();

if (!/^[A-Z]{26}$/.test(key)) {
  console.log("Invalid Key");
  process.exit();
}

key = key.split("");
const chars = prompt("Message: ").split("");

for (var i=0; i<chars.length; i++) {
  let c = chars[i].charCodeAt(0);
  if (c > 64 && c < 91) {
    chars[i] = key[c-65]
  } else if (c > 96 && c < 123) {
    chars[i] = key[c-97].toLowerCase();
  }
}

console.log("Cyphertext: " + chars.join(""));
