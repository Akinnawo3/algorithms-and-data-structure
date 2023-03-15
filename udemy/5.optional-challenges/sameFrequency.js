function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.

  let str1 = num1.toString();
  let str2 = num2.toString();

  let counter1 = {};
  let counter2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    counter1[num1.toString()[i]] = ++counter1[num1.toString()[i]] || 1;
    counter2[num2.toString()[i]] = ++counter2[num2.toString()[i]] || 1;
  }


  for (key in counter1) {
    if (!(key in counter2) || counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true

console.log(sameFrequency(22, 222)); // false
