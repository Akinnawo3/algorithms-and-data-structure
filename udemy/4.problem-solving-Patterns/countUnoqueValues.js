// implement a function called "countUniqueValues",
//  which accepts a sorted array and count the unique values in the array
// there can be negative values in the array but it will always be sorted

function countUniqueValues(arr) {
  let j = 0;

  for (let i in arr) {
    if (arr[i] > arr[j]) {
      arr.splice(j + 1, 0, arr[i]);
      j += 2;
      //   console.log(arr[i])
      //   console.log(arr)
      //   console.log(j)
    }
  }
  return j;

  //   const res = [];

  //   for (item of arr) {
  //     if (!res.includes(item)) {
  //       res.push(item);
  //     }
  //   }
  //   return res.length;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]));
