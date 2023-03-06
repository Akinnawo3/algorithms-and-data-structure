var letters = [];
var word = "racecar ";

var rword = "";

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

console.log(rword===word? `${word} is a palindromw` : `${word} is not a palindrome`)