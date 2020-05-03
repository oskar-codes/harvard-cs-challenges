const prompt = require('prompt-sync')();

const offset = parseInt(prompt("Offset: "));
const msg = prompt("Message: ");

var chars = msg.split("");

for (var i=0; i<chars.length; i++) {
  let c = chars[i].charCodeAt(0);
  if (c > 64 && c < 91) {
    chars[i] = String.fromCharCode(((c - 65 + offset) % 26) + 65);
  } else if (c > 96 && c < 123) {
    chars[i] = String.fromCharCode(((c - 97 + offset) % 26) + 97);
  }
}

console.log(chars.join(""));
