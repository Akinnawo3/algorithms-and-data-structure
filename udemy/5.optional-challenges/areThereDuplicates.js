function areThereDuplicates(...args) {
  // good luck. (supply any arguments you deem necessary.)

  let counter = {};

  for (let char of args) {
    counter[char] = ++counter[char] || 1;
  }

  for (let key in counter) {
    if (counter[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
