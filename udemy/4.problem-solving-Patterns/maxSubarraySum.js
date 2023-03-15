// write a function called "maxSubarraySum" which accepts an array of integers
// and a number called "n" . the function should calculate the maximum
// sum of n consecutive integer in the array.

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxsum = -Infinity;
  let tempsum = -Infinity;

  for (let i = 0; i < num; i++) {
    maxsum += arr[i];
    tempsum = maxsum;
  }

  return [maxsum, tempsum];
}

console.log(maxSubarraySum([2, 4, 6, 1, 9, 6, 4, 7, 8, 3, 2], 3));

// expects 19
