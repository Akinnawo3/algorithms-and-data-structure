//method 1 (using loop)
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// mathod 2
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

const t1 = performance.now();
console.log(addUpTo(30));
const t2 = performance.now();
console.log(`the time elapsed is ${(t2 - t1) / 1000} seconds`);
