// fib
// Write a recursive function called fib which accepts
//  a number and returns the nth number in the Fibonacci
//  sequence. Recall that the Fibonacci sequence is the sequence of
//  whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and
// where every number thereafter is equal to the sum of the previous two numbers.

// console.log(fib(4)) // 3
console.log(fib(10)); // 55
// fib(28) // 317811
// fib(35) // 9227465

function findsum(num) {
  // add whatever parameters you deem necessary - good luck!
  if (num === 0) return 0;
  if (num === 1) return 1;
  return findsum(num - 2) + findsum(num - 1);
}

function fib(num) {
  let res = "";
  for (let i = 0; i <= num; i++) {
    // console.log(i)
    res += `${findsum(i)}${i !== num ? "," : ""}`;
  }
  return res;
}
